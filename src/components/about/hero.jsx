import { useEffect, useRef, useState } from "react";
import hero from "../../assets/imgs/about-hero.png";
import NumberSpring from "../home/number-spring";

const aboutMetricsData = [
	{
		title: "Successful Projects",
		num: "100",
		sign: "+",
	},
	{
		title: "Team Members",
		num: "40",
		sign: "+",
	},
	{
		title: "Years Experience",
		num: "12",
		sign: "+",
	},
	{
		title: "Client Satisfaction",
		num: "98",
		sign: "%",
	},
];
const Hero = () => {
	const [isVisible, setIsVisible] = useState(false);
	const sectionRef = useRef(null);

	useEffect(() => {
		const observer = new window.IntersectionObserver(
			([entry]) => {
				setIsVisible(entry.isIntersecting);
			},
			{
				threshold: 0.3, // Adjust as needed
			}
		);
		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}
		return () => {
			if (sectionRef.current) {
				observer.unobserve(sectionRef.current);
			}
		};
	}, []);
	return (
		<section
			ref={sectionRef}
			className='contain md:pt-[150px] pt-[100px] md:pb-10 pb-8 md:space-y-[30px] space-y-[26px] text-[#0f0f0f] font-inter'>
			<div className='space-y-5 max-w-[845px]'>
				<h1 className='lg:text-[65px]/[74px] text-[32px]/10 font-sora font-semibold tracking-[-3px]'>
					About K-Lord Technologies
				</h1>
				<p className='text-lg/9 tracking-[-0.18px] font-medium opacity-80'>
					We are a trusted partner in digital transformation, specializing in
					scalable, secure, and innovative software solutions for healthcare,
					public sector, SMEs, and enterprises.
				</p>
			</div>
			<div className='flex items-start lg:flex-row flex-col justify-between gap-x-4 gap-y-6'>
				<div className='lg:max-w-[600px] w-full'>
					<img
						src={hero}
						alt='Hero Image'
						className='lg:max-w-[600px] w-full md:rounded-[30px] rounded-[18px]'
					/>
				</div>

				<div className='grid md:grid-cols-2 grid-cols-1 gap-4 shrink-0 lg:w-1/2 w-full'>
					{aboutMetricsData.map((item, index) => (
						<div
							className='font-sora rounded-[30px] border border-dashed border-spacing-2 border-[#69696966] bg-[#FAFAFA] w-full pl-5 pt-[23px] pb-[30px] xl:space-y-[117px] space-y-9'
							key={index}>
							<p className='text-xl/7 font-medium tracking-[-0.6px]'>
								{item.title}
							</p>
							<h3 className='text-[74px]/[74px] tracking-[-6.66px] flex items-center gap-x-2 font-inter'>
								{isVisible ? (
									<NumberSpring n={Number(item.num)} isVisible={isVisible} />
								) : (
									0
								)}
								<span className='text-[#FF5F0F] text-[56px] font-medium tracking-[-2.24px]'>
									{item.sign}
								</span>
							</h3>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
export default Hero;
