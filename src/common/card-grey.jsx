const CardGrey = ({ header, data }) => {
	return (
		<section className='contain md:space-y-16 space-y-10 md:py-16 py-10'>
			<h2 className='text-[#0F0F0F] font-inter font-semibold lg:tracking-[-2.4px] tracking-[-1px] lg:text-5xl/[64px] text-[32px]/[44px] text-center'>
				{header}
			</h2>
			<div
				className={`flex w-full flex-wrap justify-center  
						 gap-x-8 lg:gap-y-16 gap-y-8
				`}>
				{data.map((item) => (
					<div
						key={item.id}
						className=' bg-[#FAFAFA] border border-[#F5F5F5] rounded-[10px] p-[22px] pt-[30px] xl:w-[31.6%] lg:w-[30.92%] sm:w-[47.5%] w-full'>
						<h4 className='text-black text-2xl/8 font-semibold font-sora tracking-[-1.04px] '>
							{item.header}
						</h4>
						<p className='mt-3 mb-9 text-left'>{item.desc}</p>
						<img src={item.img} alt='' className='rounded-[13px] mx-auto' />
					</div>
				))}
			</div>
		</section>
	);
};
export default CardGrey;
