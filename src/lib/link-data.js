import health from "../assets/svgs/health.svg";
import briefcase from "../assets/svgs/briefcase.svg";
import call from "../assets/svgs/call.svg";
import gridView from "../assets/svgs/grid-view.svg";
import workHistory from "../assets/svgs/work-history.svg";
import phone from "../assets/svgs/phone.svg";
import email from "../assets/svgs/email.svg";
import location from "../assets/svgs/location.svg";

const navlinks = [
	{
		title: "Home",
		path: "/",
	},
	{
		title: "Products",
		path: "/products",
		dropdownMenu: [
			{
				title: "UrCalls",
				des: "Professional Video Conferencing for Modern Teams",
				path: "/products#urcalls",
				icon: call,
			},
			{
				title: "NexaLife Care",
				des: "Smart Healthcare Referral & Clinic Management",
				path: "/products#nexacare",
				icon: health,
			},
			{
				title: "Sharework Flow",
				des: "Modular ERP for Agile, Growing Businesses",
				path: "/products#sharework_flow",
				icon: briefcase,
			},
		],
	},
	{
		title: "Solutions",
		path: "/solutions",
		dropdownMenu: [
			{
				title: "Healthcare",
				path: "/healthcare-software",
				icon: health,
			},
			{
				title: "Enterprise",
				path: "/enterprise-software",
				icon: briefcase,
			},
			{
				title: "Public Sector",
				path: "/public-software-technology",
				icon: workHistory,
			},
			{
				title: "Custom Software Solutions",
				path: "/custom-software-development",
				icon: gridView,
			},
		],
	},
	{
		title: "Portfolio",
		path: "/portfolio",
	},
	{
		title: "Resources",
		path: "/resources",
	},
	{
		title: "About",
		path: "/about",
	},
];

const footerlinks = {
	quicklinks: [
		{ name: "Home", path: "/" },
		{
			name: "Products",
			dropdownMenu: [
				{
					title: "UrCalls",
					des: "Professional Video Conferencing for Modern Teams",
					path: "/products#urcalls",
					icon: call,
				},
				{
					title: "NexaLife Care",
					des: "Smart Healthcare Referral & Clinic Management",
					path: "/products#nexacare",
					icon: health,
				},
				{
					title: "Sharework Flow",
					des: "Modular ERP for Agile, Growing Businesses",
					path: "/products#sharework_flow",
					icon: briefcase,
				},
			],
		},
		{
			name: "Solutions",
			dropdownMenu: [
				{
					title: "Healthcare",
					path: "/healthcare-software",
					icon: health,
				},
				{
					title: "Enterprise",
					path: "/enterprise-software",
					icon: briefcase,
				},
				{
					title: "Public Sector",
					path: "/public-software-technology",
					icon: workHistory,
				},
				{
					title: "Custom Software Solutions",
					path: "/custom-software-development",
					icon: gridView,
				},
			],
		},
		{ name: "About", path: "/about" },
		{ name: "Contact", path: "/contact" },
		{ name: "FAQ", path: "/faqs" },
	],
	socials: [
		{ name: "LinkedIn", path: "" },
		{ name: "Facebook", path: "" },
		{ name: "Instagram", path: "" },
	],
	legal: [
		{ name: "Privacy Policy", path: "/privacy-policy" },
		{ name: "Term of Service", path: "/terms-of-service" },
	],
};

const contactData = [
	{ icon: phone, name: "PHONE", data: "443-590-9921" },
	{ icon: email, name: "EMAIL", data: "info@klordtechnologies.com" },
	{
		icon: location,
		name: "ADDRESS",
		data: "403 W. Pennsylvania Ave. Towson, MD. 21204",
	},
];

export { navlinks, footerlinks, contactData };
