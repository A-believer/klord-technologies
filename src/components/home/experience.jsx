import { motion, useInView } from "framer-motion";
import { Link } from "react-router";
import nexalifecaregif from "../../assets/lottiefiles/home-nexalifecare.json";
import urcallsgif from "../../assets/lottiefiles/home-urcalls.json";
import { useRef } from "react";
import Lottie from "lottie-react";

const data = [
	{
		title: "UrCalls in action",
		gif: urcallsgif,
	},
	{
		title: "NexaLife in action",
		gif: nexalifecaregif,
	},
];

const Experience = () => {
	const sectionRef = useRef(null);
	const isSectionInView = useInView(sectionRef, { amount: 1, once: false });

	return (
		<section
			ref={sectionRef}
			className='contain py-16 md:space-y-16 space-y-10'>
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				animate={
					isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0.7, y: 40 }
				}
				transition={{ duration: 0.7, ease: "easeOut" }}
				className='flex items-end justify-between md:flex-row flex-col'>
				<motion.h1
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, ease: "easeOut" }}
					className={` font-sora lg:text-5xl/[64px] text-[32px]/[44px] font-semibold tracking-[-2.4px] max-w-[788px]`}>
					Experience How K-Lord’s Products Can Help Your Business Scale
				</motion.h1>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}>
					<Link
						to='/get-started'
						className='bg-[#01588E] py-2.5 px-[30px] md:w-fit w-full rounded-[40px] shadow-[0px_1.344px_0.537px_-0.625px_rgba(0,0,0,0.09),0px_3.185px_1.274px_-1.25px_rgba(0,0,0,0.09),0px_5.809px_2.324px_-1.875px_rgba(0,0,0,0.08),0px_9.658px_3.863px_-2.5px_rgba(0,0,0,0.08),0px_15.597px_6.239px_-3.125px_rgba(0,0,0,0.07),0px_25.531px_10.212px_-3.75px_rgba(0,0,0,0.06),0px_43.962px_17.585px_-4.375px_rgba(0,0,0,0.04)] border border-[#01588E] hover:bg-transparent text-white text-center transition-all duration-500 text-nowrap'>
						Request a Demo
					</Link>
				</motion.div>
			</motion.div>
			<div className='flex justify-center md:flex-row flex-col gap-x-4'>
				{data.map((item, index) => (
					<div className='w-[48.5%] space-[22px]'>
						<Lottie
							animationData={item.gif}
							loop={true}
							className='aspect-video rounded-[30px]'
						/>
						<p className='font-sora text-[26px]/8 font-semibold tracking-[1.04px]'>
							{item.title}
						</p>
					</div>
				))}
			</div>
		</section>
	);
};
export default Experience;
