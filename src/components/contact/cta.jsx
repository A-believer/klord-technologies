import { Link } from "react-router";

const Cta = () => {
	return (
		<section className='contain md:py-16 py-10 flex justify-between lg:items-center lg:flex-row flex-col gap-y-10'>
			<div className='max-w-[662px] w-full space-y-5'>
				<h3 className='font-sora text-[28px]/[42px] font-semibold tracking-[-0.96px] text-[#0f0f0f]'>
					Request a Demo or Consultation
				</h3>
				<p className='text-black/80 font-inter text-xl/normal tracking-[-0.18px]'>
					Want to explore how our solutions can benefit your organization?
					Request a demo or consultation to get an in-depth look at our
					platforms in action.
				</p>
			</div>

			<Link
				to='/get-started'
				className='bg-[#01588E] py-2.5 px-[145px] lg:w-fit h-fit w-full rounded-[40px] shadow-[0px_1.344px_0.537px_-0.625px_rgba(0,0,0,0.09),0px_3.185px_1.274px_-1.25px_rgba(0,0,0,0.09),0px_5.809px_2.324px_-1.875px_rgba(0,0,0,0.08),0px_9.658px_3.863px_-2.5px_rgba(0,0,0,0.08),0px_15.597px_6.239px_-3.125px_rgba(0,0,0,0.07),0px_25.531px_10.212px_-3.75px_rgba(0,0,0,0.06),0px_43.962px_17.585px_-4.375px_rgba(0,0,0,0.04)] border border-[#01588E] hover:bg-transparent text-white hover:text-black text-center transition-all duration-500 text-nowrap'>
				Contact Us
			</Link>
		</section>
	);
};
export default Cta;
