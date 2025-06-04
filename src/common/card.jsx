const Card = ({ content }) => {
	return (
		<div className='w-full border-2 border-[#01588E] py-[21px] px-[18px] rounded-[10px] min-h-[200px] hover:translate-[-2px] transition-all duration-500 bg-[#1C1C1C] flex flex-col justify-between gap-y-5 text-[#FFFEF5] font-sora'>
			<img loading='lazy' src={content.icon} alt='' className='w-fit'/>
			
			<p className=' text-xl/[30px] mt-auto'>{content.desc}</p>
		</div>
	);
};
export default Card;
