import { useRef, useContext, useState, useEffect } from "react";
import { GetStartedContext } from "../../pages/get-started";
import toast from "react-hot-toast";
import { Link } from "react-router";

const GsFormFour = () => {
	const formRef = useRef(null);
	const { data, setData, toggleCurrentLevelCompletion, setCurrentLevel } =
		useContext(GetStartedContext);
	const [formErrors, setFormErrors] = useState({
		referral_source: "",
		consent: "",
	});
	const [isFormValid, setIsFormValid] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);

	// Initialize form with existing data
	useEffect(() => {
		if (formRef.current) {
			formRef.current.referral_source.value = data.referral_source || "";
			formRef.current.consent.checked = data.consent || false;
		}
	}, [data]);

	// Referral source options
	const referralOptions = [
		{ value: "Google", label: "Google" },
		{ value: "LinkedIn", label: "LinkedIn" },
		{ value: "Referral", label: "Referral" },
		{ value: "Other", label: "Other" },
	];

	// Form validation function
	const validateForm = () => {
		const errors = {};
		const form = formRef.current;

		// Validate referral source
		if (!form.referral_source.value || form.referral_source.value === "") {
			errors.referral_source = "Please select how you heard about us";
		}

		// Validate consent checkbox
		if (!form.consent.checked) {
			errors.consent = "You must consent to be contacted";
		}

		setFormErrors(errors);
		return Object.keys(errors).length === 0;
	};

	const handleSubmit = async () => {
		if (validateForm()) {
			setIsFormValid(true);
			setIsSubmitting(true);
			// Get form data and update context
			const form = formRef.current;
			const updatedData = {
				...data,
				referral_source: form.referral_source.value,
			};

			console.log(updatedData)

			try {
				// Update the data state first
				setData(updatedData);

				// Mark level as completed
				toggleCurrentLevelCompletion();

				// Use the updated data for the API call
				const response = await fetch(`https://api.klordtechnologies.com/api/get-started`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(updatedData),
				});

				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}, ${response.message}`);
				}

				toast.success("Form submitted successfully!");
				setIsSubmitting(false);
				setCurrentLevel(5);
			} catch (error) {
				console.error("Error submitting form:", error);
				toast.error("Failed to submit form. Please try again.");
				// Reset submitting state on error
				setIsSubmitting(false);
			}
		}
	};

	// Also mark as completed when form is valid on mount
	useEffect(() => {
		if (formRef.current) {
			const form = formRef.current;
			if (form.referral_source.value && form.consent.checked) {
				toggleCurrentLevelCompletion();
			}
		}
	}, []);

	return (
		<>
			<form ref={formRef} className='space-y-6 font-inter'>
				{/* Referral Source Dropdown */}
				<div className='flex flex-col gap-y-[6px] text-xs/5 w-full'>
					<label
						htmlFor='referral_source'
						className='font-medium text-[#344054]'>
						How did you hear about us? <span className='text-red-500'>*</span>
					</label>
					<div className='relative'>
						<select
							name='referral_source'
							id='referral_source'
							className='border border-[#D0D5DD] rounded-[8px] px-3.5 py-2.5 w-full h-11 appearance-none'>
							<option value='' disabled selected>
								select medium
							</option>
							{referralOptions.map((option) => (
								<option key={option.value} value={option.value}>
									{option.label}
								</option>
							))}
						</select>
						<div className='absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none'>
							<svg
								width='10'
								height='6'
								viewBox='0 0 10 6'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M1 1L5 5L9 1'
									stroke='#667085'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</div>
					</div>
					{formErrors.referral_source && (
						<p className='text-red-500 text-xs'>{formErrors.referral_source}</p>
					)}
				</div>

				{/* Consent Checkbox */}
				<div className='flex flex-col gap-y-[6px] text-xs/5 w-full'>
					<div className='flex items-start gap-x-2'>
						<input
							type='checkbox'
							name='consent'
							id='consent'
							className='mt-1 h-4 w-4 accent-[#01588E]'
						/>
						<label htmlFor='consent' className='text-sm text-[#344054]'>
							I consent to being contacted by K-Lord Technologies regarding my
							inquiry and agree to the terms outlined in the{" "}
							<Link to='/privacy-policy' className='text-[#01588E] underline'>
								Privacy Policy
							</Link>
						</label>
					</div>
					{formErrors.consent && (
						<p className='text-red-500 text-xs'>{formErrors.consent}</p>
					)}
				</div>

				{/* Form Navigation Buttons */}
				<div className='flex md:flex-row flex-col w-full gap-4'>
					<button
						type='button'
						onClick={() => setCurrentLevel(3)}
						className='text-[#01588E] border border-[#01588E]] bg-white py-3 w-full rounded-[55px] text-base/6 font-medium cursor-pointer'>
						Back
					</button>
					<button
						disabled={isFormValid || isSubmitting}
						type='button'
						onClick={handleSubmit}
						className='bg-[#01588E] text-white py-3 w-full rounded-[55px] text-base/6 font-medium cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center'>
						{isSubmitting ? (
							<>
								<svg
									className='animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block'
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'>
									<circle
										className='opacity-25'
										cx='12'
										cy='12'
										r='10'
										stroke='currentColor'
										strokeWidth='4'></circle>
									<path
										className='opacity-75'
										fill='currentColor'
										d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
								</svg>
								Submitting...
							</>
						) : (
							"Submit"
						)}
					</button>
				</div>
			</form>
		</>
	);
};
export default GsFormFour;
