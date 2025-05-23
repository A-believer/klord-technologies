import imgSrc from "../../assets/imgs/product-urcalls.png";

const UrcallsImg = () => {
	return (
		<div className='sm:border-2 rounded-[18px] border-[#FF5F0F] lg:py-16 sm:py-10 py-4 sm:bg-transparent bg-black w-full mx-auto'>
			<img
				loading='lazy'
				src={imgSrc}
				alt=''
				className='mx-auto md:w-[80%] w-full'
			/>
		</div>
	);
};

export default UrcallsImg;
