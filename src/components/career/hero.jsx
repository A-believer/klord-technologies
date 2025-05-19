import { Link } from "react-router";
import { motion } from "framer-motion";
import bgImg from "../../assets/imgs/career-hero.jpg";

const Hero = () => {
	return (
		<section
			style={{
				background: `url(${bgImg})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
			className='md:h-screen h-[105vh]'>
			<div className='md:h-screen h-[105vh] bg-gradient-to-b from-black/5 to-black relative'>
				<div className='max-w-[1440px] w-[86.5%] mx-auto text-white font-inter mb-0 md:h-screen h-[105vh] lg:pb-[100px] pb-14 lg:gap-16 gap-12 flex items-end justify-between'>
					<div className='w-full'>
						<motion.h1
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, ease: "easeOut" }}
							className={`max-w-[1067px] font-sora xl:text-[65px]/[75px] lg:text-[56px]/[64px] text-[35px]/10 font-semibold tracking-[-3px]`}>
							Join a Team That’s Shaping Digital Healthcare, Public Sector
							Innovation & Scalable Software
						</motion.h1>
						<div className='mt-5 flex lg:flex-row flex-col lg:justify-between lg:items-end w-full lg:gap-16 gap-7'>
							<motion.p
								initial={{ opacity: 0, y: 50 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
								className={`max-w-[773px] w-full opacity-80 font-medium text-lg/8`}>
								At K-Lord Technologies, we build secure, scalable, and
								intelligent software for healthcare providers, public sector
								institutions, and enterprises. Behind every powerful product is
								a passionate team of thinkers, builders, and problem-solvers. If
								you're driven by purpose and excited about technology that
								creates impact, you're in the right place.
							</motion.p>

							<motion.div
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
								className='flex lg:items-end xl:flex-row flex-col gap-5'>
								<Link
									to='/careers#positions'
									className='bg-[#01588E] py-2.5 px-[30px] rounded-[40px] shadow-[0px_1.344px_0.537px_-0.625px_rgba(0,0,0,0.09),0px_3.185px_1.274px_-1.25px_rgba(0,0,0,0.09),0px_5.809px_2.324px_-1.875px_rgba(0,0,0,0.08),0px_9.658px_3.863px_-2.5px_rgba(0,0,0,0.08),0px_15.597px_6.239px_-3.125px_rgba(0,0,0,0.07),0px_25.531px_10.212px_-3.75px_rgba(0,0,0,0.06),0px_43.962px_17.585px_-4.375px_rgba(0,0,0,0.04)] border border-[#01588E] hover:bg-transparent text-white text-center transition-all duration-500 w-full text-nowrap'>
									Apply now
								</Link>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Hero;
