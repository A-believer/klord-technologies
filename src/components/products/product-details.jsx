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
				className={`flex w-full flex-wrap justify-center  ${
					product.name === "NexaLife Care"
						? "lg:[&>*]:w-[24.5%] sm:[&>*]:w-[48%] [&>*]:w-full gap-x-8 lg:gap-y-16 gap-y-8"
						: "xl:[&>*]:w-[31.6%] lg:[&>*]:w-[30.92%] sm:[&>*]:w-[47.5%] [&>*]:w-full gap-x-8 lg:gap-y-16 gap-y-8"
				}`}>
				{product.cardContent.map((card, idx) => (
					<Card content={card} key={idx} />
				))}
			</div>
			<p className='text-lg/10 font-bold font-inter tracking-[-0.18px]'>
				{product.highlight}
			</p>
			<div className='flex items-center sm:justify-start sm:flex-row flex-col gap-x-5 gap-y-5'>
				<Link
					to='/get-started'
					className='bg-[#01588E] border border-[#01588E] rounded-[55px] lg:w-fit w-full py-2.5 px-[30px] text-white text-center shadow-[0px_1.344px_0.537px_-0.625px_rgba(0,0,0,0.09),0px_3.185px_1.274px_-1.25px_rgba(0,0,0,0.09),0px_5.809px_2.324px_-1.875px_rgba(0,0,0,0.08),0px_9.658px_3.863px_-2.5px_rgba(0,0,0,0.08),0px_15.597px_6.239px_-3.125px_rgba(0,0,0,0.07),0px_25.531px_10.212px_-3.75px_rgba(0,0,0,0.06),0px_43.962px_17.585px_-4.375px_rgba(0,0,0,0.04)] font-medium hover:bg-[#014c8e] transition-all duration-500 active:scale-[95%]'>
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
