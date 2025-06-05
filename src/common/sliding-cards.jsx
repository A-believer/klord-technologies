const SlidingCards = ({ header, data }) => {
	return (
		<section className='contain py-10 space-y-14'>
			<h2 className='font-sora text-[#0F0F0F] lg:text-5xl/[50px] text-[32px]/10 font-semibold tracking-[-2.4px] text-center'>
				{header}
			</h2>
			<div
				className='w-full rounded-[26px] flex flex-row items-stretch gap-2.5 overflow-x-auto scrollbar-hide md:scrollbar-default scroll-smooth scrollbar-hide md:pb-10 pb-7'
				style={{
					scrollbarColor: "#FF5F0F #FAFAFA",
					scrollbarWidth: "thin",
					scrollbarArrowColor: "#FAFAFA !important",
				}}>
				{data.map((item) => (
					<div
						key={item.id}
						className='sm:w-[457px] w-full shrink-0 bg-[#1C1C1C] rounded-[26px] px-7 pb-8 font-sora flex flex-col justify-between items-stretch sm:max-h-[260px] sm:h-full h-[328px]'>
						<span className='text-[#F5F7F9]/[0.05] text-[97px]/[135px] font-semibold'>
							{item.id}
						</span>
						<div className='space-y-3 h-full flex flex-col justify-end'>
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
		</section>
	);
};

export default SlidingCards;
