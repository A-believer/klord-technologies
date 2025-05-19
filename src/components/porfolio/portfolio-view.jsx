import { useState } from "react";
import { portfolioData } from "../../lib/portfolio-data";
import { AnimatePresence, motion } from "framer-motion";
import PortfolioDetails from "./portfolio-details";

const PortfolioView = () => {
	const [currentPortfolio, setCurrentPortfolio] = useState("UrCalls");
	return (
		<section className='contain py-16'>
			<div className='flex justify-center items-center gap-x-[18px] overflow-hidden overflow-x-scroll scrollbar-hide sm:px-0 px-32 sm:pb-16 pb-11'>
				{portfolioData.map((porfolio) => (
					<button
						key={porfolio.id}
						onClick={() => setCurrentPortfolio(porfolio.name)}
						className={`${porfolio.name === "UrCalls" && "ml-20"} ${
							currentPortfolio === porfolio.name &&
							"bg-[#01588E] border border-[#01588E] text-white hover:text-[#0F0F0F] shadow-[0px_1.344px_0.537px_-0.625px_rgba(0,0,0,0.09),0px_3.185px_1.274px_-1.25px_rgba(0,0,0,0.09),0px_5.809px_2.324px_-1.875px_rgba(0,0,0,0.08),0px_9.658px_3.863px_-2.5px_rgba(0,0,0,0.08),0px_15.597px_6.239px_-3.125px_rgba(0,0,0,0.07),0px_25.531px_10.212px_-3.75px_rgba(0,0,0,0.06),0px_43.962px_17.585px_-4.375px_rgba(0,0,0,0.04)]"
						} lg:text-2xl/9 text-base/9 font-medium tracking-[-0.733px] font-inter text-[#0F0F0F] hover:bg-gray-200 rounded-[40px] px-[30px] py-[10px] shrink-0 cursor-pointer hover:scale-[95%] transition-all duration-500 border border-[#01588E]`}>
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
