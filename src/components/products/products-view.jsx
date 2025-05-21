import { useState, useEffect, useRef } from "react";
import ProductDetails from "./product-details";
import { products } from "../../lib/product-data";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router";

const ProductsView = () => {
	const [currentProduct, setCurrentProduct] = useState("UrCalls");
	const location = useLocation();
	const namesRef = useRef(null);

	// Set current product from hash and scroll to names
	useEffect(() => {
		if (location.hash) {
			const hashName = decodeURIComponent(
				location.hash.replace("#", "")
			).toLowerCase();
			const found = products.find(
				(p) =>
					p.name.replace(/\s+/g, "").toLowerCase() ===
					hashName.replace(/\s+/g, "")
			);
			if (found) {
				setCurrentProduct(found.name);
				// Scroll to the names section with 150px offset from top
				if (namesRef.current) {
					const rect = namesRef.current.getBoundingClientRect();
					const scrollTop =
						window.pageYOffset || document.documentElement.scrollTop;
					const offset = 140;
					window.scrollTo({
						top: rect.top + scrollTop - offset,
						behavior: "smooth",
					});
				}
			}
		}
	}, [location.hash]);

	return (
		<section className='contain py-16 md:space-y-10 space-y-6'>
			<div
				ref={namesRef}
				className='flex justify-center items-center gap-x-[18px] overflow-hidden overflow-x-scroll scrollbar-hide sm:px-0 px-32 pb-10'>
				{products.map((product) => (
					<button
						key={product.id}
						onClick={() => setCurrentProduct(product.name)}
						className={`${product.name === "UrCalls" && "ml-20"} ${
							currentProduct === product.name &&
							"bg-[#FF5F0F] text-white hover:text-[#0F0F0F] shadow-[0px_1.344px_0.537px_-0.625px_rgba(0,0,0,0.09),0px_3.185px_1.274px_-1.25px_rgba(0,0,0,0.09),0px_5.809px_2.324px_-1.875px_rgba(0,0,0,0.08),0px_9.658px_3.863px_-2.5px_rgba(0,0,0,0.08),0px_15.597px_6.239px_-3.125px_rgba(0,0,0,0.07),0px_25.531px_10.212px_-3.75px_rgba(0,0,0,0.06),0px_43.962px_17.585px_-4.375px_rgba(0,0,0,0.04)]"
						} lg:text-2xl/9 text-base/9 font-medium tracking-[-0.733px] font-inter text-[#0F0F0F] bg-[#F5F7F9] hover:bg-gray-200 rounded-[40px] px-[16.3px] py-[10.26px] shrink-0 cursor-pointer hover:scale-[95%] transition-all duration-500 hover:shadow-[0px_1.344px_0.537px_-0.625px_rgba(0,0,0,0.09),0px_3.185px_1.274px_-1.25px_rgba(0,0,0,0.09),0px_5.809px_2.324px_-1.875px_rgba(0,0,0,0.08),0px_9.658px_3.863px_-2.5px_rgba(0,0,0,0.08),0px_15.597px_6.239px_-3.125px_rgba(0,0,0,0.07),0px_25.531px_10.212px_-3.75px_rgba(0,0,0,0.06),0px_43.962px_17.585px_-4.375px_rgba(0,0,0,0.04)]`}>
						{product.name}
					</button>
				))}
			</div>
			<div>
				<AnimatePresence mode='wait'>
					{products
						.filter((product) => product.name === currentProduct)
						.map((product) => (
							<motion.div
								key={product.id}
								initial={{ opacity: 0, y: 40 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -40 }}
								transition={{ duration: 0.5, ease: "easeOut" }}>
								<ProductDetails product={product} />
							</motion.div>
						))}
				</AnimatePresence>
			</div>
		</section>
	);
};
export default ProductsView;
