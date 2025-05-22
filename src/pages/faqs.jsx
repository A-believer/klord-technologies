import { CircleMinus, CirclePlus } from "lucide-react";
import Seo from "../common/seo";
import { useState } from "react";
import { faqs } from "../lib/msic-data";
import { motion, AnimatePresence } from "motion/react";

const Faqs = () => {
	const [currentAnswer, setCurrentAnswer] = useState(null);

	const toggleAnswer = (id) => {
		if (currentAnswer === id) {
			setCurrentAnswer(null);
		} else {
			setCurrentAnswer(id);
		}
	};

	return (
		<>
			<Seo
				title='Frequently Asked Questions (FAQ) | K-Lord Technologies – Digital Transformation 
Solutions'
				description="Explore our FAQ page to learn more about K-Lord Technologies' solutions 
for healthcare, SMEs, enterprises, and the public sector. Find answers to your questions about 
our services, products, and expertise."
				content=''
			/>
			<div className='text-black max-w-[1440px] w-[90%] mx-auto lg:pt-[206px] pt-[136px] lg:pb-[75px] pb-[59px] font-inter flex lg:flex-row flex-col justify-between gap-x-20 gap-y-16'>
				<div className='space-y-4 max-w-[457px] w-full'>
					<h1 className='lg:text-5xl/[135%] text-[32px]/[45px] font-semibold text-[#0F0F0F] tracking-[-2.4px]'>
						Frequently Asked Questions (FAQ)
					</h1>
					<p className='text-lg/[32px] font-medium tracking-[-0.18px] opacity-80'>
						Welcome to the K-Lord Technologies FAQ page. Here, you’ll find
						answers to some of the most common questions about our services,
						products, and solutions. If you need more information or assistance,
						feel free to contact us.
					</p>
				</div>
				<ul className='max-w-[704px] w-full space-y-8'>
					{faqs.map((faq, index) => (
						<li key={index} className='space-y-2'>
							<div className='flex-between gap-x-10'>
								<p className='font-sora text-lg/7 font-semibold'>
									{faq.question}
								</p>
								<button
									onClick={() => toggleAnswer(faq.id)}
									className='cursor-pointer'>
									{currentAnswer === faq.id ? (
										<CircleMinus color='#98A2B3' size={24} />
									) : (
										<CirclePlus color='#98A2B3' size={24} />
									)}
								</button>
							</div>
							<AnimatePresence initial={false}>
								{currentAnswer === faq.id && (
									<motion.div
										key={faq.id}
										initial='collapsed'
										animate='open'
										exit='collapsed'
										variants={{
											open: { height: "auto", opacity: 1 },
											collapsed: { height: 0, opacity: 0 },
										}}
										transition={{ duration: 0.3, ease: "easeInOut" }}
										className='space-y-4 overflow-hidden'>
										<p
											dangerouslySetInnerHTML={{ __html: faq.answer }}
											className='text-[#696969] text-base/7 pr-7'
										/>
									</motion.div>
								)}
							</AnimatePresence>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};
export default Faqs;
