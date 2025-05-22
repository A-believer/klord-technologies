import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CardSwitch = ({ header, data, subtext }) => {
	const [currentCard, setCurrentCard] = useState(0);
	const currentImage = data[currentCard].image;
	return (
		<section className='contain md:space-y-16 space-y-10 md:py-10 py-6'>
			<div className='space-y-4'>
				<h2 className='text-[#0F0F0F] font-inter font-semibold lg:tracking-[-2.4px] tracking-[-1px] lg:text-5xl/[64px] text-[32px]/[44px]'>
					{header}
				</h2>
				{subtext && (
					<p className='max-w-[922px] text-lg/8 tracking-[-0.18px] font-medium font-inter opacity-80'>
						{subtext}
					</p>
				)}
			</div>

			<div className='grid lg:grid-cols-2 grid-cols-1 justify-between gap-x-20 gap-y-8'>
				<div className='space-y-9 max-w-[531px] w-full'>
					{data.map((card, index) => (
						<div
							key={index}
							className='flex items-center gap-x-7 transition-all duration-500'>
							<div
								className={`${
									index === currentCard ? "bg-[#F95607] sm:h-[110px] h-[150px]" : ""
								}  w-[10px] rounded-[28px] shrink-0`}
							/>
							<button
								onClick={() => setCurrentCard(index)}
								className='cursor-pointer text-left text-[#0F0F0F] space-y-3'>
								<h3
									className={`transition-all duration-500 font-sora text-2xl/[30px] font-semibold tracking-[-1.04px] ${
										index !== currentCard &&
										"opacity-40 hover:opacity-100 text-[26px]/8"
									}`}>
									{card.title}
								</h3>
								<AnimatePresence initial={false}>
									{index === currentCard && (
										<motion.p
											className='text-base/8 font-medium tracking-[-0.45px] opacity-80'
											key={card.title}
											initial='collapsed'
											animate='open'
											exit='collapsed'
											variants={{
												open: { height: "auto", opacity: 1 },
												collapsed: { height: 0, opacity: 0 },
											}}
											transition={{ duration: 0.5, ease: "easeInOut" }}>
											{card.desc}
										</motion.p>
									)}
								</AnimatePresence>
							</button>
						</div>
					))}
				</div>

				<AnimatePresence mode='wait'>
					<motion.img
						key={currentImage}
						src={currentImage}
						className='rounded-[18px] lg:ml-auto mx-auto'
						alt={data[currentCard]?.image}
						initial={{ opacity: 0, x: -40 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: 40 }}
						transition={{ duration: 0.5, ease: "easeInOut" }}
					/>
				</AnimatePresence>
			</div>
		</section>
	);
};
export default CardSwitch;
