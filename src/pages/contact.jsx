import HeroComp from "../common/hero-comp";
import Seo from "../common/seo";
import bgSrc from "../assets/imgs/contact-bg.png";
import ReachOut from "../components/contact/reach-out";
import Cta from "../components/contact/cta";
import { Link } from "react-router";
import CardSwitch from "../common/card-switch";
import imgI from "../assets/imgs/contact-custom.png";
import imgII from "../assets/imgs/contact-scalable.png";
import imgIII from "../assets/imgs/contact-expert.png";
import imgIV from "../assets/imgs/contact-security.png";

const cardData = [
	{
		id: 1,
		title: "Custom Solutions",
		desc: "We create tailor-made software that suits your specific operational needs.",
		image: imgI,
	},
	{
		id: 2,
		title: "Compliance-Focused",
		desc: "Our solutions adhere to the highest industry standards, including HIPAA, SOC 2, GDPR, and more.",
		image: imgII,
	},
	{
		id: 3,
		title: "Security at the Core",
		desc: "Data protection and user privacy are our top priorities, integrated into every stage of the development process.",
		image: imgIII,
	},
	{
		id: 4,
		title: "Scalable & Future-Ready",
		desc: "Our products are designed to grow with your organization, ensuring lasting impact.",
		image: imgIV,
	},
	{
		id: 5,
		title: "Industry Expertise",
		desc: "We understand the unique challenges of healthcare, public sector, and enterprise markets, bringing valuable insights to every project .",
		image: imgII,
	},
];

const Contact = () => {
	return (
		<>
			<Seo
				title='Contact K-Lord Technologies | Digital Transformation Solutions for Healthcare, SMEs, and Enterprises'
				description='Get in touch with K-Lord Technologies for innovative digital solutions. Contact us today for consultations, demos, and more information on our platforms for healthcare, SMEs, public sector, and enterprise clients. '
				content=''
			/>
			<HeroComp
				headerWidth='max-w-[1000px] w-full'
				header='Contact K-Lord Technologies'
				paragraphWidth='max-w-[773px] w-full'
				paragraph='Contact us now to learn more about how K-Lord Technologies can help transform your operations with innovative digital solutions. We deliver scalable, secure, and future-ready platforms tailored to your needs. '
				bgSrc={bgSrc}
			/>
			<ReachOut />
			<CardSwitch header={"Why Choose K-Lord Technologies?"} data={cardData} />
			<Cta />
			<div className='my-10 text-center text-xl/normal font-semibold font-inter contain space-y-2 text-[#667085]'>
				<h4 className='font-sora text-3xl/10 text-[#0f0f0f]'>
					Have questions?
				</h4>
				Check out our{" "}
				<Link to={"/faqs"} className='text-[#F95607] underline font-bold'>
					FAQ{" "}
				</Link>
				page for answers to some frequently asked questions.
			</div>
		</>
	);
};

export default Contact;
