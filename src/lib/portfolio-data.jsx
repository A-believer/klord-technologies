import secure from "../assets/imgs/home-secure.png";
import solutions from "../assets/imgs/solutions.png";
import scalable from "../assets/imgs/scalable.png";
import security from "../assets/imgs/security.png";
import imgI from "../assets/imgs/portfolio-urcalls.png";
import imgN from "../assets/imgs/portfolio-nexalifecare.png";
import imgS from "../assets/imgs/portfolio-shareworkflow.png";
import icon1 from "../assets/imgs/icon-1.png";
import icon2 from "../assets/imgs/icon-2.png";
import icon3 from "../assets/imgs/icon-3.png";
import icon4 from "../assets/imgs/icon-4.png";
import icon5 from "../assets/imgs/icon-5.png";
import icon9 from "../assets/imgs/icon-9.png";
import icon10 from "../assets/imgs/icon-10.png";
import icon11 from "../assets/imgs/icon-11.png";
import icon12 from "../assets/imgs/icon-12.png";

const whyChooseKlordData = [
	{
		header: "Tailored Solutions",
		des: "We create software built specifically for your industry, not generic systems.",
		image: solutions,
	},
	{
		header: "Built-In Compliance",
		des: "Our platforms meet HIPAA, FOIA, and other industry standards.",
		image: security,
	},
	{
		header: "Scalable & Secure",
		des: "From startup to enterprise, our products grow with you",
		image: scalable,
	},
	{
		header: "Scalable from Day One",
		des: "Whether you're 5 users or 50,000, our platforms grow with you.",
		image: secure,
	},
];

const portfolioData = [
	{
		id: 1,
		name: "UrCalls",
		header: "Transforming Team Collaboration Across Industries",
		img: imgI,
		overview:
			"UrCalls is a high-performance video conferencing solution that addresses the needs of SMEs, enterprises, telehealth providers, and more. It offers HD video andaudio quality, real-time screen sharing, and cross-platform livestreaming for seamless collaboration and communication.",
		challenge:
			"Many teams face high costs and limited features in video calls—slowing down productivity, especially in telehealth and remote collaboration.",
		solution:
			"Many teams face high costs and limited features in video calls—slowing down productivity, especially in telehealth and remote collaboration.",
		keyFeatures: [
			{
				icon: icon1,
				title: "Competitive Pricing",
				desc: "Affordable plans for startups with scalable features for larger teams.",
			},
			{
				icon: icon2,
				title: "HD Audio & Video",
				desc: "Crystal-clear sound and high-definition visuals.",
			},
			{
				icon: icon3,
				title: "Real-Time Collaboration Tools",
				desc: "Screen sharing, whiteboarding, and in-session chat.",
			},
			{
				icon: icon4,
				title: "Webinars & Events",
				desc: "Host large events with full presenter controls.",
			},
			{
				icon: icon5,
				title: "Cross-Platform Livestreaming",
				desc: "Simultaneously stream to platforms like YouTube and Facebook.",
			},
		],
		impact: [
			"Reduced <b>meeting cancellations by 40%</b> due to reliable connectivity",
			"<b>30% time savings</b> for clients with built-in productivity tools.",
		],
		results:
			"Clients report significant improvements in meeting efficiency, and telehealth providers experience smoother patient consultations.",
		url: "https://urcalls.com",
		ctaText: "Explore UrCalls",
	},
	{
		id: 2,
		name: "Nexalife Care",
		header: "Bridging Gaps in Healthcare with Smart Patient Referral",
		img: imgN,
		overview:
			"NexaLife Care is a HIPAA-compliant platform designed to streamline patient referral workflows, connecting underserved populations to healthcare providers and social benefits. It’s ideal for clinics, NGOs, and public health organizations.",
		challenge:
			"Many healthcare providers struggle with reaching underserved communities and efficiently managing patient referrals, intake, and follow-ups.",
		solution:
			"NexaLife Care automates the referral process with real-time scheduling, secure document workflows, and an intuitive interface designed for both patients and healthcare providers.",
		keyFeatures: [
			{
				icon: icon9,
				title: "Automated Referral Workflows",
				desc: "Simplify patient intake, routing, and appointment tracking.",
			},
			{
				icon: icon10,
				title: "Scheduling Engine",
				desc: "Easily book, confirm, and follow up on appointments.",
			},
			{
				icon: icon11,
				title: "HIPAA Compliance",
				desc: "Secure handling of patient data.",
			},
			{
				icon: icon12,
				title: "Affiliate Advocacy",
				desc: "Extensive network of patient advocates for broader outreach.",
			},
		],
		impact: [
			"<b>25% increase in patient intake</b> due to expanded referral networks.",
			"<b>30% reduction in administrative overhead</b>, allowing staff to focus on patient care.",
		],
		results:
			"Clients experience improved patient engagement and increased operational efficiency with streamlined workflows and better tracking.",
		url: "https://nexalifecare.com",
		ctaText: "See NexaLife Care in Action",
	},
	{
		id: 3,
		name: "Sharework Flow",
		header: "Simplifying Operations for Growing Businesses",
		img: imgS,
		overview:
			"Sharework Flow is a modular ERP system designed for growing businesses. With its intuitive design, no-fluff features, and easy-to-implement modules, it helps SMEs and agencies streamline business operations and scale efficiently.",
		challenge:
			"Many businesses struggle with complex and expensive ERP solutions, leading to poor adoption and ineffective workflows.",
		solution:
			"Sharework Flow provides a flexible, scalable solution that simplifies everything from HR management to accounting, allowing businesses to adopt the features they need without unnecessary complexity.",
		keyFeatures: [
			{
				icon: icon1,
				title: "Simple Workflows",
				desc: "Clear, straightforward processes that improve user adoption.",
			},
			{
				icon: icon2,
				title: "Customizable Modules",
				desc: "Choose from HR, CRM, inventory management, and more.",
			},
			{
				icon: icon3,
				title: "Human Resources & Payroll",
				desc: "Easily manage employee data, attendance, and payroll.",
			},
			{
				icon: icon4,
				title: "Project & Task Management",
				desc: "Use Kanban boards and Gantt charts to stay organized.",
			},
			{
				icon: icon5,
				title: "Inventory & Procurement",
				desc: "Track vendors, orders, and stock levels.",
			},
		],
		impact: [
			"20% reduction in administrative workload due to streamlined processes.",
			"40% decrease in operational costs with simplified workflows.",
		],
		results:
			"Sharework Flow has helped businesses cut costs and improve operational efficiency, allowing them to focus on growth.",
        ctaText: "Request a Consultation",
        url: "/get-started"
	},
];

export { whyChooseKlordData, portfolioData };
