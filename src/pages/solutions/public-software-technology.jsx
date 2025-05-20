import Seo from "../../common/seo";
import bgSrc from "../../assets/imgs/public-technology-bg.png";
import HeroComp from "../../common/hero-comp";
import ChallengeSolutions from "../../components/solutions/challenge-solutions";

const c_s_data = {
	header: "The Public Sector Challenge vs. K-Lord's Solution",
	challenges: {
		paragraph:
			"Public institutions often work with outdated systems, fragmented tools, and complex compliance mandates. Manual processes and inaccessible interfaces delay services and limit impact.",
	},
	solutions: {
		paragraph:
			"We deliver digital solutions designed for the public sector’s real-world needs—secure, compliant, and user-friendly. From digital permits to social service automation, we modernize operations without disrupting your mission.",
	},
};

const PublicSoftwareTechnology = () => {
	return (
		<>
			<Seo
				title='Public Sector Software Solutions | K-Lord Technologies '
				description="Discover K-Lord Technologies' secure and scalable digital solutions for the public sector. We serve government agencies, educational institutions, healthcare systems, and nonprofits with compliance-ready, user-centric platforms. "
				content=''
			/>
			<HeroComp
				headerWidth='max-w-[1192px] w-full'
				header='Digital Transformation for Government, Education, Healthcare & Nonprofits'
				paragraphWidth='max-w-[773px] w-full'
				paragraph='K-Lord Technologies delivers innovative, compliance-ready solutions for public sector organizations. Our platforms are built to modernize workflows, enhance citizen engagement, and support service delivery—securely and at scale.'
				bgSrc={bgSrc}
				ctaTextI='Modernize Your Operations'
				ctaTextII='See Our Work'
			/>
			<ChallengeSolutions
				challenges={c_s_data.challenges}
				header={c_s_data.header}
				solutions={c_s_data.solutions}
			/>
		</>
	);
};
export default PublicSoftwareTechnology;
