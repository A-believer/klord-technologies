import { useContext, useEffect } from "react";
import successImg from "../../assets/imgs/get-started-success.png";
import { motion, AnimatePresence } from "framer-motion";
import { GetStartedContext } from "../../pages/get-started";
import { useNavigate } from "react-router";

const GetStartedSuccess = () => {
  const { currentLevel, direction } = useContext(GetStartedContext);
  const navigate = useNavigate();
	
	const variants = {
		enter: (direction) => ({
			x: direction > 0 ? 500 : -500,
			opacity: 0,
		}),
		center: {
			x: 0,
			opacity: 1,
		},
		exit: (direction) => ({
			x: direction > 0 ? -500 : 500,
			opacity: 0,
		}),
	};

	const transition = {
		type: "spring",
		stiffness: 300,
		damping: 30,
  };

  useEffect(() => {
    setTimeout(() => {
      navigate(-1);
    }, 2000);
  }, [navigate]);
  

	return (
		<AnimatePresence custom={direction} mode='wait'>
			<motion.div
				key={currentLevel}
				custom={direction}
				variants={variants}
				initial='enter'
				animate='center'
				exit='exit'
				transition={transition}
				className='w-full h-screen flex-center'>
				<div className='font-inter space-y-4 text-center'>
					<img
						src={successImg}
						alt='Man on a rocket'
						className='md:w-[199px] md:h-[199px] w-[164px] h-[164px] mx-auto'
					/>
					<h1 className='max-w-[361px] mx-auto w-full md:text-5xl/[64px] text-2xl/8 md:tracking-[-2.4px] tracking-[-1.04px] font-semibold text-[#0f0f0f]'>
						Request Sent Successfully
					</h1>
					<p className='md:text-lg/8 text-sm/6 font-medium md:tracking-[-0.18px] text-black/80 max-w-[457px] mx-auto'>
						Thanks for getting in touch! Our team will review your submission
						and reach out within 24 hours.
					</p>
				</div>
			</motion.div>
		</AnimatePresence>
	);
};
export default GetStartedSuccess;
