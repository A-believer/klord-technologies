import Seo from "../../common/seo";
import bgSrc from "../../assets/imgs/public-technology-bg.png";
import HeroComp from "../../common/hero-comp";

const PublicSoftwareTechnology = () => {
	return (
		<>
			<Seo
				title='Public Sector Software Solutions | K-Lord Technologies '
				description="Discover K-Lord Technologies' secure and scalable digital solutions 
for the public sector. We serve government agencies, educational institutions, 
healthcare systems, and nonprofits with compliance-ready, user-centric platforms. "
				content=''
			/>
			<HeroComp
				headerWidth='max-w-[1192px] w-full'
				header='Digital Transformation for Government, Education, Healthcare & 
Nonprofits'
				paragraphWidth='max-w-[773px] w-full'
				paragraph='K-Lord Technologies delivers innovative, compliance-ready solutions for public sector 
organizations. Our platforms are built to modernize workflows, enhance citizen 
engagement, and support service delivery—securely and at scale.'
				bgSrc={bgSrc}
				ctaTextI='Modernize Your Operations'
				ctaTextII='See Our Work'
			/>
		</>
	);
};
export default PublicSoftwareTechnology;
