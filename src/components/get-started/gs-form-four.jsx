import { useRef, useContext, useState } from "react";
import { GetStartedContext } from "../../pages/get-started";

const GsFormFour = () => {
	const formRef = useRef(null);
	const {
		data,
		setData,
		toggleCurrentLevelCompletion,
		setCurrentLevel,
	} = useContext(GetStartedContext);
	const [formErrors, setFormErrors] = useState({
		referral_source: "",
		consent: "",
	});
	const [isFormValid, setIsFormValid] = useState(false);

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

	const handleSubmit = () => {
		if (validateForm()) {
			setIsFormValid(true);
			// Get form data and update context
			const form = formRef.current;
			const updatedData = {
				...data,
				referral_source: form.referral_source.value,
				consent: form.consent.checked,
			};

			setData(updatedData);
			toggleCurrentLevelCompletion();

			// Here you would typically submit the form data to your backend
			console.log("Form submitted successfully:", updatedData);
			
			// You could redirect to a thank you page or show a success message
			// For now, we'll just log the data
		}
	};

	return (
		<form ref={formRef} className='space-y-6 font-inter'>
			{/* Referral Source Dropdown */}
			<div className='flex flex-col gap-y-[6px] text-xs/5 w-full'>
				<label htmlFor='referral_source' className='font-medium text-[#344054]'>
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
						I consent to being contacted by K-Lord Technologies regarding my inquiry and agree to the terms outlined in the{" "}
						<a href="/privacy-policy" className="text-[#01588E] underline">
							Privacy Policy
						</a>
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
					disabled={isFormValid}
					type='button'
					onClick={handleSubmit}
					className='bg-[#01588E] text-white py-3 w-full rounded-[55px] text-base/6 font-medium cursor-pointer'>
					Submit
				</button>
			</div>
		</form>
	);
};
export default GsFormFour;
