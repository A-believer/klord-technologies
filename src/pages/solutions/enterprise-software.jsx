import HeroComp from "../../common/hero-comp";
import Seo from "../../common/seo";
import bgSrc from "../../assets/imgs/enterprise-software-bg.png";
import ChallengeSolutions from "../../components/solutions/challenge-solutions";

const c_s_data = {
	header: "The Challenge vs. The K-Lord Solution",
	challenges: {
		paragraph:
			"Disjointed systems, manual processes, and disconnected data create friction at scale. Off-the-shelf software often leads to workarounds, inefficiencies, and limited visibility.",
		list: [
			"Data silos block cross-department collaboration",
			"Manual data entry leads to errors and delays",
			"Generic software requires excessive workarounds",
		],
	},
	solutions: {
		paragraph:
			"K-Lord Technologies builds unified enterprise systems designed around your goals. From strategy to deployment, our software connects your departments, automates core processes, and lays the foundation for smarter decisions and sustainable growth.",
		list: [
			"Single source of truth across all departments",
			"Automated workflows eliminate repetitive tasks",
			"Customized platforms that fit your exact needs",
		],
	},
};

const EnterpriseSoftware = () => {
	return (
		<>
			<Seo
				title='Enterprise Software Solutions for Scalable, Secure Operations | K-Lord Technologies '
				description='Build secure, cloud-native enterprise software with K-Lord Technologies. From ERP systems to  intelligent automation, we help modern organizations scale faster, streamline operations, and unlock efficiency.'
				content=''
			/>
			<HeroComp
				headerWidth='max-w-[899px] w-full'
				header='Software That Powers Growth and Scale'
				paragraphWidth='max-w-[773px] w-full'
				paragraph='At K-Lord Technologies, we design robust enterprise software built to handle complexity, automate workflows, and fuel sustainable growth. From ERP platforms to custom data systems, our solutions help you eliminate bottlenecks and lead with confidence.'
				bgSrc={bgSrc}
				ctaTextI='Transform Your Operations'
				ctaTextII='Explore Our Work'
			/>
			
			<ChallengeSolutions
				challenges={c_s_data.challenges}
				header={c_s_data.header}
				solutions={c_s_data.solutions}
			/>
		</>
	);
};
export default EnterpriseSoftware;
