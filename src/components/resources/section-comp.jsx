import Cards from "./cards";

const SectionComp = ({
	headerText,
	subheaderText,
	cardData,
	cardClassName,
}) => {
	return (
		<section className='contain md:py-[65px] py-9'>
			<h2 className='lg:text-5xl/[64px] text-[32px]/normal font-semibold font-sora tracking-[-2.4px]'>
				{headerText}
			</h2>
			<p className='mt-4 mb-11 text-lg/8 font-normal font-inter tracking-[-0.18px] text-black/[0.8] max-w-[720px]'>
				{subheaderText}
			</p>
			<div className={cardClassName}>
				{cardData.map((card, index) => (
					<Cards data={card} key={index} />
				))}
			</div>
		</section>
	);
};
export default SectionComp;
