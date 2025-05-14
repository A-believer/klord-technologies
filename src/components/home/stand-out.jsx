import { ChevronLeft, ChevronRight } from "lucide-react";
import need from "../../assets/imgs/home-need.png";
import results from "../../assets/imgs/home-results.png";
import specific from "../../assets/imgs/home-specific.png";
import secure from "../../assets/imgs/home-secure.png";
import { useRef } from "react";

const standOutData = [
	{
		header: "Tailored to Your Needs",
		des: "No one-size-fits-all software",
		image: need,
	},
	{
		header: "Industry-Specific",
		des: "Solutions for healthcare, government, and enterprise",
		image: specific,
	},
	{
		header: "Real Results",
		des: "Boosting workflows, user experience, and ROI",
		image: results,
	},
	{
		header: "Scalable & Secure",
		des: "Built with growth and compliance in mind",
		image: secure,
	},
];

const StandOut = () => {
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
				<h3 className='font-sora text-[#0F0F0F] lg:text-5xl/[50px] text-[32px]/10  font-semibold tracking-[-3px] text-left'>
					Why K-Lord Stands Out
				</h3>
				<div className='md:flex hidden items-center justify-end gap-x-2.5'>
					<button
						className='bg-[#F15533] rounded-[14px] w-[45px] h-[45px] flex items-center justify-center cursor-pointer'
						onClick={() => scroll("left")}
					>
						<ChevronLeft color='#ffffff' />
					</button>
					<button
						className='bg-[#F15533] rounded-[14px] w-[45px] h-[45px] flex items-center justify-center cursor-pointer'
						onClick={() => scroll("right")}
					>
						<ChevronRight color='#ffffff' />
					</button>
				</div>
			</div>
			<div
				ref={scrollRef}
				className='w-full rounded-[30px] flex md:flex-row flex-col md:items-start items-center gap-2.5 overflow-x-auto scrollbar-hide md:scrollbar-default scroll-smooth scrollbar-hide'
				
			>
				{standOutData.map((item, index) => (
					<div
						key={index}
						className='shrink-0 p-10 pb-0 bg-[#F5F7F9] rounded-[30px] text-[#0F0F0F] min-w-[350px] max-w-[518px] w-full flex flex-col gap-y-[49px]'
					>
						<div className="max-w-[268px]">
							<h5 className=" font-sora text-[26px]/8 font-semibold">{item.header}</h5>
							<p>{item.des}</p>
						</div>
						<img src={item.image} alt='' className='w-[252px] h-[252px] self-end' />
					</div>
				))}
			</div>
		</section>
	);
};
export default StandOut;
