import img from "../../assets/imgs/career-values.jpg";

const values = [
	{
		title: "Integrity & Accountability",
		description:
			"We do the right thing, even when no one is watching. Transparency and ethics guide every decision.",
	},
	{
		title: "Innovation & Technical Excellence",
		description:
			"We push boundaries with intelligent, high-performance products. Every line of code serves a mission.",
	},
	{
		title: "Collaboration & Growth",
		description:
			"We value team thinking and shared wins. Continuous learning is part of our DNA.",
	},
	{
		title: "Client Impact First",
		description:
			"From UX to compliance, every detail is designed to solve real problems and deliver results.",
	},
];

const Values = () => {
	return (
		<section className='contain md:py-16 py-8 md:space-y-14 space-y-8'>
			<div className='space-y-4'>
				<h2 className='font-sora text-[#0F0F0F] lg:text-5xl/[50px] text-[32px]/10 font-semibold tracking-[-2.4px]'>
					Our Culture & Values
				</h2>
				<p className='textlg/8 font-medium font-inter text-black/[0.8] tracking-[-0.18px]'>
					We are not just a workplace; we build meaningful careers. At K-Lord,
					you’ll find a culture that respects talent, rewards innovation, and
					nurtures professional growth.
				</p>
			</div>
			<div className='md:space-y-14 space-y-8'>
				<h2 className='font-sora text-[#0F0F0F] lg:text-5xl/[50px] text-[32px]/10 font-semibold tracking-[-2.4px]'>
					What We Stand For
				</h2>

				<div className='flex justify-between lg:flex-row flex-col gap-y-9 gap-x-10'>
					<ul className='space-y-[34px] lg:max-w-[493px] w-full shrink-0'>
						{values.map((item, idx) => (
							<li key={idx} className='space-y-3'>
								<h5 className='font-sora text-[#0F0F0F] text-2xl/[29.76px]  font-semibold tracking-[-1.04px]'>
									{item.title}
								</h5>
								<p className='textlg/8 font-medium font-inter text-black/[0.8] tracking-[-0.18px]'>
									{item.description}
								</p>
							</li>
						))}
					</ul>
					<img
						loading='lazy'
						src={img}
						alt='a picture'
						className='object-cover xl:w-full mx-auto xl:max-h-[542px] max-h-[350px] xl:max-w-[624px] lg:max-w-[400px] w-full rounded-[18px]'
					/>
				</div>
			</div>
		</section>
	);
};
export default Values;
