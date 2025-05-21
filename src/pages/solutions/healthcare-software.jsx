import HeroComp from "../../common/hero-comp";
import Seo from "../../common/seo";
import bgSrc from "../../assets/imgs/healthcare-software-bg.png";
import CardSwitch from "../../common/card-switch";
import {
	addressSectionData,
	devProcessData,
	keyFeaturesData,
} from "../../lib/solution-data";
import Solutions from "../../components/solutions/healthcare-software/solutions";
import CardGrey from "../../common/card-grey";
import SlidingCards from "../../common/sliding-cards";
import UseCases from "../../components/solutions/healthcare-software/use-cases";
import Testimonials from "../../components/home/testimonials";
import jolene from "../../assets/imgs/jolene.png";
import ruben from "../../assets/imgs/ruben.png";
import Cta from "../../components/solutions/cta";

const testimonials = [
	{
		name: "Dr. Jolene Smollette",
		position: "Medical Director",
		quote:
			"K-Lord Technologies transformed our patient management with their custom software, enhancing efficiency and compliance.",
		image: jolene,
	},
	{
		name: "Ruben Daniels",
		position: "CEO, HealthFirst Clinic",
		quote:
			"Their telehealth platform allowed us to expand our services and improve patient engagement significantly.",
		image: ruben,
	},
];



const HealthcareSoftware = () => {
	return (
		<>
			<Seo
				title='Custom Healthcare Software Development Services | K-Lord Technologies '
				description="Discover K-Lord Technologies' custom healthcare software solutions, including HIPAA-compliant patient management systems, telehealth platforms, and healthcare workflow automation."
				content=''
			/>
			<HeroComp
				headerWidth='max-w-[899px] w-full'
				header='Innovative Healthcare Software Solutions for Enhanced Patient Care '
				paragraphWidth='max-w-[773px] w-full'
				paragraph='At K-Lord Technologies, we specialize in developing custom healthcare software solutions that streamline operations, ensure compliance, and improve patient outcomes.'
				bgSrc={bgSrc}
				ctaTextI='Request a Consultation'
			/>
			<CardSwitch
				data={addressSectionData}
				header={"Addressing Today's Healthcare Demands"}
				subtext={
					"The healthcare industry faces unique challenges, including stringent regulatory compliance, the need for efficient patient management, and the integration of advanced technologies. Our solutions are designed to address these challenges by providing:"
				}
			/>
			<Solutions />
			<CardGrey
				data={keyFeaturesData}
				header={"Key Features of Our Solutions"}
			/>
			<SlidingCards header={"Our Development Process"} data={devProcessData} />
			<UseCases />
			<Testimonials testimonials={testimonials} />

			<Cta
				header='Ready to Transform Your Healthcare Operations?'
				subheader='Partner with K-Lord Technologies to develop custom healthcare software
					solutions that enhance patient care and streamline your operations.'
				ctaTextI='Contact Us'
				ctaTextII='See Our Work'
			/>
		</>
	);
};
export default HealthcareSoftware;
