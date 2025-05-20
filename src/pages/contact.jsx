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
        title: "Custom-Fit Platforms",
        desc: "We design software around your goals and workflows, ensuring an intuitive experience for your users.",
        image: imgI,
    },
    {
        id: 2,
        title: "Compliance at Every Step",
        desc: "HIPAA, SOC 2, GDPR, and more; compliance is integrated in every stage of our development process, so you can operate with confidence.",
        image: imgII,
    },
    {
        id: 3,
        title: "Security Is a Priority",
        desc: "Strong encryption, role-based access, and infrastructure safeguards protect your data at all times.",
        image: imgIII,
    },
    {
        id: 4,
        title: "Built to Scale and Adapt",
        desc: "Our modular designs allow you to add features, users, and integrations smoothly as your organization grows.",
        image: imgIV,
    },
    {
        id: 5,
        title: "Experienced Industry Partner",
        desc: "With deep expertise in healthcare, public sector, and enterprise software, we deliver practical solutions you can rely on.",
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
