import { useRef, useState, useEffect } from "react";

const SlidingCards = ({ header, data }) => {
	const containerRef = useRef(null);
	const cardRefs = useRef([]);
	const [activeIndex, setActiveIndex] = useState(0);

	// Update active index on scroll
	useEffect(() => {
		const handleScroll = () => {
			if (!containerRef.current) return;
			const containerLeft = containerRef.current.scrollLeft;
			const containerWidth = containerRef.current.offsetWidth;

			let closestIdx = 0;
			let minDiff = Infinity;
			cardRefs.current.forEach((card, idx) => {
				if (card) {
					const cardLeft = card.offsetLeft;
					const diff = Math.abs(cardLeft - containerLeft);
					if (diff < minDiff) {
						minDiff = diff;
						closestIdx = idx;
					}
				}
			});
			setActiveIndex(closestIdx);
		};

		const container = containerRef.current;
		if (container) {
			container.addEventListener("scroll", handleScroll, { passive: true });
		}
		return () => {
			if (container) {
				container.removeEventListener("scroll", handleScroll);
			}
		};
	}, []);

	// Scroll to card when button is clicked
	const scrollToCard = (idx) => {
		const card = cardRefs.current[idx];
		const container = containerRef.current;
		if (card && container) {
			container.scrollTo({
				left: card.offsetLeft,
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
				ref={containerRef}
				className='w-full rounded-[26px] flex flex-row items-stretch gap-2.5 overflow-x-auto scrollbar-hide md:scrollbar-default scroll-smooth scrollbar-hide'>
				{data.map((item) => (
					<div
						key={item.id}
						ref={(el) => (cardRefs.current[item.id] = el)}
						className='sm:w-[457px] w-full shrink-0 bg-[#1C1C1C] rounded-[26px] px-7 pb-8 font-sora flex flex-col justify-between items-stretch sm:max-h-[260px] sm:h-full h-[328px]'>
						<span className='text-[#F5F7F9]/[0.05] text-[97px]/[135px] font-semibold'>
							{item.id}
						</span>
						<div className=' space-y-3  h-full flex flex-col justify-end'>
							<h3 className='text-[27px]/[37px] font-semibold font-sora text-[#F5F7F9] text-wrap '>
								{item.header}
							</h3>
							<p className='text-[#F5F7F9]/[0.8] text-[15px]/[25px] font-medium font-inter max-w-[380px] sm:w-full w-[90%]'>
								{item.desc}
							</p>
						</div>
					</div>
				))}
			</div>
			<div className='flex gap-x-2.5 items-stretch gap-2.5 overflow-x-auto scrollbar-hide md:scrollbar-default scroll-smooth scrollbar-hide'>
				{data.map((item) => (
					<button
						key={item.id}
						onClick={() => scrollToCard(item.id)}
						className={`rounded-[28px] w-[240px] h-[10px] cursor-pointer ${
							activeIndex === item.id ? "bg-[#FF5F0F]" : "bg-[#FAFAFA]"
						}`}></button>
				))}
			</div>
		</section>
	);
};

export default SlidingCards;
