import Seo from "../../common/seo";
import bgSrc from "../../assets/imgs/custom-software-bg.png";
import HeroComp from "../../common/hero-comp";
import ChallengeSolutions from "../../components/solutions/challenge-solutions";

const c_s_data = {
	header: "Our Problem–Solution Approach",
	challenges: {
		paragraph:
			"Outgrowing off-the-shelf software is inevitable. Your business deserves more than cookie-cutter platforms and bloated features. You need systems that flex with your operations, reflect your unique processes, and scale effortlessly as you grow.",
	},
	solutions: {
		paragraph:
			"At K-Lord Technologies, we create bespoke software platforms built from the ground up: solutions that streamline internal operations, elevate customer engagement, and evolve with your business goals. From ideation to execution, we’re with you at every step.",
	},
};

const CustomSoftwareDevelopment = () => {
	return (
		<>
			<Seo
				title='Custom Software Development for Scalable, Tailored Solutions | K-Lord Technologies '
				description='Leverage K-Lord Technologies’ custom software development services to build secure, scalable, and industry-specific solutions. Tailored to meet your business needs, our solutions ensure efficiency and sustainable growth'
				content=''
			/>
			<HeroComp
				headerWidth='max-w-[1192px] w-full'
				header='Custom Software Solutions Built Around Your Business'
				paragraphWidth='max-w-[773px] w-full'
				paragraph='At K-Lord Technologies, we design and engineer software that matches your workflows—not the other way around. From powerful backend systems to sleek, intuitive interfaces, our custom software solutions drive efficiency, innovation, and competitive advantage.'
				bgSrc={bgSrc}
				ctaTextI='Start Your Project Today'
				ctaTextII='See Our Work'
			/>
			<ChallengeSolutions
				challenges={c_s_data.challenges}
				header={c_s_data.header}
				solutions={c_s_data.solutions}
			/>
		</>
	);
};
export default CustomSoftwareDevelopment;
