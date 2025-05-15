import { ChevronLeft, ChevronRight } from "lucide-react";

import { useRef } from "react";
import { Link } from "react-router";

const StandOut = ({ data, ctaLink, ctaText }) => {
	const scrollRef = useRef(null);

	const scroll = (direction) => {
		if (scrollRef.current) {
			const scrollAmount = 350; // Adjust based on card width + gap
			scrollRef.current.scrollBy({
				left: direction === "left" ? -scrollAmount : scrollAmount,
				behavior: "smooth",
			});
		}
	};

	return (
		<section className='contain py-16 space-y-8'>
			<div className='space-y-[42px]'>
				<div className='flex items-center justify-between lg:flex-row flex-col gap-y-10'>
					<h3 className='font-sora text-[#0F0F0F] lg:text-5xl/[50px] text-[32px]/10  font-semibold tracking-[-3px] text-left'>
						Why K-Lord Stands Out
					</h3>
					{ctaText && (
						<Link
							to={ctaLink}
							className='bg-[#01588E] hover:bg-[#014c8e] transition-all duration-500 rounded-[55px] lg:w-fit w-full py-2.5 px-[30px] text-white text-center shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]'>
							{ctaText}
						</Link>
					)}
				</div>

				<div className='md:flex hidden items-center justify-end gap-x-2.5'>
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
				</div>
			</div>
			<div
				ref={scrollRef}
				className='w-full rounded-[30px] flex md:flex-row flex-col md:items-stretch items-center gap-2.5 overflow-x-auto scrollbar-hide md:scrollbar-default scroll-smooth scrollbar-hide'>
				{data.map((item, index) => (
					<div
						key={index}
						className='shrink-0 p-10 pb-0 bg-[#F5F7F9] rounded-[30px] text-[#0F0F0F] min-w-[350px] max-w-[518px] w-full flex flex-col gap-y-[49px]'>
						<div className='max-w-[300px] shrink-0'>
							<h5 className=' font-sora text-[26px]/8 font-semibold'>
								{item.header}
							</h5>
							<p>{item.des}</p>
						</div>
						<img
							src={item.image}
							alt=''
							className='w-[252px] h-[252px] self-end'
						/>
					</div>
				))}
			</div>
		</section>
	);
};
export default StandOut;
