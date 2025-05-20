import HeroComp from "../../common/hero-comp";
import Seo from "../../common/seo";
import bgSrc from "../../assets/imgs/enterprise-software-bg.png";
import ChallengeSolutions from "../../components/solutions/challenge-solutions";
import imgI from "../../assets/imgs/es-1.png";
import imgII from "../../assets/imgs/es-2.png";
import imgIII from "../../assets/imgs/es-3.png";
import imgIV from "../../assets/imgs/es-4.png";
import imgV from "../../assets/imgs/es-5.png";
import imgVI from "../../assets/imgs/es-6.png";
import imgVII from "../../assets/imgs/es-7.png";
import imgVIII from "../../assets/imgs/es-8.png";
import imgIX from "../../assets/imgs/es-9.png";
import CardGrey from "../../common/card-grey";
import UseCases from "../../components/solutions/enterprise-software/use-cases";
import CardSwitch from "../../common/card-switch";
import Cta from "../../components/solutions/cta";

const c_s_data = {
	header: "The Challenge vs. The K-Lord Solution",
	challenges: {
		paragraph:
			"Disjointed systems, manual processes, and disconnected data create friction at scale. Off-the-shelf software often leads to workarounds, inefficiencies, and limited visibility.",
		list: [
			"Data silos block cross-department collaboration",
			"Manual data entry leads to errors and delays",
			"Generic software requires excessive workarounds",
		],
	},
	solutions: {
		paragraph:
			"K-Lord Technologies builds unified enterprise systems designed around your goals. From strategy to deployment, our software connects your departments, automates core processes, and lays the foundation for smarter decisions and sustainable growth.",
		list: [
			"Single source of truth across all departments",
			"Automated workflows eliminate repetitive tasks",
			"Customized platforms that fit your exact needs",
		],
	},
};

const what_we_deliver = [
	{
		id: 1,
		header: "Custom Enterprise Software",
		desc: "Fully tailored platforms aligned with your operations—built to integrate smoothly with your current tools and evolve as your business grows.",
		img: imgI,
	},
	{
		id: 2,
		header: "Sharework Flow – Modular ERP System ",
		desc: "Our in-house ERP solution includes CRM, HR, finance, inventory, procurement, and project management. Everything you need in one secure, unified platform. ",
		img: imgII,
	},
	{
		id: 3,
		header: "System Integration & Data Interoperability ",
		desc: "We connect scattered systems across departments into one intelligent ecosystem. Real-time data flow replaces silos and powers up operational clarity. ",
		img: imgIII,
	},
	{
		id: 4,
		header: "AI-Powered Automation",
		desc: "We embed AI to handle repetitive tasks, trigger smart workflows, and surface insights that increase efficiency and reduce human error. ",
		img: imgIV,
	},
	{
		id: 5,
		header: "Cloud-Native Scalability ",
		desc: "Our architecture supports global expansion, heavy workloads, and rapid growth—without compromising performance or security. ",
		img: imgV,
	},
];

const whyChooseData = [
	{
		id: 1,
		title: "Cross-Industry Experience",
		desc: "We've delivered enterprise-grade platforms across healthcare, logistics, finance, and more. This broad expertise brings proven best practices to your project.",
		image: imgVI,
	},
	{
		id: 2,
		title: "Built for Growth",
		desc: "Our infrastructure supports large data volumes, distributed teams, and high concurrency. You can trust your systems will scale efficiently as you grow.",
		image: imgVII,
	},
	{
		id: 3,
		title: "Long-Term Partnership",
		desc: "Our commitment extends beyond launch. We provide ongoing support, maintenance, and strategic updates to keep your software aligned with your evolving needs.",
		image: imgVIII,
	},
	{
		id: 4,
		title: "Software That Fits Your Process",
		desc: "We tailor our solutions to match your workflows and business logic, reducing disruption and improving adoption across your teams.",
		image: imgIX,
	},
];

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

			<ChallengeSolutions
				challenges={c_s_data.challenges}
				header={c_s_data.header}
				solutions={c_s_data.solutions}
			/>
			<CardGrey header='What We Deliver' data={what_we_deliver} />
			<UseCases />
			<CardSwitch
				data={whyChooseData}
				header={"Why Enterprises Choose K-Lord"}
			/>
			<Cta
				header='Ready to Build Enterprise Software That Works for You?'
				subheader="At K-Lord Technologies, we help growing organizations remove complexity, unlock data, and move faster. Let's build the platform that drives your next stage of growth."
				ctaTextI='Let’s Get Started'
				ctaTextII='See What We’ve Built'
			/>
		</>
	);
};
export default EnterpriseSoftware;
