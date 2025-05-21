import Seo from "../../common/seo";
import Hero from "../../components/career/hero";
import Newsletter from "../../components/career/newsletter";
import Positions from "../../components/career/positions";
import Values from "../../components/career/values";
import { jobData } from "../../lib/job-data";

const Career = () => {
	return (
		<>
			<Seo
				title='Careers at K-Lord Technologies | Join Our Healthcare, Enterprise & GovTech Software Team'
				description='Explore remote and hybrid job opportunities at K-Lord Technologies. We’re hiring developers, analysts,  designers, and other engineers to build impactful, scalable digital solutions for healthcare, public sector, and enterprise clients.'
				content=''
			/>
			<Hero />
			<Values />
			<Positions jobData={jobData} />
			<Newsletter />
		</>
	);
};
export default Career;
