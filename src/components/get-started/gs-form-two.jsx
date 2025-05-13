import { useRef, useContext, useState } from "react";
import InputComp from "../../common/input-comp";
import { GetStartedContext } from "../../pages/get-started";

const GsFormTwo = () => {
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
		company_name: "",
		industry: "",
		team_size: "",
	});
	const [isFormValid, setIsFormValid] = useState(false);

	// Team size options array
	const teamSizeOptions = [
		{ id: "team_1_10", value: "1-10", label: "1 - 10" },
		{ id: "team_11_50", value: "11-50", label: "11-50" },
		{ id: "team_51_200", value: "51-200", label: "51-200" },
		{ id: "team_201_500", value: "201-500", label: "201-500" },
		{ id: "team_500_plus", value: "500+", label: "500+" },
	];

	// Form validation function
	const validateForm = () => {
		const errors = {};
		const form = formRef.current;

		// Validate company name
		if (!form.company_name.value.trim()) {
			errors.company_name = "Company name is required";
		}

		// Validate industry
		if (!form.industry.value || form.industry.value === "") {
			errors.industry = "Please select an industry";
		}

		// Validate team size
		const selectedTeamSize = form.querySelector(
			'input[name="team_size"]:checked'
		);
		if (!selectedTeamSize) {
			errors.team_size = "Please select a team size";
		}

		setFormErrors(errors);
		return Object.keys(errors).length === 0;
	};

	const handleNext = () => {
		if (validateForm()) {
			setIsFormValid(true);
			// Get form data and update context
			const form = formRef.current;
			const updatedData = {
				...data,
				company_name: form.company_name.value.trim(),
				website_url: form.website_url.value.trim(),
				industry: form.industry.value,
				team_size:
					form.querySelector('input[name="team_size"]:checked')?.value || "",
			};

			setData(updatedData);
			toggleCurrentLevelCompletion();

			const nextLevel = levels.find(
				(level) => level.id === currentLevel + 1
			);
			if (nextLevel) {
				setCurrentLevel(nextLevel.id );
			}
		}
	};

	return (
		<form ref={formRef} className='space-y-6 font-inter'>
			<InputComp
				name={"company_name"}
				label={"Company/Organization Name"}
				type={"text"}
				placeholder={"enter company name..."}
				error={formErrors.company_name}
			/>
			<InputComp
				name={"website_url"}
				label={"Website URL (optional)"}
				type={"text"}
				placeholder={"enter company url..."}
				error={""}
			/>

			{/* Industry Dropdown */}
			<div className='flex flex-col gap-y-[6px] text-xs/5 w-full'>
				<label htmlFor='industry' className='font-medium text-[#344054]'>
					Industry <span className='text-red-500'>*</span>
				</label>
				<div className='relative'>
					<select
						name='industry'
						id='industry'
						className='border border-[#D0D5DD] rounded-[8px] px-3.5 py-2.5 w-full h-11 appearance-none'>
						<option value='' disabled selected>
							select industry
						</option>
						<option value='Healthcare'>Healthcare</option>
						<option value='Tech'>Tech</option>
						<option value='Education'>Education</option>
						<option value='Government'>Government</option>
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
				{formErrors.industry && (
					<p className='text-red-500 text-xs'>{formErrors.industry}</p>
				)}
			</div>

			{/* Team Size Radio Group */}
			<div className='flex flex-col gap-y-[6px] text-xs/5 w-full'>
				<label className='font-medium text-[#344054]'>
					Team Size <span className='text-red-500'>*</span>
				</label>
				<div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
					{teamSizeOptions.map((option) => (
						<div
							key={option.id}
							className='border border-[#D0D5DD] rounded-[8px] px-4 py-3 flex items-center gap-x-2 justify-between'>
							<label htmlFor={option.id} className='text-sm text-[#344054]'>
								{option.label}
							</label>
							<input
								type='radio'
								name='team_size'
								id={option.id}
								value={option.value}
								className='h-4 w-4 accent-[#01588E]'
							/>
						</div>
					))}
				</div>
				{formErrors.team_size && (
					<p className='text-red-500 text-xs'>{formErrors.team_size}</p>
				)}
			</div>
			<div className='flex md:flex-row flex-col w-full gap-4'>
				<button
					type='button'
					onClick={() => setCurrentLevel("Personal Info")}
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
export default GsFormTwo;
