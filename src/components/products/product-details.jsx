import { div } from "motion/react-client";
import { Link } from "react-router";
import Card from "../../common/card";

const ProductDetails = ({ product }) => {
	return (
		<div className='space-y-10'>
			<h3 className='text-[#0F0F0F] lg:text-5xl/[64px] text-[32px]/[42px] tracking-[-2.4px] font-semibold text-center font-inter'>
				{product.header}
			</h3>
			<>{product.imgSection}</>
			<p className='md:my-[51px] my-7 text-lg/10 font-medium font-inter tracking-[-0.18px]'>
				{product.desc}
			</p>
			<div
				className={`grid ${
					product.name === "NexaLife Care" && "lg:grid-cols-4"
				} lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-8 lg:gap-y-16 gap-y-[30px]`}>
				{product.cardContent.map((card, idx) => (
					<Card key={idx} content={card} />
				))}
			</div>
			<p className='text-lg/10 font-bold font-inter tracking-[-0.18px]'>
				{product.highlight}
			</p>
			<div className='flex items-center sm:justify-start sm:flex-row flex-col gap-x-5 gap-y-5'>
				<Link
					to='/get-started'
					className='bg-[#01588E] border border-[#01588E] rounded-[55px] lg:w-fit w-full py-2.5 px-[30px] text-white text-center shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] font-medium hover:bg-[#014c8e] transition-all duration-500 active:scale-[95%]'>
					{product.ctaText}
				</Link>
				{product.url && (
					<Link
						to='/get-started'
						className='border border-[#01588E] bg-white hover:bg-gray-200 rounded-[55px] lg:w-fit w-full py-2.5 px-[30px] text-black text-center transition-all duration-500 font-medium'>
						Learn More
					</Link>
				)}
			</div>
		</div>
	);
};
export default ProductDetails;
