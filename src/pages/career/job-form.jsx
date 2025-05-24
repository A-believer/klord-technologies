import { useRef, useState } from "react";
import { useParams } from "react-router";
import { jobData } from "../../lib/job-data";
import InputComp from "../../common/input-comp";
import UploadBox from "../../common/upload-box";

const JobForm = () => {
	const { id } = useParams();
	const job = jobData[id - 1];
	const formRef = useRef();
	const [submitting, setSubmitting] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		setSubmitting(true);
		setError("");
		const formData = new FormData(formRef.current);
		// Validate required fields
		if (
			!formData.get("name") ||
			!formData.get("email") ||
			!formData.get("phone") ||
			!formData.get("reason") ||
			!formData.get("resume")
		) {
			setError("Please fill all required fields.");
			setSubmitting(false);
			return;
		}
		// Simulate submission (replace with real API call)
		setTimeout(() => {
			setSubmitting(false);
			setSubmitted(true);
		}, 1200);
	};

	if (!job) return <div className='p-8'>Job not found.</div>;
	if (submitted)
		return (
			<div className='p-8 text-green-600 font-semibold'>
				Application submitted! Thank you.
			</div>
		);

	return (
		<section className='contain grid lg:grid-cols-2 xl:gap-x-20 gap-x-14 gap-y-14 lg:pt-[186px] sm:pt-[120px] pt-20 lg:pb-20 pb-14'>
			<div className='lg:max-w-[480px] w-full'>
				<h1 className='font-sora text-[#0F0F0F] lg:text-5xl/[50px] text-[32px]/10 font-semibold tracking-[-2.4px] mb-4'>
					Apply for this position
				</h1>
				<p className='font-inter text-lg/8 font-medium tracking-[-0.18px] text-black/[0.8]'>
					Fill out the application form below to submit your resume.
				</p>
			</div>

			<form
				ref={formRef}
				className='lg:max-w-[480px] w-full space-y-6'
				onSubmit={handleSubmit}>
				<InputComp
					name='name'
					label='Full Name'
					type='text'
					placeholder='Enter your name'
					error={
						error && !formRef.current?.elements["name"]?.value ? "Required" : ""
					}
				/>
				<InputComp
					name='email'
					label='Email'
					type='email'
					placeholder='you@company.com'
					error={
						error && !formRef.current?.elements["email"]?.value
							? "Required"
							: ""
					}
				/>
				<InputComp
					name='phone'
					label='Phone Number'
					type='tel'
					placeholder='+1 (555) 000-0000'
					error={
						error && !formRef.current?.elements["phone"]?.value
							? "Required"
							: ""
					}
				/>
				<div className='flex flex-col gap-y-1 w-full'>
					<label htmlFor='reason' className='font-inter text-[#344054]'>
						Why do you want to work with us?
					</label>
					<textarea
						id='reason'
						name='reason'
						className='border border-[#EAECF0] rounded-[8px] px-3.5 py-2.5 w-full min-h-[90px] resize-none text-sm/5 font-inter'
						placeholder='Share your reason...'
						required
					/>
				</div>

				<UploadBox
					label='Upload Your Resume'
					extralabel=' (PDF, DOCX)'
					name='resume'
					required={true}
				/>
				<UploadBox
					label='Upload Cover Letter'
					extralabel=' (Optional, PDF, DOCX)'
					name='cover'
					required={false}
				/>

				<button
					type='submit'
					className='bg-[#01588E] text-white py-3 rounded-[55px] font-semibold hover:bg-[#01588E]/[0.8] duration-500 transition-all disabled:opacity-60 w-full shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] cursor-pointer'
					disabled={submitting}>
					{submitting ? "Submitting..." : "Submit Application"}
				</button>
				{error && <div className='md:col-span-2 text-red-500'>{error}</div>}
			</form>
		</section>
	);
};
export default JobForm;
