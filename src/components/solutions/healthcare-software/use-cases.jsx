import NexalifecareImg from "../../products/nexalifecare-img";

const UseCases = () => {
	return (
		<section className='contain md:space-y-16 space-y-10  py-10'>
			<h2 className='font-sora text-primary lg:text-5xl/[50px] text-[32px]/10  font-semibold tracking-[-2.4px] text-center'>
				Case Studies
			</h2>
			<div className='md:space-y-10 space-y-5'>
				<p className='font-sora text-secondary lg:text-[35px]/[48px] text-2xl/[33px] font-semibold tracking-[-0.6px] mt-8'>
					Enhancing Patient Referrals with NexaLife Care
				</p>
				<NexalifecareImg />
			</div>
			<div className='flex items-start justify-around md:gap-12 gap-8'>
				<div className='space-y-3 max-w-[318px] flex flex-col md:item-start items-center md:text-left text-center'>
					<h5 className='font-sora text-[27px]/[31px] font-semibold tracking-[-1.04px] w-full text-primary'>
						Challenge
					</h5>
					<p className='font-inter text-[15px]/[25.4px] tracking-[-0.45px] text-secondary'>
						A healthcare provider faced inefficiencies in patient referral
						processes.
					</p>
				</div>

				<div className='space-y-3 max-w-[318px] flex flex-col md:item-start items-center md:text-left text-center'>
					<h5 className='font-sora text-[27px]/[31px] font-semibold tracking-[-1.04px] w-full text-primary'>
						Solution
					</h5>
					<p className='font-inter text-[15px]/[25.4px] tracking-[-0.45px] text-secondary'>
						Implemented NexaLife Care, automating referral workflows and
						improving scheduling.
					</p>
				</div>

				<div className='space-y-3 max-w-[318px] flex flex-col md:item-start items-center md:text-left text-center'>
					<h5 className='font-sora text-[27px]/[31px] font-semibold tracking-[-1.04px] w-full text-primary'>
						Result
					</h5>
					<p className='font-inter text-[15px]/[25.4px] tracking-[-0.45px] text-secondary'>
						Achieved a 25% reduction in referral processing time and increased
						patient satisfaction.
					</p>
				</div>
			</div>
		</section>
	);
};
export default UseCases;
