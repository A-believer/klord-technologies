import { Link } from "react-router";
import { motion } from "framer-motion";

const HeroComp = ({
	headerWidth,
	header,
	paragraphWidth,
	paragraph,
	bgSrc,
	ctaTextI,
	ctaTextII,
}) => {
	return (
		<section
			style={{
				background: `url(${bgSrc})`,
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
							className={`${headerWidth} font-sora xl:text-[65px]/[75px] lg:text-[56px]/[64px] text-[35px]/10 font-semibold tracking-[-3px]`}>
							{header}
						</motion.h1>
						<div className='mt-5 flex lg:flex-row flex-col lg:justify-between lg:items-end w-full lg:gap-16 gap-7'>
							<motion.p
								initial={{ opacity: 0, y: 50 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
								className={`${paragraphWidth} opacity-80 font-medium text-lg/8`}>
								{paragraph}
							</motion.p>
							{ctaTextI && (
								<motion.div
									initial={{ opacity: 0, y: 30 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
									className='flex lg:items-end xl:flex-row flex-col gap-5'>
									<Link
										to='/get-started'
										className='bg-[#01588E] py-2.5 px-[30px] rounded-[40px] shadow-[0px_1.344px_0.537px_-0.625px_rgba(0,0,0,0.09),0px_3.185px_1.274px_-1.25px_rgba(0,0,0,0.09),0px_5.809px_2.324px_-1.875px_rgba(0,0,0,0.08),0px_9.658px_3.863px_-2.5px_rgba(0,0,0,0.08),0px_15.597px_6.239px_-3.125px_rgba(0,0,0,0.07),0px_25.531px_10.212px_-3.75px_rgba(0,0,0,0.06),0px_43.962px_17.585px_-4.375px_rgba(0,0,0,0.04)] border border-[#01588E] hover:bg-transparent text-white text-center transition-all duration-500 w-full text-nowrap'>
										{ctaTextI}
									</Link>
									{ctaTextII && (
										<Link
											to='/products'
											className='bg-transparent py-2.5 px-[30px] rounded-[40px] shadow-[0px_1.344px_0.537px_-0.625px_rgba(0,0,0,0.09),0px_3.185px_1.274px_-1.25px_rgba(0,0,0,0.09),0px_5.809px_2.324px_-1.875px_rgba(0,0,0,0.08),0px_9.658px_3.863px_-2.5px_rgba(0,0,0,0.08),0px_15.597px_6.239px_-3.125px_rgba(0,0,0,0.07),0px_25.531px_10.212px_-3.75px_rgba(0,0,0,0.06),0px_43.962px_17.585px_-4.375px_rgba(0,0,0,0.04)] border border-[#01588E] hover:bg-[#01588E] text-white text-center transition-all duration-500 w-full text-nowrap'>
											{ctaTextII}
										</Link>
									)}
								</motion.div>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default HeroComp;
