import UrcallsImg from "../components/products/urcalls-img";
import NexalifecareImg from "../components/products/nexalifecare-img";
import ShareworkflowImg from "../components/products/shareworkflow-img";
	

const products = [
	{
		id: 1,
		name: "UrCalls",
		header: "Connect Instantly, Anywhere",
		imgSection: <UrcallsImg />,
		desc: "UrCalls is a secure, high-performance video conferencing platform, built for modern teams in need of reliable communication and effortless collaboration. It brings structure and clarity to every meeting, from internal syncs to large-scale virtual events, without the technical headaches. Packed with powerful collaboration tools, UrCalls helps teams stay connected, aligned, and productive, all in one place.",
		cardContent: [
			{
				icon: "/imgs/icon-1.png",
				title: "FHD audio and video for clear, uninterrupted meetings.",
			},
			{
				icon: "/imgs/icon-2.png",
				title: "Interactive screen sharing and whiteboard tools.",
			},
			{
				icon: "/imgs/icon-3.png",
				title: "Built-in polls and breakout rooms for engagement.",
			},
			{
				icon: "/imgs/icon-4.png",
				title: "Session recording with on-demand playback.",
			},
			{
				icon: "/imgs/icon-5.png",
				title: "Real-time in-call chat for seamless collaboration.",
			},
			{
				icon: "/imgs/icon-6.png",
				title: "One-click livestreaming and webinar support.",
			},
			{
				icon: "/imgs/icon-7.png",
				title: "Scalable plans, including a full-featured free tier.",
			},
		],
		highlight:
			"Ideal for: Remote Teams • Telehealth • Online Education • Corporate Meetings",
		url: "https://urcalls.com",
		ctaText: "See it in Action",
	},
	{
		id: 2,
		name: "NexaLife Care",
		header: "Bridging the Healthcare Access Gap",
		imgSection: <NexalifecareImg />,
		desc: "NexaLife Care is a purpose-built patient referral platform that helps healthcare providers connect with the people who need them most. Designed to serve underserved communities, it streamlines referral intake and care matching, making healthcare more accessible, and operations more scalable. Built for clinics, patients and provider networks, NexaLife Care automates the patient journey from referral to appointment, while ensuring compliance and coordination every step of the way.",
		cardContent: [
			{
				icon: "/imgs/icon-9.png",
				title: "End-to-end patient referral workflow automation",
			},
			{
				icon: "/imgs/icon-10.png",
				title: "Smart scheduling with confirmations and follow-ups",
			},
			{
				icon: "/imgs/icon-11.png",
				title: "Advocacy tools to reach high-need populations",
			},
			{
				icon: "/imgs/icon-12.png",
				title: "Patient-first and provider-friendly approach",
			},
			{
				icon: "/imgs/icon-9.png",
				title: "Regulation compliance infrastructure",
			},
			{
				icon: "/imgs/icon-10.png",
				title: "Real-time status tracking and feedback collection",
			},
			{
				icon: "/imgs/icon-11.png",
				title: "Scalable for providers of any size or service model",
			},
		],
		highlight:
			"Ideal for: Clinics • Hospitals • Mobile Health Units • Referral Coordinators",
		url: "https://nexalifecare.com",
		ctaText: "Request a Demo",
	},
	{
		id: 3,
		name: "Sharework Flow",
		header: "Run Smarter. Scale Faster.",
		imgSection: <ShareworkflowImg />,
		desc: "Sharework Flow is a modular, all-in-one ERP platform built for modern businesses that need to manage growth without the complexity. It brings your essential operations: HR, accounting, CRM, project management, and more, into one unified, intelligent system. Designed to streamline the way teams work, Sharework Flow simplifies daily operations, improves visibility, and removes the friction that slows businesses down. It's everything you need to run efficiently, with none of the bloat you don’t.",
		cardContent: [
			{
				icon: "/imgs/icon-13.png",
				title: "Streamlined CRM to manage leads, clients, and pipelines.",
			},
			{
				icon: "/imgs/icon-14.png",
				title: "	Full-featured HR and payroll management.",
			},
			{
				icon: "/imgs/icon-15.png",
				title: "	Easy-to-use accounting and financial reporting tools.",
			},
			{
				icon: "/imgs/icon-16.png",
				title: "	Built-in task and project tracking with Kanban and Gantt views.",
			},
			{
				icon: "/imgs/icon-17.png",
				title: "	Inventory and procurement modules for real-time supply oversight.",
			},
			{
				icon: "/imgs/icon-18.png",
				title: "	Modular and API-ready so you scale only what you need.",
			},
		],
		highlight:
			"Ideal for: SMEs • Agencies • Professional Services • Enterprises",
		ctaText: "Request a Consultation",
	},
];

const standOutData = [
	{
		header: "Tailored to Your Needs",
		des: "We begin by fully understanding your workflows and challenges. Then, we build software that adapts to your way of working, minimizing friction and enabling smoother operations. ",
		image: "/imgs/home-need.png",
	},
	{
		header: "Industry-Specific Expertise ",
		des: "Specializing in healthcare, government, and enterprise sectors, we leverage deep domain knowledge to deliver solutions that meet your exact needs and regulatory demands. ",
		image: "/imgs/home-specific.png",
	},
	{
		header: "Delivering Real Results ",
		des: "We focus on driving outcomes, not just features. Our clients benefit from improved efficiency, faster adoption, and meaningful business impact when partnering with us.",
		image: "/imgs/home-results.png",
	},
	{
		header: "Scalable & Secure",
		des: "Our platforms are designed to grow with your organization, from startups to large enterprises. Security and compliance are built in from day one, keeping your data safe and your business running reliably. ",
		image: "/imgs/home-secure.png",
	},
];

const whyChooseData = [
	{
		header: "Purpose-Built Solutions",
		des: "Our modular platforms include exactly what you need; no unnecessary features or bloat. This keeps your tools straightforward, effective, and easy to use.",
		image: "/imgs/purpose.png",
	},
	{
		header: "Compliance and Security by Design",
		des: "Compliance with HIPAA, Section 508, SOC 2, and GDPR is integrated throughout our software. You can trust your operations stay protected and meet all necessary standards.",
		image: "/imgs/home-secure.png",
	},
	{
		header: "Designed for Scale",
		des: "Whether you have five users or five thousand, our systems support seamless growth. We ensure performance and stability without costly rebuilds.",
		image: "/imgs/home-secure.png",
	},
	{
		header: "Deep Domain Knowledge",
		des: "Every product reflects our extensive experience; from patient referral platforms to enterprise resource planning; built to solve your specific challenges.",
		image: "/imgs/home-specific.png",
	},
];

export { products, standOutData, whyChooseData };
