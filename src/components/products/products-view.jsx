import { useState } from "react";
import ProductDetails from "./product-details";
import { products } from "../../lib/product-data";


const ProductsView = () => {
	const [currentProduct, setCurrentProduct] = useState("UrCalls");
	return (
		<section className='contain py-16 md:space-y-16 space-y-11'>
			<div className='flex justify-center items-center gap-x-[18px] overflow-x-scroll scrollbar-hide'>
				{products.map((product) => (
					<button
						key={product.id}
						onClick={() => setCurrentProduct(product.name)}
						className={`${
							currentProduct === product.name && "bg-[#FF5F0F] text-white"
						} lg:text-2xl/9 text-base/9 font-medium tracking-[-0.733px] font-inter text-[#0F0F0F] bg-[#F5F7F9] rounded-[40px] px-[16.3px] py-[10.26px] shrink-0 cursor-pointer hover:scale-[97%] transition-all duration-500`}>
						{product.name}
					</button>
				))}
			</div>{" "}
			<div className=''>
				{products.map(
					(product) =>
						product.name === currentProduct && (
							<ProductDetails product={product} key={product.id} />
						)
				)}
			</div>
		</section>
	);
};
export default ProductsView;
