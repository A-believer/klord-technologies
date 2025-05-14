import urcallsgif from "../../assets/lottiefiles/home-urcalls.json";
import shareworkflowgif from "../../assets/lottiefiles/home-shareworkflow.json";
import nexalifecaregif from "../../assets/lottiefiles/home-nexalifecare.json";
import { Link } from "react-router";
import { ChevronRight, Plus } from "lucide-react";
import Lottie from "lottie-react";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const ourSolutions = [
	{
		name: "NexaLife Care",
		des: "A HIPAA-compliant patient referral platform for smooth clinic operations.",
		gif: nexalifecaregif,
		link: "https://nexalifecare.com",
	},
	{
		name: "UrCalls",
		des: "Secure video conferencing for providers, teams, and businesses.",
		gif: urcallsgif,
		link: "https://urcalls.com",
	},
	{
		name: "Custom Software Solutions",
		des: "Enterprise-grade, industry-specific, and built to scale.",
		gif: shareworkflowgif,
		link: "/custom-software-development",
	},
];

const WhatWeBuild = () => {
	const sectionRef = useRef(null);
	const isSectionInView = useInView(sectionRef, { amount: 0.2, once: false });

	// Refs and inView for each card
	const cardRefs = ourSolutions.map(() => useRef(null));
	const cardInViews = cardRefs.map(ref => useInView(ref, { amount: 1, once: false }));

	// Find the first card in view
	const currentInViewIndex = cardInViews.findIndex(Boolean);

	return (
		<section ref={sectionRef}>
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				animate={isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0.7, y: 40 }}
				transition={{ duration: 0.7, ease: "easeOut" }}
				className='py-16 max-w-[1440px] mx-auto w-[90%] md:space-y-16 space-y-10 font-sora'>
				<h1 className='heading'>What We Build</h1>
				<div className='font-inter flex items-start justify-between gap-x-[30px]'>
					{/* Sticky left column */}
					<div
						className='space-y-2.5 md:flex hidden flex-col items-start sticky top-[120px] z-30 h-fit'
						style={{ alignSelf: "flex-start" }}>
						{ourSolutions.map((sol, index) => (
							<button
								key={index + 1}
								className={`transition-all duration-700 px-2 py-1 rounded-lg flex items-center text-left`}
								tabIndex={-1}
								style={{ pointerEvents: "none" }} // disables click, since this is just for display
							>
								{currentInViewIndex === index ? (
									<ChevronRight color='#FF5F0F' className="mr-1" />
								) : null}
								{sol.name}
							</button>
						))}
					</div>
					{/* Scrollable right column */}
					<div className='max-w-[820px] w-full space-y-8'>
						{ourSolutions.map((sol, index) => (
							<motion.div
								ref={cardRefs[index]}
								key={index + 1}
								initial={{ opacity: 0, y: 60, x: 60 }}
								whileInView={{ opacity: 1, y: 0, x: 0 }}
								viewport={{ once: false, amount: 0.5 }}
								transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
								className='p-2.5 bg-[#F5F7F9] w-full rounded-[34px] space-y-[22px]'
							>
								<div className='flex md:flex-row flex-col items-start md:gap-[30px] gap-5'>
									<div className='rounded-[24.732px] max-w-[492px] w-full overflow-hidden'>
										<Lottie
											animationData={sol.gif}
											loop={true}
											className='w-full object-cover rounded-[24.732px]'
										/>
									</div>
									<div className='space-y-4 pt-5'>
										<h4 className='font-sora text-[26px]/tight font-semibold'>
											{sol.name}
										</h4>
										<p className='text-[15px]/[22px]'>{sol.des}</p>
									</div>
								</div>
								<Link
									to={sol.link}
									className='font-inter text-xl/7 tracking-[-0.6px] flex items-center justify-between bg-white rounded-[30px] py-7 px-5 hover:scale-[98%] transition-all duration-700'>
									<span>Learn More</span> <Plus color='#0A0A0A' />
								</Link>
							</motion.div>
						))}
					</div>
				</div>
			</motion.div>
		</section>
	);
};
export default WhatWeBuild;
