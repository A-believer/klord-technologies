import HeroComp from "../../common/hero-comp";
import Seo from "../../common/seo";
import bgSrc from "../../assets/imgs/healthcare-software-bg.png";
import CardSwitch from "../../common/card-switch";
import { addressSectionData } from "../../lib/solution-data";
import Solutions from "../../components/solutions/healthcare-software/solutions";

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
		</>
	);
};
export default HealthcareSoftware;
