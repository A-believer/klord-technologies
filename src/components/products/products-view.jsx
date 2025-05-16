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
			const hashName = decodeURIComponent(location.hash.replace("#", "")).toLowerCase();
			const found = products.find(
				(p) => p.name.replace(/\s+/g, "").toLowerCase() === hashName.replace(/\s+/g, "")
			);
			if (found) {
				setCurrentProduct(found.name);
				// Scroll to the names section
				if (namesRef.current) {
					namesRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
				}
			}
		}
	}, [location.hash]);

	return (
		<section className='contain py-16 md:space-y-16 space-y-11'>
			<div
				ref={namesRef}
				className='flex justify-center items-center gap-x-[18px] overflow-hidden overflow-x-scroll scrollbar-hide sm:px-0 px-32 '
			>
				{products.map((product) => (
					<button
						key={product.id}
						onClick={() => setCurrentProduct(product.name)}
						className={`${product.name === "UrCalls" && "ml-20"} ${
							currentProduct === product.name &&
							"bg-[#FF5F0F] text-white hover:text-[#0F0F0F]"
						} lg:text-2xl/9 text-base/9 font-medium tracking-[-0.733px] font-inter text-[#0F0F0F] bg-[#F5F7F9] hover:bg-gray-200 rounded-[40px] px-[16.3px] py-[10.26px] shrink-0 cursor-pointer hover:scale-[95%] transition-all duration-500`}>
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
