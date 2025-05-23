import HeroComp from "../common/hero-comp";
import Seo from "../common/seo";
import bgSrc from "../assets/imgs/resources-bg.png";
import SectionComp from "../components/resources/section-comp";
import {
	blogArticles,
	caseStudies,
	eBooks,
	productsDocumention,
	webinars,
} from "../lib/resources-data";

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
			<SectionComp
				headerText={" Whitepapers & E-books"}
				subheaderText={
					"Dive deep into the latest industry insights and trends with our whitepapers and e-books. Explore how digital transformation is reshaping healthcare, SMEs, public sector solutions, and enterprise operations."
				}
				cardData={eBooks}
				cardClassName={"grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8"}
			/>
			<SectionComp
				headerText={"Case Studies"}
				subheaderText={
					"Get real-world examples of how K-Lord Technologies has helped organizations optimize operations, improve efficiency, and scale sustainably."
				}
				cardData={caseStudies}
				cardClassName={"grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8"}
			/>
			<SectionComp
				headerText={"Blog Articles"}
				subheaderText={
					"Stay informed with the latest updates, trends, and best practices in digital transformation, healthcare, enterprise solutions, and more."
				}
				cardData={blogArticles}
				cardClassName={"grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8"}
			/>
			<SectionComp
				headerText={"Product Documentation"}
				subheaderText={
					"Access detailed product guides, technical documentation, and implementation resources for our platforms."
				}
				cardData={productsDocumention}
				cardClassName={"grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8"}
			/>
			<SectionComp
				headerText={"Webinars & Events"}
				subheaderText={
					"Watch recordings of our previous webinars or register for upcoming events to learn directly from our experts."
				}
				cardData={webinars}
				cardClassName={""}
			/>
		</>
	);
};
export default Resources;
