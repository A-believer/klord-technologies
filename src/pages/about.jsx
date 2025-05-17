import CardSwitch from "../common/card-switch";
import Seo from "../common/seo";
import AboutUs from "../components/about/about-us";
import Hero from "../components/about/hero";
import OurApproach from "../components/about/our-approach";
import OurTeam from "../components/about/our-team";
import OurVision from "../components/about/our-vision";
import { sectionI, sectionII, sectionIII } from "../lib/about-data";

const About = () => {
	return (
		<>
			<Seo
				title='About K-Lord Technologies | Digital Transformation Solutions for Healthcare, Public 
Sector, SMEs, and Enterprises'
				description='Discover K-Lord Technologies, a leader in innovative software solutions for 
healthcare, the public sector, SMEs, and enterprises. We specialize in scalable, secure, and 
compliant platforms that drive operational efficiency and growth.'
				content=''
			/>
			<Hero />
			<AboutUs />
			<CardSwitch data={sectionI} header={"Key Industries We Serve"} />
			<OurApproach />
			<CardSwitch data={sectionII} header={"Why Choose K-Lord Technologies?"} />
			<OurVision />
			<CardSwitch data={sectionIII} header={"Our Values"} />
			<OurTeam />
		</>
	);
};
export default About;
