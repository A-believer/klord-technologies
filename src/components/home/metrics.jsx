import NumberSpring from "./number-spring";
import { useEffect, useRef, useState } from "react";

const metricsData = [
	{
		title: "Users",
		num: "100000",
		sign: "+",
		des: "We’ve successfully completed over 250 projects—and we’re just getting started!",
	},
	{
		title: "Business Growth",
		num: "70",
		sign: "%",
		des: "Our strategies have helped clients achieve up to 70% revenue growth in just one year!",
	},
	{
		title: "Business Saved",
		num: "200",
		sign: "+",
		des: "More than 200 satisfied clients trust us to bring their ideas to life.",
	},
];

const Metrics = () => {
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
			className='py-16 max-w-[1440px] mx-auto w-[90%] md:space-y-16 space-y-10 font-sora'
		>
			<h1 className='max-w-[850px] w-full mx-auto text-[#0F0F0F] lg:text-5xl/[50px] text-[32px]/10  font-semibold tracking-[-3px] text-center'>
				Trusted by{" "}
				<span className='text-[#F15533]'>Leading Healthcare Providers</span> and{" "}
				<span className='text-[#F15533]'>Enterprises</span>
			</h1>
			<div className='flex items-start justify-between md:flex-row flex-col gap-4'>
				{metricsData.map((item, index) => (
					<div
						className='space-y-2.5 md:w-1/3 w-full h-fit font-sora'
						key={index}>
						<div className='rounded-[30px] border border-dashed border-spacing-2 border-[#69696966] bg-[#FAFAFA] w-full h-[207px] sm:pl-5 pl-3 sm:pb-5 pb-3 space-y-[11px] flex flex-col justify-end'>
							<div>
								<p className='text-lg/7 font-medium tracking-[-0.6px]'>
									{item.title}
								</p>
								<h3 className='sm:text-[74px]/[79px] text-[60px]/[65px] tracking-[-6.66px] flex items-center gap-x-2'>
									{isVisible ? (
										<NumberSpring n={Number(item.num)} isVisible={isVisible} />
									) : (
										0
									)}
									<span className='text-[#FF5F0F] sm:text-[56px] text-[50px] font-medium tracking-[-2.24px]'>
										{item.sign}
									</span>
								</h3>
							</div>
						</div>
						<div className='p-2.5 w-full'>
							<p className='max-w-[287px] w-full text-[15px]/[22.5px] tracking-[-0.45px] font-inter'>
								{item.des}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};
export default Metrics;
