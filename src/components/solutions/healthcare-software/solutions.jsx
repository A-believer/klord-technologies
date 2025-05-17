import code from "../../../assets/svgs/code.svg";
import workflow from "../../../assets/svgs/workflow.svg";
import software from "../../../assets/svgs/software.svg";
import blend from "../../../assets/svgs/blend.svg";
import analytics from "../../../assets/svgs/analytics.svg";
import { MoveRight } from "lucide-react";
import { Link } from "react-router";
const cardData = [
	{
		header: "Custom Healthcare Software Development",
		subtext:
			"Tailored solutions designed to meet the specific needs of healthcare providers, enhancing operational efficiency and patient care.",
		image: code,
	},
	{
		header: "Healthcare Workflow Automation",
		subtext:
			"Automating routine tasks to reduce errors, save time, and allow healthcare professionals to focus more on patient care.",
		image: workflow,
	},
	{
		header: "Telehealth Platforms",
		subtext:
			"Developing secure and user-friendly telemedicine solutions to facilitate remote patient consultations and care.",
		image: software,
	},
	{
		header: "Electronic Health Record (EHR) Integration",
		subtext:
			"Seamlessly integrating EHR systems to provide a unified view of patient information, improving decision-making and care coordination.",
		image: blend,
	},
	{
		header: "Healthcare Analytics Solutions",
		subtext:
			"Implementing data analytics tools to provide actionable insights, aiding in population health management and operational improvements.",
		image: analytics,
	},
];

const Solutions = () => {
	return (
		<section className='contain md:space-y-16 space-y-10 md:py-16 py-10'>
			<div className='space-y-4'>
				<h2 className='text-[#0F0F0F] font-inter font-semibold lg:tracking-[-2.4px] tracking-[-1px] lg:text-5xl/[64px] text-[32px]/[44px]'>
					Our Healthcare Software Solutions
				</h2>
				<p className='max-w-[722px] text-lg/8 tracking-[-0.18px] font-medium font-inter opacity-80'>
					Comprehensive suite of healthcare technology solutions designed to
					transform patient care and streamline operations
				</p>
			</div>

			<div className='grid md:grid-cols-2 grid-cols-1 gap-x-[22px] gap-y-8 text-[#F5F7F9]'>
				{cardData.map((item, idx) => (
					<div
						key={idx}
						className='w-full p-8 flex flex-col gap-y-20 bg-[#1C1C1C] rounded-[26px]'>
						<span className='rounded-full bg-[#212121] w-16 h-16 flex items-center justify-center'>
							<img src={item.image} alt={item.header} />
						</span>
						<div className="flex items-center justify-between gap-x-6">
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
