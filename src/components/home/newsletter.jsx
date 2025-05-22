import { Link } from "react-router";

const Newsletter = () => {
	return (
		<section className='py-[55px] md:space-y-[84px] space-y-24'>
			<div className='contain border-[2.5px] border-[#FF5F0F] rounded-[30px] shadow-[0px_36px_24.9px_0px_rgba(0,0,0,0.10)] flex lg:justify-between lg:items-start lg:flex-row flex-col gap-y-[55px] md:px-10 px-[46px] md:py-24 py-16'>
				<div className='space-y-5'>
					<h2 className='text-[#101828] text-[28px]/[42px] font-semibold tracking-[-0.56px]'>
						Ready to Build Something Great?
					</h2>
					<p className='text-[#667085] text-xl/8 font-medium tracking-[-0.64px]'>
						Join over 200+ startups already growing with K-Lord.
					</p>
				</div>
				<Link
					to='/get-started'
					className='bg-[#01588E] py-2.5 lg:px-[191px] lg:w-fit w-full rounded-[40px] shadow-[0px_1.344px_0.537px_-0.625px_rgba(0,0,0,0.09),0px_3.185px_1.274px_-1.25px_rgba(0,0,0,0.09),0px_5.809px_2.324px_-1.875px_rgba(0,0,0,0.08),0px_9.658px_3.863px_-2.5px_rgba(0,0,0,0.08),0px_15.597px_6.239px_-3.125px_rgba(0,0,0,0.07),0px_25.531px_10.212px_-3.75px_rgba(0,0,0,0.06),0px_43.962px_17.585px_-4.375px_rgba(0,0,0,0.04)] border border-[#01588E] hover:bg-transparent text-[#FFFEF5] hover:text-[#01588E] text-center transition-all duration-500 text-nowrap'>
					Get in Touch
				</Link>
			</div>
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
				<form className='max-w-[585px] w-full p-5 space-y-4 bg-[#0A0A0A] shadow-[0px_4px_40.4px_16px_rgba(0,0,0,0.25)] text-base rounded-[30px]'>
					<div>
						<input
							className='border border-[#888888]/10 rounded-[20px] placeholder:text-[#999999] px-3 py-4 text-white w-full bg-[#888888]/10'
							type='text'
							name='name'
							id='name'
							placeholder='Name'
						/>
						{false && <p className='text-red-500 text-xs'>error</p>}
					</div>
					<div>
						<input
							className='border border-[#888888]/10 rounded-[20px] placeholder:text-[#999999] px-3 py-4 text-white w-full bg-[#888888]/10'
							type='email'
							name='email'
							id='email'
							placeholder='Email'
						/>
						{false && <p className='text-red-500 text-xs'>error</p>}
					</div>
					<>
						<div className='flex md:items-center items-start gap-x-3'>
							<input
								className='border border-[#D0D5DD] h-5 w-5  text-white md:mt-0 mt-1'
								name='consent'
								id='consent'
								type='checkbox'
							/>
							<label htmlFor='consent' className='font-medium text-[#344054]'>
								I agree to receive email updates from K-Lord Technologies
							</label>
						</div>
						{false && <p className='text-red-500 text-xs'>error</p>}
					</>

					<button
						type='submit'
						className='bg-[#01588E] rounded-[55px] text-white py-3 text-center w-full shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]'>
						Submit
					</button>
				</form>
			</div>
		</section>
	);
};
export default Newsletter;
