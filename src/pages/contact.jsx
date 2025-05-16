import HeroComp from "../common/hero-comp";
import Seo from "../common/seo";
import bgSrc from "../assets/imgs/contact-bg.png";
import ReachOut from "../components/contact/reach-out";
import Cta from "../components/contact/cta";
import { Link } from "react-router";

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
			<Cta />
			<div className='my-10 text-center text-xl/normal font-semibold font-inter contain space-y-2 text-[#667085]'>
				<h4 className='font-sora text-3xl/10 text-[#0f0f0f]'>Have questions?</h4>
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
