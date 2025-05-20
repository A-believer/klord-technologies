import Seo from "../../common/seo";
import bgSrc from "../../assets/imgs/custom-software-bg.png";
import HeroComp from "../../common/hero-comp";
import ChallengeSolutions from "../../components/solutions/challenge-solutions";
import imgI from "../../assets/imgs/cs-1.png";
import imgII from "../../assets/imgs/cs-2.png";
import imgIII from "../../assets/imgs/cs-3.png";
import imgIV from "../../assets/imgs/cs-4.png";
import imgV from "../../assets/imgs/cs-5.png";
import imgVI from "../../assets/imgs/cs-6.png";
import CardGrey from "../../common/card-grey";

const c_s_data = {
	header: "Our Problem–Solution Approach",
	challenges: {
		paragraph:
			"Outgrowing off-the-shelf software is inevitable. Your business deserves more than cookie-cutter platforms and bloated features. You need systems that flex with your operations, reflect your unique processes, and scale effortlessly as you grow.",
	},
	solutions: {
		paragraph:
			"At K-Lord Technologies, we create bespoke software platforms built from the ground up: solutions that streamline internal operations, elevate customer engagement, and evolve with your business goals. From ideation to execution, we’re with you at every step.",
	},
};

const key_features = [
	{
		id: 1,
		header: "Tailored to Your Business",
		desc: "Every feature is designed to fit your unique operational needs—from automating approvals and digitizing workflows to building complex integrations.",
		img: imgI,
	},
	{
		id: 2,
		header: "Scalable Architecture",
		desc: "Future-proof your platform with modular, scalable builds that adapt to business growth, regulatory shifts, or user demand.",
		img: imgII,
	},
	{
		id: 3,
		header: "Enterprise-Grade Security",
		desc: "We follow best practices for encryption, access control, and regulatory compliance, including HIPAA, GDPR, and SOC 2 standards.",
		img: imgIII,
	},
	{
		id: 4,
		header: "Smart Analytics & Reporting",
		desc: "Get actionable insights with built-in analytics dashboards, real-time reporting, and visualized KPIs to make faster, better decisions.",
		img: imgIV,
	},
	{
		id: 5,
		header: "Cross-Platform Performance",
		desc: "Access anywhere, anytime. We build for web, mobile, tablet, and cross-device syncing, delivering seamless user experience on every screen.",
		img: imgV,
	},
	{
		id: 6,
		header: "Full-Lifecycle Support",
		desc: "From kickoff to post-launch optimization, we partner closely with you to ensure your solution performs flawlessly and grows with your needs.",
		img: imgVI,
	},
];

const CustomSoftwareDevelopment = () => {
	return (
		<>
			<Seo
				title='Custom Software Development for Scalable, Tailored Solutions | K-Lord Technologies '
				description='Leverage K-Lord Technologies’ custom software development services to build secure, scalable, and industry-specific solutions. Tailored to meet your business needs, our solutions ensure efficiency and sustainable growth'
				content=''
			/>
			<HeroComp
				headerWidth='max-w-[1192px] w-full'
				header='Custom Software Solutions Built Around Your Business'
				paragraphWidth='max-w-[773px] w-full'
				paragraph='At K-Lord Technologies, we design and engineer software that matches your workflows—not the other way around. From powerful backend systems to sleek, intuitive interfaces, our custom software solutions drive efficiency, innovation, and competitive advantage.'
				bgSrc={bgSrc}
				ctaTextI='Start Your Project Today'
				ctaTextII='See Our Work'
			/>
			<ChallengeSolutions
				challenges={c_s_data.challenges}
				header={c_s_data.header}
				solutions={c_s_data.solutions}
			/>
			<CardGrey
				header='Key Features of Our Custom Software'
				data={key_features}
			/>
		</>
	);
};
export default CustomSoftwareDevelopment;
