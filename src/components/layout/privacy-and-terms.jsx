import { ChevronRight } from "lucide-react";
import TermsOfService from "../../pages/terms-of-service";
import PrivacyPolicy from "../../pages/privacy-policy";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PrivacyAndTerms = ({ page }) => {
	const [currenttPage, setCurrentPage] = useState(page);

	useEffect(() => {
		setCurrentPage(page);
	}, [page]);

	const pageVariants = {
		initial: {
			opacity: 0,
			x: "100vw", // Start off-screen to the right
		},
		in: {
			opacity: 1,
			x: 0,
			transition: { type: "spring", stiffness: 50, damping: 15, duration: 0.3 },
		},
		out: {
			opacity: 0,
			x: "-100vw", // Exit off-screen to the left (or fade)
			transition: { duration: 0.3 },
		},
		exitFade: {
			opacity: 0,
			transition: { duration: 0.3 },
		},
	};

	const contentVariants = {
		initial: { opacity: 0, x: 50 },
		animate: {
			opacity: 1,
			x: 0,
			transition: { duration: 0.3, ease: "easeInOut" },
		},
		exit: {
			opacity: 0,
			x: -50,
			transition: { duration: 0.3, ease: "easeInOut" },
		},
	};

	return (
		<div className='text-black max-w-[1440px] w-[86.5%] mx-auto lg:pt-[206px] pt-[136px] lg:pb-[75px] pb-[59px] font-inter flex lg:flex-row flex-col justify-between gap-x-20 gap-y-16'>
			<div className='flex lg:flex-col flex-row gap-y-2 lg:justify-start justify-between text-[#0F0F0F]/80 font-semibold xl:max-w-[296px] w-full'>
				<button
					onClick={() => setCurrentPage("privacy-policy")}
					className='flex items-center gap-x-2 text-nowrap'>
					{currenttPage === "privacy-policy" && (
						<ChevronRight size={24} color='#FF5F0F' />
					)}
					Privacy Policy
				</button>
				<button
					onClick={() => setCurrentPage("terms-of-service")}
					className='flex items-center gap-x-2 text-nowrap'>
					{currenttPage === "terms-of-service" && (
						<ChevronRight size={24} color='#FF5F0F' />
					)}
					Terms of Service
				</button>
			</div>
			<div className='max-w-[930px] w-full shrink-0 relative'>
				<AnimatePresence mode='wait'>
					{currenttPage === "terms-of-service" ? (
						<motion.div
							key='terms-of-service'
							custom={currenttPage}
							initial='initial'
							animate='in'
							exit='exitFade'
							variants={pageVariants}
							className='w-full h-full'>
							<TermsOfService />
						</motion.div>
					) : (
						<motion.div
							key='privacy-policy'
							custom={currenttPage}
							initial='initial'
							animate='in'
							exit='exitFade'
							variants={pageVariants}
							className='w-full h-full'>
							<PrivacyPolicy />
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</div>
	);
};
export default PrivacyAndTerms;
