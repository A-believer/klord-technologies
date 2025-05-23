import { ChevronLeft, ChevronRight } from "lucide-react";

import { useRef } from "react";
import { Link } from "react-router";

const StandOut = ({ data, ctaLink, ctaText, desc }) => {
	const scrollRef = useRef(null);

	const scroll = (direction) => {
		if (scrollRef.current) {
			const scrollAmount = 350;
			scrollRef.current.scrollBy({
				left: direction === "left" ? -scrollAmount : scrollAmount,
				behavior: "smooth",
			});
		}
	};

	return (
		<section className='contain py-16 space-y-16'>
			<div className='space-y-[42px]'>
				<div className='flex items-center justify-between md:flex-row flex-col gap-y-10'>
					<h3 className='font-sora text-[#0F0F0F] lg:text-5xl/[50px] text-[32px]/10  font-semibold tracking-[-3px] text-left'>
						Why K-Lord Stands Out
					</h3>
					{ctaText && (
						<Link
							to={ctaLink}
							className='bg-[#01588E] hover:bg-[#014c8e] transition-all duration-500 rounded-[55px] md:w-fit w-full py-2.5 px-[30px] text-white text-center shadow-[0px_1.344px_0.537px_-0.625px_rgba(0,0,0,0.09),0px_3.185px_1.274px_-1.25px_rgba(0,0,0,0.09),0px_5.809px_2.324px_-1.875px_rgba(0,0,0,0.08),0px_9.658px_3.863px_-2.5px_rgba(0,0,0,0.08),0px_15.597px_6.239px_-3.125px_rgba(0,0,0,0.07),0px_25.531px_10.212px_-3.75px_rgba(0,0,0,0.06),0px_43.962px_17.585px_-4.375px_rgba(0,0,0,0.04)]'>
							{ctaText}
						</Link>
					)}
				</div>
				{desc && <>{desc}</>}
				{/* <div className='md:flex hidden items-center justify-end gap-x-2.5'>
					<button
						className='bg-[#F15533] rounded-[14px] w-[45px] h-[45px] flex items-center justify-center cursor-pointer'
						onClick={() => scroll("left")}>
						<ChevronLeft color='#ffffff' />
					</button>
					<button
						className='bg-[#F15533] rounded-[14px] w-[45px] h-[45px] flex items-center justify-center cursor-pointer'
						onClick={() => scroll("right")}>
						<ChevronRight color='#ffffff' />
					</button>
				</div> */}
			</div>
			<div
				ref={scrollRef}
				className='w-full grid md:grid-cols-2 grid-cols-1 gap-4'>
				{data.map((item, index) => (
					<div
						key={index}
						className='lg:py-9 py-5 xl:px-[88px] sm:px-7 px-5 bg-[#F5F7F9] rounded-[30px] text-[#0F0F0F] w-full flex flex-col items-center justify-between gap-y-5 h-full'>
						<img
							loading='lazy'
							src={item.image}
							alt=''
							className='w-[176px] h-[176px]'
						/>
						<div className='space-y-5'>
							<h5 className=' font-sora text-[26px]/8 font-semibold text-center'>
								{item.header}
							</h5>
							<p className='text-[#0F0F0F] text-[15px]/normal tracking-[-0.45px] font-inter font-medium text-center'>
								{item.des}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};
export default StandOut;
