import need from "../assets/imgs/home-need.png";
import results from "../assets/imgs/home-results.png";
import specific from "../assets/imgs/home-specific.png";
import scalable from "../assets/imgs/scalable.png";
import solutions from "../assets/imgs/solutions.png";
import security from "../assets/imgs/security.png";
import purpose from "../assets/imgs/purpose.png";
import secure from "../assets/imgs/home-secure.png";
import icon1 from "../assets/imgs/icon-1.png";
import icon2 from "../assets/imgs/icon-2.png";
import icon3 from "../assets/imgs/icon-3.png";
import icon4 from "../assets/imgs/icon-4.png";
import icon5 from "../assets/imgs/icon-5.png";
import icon6 from "../assets/imgs/icon-6.png";
import icon7 from "../assets/imgs/icon-7.png";
import icon9 from "../assets/imgs/icon-9.png";
import icon10 from "../assets/imgs/icon-10.png";
import icon11 from "../assets/imgs/icon-11.png";
import icon12 from "../assets/imgs/icon-12.png";
import icon13 from "../assets/imgs/icon-13.png";
import icon14 from "../assets/imgs/icon-14.png";
import icon15 from "../assets/imgs/icon-15.png";
import icon16 from "../assets/imgs/icon-16.png";
import icon17 from "../assets/imgs/icon-17.png";
import icon18 from "../assets/imgs/icon-18.png";
import UrcallsImg from "../components/products/urcalls-img";
import NexalifecareImg from "../components/products/nexalifecare-img";
import ShareworkflowImg from "../components/products/shareworkflow-img";
	

const products = [
	{
		id: 1,
		name: "UrCalls",
		header: "Connect Instantly, Anywhere",
		imgSection: <UrcallsImg />,
		desc: "UrCalls is a secure, high-performance video conferencing platform built for modern teams in need of reliable communication and effortless collaboration. It brings structure and clarity to every meeting, from internal syncs to large-scale virtual events, without the technical headaches. Packed with powerful collaboration tools, UrCalls helps teams stay connected, aligned, and productive, all in one place.",
		cardContent: [
			{
				icon: icon1,
				desc: "FHD audio and video for clear, uninterrupted meetings.",
			},
			{
				icon: icon2,
				desc: "Interactive screen sharing and whiteboard tools.",
			},
			{
				icon: icon3,
				desc: "Built-in polls and breakout rooms for engagement.",
			},
			{
				icon: icon4,
				desc: "Session recording with on-demand playback.",
			},
			{
				icon: icon5,
				desc: "Real-time in-call chat for seamless collaboration.",
			},
			{
				icon: icon6,
				desc: "One-click livestreaming and webinar support.",
			},
			{
				icon: icon7,
				desc: "Scalable plans, including a full-featured free tier.",
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
				icon: icon9,
				desc: "End-to-end patient referral workflow automation",
			},
			{
				icon: icon10,
				desc: "Smart scheduling with confirmations and follow-ups",
			},
			{
				icon: icon11,
				desc: "Advocacy tools to reach high-need populations",
			},
			{
				icon: icon12,
				desc: "Patient-first and provider-friendly approach",
			},
			{
				icon: icon9,
				desc: "Regulation compliance infrastructure",
			},
			{
				icon: icon10,
				desc: "Real-time status tracking and feedback collection",
			},
			{
				icon: icon11,
				desc: "Scalable for providers of any size or service model",
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
				icon: icon13,
				desc: "Streamlined CRM to manage leads, clients, and pipelines.",
			},
			{
				icon: icon14,
				desc: "	Full-featured HR and payroll management.",
			},
			{
				icon: icon15,
				desc: "	Easy-to-use accounting and financial reporting tools.",
			},
			{
				icon: icon16,
				desc: "	Built-in task and project tracking with Kanban and Gantt views.",
			},
			{
				icon: icon17,
				desc: "	Inventory and procurement modules for real-time supply oversight.",
			},
			{
				icon: icon18,
				desc: "	Modular and API-ready so you scale only what you need.",
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
		image: need,
	},
	{
		header: "Industry-Specific Expertise ",
		des: "Specializing in healthcare, government, and enterprise sectors, we leverage deep domain knowledge to deliver solutions that meet your exact needs and regulatory demands. ",
		image: specific,
	},
	{
		header: "Delivering Real Results ",
		des: "We focus on driving outcomes, not just features. Our clients benefit from improved efficiency, faster adoption, and meaningful business impact when partnering with us.",
		image: results,
	},
	{
		header: "Scalable & Secure",
		des: "Our platforms are designed to grow with your organization, from startups to large enterprises. Security and compliance are built in from day one, keeping your data safe and your business running reliably. ",
		image: scalable,
	},
];

const whyChooseData = [
	{
		header: "Purpose-Built Solutions",
		des: "Our modular platforms include exactly what you need; no unnecessary features or bloat. This keeps your tools straightforward, effective, and easy to use.",
		image: purpose,
	},
	{
		header: "Compliance and Security by Design",
		des: "Compliance with HIPAA, Section 508, SOC 2, and GDPR is integrated throughout our software. You can trust your operations stay protected and meet all necessary standards.",
		image: secure,
	},
	{
		header: "Designed for Scale",
		des: "Whether you have five users or five thousand, our systems support seamless growth. We ensure performance and stability without costly rebuilds.",
		image: security,
	},
	{
		header: "Deep Domain Knowledge",
		des: "Every product reflects our extensive experience; from patient referral platforms to enterprise resource planning; built to solve your specific challenges.",
		image: solutions,
	},
];

export { products, standOutData, whyChooseData };
