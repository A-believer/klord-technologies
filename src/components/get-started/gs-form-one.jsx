import { ChevronDown } from "lucide-react";
import InputComp from "../../common/input-comp";
import { GetStartedContext } from "../../pages/get-started";
import { useContext, useRef, useState, useEffect } from "react";

const GsFormOne = () => {
	const {
		data,
		setData,
		toggleCurrentLevelCompletion,
		currentLevel,
		setCurrentLevel,
		levels,
	} = useContext(GetStartedContext);
	const formRef = useRef(null);
	const [formErrors, setFormErrors] = useState({
		first_name: "",
		last_name: "",
		job_title: "",
		email: "",
		phone_number: "",
	});
	const [isFormValid, setIsFormValid] = useState(false);

	// Initialize form with existing data
	useEffect(() => {
		if (formRef.current) {
			formRef.current.first_name.value = data.first_name || "";
			formRef.current.last_name.value = data.last_name || "";
			formRef.current.job_title.value = data.job_title || "";
			formRef.current.email.value = data.email || "";
			formRef.current.phone_number.value = data.phone_number || "";
		}
	}, [data]);

	// Form validation function
	const validateForm = () => {
		const errors = {};
		const form = formRef.current;

		// Validate first name
		if (!form.first_name.value.trim()) {
			errors.first_name = "First name is required";
		}

		// Validate last name
		if (!form.last_name.value.trim()) {
			errors.last_name = "Last name is required";
		}

		// Validate job title
		if (!form.job_title.value.trim()) {
			errors.job_title = "Job title is required";
		}

		// Validate email
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!form.email.value.trim()) {
			errors.email = "Email is required";
		} else if (!emailRegex.test(form.email.value.trim())) {
			errors.email = "Please enter a valid email address";
		}

		// Validate phone number (US or Nigeria)
		const phone = form.phone_number.value.trim();
		const usRegex = /^(\+1)?\s?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
		const ngRegex = /^(\+234|0)?[789][01]\d{8}$/;
		if (!phone) {
			errors.phone_number = "Phone number is required";
		} else if (!usRegex.test(phone) && !ngRegex.test(phone)) {
			errors.phone_number = "Enter a valid US or Nigerian phone number";
		}

		setFormErrors(errors);
		return Object.keys(errors).length === 0;
	};

	const handleNext = () => {
		if (validateForm()) {
			setIsFormValid(true);
			// Update the context data with form values
			const form = formRef.current;
			const updatedData = {
				...data,
				first_name: form.first_name.value.trim(),
				last_name: form.last_name.value.trim(),
				job_title: form.job_title.value.trim(),
				email: form.email.value.trim(),
				phone_number: form.phone_number.value.trim(),
			};

			// Update the data state first
			setData(updatedData);

			// Mark level as completed
			toggleCurrentLevelCompletion();

			// Then proceed to next level
			const nextLevel = levels.find((level) => level.id === currentLevel + 1);
			if (nextLevel) {
				setCurrentLevel(nextLevel.id);
			}
		}
	};

	// Also mark as completed when form is valid on mount
	useEffect(() => {
		if (formRef.current) {
			const form = formRef.current;
			if (
				form.first_name.value.trim() &&
				form.last_name.value.trim() &&
				form.job_title.value.trim() &&
				form.email.value.trim() &&
				form.phone_number.value.trim()
			) {
				toggleCurrentLevelCompletion();
			}
		}
	}, []);

	// Handler to restrict input to numbers and plus sign
	const handlePhoneInput = (e) => {
		let value = e.target.value.replace(/[^\d+]/g, "");
		// Only allow one leading '+'
		if (value.startsWith("++")) value = value.replace(/^\++/, "+");
		e.target.value = value;
	};

	return (
		<form ref={formRef} className='space-y-6 font-inter'>
			<div className='flex justify-between sm:flex-row flex-col gap-y-6 items-center gap-x-8'>
				<InputComp
					name={"first_name"}
					label={"First Name"}
					type={"text"}
					placeholder={"John"}
					error={formErrors.first_name}
				/>
				<InputComp
					name={"last_name"}
					label={"Last Name"}
					type={"text"}
					placeholder={"Doe"}
					error={formErrors.last_name}
				/>
			</div>
			<InputComp
				name={"job_title"}
				label={"Job Title / Role"}
				type={"text"}
				placeholder={"enter title..."}
				error={formErrors.job_title}
			/>
			<InputComp
				name={"email"}
				label={"Email"}
				type={"email"}
				placeholder={"you@company.com"}
				error={formErrors.email}
			/>

			<div className='flex flex-col gap-y-[6px] text-xs/5 w-full'>
				<label htmlFor='phone_number' className='font-medium text-[#344054]'>
					Phone number <span className='text-red-500'>*</span>
				</label>
				<div className='relative h-11 overflow-hidden'>
					<input
						className='border border-[#D0D5DD] rounded-[8px] px-2.5 w-full h-11'
						type='text'
						name='phone_number'
						id='phone_number'
						placeholder='+1 (555) 000-0000'
						onInput={handlePhoneInput}
					/>
				</div>

				{formErrors.phone_number && (
					<p className='text-red-500 text-xs'>{formErrors.phone_number}</p>
				)}
			</div>
			<button
				disabled={isFormValid}
				type='button'
				onClick={handleNext}
				className='bg-[#01588E] text-white py-3 w-full rounded-[55px] text-base/6 font-medium cursor-pointer'>
				Next
			</button>
		</form>
	);
};
export default GsFormOne;
