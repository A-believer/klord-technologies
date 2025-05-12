import { ChevronDown } from "lucide-react";
import InputComp from "../../common/input-comp";
import { GetStartedContext } from "../../pages/get-started";
import { useContext, useRef, useState } from "react";

const GsFormOne = () => {
	const {
		data,
		setData,
		toggleCurrentLevelCompletion,
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

		// Validate phone number
		const phoneRegex = /^\d{11}$/;
		if (!form.phone_number.value.trim()) {
			errors.phone_number = "Phone number is required";
		} else if (!phoneRegex.test(form.phone_number.value.trim())) {
			errors.phone_number = "Please enter a valid phone number: +1 (555) 000-0000";
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
			
			setData(updatedData);
			toggleCurrentLevelCompletion();

			const nextLevel = levels.find(
				(level) => level.title === "Your Organization"
			);
			if (nextLevel) {
				setCurrentLevel(nextLevel.id);
			}
		}
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
				<label htmlFor="phone_number" className='font-medium text-[#344054]'>
					Phone number <span className='text-red-500'>*</span>
				</label>
				<div className='relative h-11 overflow-hidden'>
					<span className='flex items-center justify-center gap-x- absolute left-0 p-3 border-r border-[#D0D5DD]'>
						US
						<ChevronDown />
					</span>
					<input
						className='border border-[#D0D5DD] rounded-[8px] px-3.5 pl-20 pr-2.5 w-full h-11'
						type='text'
						name='phone_number'
						id='phone_number'
						placeholder='+1 (555) 000-0000'
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
