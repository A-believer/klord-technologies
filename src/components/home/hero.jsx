import homeHero from "../../assets/imgs/home-hero.gif";
import bgSrc from "../../assets/imgs/home-hero-2.png";
import homeHeroMobile from "../../assets/imgs/home-hero-mobile.gif";
import { Link } from "react-router";
import { motion } from "framer-motion";

const Hero = () => {
	return (
		// <section className='w-full bg-[#fdfdfd]'>
		// 	<div className='max-w-[1440px] h-full w-[90%] mx-auto relative pt-16 max-h-fit'>
		// 		<img
		// 			loading='lazy'
		// 			src={homeHero}
		// 			alt=''
		// 			className='aspect-video max-h-[560px] mx-auto md:flex hidden'
		// 		/>
		// 		<img
		// 			loading='lazy'
		// 			src={homeHeroMobile}
		// 			alt=''
		// 			className='aspect-auto mx-auto md:hidden flex'
		// 		/>
		// 		<div className='absolute right-0 left-0 lg:bottom-[85px] md:bottom-14 bottom-20 flex md:flex-row flex-col justify-center w-full gap-5'>
		// 			<Link
		// 				to={"/get-started"}
		// 				className='bg-[#01588E] border border-[#01588E] hover:bg-white text-white hover:text-[#01588E] py-2.5 px-[30px] md:w-fit w-full rounded-[55px] text-base/6 font-medium cursor-pointer text-center h-fit shadow-lg shadow-gray-400  hover:translate-1 transition-all duration-500'>
		// 				Request a Consultation
		// 			</Link>
		// 			<Link
		// 				to={"/products"}
		// 				className='text-[#01588E] hover:text-white border border-[#01588E] bg-white hover:bg-[#01588E] py-2.5 px-[30px] md:w-fit w-full rounded-[55px] text-base/6 font-medium cursor-pointer text-center h-fit hover:translate-1 transition-all duration-500'>
		// 				View Products
		// 			</Link>
		// 		</div>
		// 	</div>
		// </section>

		<section
			style={{
				background: `url(/imgs/home-hero-2.png)`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
			className='md:h-screen h-[105vh]'>
			<div className='md:h-screen h-[105vh] bg-gradient-to-b from-black/5 to-black relative'>
				<div className='max-w-[1440px] w-[90%] mx-auto text-white font-inter mb-0 md:h-screen h-[105vh] lg:pb-[100px] pb-14 lg:gap-16 gap-12 flex items-end justify-between'>
					<div className='w-full max-w-[800px]'>
						<motion.h1
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, ease: "easeOut" }}
							className={` font-sora xl:text-[65px]/[75px] lg:text-[56px]/[64px] text-[35px]/10 font-semibold tracking-[-3px]`}>
							Innovative Software Solutions for Healthcare, Enterprise, and
							Beyond
						</motion.h1>
						<motion.p
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
							className={` opacity-80 font-medium text-lg/8 mt-5 mb-6`}>
							We Help You Build Smart, Secure, And Scalable Software Tailored To Your Unique Workflow
						</motion.p>
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
							className='flex lg:flex-row flex-col gap-5'>
							<Link
								to='/get-started'
								className='bg-[#01588E] py-2.5 px-[30px] rounded-[40px] shadow-[0px_1.344px_0.537px_-0.625px_rgba(0,0,0,0.09),0px_3.185px_1.274px_-1.25px_rgba(0,0,0,0.09),0px_5.809px_2.324px_-1.875px_rgba(0,0,0,0.08),0px_9.658px_3.863px_-2.5px_rgba(0,0,0,0.08),0px_15.597px_6.239px_-3.125px_rgba(0,0,0,0.07),0px_25.531px_10.212px_-3.75px_rgba(0,0,0,0.06),0px_43.962px_17.585px_-4.375px_rgba(0,0,0,0.04)] border border-[#01588E] hover:bg-transparent text-white text-center transition-all duration-500 lg:w-fit w-full text-nowrap'>
								Request a Consultation
							</Link>
							<Link
								to='/products'
								className='bg-transparent py-2.5 px-[30px] rounded-[40px] shadow-[0px_1.344px_0.537px_-0.625px_rgba(0,0,0,0.09),0px_3.185px_1.274px_-1.25px_rgba(0,0,0,0.09),0px_5.809px_2.324px_-1.875px_rgba(0,0,0,0.08),0px_9.658px_3.863px_-2.5px_rgba(0,0,0,0.08),0px_15.597px_6.239px_-3.125px_rgba(0,0,0,0.07),0px_25.531px_10.212px_-3.75px_rgba(0,0,0,0.06),0px_43.962px_17.585px_-4.375px_rgba(0,0,0,0.04)] border border-[#F5F7F9] hover:bg-[#F5F7F9] hover:text-black/[0.8] text-white text-center transition-all duration-500 lg:w-fit w-full text-nowrap'>
								View Products
							</Link>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Hero;
