import Seo from "../common/seo";
import Hero from "../components/career/hero";
import Positions from "../components/career/positions";

const Career = () => {
	return (
		<>
			<Seo
				title='Enterprise Software Solutions for Scalable, Secure Operations | K-Lord Technologies '
				description='Build secure, cloud-native enterprise software with K-Lord Technologies. From ERP systems to  intelligent automation, we help modern organizations scale faster, streamline operations, and unlock efficiency.'
				content=''
			/>
            <Hero />
            <Positions/>
		</>
	);
};
export default Career;
