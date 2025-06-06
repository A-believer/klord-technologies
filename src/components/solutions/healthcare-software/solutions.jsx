import { MoveRight } from "lucide-react";
import { Link } from "react-router";
const cardData = [
	{
		header: "Custom Healthcare Software Development",
		subtext:
			"Tailored solutions designed to meet the specific needs of healthcare providers, enhancing operational efficiency and patient care.",
		image: "/svgs/code.svg",
	},
	{
		header: "Healthcare Workflow Automation",
		subtext:
			"Automating routine tasks to reduce errors, save time, and allow healthcare professionals to focus more on patient care.",
		image: "/svgs/workflow.svg",
	},
	{
		header: "Telehealth Platforms",
		subtext:
			"Developing secure and user-friendly telemedicine solutions to facilitate remote patient consultations and care.",
		image: "/svgs/software.svg",
	},
	{
		header: "Electronic Health Record (EHR) Integration",
		subtext:
			"Seamlessly integrating EHR systems to provide a unified view of patient information, improving decision-making and care coordination.",
		image: "/svgs/blend.svg",
	},
	{
		header: "Healthcare Analytics Solutions",
		subtext:
			"Implementing data analytics tools to provide actionable insights, aiding in population health management and operational improvements.",
		image: "/svgs/analytics.svg",
	},
];

const Solutions = () => {
	return (
		<section className='contain md:space-y-16 space-y-10  py-10'>
			<div className='space-y-4'>
				<h2 className='text-primary heading'>
					Our Healthcare Software Solutions
				</h2>
				<p className='max-w-[722px] text-lg/8 tracking-[-0.18px] font-medium font-inter text-secondary'>
					Comprehensive suite of healthcare technology solutions designed to
					transform patient care and streamline operations
				</p>
			</div>

			<div className='flex flex-wrap justify-center gap-x-[22px] gap-y-8 text-[#F5F7F9]'>
				{cardData.map((item, idx) => (
					<div
						key={idx}
						className='xl:w-[49%] lg:w-[48.6%] sm:w-[48%] w-full p-8 flex flex-col gap-y-20 bg-[#1C1C1C] rounded-[26px]'>
						<span className='rounded-full bg-[#212121] w-16 h-16 flex items-center justify-center'>
							<img loading='lazy' src={item.image} alt={item.header} />
						</span>
						<div className='flex items-center justify-between gap-x-6'>
							<div className='space-y-3 max-w-[380px] w-full'>
								<h4 className='text-[27px]/[37px] font-sora font-semibold tracking-[-1.04px]'>
									{item.header}
								</h4>
								<p>{item.subtext}</p>
							</div>
							<Link to='/contact'>
								<MoveRight />
							</Link>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};
export default Solutions;
