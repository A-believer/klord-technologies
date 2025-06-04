const Card = ({ content }) => {
	return (
		<div className='w-full py-[21px] px-[18px] rounded-[10px] shadow-lg min-h-[200px] flex flex-col justify-between gap-y-5 hover:translate-[-2px] transition-all duration-500 bg-[#1C1C1C] text-[#FFFEF5]'>
			<img loading='lazy' src={content.icon} alt='' className='w-fit' />
			<div className='space-y-2'>
				<p className='font-sora text-xl/[30px] font-semibold'>
					{content.title}
				</p>
				<p className='text-[rgba(255,255,255,0.69)] text-base/6'>{content.desc}</p>
			</div>
		</div>
	);
};
export default Card;
