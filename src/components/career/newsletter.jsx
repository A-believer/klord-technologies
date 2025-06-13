import { useRef, useState } from "react";
import toast from "react-hot-toast";

const Newsletter = () => {
	const formRef = useRef();
	const [submitting, setSubmitting] = useState(false);
	const [error, setError] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		setSubmitting(true);
		setError("");
		const formData = new FormData(formRef.current);

		// Validate required fields
		if (!formData.get("name") || !formData.get("email")) {
			setError("Please fill all required fields.");
			setSubmitting(false);
			return;
		}

		// Create JSON data with only name and email
		const submitData = {
			name: formData.get("name"),
			email: formData.get("email"),
		};
console.log(submitData);
		try {
			const res = await fetch(`https://api.klordtechnologies.com/api/subscribe-to-newsletters`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(submitData),
			});
			

			if (!res.ok) {
				const errorText = await res.text();
				throw new Error(`Server responded with error: ${errorText}`);
			}

			const result = await res.json();
			if (result.success) {
				toast.success("Successfully subscribed to newsletter!");
				formRef.current.reset();
				formRef.current.consent.checked = true;
			}
			setSubmitting(false);
		} catch (error) {
			console.error(error);
			toast.error("Failed to subscribe. Please try again.");
			setError("Submission failed.");
			setSubmitting(false);
		}
	};

	return (
		<section className='py-[55px] md:space-y-[84px] space-y-24'>
			<div className='flex items-start justify-between lg:flex-row flex-col gap-x-14 gap-y-10 bg-[#FF5F0F] border-[2.5px] border-[#FF5F0F] contain md:px-12 px-3 md:pt-16 md:pb-11 py-12 rounded-[30px] shadow-[0px_36px_24.9px_0px_rgba(0,0,0,0.10)] '>
				<div className='max-w-[508px] w-full space-y-4'>
					<h3 className='text-[#F5F7F9] text-[32px]/[52.8px] font-semibold font-sora tracking-[-2.4px]'>
						Stay Ahead with <span className='text-nowrap'>K-Lord</span> Insights
					</h3>
					<p className='font-inter text-[#F5F7F9] text-2xl/8 tracking-[-0.96px] font-normal'>
						Sign up for tips, insights, and updates on tech, innovation, and
						digital transformation.
					</p>
				</div>
				<form
					ref={formRef}
					onSubmit={handleSubmit}
					className='max-w-[585px] w-full p-5 space-y-4 bg-[#0A0A0A] shadow-[0px_4px_40.4px_16px_rgba(0,0,0,0.25)] text-base rounded-[30px]'>
					<div>
						<input
							className='border border-[#888888]/10 rounded-[20px] placeholder:text-[#999999] px-3 py-4 text-white w-full bg-[#888888]/10'
							type='text'
							name='name'
							id='name'
							placeholder='Name'
						/>
						{error && !formRef.current?.elements["name"]?.value && (
							<p className='text-red-500 text-xs'>error</p>
						)}
					</div>
					<div>
						<input
							className='border border-[#888888]/10 rounded-[20px] placeholder:text-[#999999] px-3 py-4 text-white w-full bg-[#888888]/10'
							type='email'
							name='email'
							id='email'
							placeholder='Email'
						/>
						{error && !formRef.current?.elements["email"]?.value && (
							<p className='text-red-500 text-xs'>error</p>
						)}
					</div>
					<>
						<div className='flex items-center gap-x-3'>
							<input
								className='border border-[#D0D5DD] placeholder:text-[#999999] h-5 w-5  text-white'
								name='consent'
								id='consent'
								type='checkbox'
								defaultChecked={true}
							/>
							<label htmlFor='consent' className='font-medium text-[#344054]'>
								I agree to receive email updates from K-Lord Technologies
							</label>
						</div>
						{error && !formRef.current?.elements["consent"]?.checked && (
							<p className='text-red-500 text-xs'>error</p>
						)}
					</>

					<button
						type='submit'
						disabled={submitting}
						className='bg-[#01588E] rounded-[55px] text-white py-3 text-center w-full shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]'>
						{submitting ? "Submitting..." : "Submit"}
					</button>
				</form>
			</div>
		</section>
	);
};
export default Newsletter;
