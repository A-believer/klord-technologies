import Seo from "../../common/seo";
import HeroComp from "../../common/hero-comp";
import ChallengeSolutions from "../../components/solutions/challenge-solutions";
import CardGrey from "../../common/card-grey";
import Cta from "../../components/solutions/cta";
import Testimonials from "../../components/home/testimonials";
import SlidingCards from "../../common/sliding-cards";
import CardSwitch from "../../common/card-switch";

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
		desc: "Every feature is designed to fit your unique operational needs from automating approvals and digitizing workflows to building complex integrations.",
		img: "/imgs/cs-1.png",
	},
	{
		id: 2,
		header: "Scalable Architecture",
		desc: "Future-proof your platform with modular, scalable builds that adapt to business growth, regulatory shifts, or user demand.",
		img: "/imgs/cs-2.png",
	},
	{
		id: 3,
		header: "Enterprise-Grade Security",
		desc: "We follow best practices for encryption, access control, and regulatory compliance, including HIPAA, GDPR, and SOC 2 standards.",
		img: "/imgs/cs-3.png",
	},
	{
		id: 4,
		header: "Smart Analytics & Reporting",
		desc: "Get actionable insights with built-in analytics dashboards, real-time reporting, and visualized KPIs to make faster, better decisions.",
		img: "/imgs/cs-4.png",
	},
	{
		id: 5,
		header: "Cross-Platform Performance",
		desc: "Access anywhere, anytime. We build for web, mobile, tablet, and cross-device syncing, delivering seamless user experience on every screen.",
		img: "/imgs/cs-5.png",
	},
	{
		id: 6,
		header: "Full-Lifecycle Support",
		desc: "From kickoff to post-launch optimization, we partner closely with you to ensure your solution performs flawlessly and grows with your needs.",
		img: "/imgs/cs-6.png",
	},
];

const testimonials = [
	{
		name: "Tompsen Grace Clinic",
		position: "Director, Tompsen Grace Clinic ",
		quote:
			"K-Lord Technologies built a secure appointment system that slashed our no-show rates by 30%. Seamless integration and intuitive UX made adoption a breeze.”",
		image: "/imgs/panisa.png",
	},
	{
		name: "Goodwood Inc.",
		position: "COO, Goodwood Inc. ",
		quote:
			"K-Lord gave us a centralized, cross-department solution that brought transparency and cohesion across teams. Outstanding collaboration and technical insight.",
		image: "/imgs/goodwood.png",
	},
];

const ourProcessData = [
	{
		id: 1,
		header: "Discovery & Planning",
		desc: "We begin with a deep dive into your operations, pain points, and strategic goals. This ensures alignment and sets the foundation for measurable outcomes.",
	},
	{
		id: 2,
		header: "UX/UI Design & Prototyping",
		desc: "Our designers craft intuitive, accessible, and beautiful interfaces that support usability and customer satisfaction from day one.",
	},
	{
		id: 3,
		header: "Agile Development",
		desc: "We build iteratively using agile methodologies, delivering functional software fast, and refining with your feedback in every sprint.",
	},
	{
		id: 4,
		header: "QA & Testing",
		desc: "Before launch, we conduct end-to-end testing under real-world conditions to ensure performance, stability, and security.",
	},
	{
		id: 5,
		header: "Launch & Training",
		desc: "We roll out your software with zero friction. We also train your team and provide supporting documentation to ensure immediate adoption.",
	},
	{
		id: 6,
		header: "Post-Launch Optimization",
		desc: "Our partnership continues with support, performance enhancements, and long-term roadmapping as your business evolves.",
	},
];

const whyChooseData = [
	{
		id: 1,
		title: "Healthcare",
		desc: "We develop HIPAA-compliant platforms for patient management, referral tracking, and telehealth streamlining care delivery and reporting.",
		image: "/imgs/cs-8.png",
	},
	{
		id: 2,
		title: "Enterprise",
		desc: "Custom CRM systems, ERP modules, and internal collaboration platforms designed to automate processes and unify your operations.",
		image: "/imgs/cs-9.png",
	},
	{
		id: 3,
		title: "Public Sector & Nonprofits",
		desc: "Robust, secure software that helps public institutions and mission-driven organizations digitize workflows and serve stakeholders efficiently.",
		image: "/imgs/cs-10.png",
	},
	{
		id: 4,
		title: "E-commerce & Retail",
		desc: "Inventory control, customer portals, secure payment flows, and personalized shopping experiences for modern buyers.",
		image: "/imgs/cs-11.png",
	},
	{
		id: 5,
		title: "Finance & Insurance",
		desc: "Build secure, compliant platforms to manage financial transactions, client onboarding, and risk analysis.",
		image: "/imgs/cs-12.png",
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
				paragraph='At K-Lord Technologies, we design and engineer software that matches your workflows not the other way around. From powerful backend systems to sleek, intuitive interfaces, our custom software solutions drive efficiency, innovation, and competitive advantage.'
				bgSrc="/imgs/custom-software-bg.png"
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
			<SlidingCards
				header={"Our Process: Ideate, Collaborate, Build, Grow"}
				data={ourProcessData}
			/>
			<CardSwitch data={whyChooseData} header={"Industries We Serve"} />
			<Testimonials testimonials={testimonials} />

			<Cta
				header='Ready to Build Custom Software for Your Business?'
				subheader='At K-Lord Technologies, we don’t just write code, we solve real business problems with software built to fit, scale, and evolve. Let’s create something that works the way you work.'
				ctaTextI='Get in Touch'
				ctaTextII='See Our Work'
			/>
		</>
	);
};
export default CustomSoftwareDevelopment;
