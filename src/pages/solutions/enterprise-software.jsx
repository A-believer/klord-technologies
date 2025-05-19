import HeroComp from "../../common/hero-comp";
import Seo from "../../common/seo";
import bgSrc from "../../assets/imgs/enterprise-software-bg.png";

const EnterpriseSoftware = () => {
	return (
		<>
			<Seo
				title='Enterprise Software Solutions for Scalable, Secure Operations | K-Lord Technologies '
				description='Build secure, cloud-native enterprise software with K-Lord Technologies. From ERP systems to  intelligent automation, we help modern organizations scale faster, streamline operations, and unlock efficiency.'
				content=''
			/>
			<HeroComp
				headerWidth='max-w-[899px] w-full'
				header='Software That Powers Growth and Scale'
				paragraphWidth='max-w-[773px] w-full'
				paragraph='At K-Lord Technologies, we design robust enterprise software built to handle complexity, automate workflows, and fuel sustainable growth. From ERP platforms to custom data systems, our solutions help you eliminate bottlenecks and lead with confidence.'
				bgSrc={bgSrc}
				ctaTextI='Transform Your Operations'
				ctaTextII='Explore Our Work'
			/>
		</>
	);
};
export default EnterpriseSoftware;
