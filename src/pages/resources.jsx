import HeroComp from "../common/hero-comp";
import Seo from "../common/seo";
import bgSrc from "../assets/imgs/resources-bg.png";

const Resources = () => {
	return (
		<>
			<Seo
				title='Resources | K-Lord Technologies | Digital Transformation for Healthcare, SMEs, and Enterprises '
				description='Access valuable resources from K-Lord Technologies. Explore whitepapers, case studies, blog articles, and more to understand how our digital solutions transform healthcare, SMEs, and enterprise operations.'
				content=''
			/>
			<HeroComp
				headerWidth='max-w-[1000px] w-full'
				header='K-Lord Technologies Resources'
				paragraphWidth='max-w-[773px] w-full'
				paragraph='Welcome to the K-Lord Technologies resources hub, your go-to destination for valuable content designed to inform and inspire your digital transformation journey. From insightful whitepapers and detailed case studies to thought leadership articles and product documentation, we provide the knowledge and tools you need to leverage our innovative platforms for success.'
				bgSrc={bgSrc}
			/>
		</>
	);
};
export default Resources;
