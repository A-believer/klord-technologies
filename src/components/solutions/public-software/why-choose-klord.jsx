import imgI from "../../../assets/imgs/ps-icon-1.png";
import imgII from "../../../assets/imgs/ps-icon-2.png";
import imgIII from "../../../assets/imgs/ps-icon-3.png";
import imgIV from "../../../assets/imgs/ps-icon-4.png";
const cardData = [
	{
		id: 1,
		text: "Expertise across healthcare, education, and civic services",
		icon: imgI,
	},
	{
		id: 2,
		text: "Custom-built workflows that reflect your institutional logic",
		icon: imgII,
	},
	{
		id: 3,
		text: "Long-term support from deployment through maintenance",
		icon: imgIII,
	},
	{
		id: 4,
		text: "Design systems built for accessibility, clarity, and scale",
		icon: imgIV,
	},
];
const WhyChooseKlord = () => {
	return (
		<section className='contain md:py-16 py-10 md:space-y-16 space-y-10 font-inter'>
			<div className='max-w-[943px] w-full space-y-4'>
				<h2 className='font-sora lg:text-5xl/[64px] text-[32px]/[46px] font-semibold tracking-[-2.4px] text-[#0f0f0f]'>
					Seamless Integration & Scalable Architecture
				</h2>
				<p className='text-black/80 font-inter text-lg/normal tracking-[-0.18px] max-w-[922px]'>
					We deliver platforms that plug into your existing environment—legacy
					databases, cloud APIs, internal workflows—without requiring downtime
					or full replacement. Our modular architecture scales with program
					growth and evolving policies.
				</p>
			</div>

			<div className='w-full md:space-y-16 space-y-10'>
				<h2 className='font-sora lg:text-5xl/[64px] text-[32px]/[46px] font-semibold tracking-[-2.4px] text-[#0f0f0f]'>
					Why Public Institutions Trust K-Lord
				</h2>
				<div className='flex justify-center flex-wrap gap-6'>
					{cardData.map((item) => (
						<div
							key={item.id}
							className='space-y-16 p-6 bg-[#F7F7F7] max-w-[294px] transition-all duration-500 hover:scale-[102%] hover:shadow-[0px_1.344px_0.537px_-0.625px_rgba(0,0,0,0.09),0px_3.185px_1.274px_-1.25px_rgba(0,0,0,0.09),0px_5.809px_2.324px_-1.875px_rgba(0,0,0,0.08),0px_9.658px_3.863px_-2.5px_rgba(0,0,0,0.08),0px_15.597px_6.239px_-3.125px_rgba(0,0,0,0.07),0px_25.531px_10.212px_-3.75px_rgba(0,0,0,0.06),0px_43.962px_17.585px_-4.375px_rgba(0,0,0,0.04)]'>
							<img src={item.icon} alt='' />
							<p className='text-[#101828] text-xl/[30px] tracking-[-0.2px]'>
								{item.text}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
export default WhyChooseKlord;
