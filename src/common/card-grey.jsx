const CardGrey = ({ header, data }) => {
	return (
		<section className='contain md:space-y-16 space-y-10 md:py-16 py-10'>
			<h2 className='text-[#0F0F0F] font-inter font-semibold lg:tracking-[-2.4px] tracking-[-1px] lg:text-5xl/[64px] text-[32px]/[44px]'>
				{header}
			</h2>
			<div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-9 gap-y-5'>
				{data.map((item) => (
					<div
						key={item.id}
						className='w-full bg-[#FAFAFA] border border-[#F5F5F5] rounded-[10px] p-[22px] pt-[30px]'>
						<h4 className='text-black text-2xl/8 font-semibold tracking-[-1.04px]'>
							{item.header}
						</h4>
						<p className='mt-3 mb-9'>{item.desc}</p>
						<img src={item.img} alt='' className='rounded-[13px]' />
					</div>
				))}
			</div>
		</section>
	);
};
export default CardGrey;
