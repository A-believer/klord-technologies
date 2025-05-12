import HeroComp from "../common/hero-comp";
import Seo from "../common/seo";
import bgSrc from "../assets/imgs/products-bg.png";

const Products = () => {
	return (
		<>
			<Seo
				title='K-Lord Technologies Products | Scalable Digital Platforms for Healthcare, Business, and 
Public Sector'
				description="Discover K-Lord Technologies' expanding portfolio of digital products. Built for 
compliance, performance, and real-world results.
"
				content=''
			/>
      <HeroComp
        headerWidth="max-w-[1170px] w-full"
        header='Smart, Scalable, and Secure Software Built for Growth'
        paragraphWidth="max-w-[827px] w-full"
				paragraph='At K-Lord Technologies, we design and deliver intelligent digital platforms that solve real-world challenges. From healthcare to enterprise collaboration and business operations, our products are built to help you scale fast, stay compliant, and drive meaningful results.'
				bgSrc={bgSrc}
			/>
		</>
	);
};
export default Products;
