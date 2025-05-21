import Seo from "../common/seo";
import Hero from "../components/career/hero";
import Newsletter from "../components/career/newsletter";
import Positions from "../components/career/positions";
import Values from "../components/career/values";

const jobData = [
	{
		title: "Frontend Engineer (React / Next.js)",
		location: "Remote",
		employmentType: "Full-Time",
		department: "Product Engineering + Web Development",
		aboutRole:
			"We're looking for a Frontend Engineer with expertise in React and Next.js to help build high-performance, responsive interfaces across applications and platforms. You'll collaborate with UI/UX designers and backend engineers to translate clean design into functional web experiences used in healthcare, enterprise, and public infrastructure.",
		responsibilities: [
			"Build and maintain frontend components using React, Next.js, and Tailwind CSS",
			"Translate Figma or wireframes into clean, semantic, and accessible code",
			"Optimize interfaces for performance, responsiveness, and cross-browser compatibility",
			"Integrate with APIs and backend services",
			"Collaborate in agile sprints alongside product managers and QA",
			"Maintain accessibility (WCAG 2.1 / Section 508) and security best practices",
		],
		requirements: [
			"3+ years of frontend experience with React, Next.js, and modern JavaScript/TypeScript",
			"Strong HTML5, CSS3 (Tailwind/SCSS), and responsive design skills",
			"Familiarity with REST APIs, CI/CD, and Git workflows",
			"Attention to detail and passion for clean, testable code",
			"Experience in regulated industries (HIPAA, etc.) is a plus",
		],
	},
	{
		title: "Backend Developer (Node.js / Python) + DevOps",
		location: "Remote",
		employmentType: "Full-Time",
		department: "Product Engineering",
		aboutRole:
			"K-Lord Technologies is hiring a skilled Backend Developer with strong DevOps experience to help build and scale secure, high-performance platforms in healthcare, enterprise, and the public sector.",
		responsibilities: [
			"Develop and maintain backend services using Node.js, Python, and modern frameworks",
			"Architect scalable APIs and microservices for SaaS and custom enterprise applications",
			"Design and optimize databases (PostgreSQL, MongoDB, Redis, etc.)",
			"Implement and maintain CI/CD pipelines, cloud infrastructure (AWS/GCP), and container orchestration (Docker, Kubernetes)",
			"Integrate with third-party tools and services",
			"Ensure application security, HIPAA-compliance, and data protection best practices",
		],
		requirements: [
			"3+ years experience in backend development using Node.js and/or Python",
			"Experience with Docker, Kubernetes, cloud platforms (AWS/GCP), and CI/CD tools",
			"Strong understanding of REST APIs, database architecture, and DevOps pipelines",
			"Familiarity with data security, authentication, and HIPAA/GDPR standards",
			"Strong communication and problem-solving skills",
		],
	},
	{
		title: "QA Automation Engineer",
		location: "Remote",
		employmentType: "Contract",
		department: "Quality Assurance",
		aboutRole:
			"As our QA Automation Engineer, you'll design and manage automated test pipelines for K-Lord's HIPAA-compliant platforms. Your work ensures the safety, performance, and reliability of systems used in healthcare delivery and public programs.",
		responsibilities: [
			"Design, develop, and execute automated test suites (e.g., Cypress, Selenium, Playwright)",
			"Define QA standards for enterprise software, including edge case testing",
			"Integrate testing into CI/CD pipelines for early bug detection",
			"Maintain compliance-ready logs and documentation for regulated platforms",
			"Work with developers to triage and resolve issues early in the sprint cycle",
		],
		requirements: [
			"2+ years of experience in test automation",
			"Hands-on with tools like Cypress, Selenium, or Playwright",
			"Comfortable with writing scripts in JavaScript, Python, or similar",
			"Understanding of Agile testing practices and API testing (Postman, REST-assured)",
			"Bonus: Experience with HIPAA-regulated environments or accessibility testing",
		],
	},
	{
		title: "UI/UX Designer",
		location: "Remote",
		employmentType: "Full-Time",
		department: "Product Design",
		aboutRole:
			"K-Lord Technologies is seeking a creative and strategic UI/UX Designer to lead interface design for high-impact applications across healthcare and public services. You'll turn complex workflows into elegant user experiences that meet accessibility and compliance standards.",
		responsibilities: [
			"Conduct user research and gather stakeholder feedback",
			"Design wireframes, mockups, and prototypes (Figma/Adobe XD)",
			"Create and maintain design systems that scale across applications",
			"Ensure accessibility (WCAG 2.1, Section 508) is baked into every component",
			"Collaborate with frontend engineers to implement pixel-perfect designs",
		],
		requirements: [
			"3+ years of experience in UI/UX for SaaS, enterprise, or government applications",
			"Strong portfolio showcasing responsive web interfaces",
			"Proficiency in Figma and design tools (Illustrator, Photoshop)",
			"Basic understanding of HTML/CSS is a plus",
			"Familiarity with user-centered design, design thinking, and usability testing",
		],
	},
	{
		title: "Business Analyst (Healthcare & Public Sector)",
		location: "Remote",
		employmentType: "Full-Time",
		department: "Product Strategy",
		aboutRole:
			"We're hiring a Business Analyst to drive requirements gathering, user workflow design, and documentation across digital transformation projects in healthcare and public sector settings. You'll bridge the gap between clients, users, and our dev team.",
		responsibilities: [
			"Collaborate with healthcare and public institutions to identify challenges and translate needs into product requirements",
			"Document workflows, use cases, and specs for developers and designers",
			"Conduct stakeholder interviews and support solution discovery",
			"Assist in compliance mapping (HIPAA, COMAR, FISMA, etc.)",
			"Support user acceptance testing and feature validation",
		],
		requirements: [
			"2+ years in business analysis or product strategy",
			"Experience working in healthcare systems, clinics, NGOs, or government agencies",
			"Familiarity with agile documentation (epics, user stories, BRDs)",
			"Excellent communication, presentation, and stakeholder engagement skills",
			"Bonus: Understanding of healthcare workflows and referral systems",
		],
	},
];

const Career = () => {
	return (
		<>
			<Seo
				title='Enterprise Software Solutions for Scalable, Secure Operations | K-Lord Technologies '
				description='Build secure, cloud-native enterprise software with K-Lord Technologies. From ERP systems to  intelligent automation, we help modern organizations scale faster, streamline operations, and unlock efficiency.'
				content=''
			/>
			<Hero />
			<Values/>
			<Positions />
			<Newsletter />
		</>
	);
};
export default Career;
