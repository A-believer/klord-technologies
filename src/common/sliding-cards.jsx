import { useRef } from "react";

const SlidingCards = ({ header,data }) => {
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
		<section className='contain md:py-16 py-10 space-y-14'>
			<h2 className='font-sora text-[#0F0F0F] lg:text-5xl/[50px] text-[32px]/10  font-semibold tracking-[-2.4px] text-center'>
				 {header}
			</h2>
			<div
				ref={scrollRef}
				className='w-full rounded-[26px] flex md:flex-row flex-col md:items-stretch items-center gap-2.5 overflow-x-auto scrollbar-hide md:scrollbar-default scroll-smooth scrollbar-hide '>
				{data.map((item) => (
					<div
						key={item.id}
						className='lg:w-[550px] md:w-[457px] w-full shrink-0 bg-[#1C1C1C] rounded-[26px] pl-7 pb-8 font-sora flex flex-col justify-between'>
						<span className='text-[#F5F7F9]/[0.05] text-[97px]/[135px] font-semibold'>
							{item.id}
						</span>
						<div className=' space-y-3 px-2 mb-auto max-w-[380px] flex flex-col justify-end h-full'>
							<h3 className='text-[27px]/[37px] font-semibold font-sora text-[#F5F7F9] text-wrap'>
								{item.header}
							</h3>
							<p className='text-[#F5F7F9]/[0.8] text-[15px]/[25px] font-medium font-inter max-w-[380px] sm:w-full w-[90%]'>
								{item.desc}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default SlidingCards;
