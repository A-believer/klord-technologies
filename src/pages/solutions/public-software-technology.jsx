import Seo from "../../common/seo";
import bgSrc from "../../assets/imgs/public-technology-bg.png";
import HeroComp from "../../common/hero-comp";
import ChallengeSolutions from "../../components/solutions/challenge-solutions";
import imgI from "../../assets/imgs/ps-1.png";
import imgII from "../../assets/imgs/ps-2.png";
import imgIII from "../../assets/imgs/ps-3.png";
import imgIV from "../../assets/imgs/ps-4.png";
import imgV from "../../assets/imgs/ps-5.png";
import CardGrey from "../../common/card-grey";
import Cta from "../../components/solutions/cta";

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

const smart_solution = [
	{
		id: 1,
		header: "Public Health & Social Services ",
		desc: "Digitize referrals, program enrollment, reporting, and case management for health departments and social care organizations; fully HIPAA-compliant and scalable for statewide or regional deployment. ",
		img: imgI,
	},
	{
		id: 2,
		header: "Education Systems & Campus Portals ",
		desc: "Build platforms for student information systems, faculty management, virtual learning, and online enrollment—engineered for ease of use across districts and campuses. ",
		img: imgII,
	},
	{
		id: 3,
		header: " e-Government & Digital Services ",
		desc: "Replace paper processes with mobile-ready platforms for licenses, permits, compliance tracking, and citizen engagement. Designed for rapid rollout and public access. ",
		img: imgIII,
	},
	{
		id: 4,
		header: "Regulatory Compliance & Document Workflows ",
		desc: "Automate FOIA responses, public records, approvals, and policy updates. Maintain audit readiness with full encryption and compliance coverage. ",
		img: imgIV,
	},
	{
		id: 5,
		header: "NGO & Nonprofit Program Management",
		desc: "Enable nonprofits to track beneficiaries, manage referrals, automate donor programs, and report outcomes transparently, without complex technical overhead. ",
		img: imgV,
	},
];

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
			<CardGrey
				header='Smart Solutions for Public Impact'
				data={smart_solution}
			/>
			<Cta
				header='Ready to Serve Better with Smarter Tools?'
				subheader='K-Lord Technologies empowers mission-driven agencies to scale their impact, reduce inefficiencies, and stay ahead of compliance demands. Let’s build what your community needs.'
				ctaTextI='Get Started with Discovery'
				ctaTextII='Explore Products'
			/>
		</>
	);
};
export default PublicSoftwareTechnology;
