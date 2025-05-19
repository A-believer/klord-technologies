import NexalifecareImg from "../../products/nexalifecare-img";

const UseCases = () => {
	return (
		<section className='contain md:space-y-16 space-y-10 md:py-16 py-10'>
			<h2 className='font-sora text-[#0F0F0F] lg:text-5xl/[50px] text-[32px]/10  font-semibold tracking-[-2.4px] text-center'>
				Case Studies
			</h2>
			<div className='md:space-y-10 space-y-5'>
				<p className='font-sora text-[#0F0F0F] lg:text-[35px]/[48px] text-2xl/[33px] font-semibold tracking-[-0.6px] mt-8'>
					Enhancing Patient Referrals with NexaLife Care
				</p>
				<NexalifecareImg />
			</div>
		</section>
	);
};
export default UseCases;
