import { useState } from "react";
import { portfolioData } from "../../lib/portfolio-data";
import { AnimatePresence, motion } from "framer-motion";
import PortfolioDetails from "./portfolio-details";


const PortfolioView = () => {
	const [currentPortfolio, setCurrentPortfolio] = useState("UrCalls");
	return (
		<section className='contain py-16 md:space-y-16 space-y-11'>
			<div className='flex justify-center items-center gap-x-[18px] overflow-hidden overflow-x-scroll scrollbar-hide sm:px-0 px-32 '>
				{portfolioData.map((porfolio) => (
					<button
						key={porfolio.id}
						onClick={() => setCurrentPortfolio(porfolio.name)}
						className={`${porfolio.name === "UrCalls" && "ml-20"} ${
							currentPortfolio === porfolio.name &&
							"bg-[#FF5F0F] text-white hover:text-[#0F0F0F]"
						} lg:text-2xl/9 text-base/9 font-medium tracking-[-0.733px] font-inter text-[#0F0F0F] bg-[#F5F7F9] hover:bg-gray-200 rounded-[40px] px-[16.3px] py-[10.26px] shrink-0 cursor-pointer hover:scale-[95%] transition-all duration-500`}>
						{porfolio.name}
					</button>
				))}
			</div>
			<div>
				<AnimatePresence mode='wait'>
					{portfolioData
						.filter((portfolio) => portfolio.name === currentPortfolio)
						.map((portfolio) => (
							<motion.div
								key={portfolio.id}
								initial={{ opacity: 0, y: 40 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -40 }}
								transition={{ duration: 0.5, ease: "easeOut" }}>
								<PortfolioDetails portfolio={portfolio} />
							</motion.div>
						))}
				</AnimatePresence>
			</div>
		</section>
	);
};
export default PortfolioView;
