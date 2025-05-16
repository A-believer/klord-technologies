const Card = ({content}) => {
	return (
		<div
			
			className='w-full border-2 border-[#01588E] py-[21px] px-[18px] rounded-[10px] shadow-lg min-h-[250px] flex flex-col items-start justify-between gap-y-5 hover:translate-[-2px] transition-all duration-500'>
			<img src={content.icon} alt='' />
			<div className='space-y-2'>
				<p className='font-sora text-xl/[30px] font-semibold text-[#101828]'>
					{content.title}
				</p>
				<p className='text-[#667085] text-base/6'>{content.desc}</p>
			</div>
		</div>
	);
};
export default Card;
