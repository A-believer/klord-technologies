import need from "../assets/imgs/home-need.png";
import results from "../assets/imgs/home-results.png";
import specific from "../assets/imgs/home-specific.png";
import scalable from "../assets/imgs/scalable.png";
import solutions from "../assets/imgs/solutions.png";
import security from "../assets/imgs/security.png";
import purpose from "../assets/imgs/purpose.png";
import design from "../assets/imgs/design.png";
import icon1 from "../assets/imgs/icon-1.png";
import icon2 from "../assets/imgs/icon-2.png";
import icon3 from "../assets/imgs/icon-3.png";
import icon4 from "../assets/imgs/icon-4.png";
import icon5 from "../assets/imgs/icon-5.png";
import icon6 from "../assets/imgs/icon-6.png";
import icon7 from "../assets/imgs/icon-7.png";
import icon8 from "../assets/imgs/icon-8.png";
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
		header: "Professional Video Conferencing for Modern Teams",
		imgSection: <UrcallsImg />,
		desc: "UrCalls is a high-performance video conferencing solution designed for teams, educators, and providers who need reliability, control, and seamless collaboration.",
		cardContent: [
			{
				icon: icon1,
				title: "HD Audio & Video Quality",
				desc: "Deliver meetings with crystal-clear sound and high-definition visuals—every time.",
			},
			{
				icon: icon2,
				title: "Real-Time Screen Sharing & Whiteboard",
				desc: "Collaborate live with screen presentations and interactive whiteboarding—ideal for demos, workshops, and brainstorming.",
			},
			{
				icon: icon3,
				title: "Session Recording & Playback",
				desc: "Record your meetings for compliance, training, or archival—easy to access and share.",
			},
			{
				icon: icon4,
				title: "Built-In Chat Functionality",
				desc: "Communicate seamlessly during calls with in-session messaging and group discussions.",
			},
			{
				icon: icon5,
				title: "Workflow-Ready Productivity Tools",
				desc: "Integrated features like meeting notes, action item tracking, and more to keep every session focused and productive.",
			},
			{
				icon: icon6,
				title: "Cross-Platform Livestreaming",
				desc: "Go live on YouTube, Facebook, and more—simultaneously—with just one click.",
			},
			{
				icon: icon7,
				title: "Webinars & Large-Scale Events",
				desc: "Host engaging webinars and online events with high attendee capacity and full presenter controls.",
			},
			{
				icon: icon8,
				title: "Flexible Pricing with a Free Plan",
				desc: "Affordable for startups, scalable for enterprises—start with our feature-rich free plan and upgrade as you grow.",
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
		header: "Smart Healthcare Referral & Clinic Management",
		imgSection: <NexalifecareImg />,
		desc: "NexaLife Care streamlines patient referral operations with a modular, HIPAA-compliant platform designed for patients, clinics, and other healthcare stakeholders.",
		cardContent: [
			{
				icon: icon9,
				title: "Patient Referral Workflow Automation",
				desc: "Simplify intake, routing, and appointment tracking.",
			},
			{
				icon: icon10,
				title: "Scheduling Engine",
				desc: "Book, confirm, and follow up all from one dashboard.",
			},
			{
				icon: icon11,
				title: "Compliance First Design",
				desc: "Built to meet HIPAA, and other healthcare standards.",
			},
			{
				icon: icon12,
				title: "Affiliate Advocacy and Referrals",
				desc: "Wide networks of patient advocates with broad community reach.",
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
		header: "Modular ERP for Agile, Growing Businesses",
		imgSection: <ShareworkflowImg />,
		desc: "Sharework Flow is an all-in-one, flexible ERP solution packed with everything you need to run and grow your business. From HR to accounting, CRM to project management—Sharework helps unify your operations under one intelligent system.",
		cardContent: [
			{
				icon: icon13,
				title: "Customer Relationship Management (CRM)",
				desc: "Manage leads, deals, follow-ups, and client data with precision.",
			},
			{
				icon: icon14,
				title: "Human Resources & Payroll",
				desc: "Track attendance, onboard staff, and manage payroll easily.",
			},
			{
				icon: icon15,
				title: "Accounting & Financial Reporting",
				desc: "Simplify bookkeeping, invoicing, and compliance reporting.",
			},
			{
				icon: icon16,
				title: "Project & Task Management",
				desc: "Plan, assign, and track projects with built-in Kanban boards and Gantt charts.",
			},
			{
				icon: icon17,
				title: "Inventory & Procurement Modules",
				desc: "Stay on top of orders, vendors, and stock levels.",
			},
			{
				icon: icon18,
				title: "API-Ready and Modular",
				desc: "Pick only what you need; and scale as you grow.",
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
		image: scalable,
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
