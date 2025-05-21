import img from "../../assets/imgs/career-values.png";


const values = [
  {
    title: "Integrity & Accountability",
    description: "We do the right thing, even when no one is watching. Transparency and ethics guide every decision."
  },
  {
    title: "Innovation & Technical Excellence",
    description: "We push boundaries with intelligent, high-performance products. Every line of code serves a mission."
  },
  {
    title: "Collaboration & Growth",
    description: "We value team thinking and shared wins. Continuous learning is part of our DNA."
  },
  {
    title: "Client Impact First", 
    description: "From UX to compliance, every detail is designed to solve real problems and deliver results."
  }
];

const Values = () => {
	return (
		<section className='textlg/8 font-medium font-inter text-black/[0.8]'>
			<div>
				<h2 className='font-sora text-[#0F0F0F] lg:text-5xl/[50px] text-[32px]/10  font-semibold tracking-[-2.4px]'></h2>
				<p></p>
			</div>
			<div>
				<h2 className='font-sora text-[#0F0F0F] lg:text-5xl/[50px] text-[32px]/10  font-semibold tracking-[-2.4px]'></h2>

				<div className="flex justify-between lg:flex-row flex-col">
					<ul className="space-y-[34px] max-w-[493px] w-full">
						<li className="space-y-3">
							<h5 className='font-sora text-[#0F0F0F] text-2xl/[29.76px]  font-semibold tracking-[-1.04px]'></h5>
							<p></p>
						</li>
					</ul>
					<img src={img} alt='a picture' />
				</div>
			</div>
		</section>
	);
};
export default Values;
