const CardGrey = ({ header, data }) => {
	return (
		<section className='contain md:space-y-16 space-y-10  py-10'>
			<h2 className='heading text-primary text-center'>
				{header}
			</h2>
			<div
				className={`flex w-full flex-wrap justify-center  
						 gap-x-8 lg:gap-y-16 gap-y-8
				`}>
				{data.map((item) => (
					<div
						key={item.id}
						className=' bg-[#FAFAFA] dark:bg-[#0F0F0F] border border-[#F5F5F5] dark:border-[#292929] rounded-[10px] p-[22px] pt-[30px] xl:w-[31.6%] lg:w-[30.92%] sm:w-[47.5%] w-full shadow-[0px_36px_36.4px_0px_rgba(0,0,0,0.05)]'>
						<h4 className='text-2xl/8 font-semibold font-sora tracking-[-1.04px] text-primary'>
							{item.header}
						</h4>
						<p className='mt-3 mb-9 text-left text-secondary'>{item.desc}</p>
						<img
							loading='lazy'
							src={item.img}
							alt=''
							className='rounded-[13px] mx-auto w-full object-cover'
						/>
					</div>
				))}
			</div>
		</section>
	);
};
export default CardGrey;
