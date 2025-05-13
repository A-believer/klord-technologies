import { useRef, useContext, useState } from "react";
import InputComp from "../../common/input-comp";
import { GetStartedContext } from "../../pages/get-started";

const GsFormThree = () => {
	const formRef = useRef(null);
	const {
		data,
		setData,
		toggleCurrentLevelCompletion,
		currentLevel,
		setCurrentLevel,
		levels,
	} = useContext(GetStartedContext);
	const [formErrors, setFormErrors] = useState({
		help_needed: "",
		project_description: "",
		project_timeline: "",
	});
	const [isFormValid, setIsFormValid] = useState(false);
	const [showOtherInput, setShowOtherInput] = useState(false);

	// Form validation function
	const validateForm = () => {
		const errors = {};
		const form = formRef.current;

		// Validate help needed
		if (!form.help_needed.value || form.help_needed.value === "") {
			errors.help_needed = "Please select what you need help with";
		}

		// If "Other" is selected, validate the other input
		if (form.help_needed.value === "Other" && !form.other_help_needed.value.trim()) {
			errors.other_help_needed = "Please specify what you need help with";
		}

		// Validate project description
		if (!form.project_description.value.trim()) {
			errors.project_description = "Project description is required";
		}

		// Validate project timeline
		if (!form.project_timeline.value || form.project_timeline.value === "") {
			errors.project_timeline = "Please select a project timeline";
		}

		setFormErrors(errors);
		return Object.keys(errors).length === 0;
	};

	const handleHelpNeededChange = (e) => {
		setShowOtherInput(e.target.value === "Other");
	};

	const handleNext = () => {
		if (validateForm()) {
			setIsFormValid(true);
			// Get form data and update context
			const form = formRef.current;
			const updatedData = {
				...data,
				help_needed: form.help_needed.value,
				other_help_needed: form.help_needed.value === "Other" ? form.other_help_needed.value.trim() : "",
				project_description: form.project_description.value.trim(),
				project_timeline: form.project_timeline.value,
				estimated_budget: form.estimated_budget.value.trim(),
			};

			setData(updatedData);
			toggleCurrentLevelCompletion();

			const nextLevel = levels.find(
				(level) => level.id === currentLevel + 1
			);
			if (nextLevel) {
				setCurrentLevel(nextLevel.id);
			}
		}
	};

	return (
		<form ref={formRef} className='space-y-6 font-inter'>
			{/* Help Needed Dropdown */}
			<div className='flex flex-col gap-y-[6px] text-xs/5 w-full'>
				<label htmlFor='help_needed' className='font-medium text-[#344054]'>
					What do you need help with? <span className='text-red-500'>*</span>
				</label>
				<div className='relative'>
					<select
						name='help_needed'
						id='help_needed'
						onChange={handleHelpNeededChange}
						className='border border-[#D0D5DD] rounded-[8px] px-3.5 py-2.5 w-full h-11 appearance-none'>
						<option value='' disabled selected>
							select industry
						</option>
						<option value='Custom Software Development'>Custom Software Development</option>
						<option value='Commercial Off-the-Shelf (COTS) Solution'>Commercial Off-the-Shelf (COTS) Solution</option>
						<option value='SaaS Product Design & Launch'>SaaS Product Design & Launch</option>
						<option value='Healthcare Solution'>Healthcare Solution</option>
						<option value='Enterprise Software'>Enterprise Software</option>
						<option value='Other'>Other</option>
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
				{formErrors.help_needed && (
					<p className='text-red-500 text-xs'>{formErrors.help_needed}</p>
				)}
			</div>

			{/* Other Help Needed Input (conditional) */}
			{showOtherInput && (
				<InputComp
					name={"other_help_needed"}
					label={"Please specify"}
					type={"text"}
					placeholder={"enter details..."}
					error={formErrors.other_help_needed}
				/>
			)}

			{/* Project Description Textarea */}
			<div className='flex flex-col gap-y-[6px] text-xs/5 w-full'>
				<label htmlFor='project_description' className='font-medium text-[#344054]'>
					Tell us briefly about your project or goal <span className='text-red-500'>*</span>
				</label>
				<textarea
					className='border border-[#D0D5DD] rounded-[8px] px-3.5 py-2.5 w-full min-h-[100px]'
					name='project_description'
					id='project_description'
					placeholder='share your project idea...'
				/>
				{formErrors.project_description && (
					<p className='text-red-500 text-xs'>{formErrors.project_description}</p>
				)}
			</div>

			{/* Project Timeline Dropdown */}
			<div className='flex flex-col gap-y-[6px] text-xs/5 w-full'>
				<label htmlFor='project_timeline' className='font-medium text-[#344054]'>
					Project Timeline <span className='text-red-500'>*</span>
				</label>
				<div className='relative'>
					<select
						name='project_timeline'
						id='project_timeline'
						className='border border-[#D0D5DD] rounded-[8px] px-3.5 py-2.5 w-full h-11 appearance-none'>
						<option value='' disabled selected>
							select timeline
						</option>
						<option value='Immediately'>Immediately</option>
						<option value='1–3 months'>1–3 months</option>
						<option value='3–6 months'>3–6 months</option>
						<option value='6+ months'>6+ months</option>
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
				{formErrors.project_timeline && (
					<p className='text-red-500 text-xs'>{formErrors.project_timeline}</p>
				)}
			</div>

			{/* Estimated Budget Input */}
			<InputComp
				name={"estimated_budget"}
				label={"Estimated Budget (optional)"}
				type={"text"}
				placeholder={"enter your estimated budget..."}
				error={""}
			/>

			{/* Form Navigation Buttons */}
			<div className='flex md:flex-row flex-col w-full gap-4'>
				<button
					type='button'
					onClick={() => setCurrentLevel(2)}
					className='text-[#01588E] border border-[#01588E]] bg-white py-3 w-full rounded-[55px] text-base/6 font-medium cursor-pointer'>
					Back
				</button>
				<button
					disabled={isFormValid}
					type='button'
					onClick={handleNext}
					className='bg-[#01588E] text-white py-3 w-full rounded-[55px] text-base/6 font-medium cursor-pointer'>
					Next
				</button>
			</div>
		</form>
	);
};
export default GsFormThree;
