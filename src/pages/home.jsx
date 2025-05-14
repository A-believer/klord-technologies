import Seo from "../common/seo";
import Hero from "../components/home/hero";
import Metrics from "../components/home/metrics";
import StandOut from "../components/home/stand-out";
import WhatWeBuild from "../components/home/what-we-build";
import ronald from "../assets/imgs/ronald.png";
import darrell from "../assets/imgs/darrell.png";
import jacob from "../assets/imgs/jacob.png";
import bessie from "../assets/imgs/bessie.png";
import jane from "../assets/imgs/jane.png";
import Testimonials from "../components/home/testimonials";
import Experience from "../components/home/experience";
import Newsletter from "../components/home/newsletter";

const testimonials = [
	{
		name: "Ronald Richards",
		position: "Director, Mayhind Clinic",
		quote:
			"NexaLife Care transformed how we manage patient referrals. Fast, compliant, and easy to use.",
		image: ronald,
	},
	{
		name: "Darrell Steward",
		position: "COO, HealthTech Inc.",
		quote:
			"UrCalls streamlined our telehealth services and improved our patient engagement overnight.",
		image: darrell,
	},
	{
		name: "Jacob Jones",
		position: "Head of IT, EduConnect Solutions",
		quote:
			"We needed a secure video platform that felt like ours—UrCalls gave us full control and seamless integration.",
		image: jacob,
	},
	{
		name: "Bessie Samuel",
		position: "Operations Lead, GracePoint Community Health",
		quote:
			"With NexaLife Care, we finally have a referral and scheduling workflow that works for both our team and our patients.",
		image: bessie,
	},
	{
		name: "Jane Cooper",
		position: "Director, Mayhind Clinic",
		quote:
			"NexaLife Care transformed how we manage patient referrals. Fast, compliant, and easy to use.",
		image: jane,
	},
];

const Home = () => {
	return (
		<>
			<Seo
				title='K-Lord Technologies | Digital Transformation for Healthcare, SMEs & Public Sector'
				description='K-Lord Technologies builds scalable, secure, and compliant software for healthcare, small businesses, enterprises, and public institutions. Power your operations with tailored digital solutions built to drive impact.'
				content=''
			/>
			<Hero />
			<Metrics />
			<WhatWeBuild />
			<StandOut />
			<Testimonials testimonials={testimonials} />
			<Experience />
			<Newsletter />
		</>
	);
};
export default Home;
