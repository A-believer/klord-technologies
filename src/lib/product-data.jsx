import need from "../assets/imgs/home-need.png";
import results from "../assets/imgs/home-results.png";
import specific from "../assets/imgs/home-specific.png";
import secure from "../assets/imgs/home-secure.png";
import solutions from "../assets/imgs/solutions.png";
import scalable from "../assets/imgs/scalable.png";
import security from "../assets/imgs/security.png";

const products = [
	{
		id: 1,
		name: "UrCalls",
		header: "",
		imgSection: "",
		desc: "",
		cardContent: [],
		highlight: "",
		ctaButton: <></>,
	},
	{
		id: 2,
		name: "NexaLife Care",
		header: "",
		imgSection: "",
		desc: "",
		cardContent: [],
		highlight: "",
		ctaButton: <></>,
	},
	{
		id: 3,
		name: "Sharework Flow",
		header: "",
		imgSection: "",
		desc: "",
		cardContent: [],
		highlight: "",
		ctaButton: <></>,
	},
];

const standOutData = [
	{
		header: "Tailored to Your Needs",
		des: "No one-size-fits-all software",
		image: need,
	},
	{
		header: "Industry-Specific",
		des: "Solutions for healthcare, government, and enterprise",
		image: specific,
	},
	{
		header: "Real Results",
		des: "Boosting workflows, user experience, and ROI",
		image: results,
	},
	{
		header: "Scalable & Secure",
		des: "Built with growth and compliance in mind",
		image: secure,
	},
];

const whyChooseData = [
	{
		header: "Custom-Fit Solutions",
		des: "No bloat, no fluff—just the tools you need.",
		image: solutions,
	},
	{
		header: "Built-In Compliance & Security",
		des: "Especially in healthcare, finance, and enterprise operations.",
		image: security,
	},
	{
		header: "Scalable & Secure",
		des: "Boosting workflows, user experience, and ROI",
		image: scalable,
	},
	{
		header: "Scalable from Day One",
		des: "Whether you're 5 users or 50,000, our platforms grow with you.",
		image: secure,
	},
];

export { products, standOutData, whyChooseData };
