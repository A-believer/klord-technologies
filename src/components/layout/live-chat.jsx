import { Headset, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion"; // Add this import
import { quickPrompts } from "../../lib/msic-data";
import InputComp from "../../common/input-comp";

const LiveChat = () => {
	const [showLiveChat, setShowLiveChat] = useState(false);
	const [showCustomQuestion, setShowCustomQuestion] = useState(false);
	const [formErrors, setFormErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	let PORT = import.meta.env.PORT || "http://localhost:3000";

	const formRef = useRef(null);
	const customQuestionRef = useRef(null);

	// Handle specific question checkbox change
	const handleSpecificQuestionChange = () => {
		setShowCustomQuestion(!showCustomQuestion);
	};

	// Form validation function
	const validateForm = () => {
		const errors = {};
		const form = formRef.current;

		// Validate full name
		if (!form.full_name.value.trim()) {
			errors.fullName = "Full name is required";
		}

		// Validate email
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!form.email.value.trim()) {
			errors.email = "Email address is required";
		} else if (!emailRegex.test(form.email.value.trim())) {
			errors.email = "Please enter a valid email address";
		}

		// Validate company name
		if (!form.company_name.value.trim()) {
			errors.companyName = "Company name is required";
		}

		// Validate custom question if specific question is checked
		if (showCustomQuestion && !form.custom_question.value.trim()) {
			errors.customQuestion = "Please enter your question";
		}

		// Validate that at least one prompt is selected or custom question is provided
		const hasSelectedPrompt = quickPrompts.some(
			(prompt) => form[`prompt-${prompt.id}`]?.checked
		);

		const hasCustomQuestion =
			showCustomQuestion && form.custom_question.value.trim();

		if (!hasSelectedPrompt && !hasCustomQuestion) {
			errors.prompts =
				"Please select at least one prompt or provide a custom question";
		}

		setFormErrors(errors);
		return Object.keys(errors).length === 0;
	};

	// Form submission handler
	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);

		if (validateForm()) {
			const form = new FormData(formRef.current);
			let formData = {};

			// Convert FormData to a regular object
			for (let [key, value] of form.entries()) {
				// Skip prompt-* keys as we'll handle them separately
				if (!key.startsWith("prompt-")) {
					formData[key] = value;
				}
			}

			// Extract selected prompts
			const selectedPrompts = quickPrompts
				.filter((prompt) => formRef.current[`prompt-${prompt.id}`]?.checked)
				.map((prompt) => prompt.label);

			// Add selected prompts to formData
			formData.selectedPrompts = selectedPrompts;

			try {
				const response = await fetch(`${PORT}/api/live-chat`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(formData),
				});
				console.log(formData);

				if (!response.ok) {
					throw new Error(`Server responded with error: ${response.status}`);
				}

				const result = await response.json();

				if (result.success) {
					// Reset form
					formRef.current.reset();
					setShowCustomQuestion(false);
					setFormErrors({});

					// Show success message and close chat
					toast.success(
						"Thank you for your message. We'll get back to you shortly!"
					);
					setShowLiveChat(false);
				} else {
					throw new Error(result.message || "Failed to submit form");
				}
			} catch (error) {
				console.error("Error submitting form:", error);
				toast.error("Failed to submit your message. Please try again.");
			} finally {
				setIsSubmitting(false);
			}
		} else {
			setIsSubmitting(false);
		}
	};

	return (
		<>
			{!showLiveChat && (
				<button
					onClick={() => setShowLiveChat(true)}
					type='button'
					className='bg-[#01588E] rounded-full p-[15px] flex-center cursor-pointer fixed bottom-4 right-4 z-[99999]'>
					<Headset size={34} color='white' />
				</button>
			)}

			<AnimatePresence>
				{showLiveChat && (
					<motion.div
						initial={{ y: 100, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: 100, opacity: 0 }}
						transition={{ type: "spring", damping: 25, stiffness: 300 }}
						className='fixed bottom-6 right-6 bg-white dark:bg-[#1c1c1c] z-[99999] rounded-[20px] py-7 px-4 max-w-[404px] lg:w-full w-[80%] shadow-lg shadown-[0px_12px_16px_-4px_rgba(16,24,40,0.08),_0px_4px_6px_-2px_rgba(16,24,40,0.03)] font-inter text-[#727272] dark:text-[#D0D5DD] text-sm/6'>
						<button
							onClick={() => setShowLiveChat(false)}
							className='cursor-pointer absolute md:top-2 top-4 md:right-2 right-3'>
							<X size={24} />
						</button>
						<form ref={formRef} onSubmit={handleSubmit} className='space-y-4'>
							<div className='space-y-2'>
								<h4 className='font-sora text-[#FF5F0F] text-2xl/8 font-semibold'>
									Welcome to K-Lord Technologies
								</h4>
								<p className=''>
									We're currently offline. Leave us a message and we'll respond
									shortly.
								</p>
							</div>

							<hr className='border-none h-[1px] bg-[#D6D6D6]' />
							<div className='md:max-h-[50vh] max-h-[43vh] overflow-y-scroll space-y-4 pb-5'>
								<div className='space-y-4'>
									<p className='font-semibold text-[#727272]'>
										Quick Prompts (Select all that apply):
									</p>

									{quickPrompts.map((prompt) => (
										<div key={prompt.id} className='flex items-start gap-x-3'>
											<input
												className='mt-1 appearance-none border border-[#D0D5DD] h-5 w-5 rounded-[6px] checked:bg-[#01588E]'
												name={`prompt-${prompt.id}`}
												type='checkbox'
												id={prompt.id}
											/>
											<label htmlFor={prompt.id}>{prompt.label}</label>
										</div>
									))}
									<div className='space-y-3 w-full'>
										<div className='flex items-start gap-x-3'>
											<input
												className='mt-1 appearance-none border border-[#D0D5DD] h-5 w-5 rounded-[6px] checked:bg-[#01588E]'
												name='specific_question'
												type='checkbox'
												id='specific_question'
												onChange={handleSpecificQuestionChange}
											/>
											<label htmlFor='specific_question'>
												I have a specific question (Type below...)
											</label>
										</div>
										{showCustomQuestion && (
											<div className='w-full'>
												<textarea
													className='border border-[#D0D5DD] rounded-[8px] px-3.5 py-2.5 w-full'
													rows={2}
													name='custom_question'
													id='custom_question'
													placeholder='Type your question here...'
													ref={customQuestionRef}
												/>
												{formErrors.customQuestion && (
													<p className='text-red-500 text-xs mt-1'>
														{formErrors.customQuestion}
													</p>
												)}
											</div>
										)}
									</div>
									{formErrors.prompts && (
										<p className='text-red-500 text-xs'>{formErrors.prompts}</p>
									)}
								</div>

								<InputComp
									name={"full_name"}
									label={"Full Name"}
									type={"text"}
									placeholder={"John Doe"}
									error={formErrors.fullName}
								/>

								<InputComp
									name={"email"}
									label={"Email Address"}
									type={"email"}
									placeholder={"you@company.com"}
									error={formErrors.email}
								/>
								<InputComp
									name={"company_name"}
									label={"Company Name"}
									type={"text"}
									placeholder={"Enter company name..."}
									error={formErrors.companyName}
								/>
								<InputComp
									name={"postion"}
									label={"Position"}
									type={"text"}
									placeholder={"Enter position at company..."}
									error={formErrors.position}
								/>
							</div>
							<button
								type='submit'
								disabled={isSubmitting}
								className='bg-[#01588E] rounded-[55px] text-white py-3 text-center w-full shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] disabled:opacity-50 disabled:cursor-not-allowed'>
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
									"Submit Message"
								)}
							</button>
						</form>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};
export default LiveChat;
