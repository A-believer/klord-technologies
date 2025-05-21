import Seo from "../../common/seo";
import bgSrc from "../../assets/imgs/public-technology-bg.png";
import HeroComp from "../../common/hero-comp";
import ChallengeSolutions from "../../components/solutions/challenge-solutions";
import imgI from "../../assets/imgs/ps-1.png";
import imgII from "../../assets/imgs/ps-2.png";
import imgIII from "../../assets/imgs/ps-3.png";
import imgIV from "../../assets/imgs/ps-4.png";
import imgV from "../../assets/imgs/ps-5.png";
import imgVI from "../../assets/imgs/ps-6.png";
import imgVII from "../../assets/imgs/ps-7.png";
import imgVIII from "../../assets/imgs/ps-8.png";
import imgIX from "../../assets/imgs/ps-9.png";
import CardGrey from "../../common/card-grey";
import Cta from "../../components/solutions/cta";
import jerome from "../../assets/imgs/jerome.png";
import sarah from "../../assets/imgs/sarah.png";
import Testimonials from "../../components/home/testimonials";
import CardSwitch from "../../common/card-switch";
import WhyChooseKlord from "../../components/solutions/public-software/why-choose-klord";

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

const testimonials = [
	{
		name: "Greenland Health Collaborative",
		position: "Director of IT, Greenland Public Health Collaborative ",
		quote:
			"K-Lord Technologies helped us digitize our intake and case tracking system in under 90 days. The platform complies with HIPAA, and state mandates, and our staff picked it up immediately.",
		image: jerome,
	},
	{
		name: "Bright Steps Education Network",
		position: "IT Director, Crown Enterprise Solutions",
		quote:
			"We needed a student portal that was accessible, stable, and intuitive. K-Lord delivered a solution that connected students, faculty, and administration without overcomplicating anything.",
		image: sarah,
	},
];
const whyChooseData = [
  {
    id: 1,
    title: "Proven Public Sector Expertise",
    desc: "We've partnered with government agencies, educational institutions, and healthcare providers. Our solutions are built to address their unique challenges and compliance requirements.",
    image: imgVI
  },
  {
    id: 2,
    title: "Customized Workflows",
    desc: "Our software reflects your real-world processes, including tailored permissions and approval flows; no template-built solutions here.",
    image: imgVII
  },
  {
    id: 3,
    title: "Ongoing Support You Can Rely On", 
    desc: "We offer training, maintenance, and continuous improvements after deployment to help your systems evolve with your mission.",
    image: imgVIII
  },
  {
    id: 4,
    title: "Accessible and Compliant",
    desc: "We design to meet accessibility standards like WCAG and Section 508, while ensuring HIPAA and FOIA compliance, delivering reliable experiences for all users.",
    image: imgIX
  }
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
			<CardSwitch
				header={"We Build With Standards That Matter"}
				data={whyChooseData}
			/>
			<WhyChooseKlord/>
			<Testimonials testimonials={testimonials} />
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
