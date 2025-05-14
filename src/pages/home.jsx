import Seo from "../common/seo";
import Hero from "../components/home/hero";
import Metrics from "../components/home/metrics";
import StandOut from "../components/home/stand-out";
import WhatWeBuild from "../components/home/what-we-build";

const Home = () => {
	return (
		<>
			<Seo
				title='K-Lord Technologies | Digital Transformation for Healthcare, SMEs & Public Sector'
				description='K-Lord Technologies builds scalable, secure, and compliant software for healthcare, small businesses, enterprises, and public institutions. Power your operations with tailored digital solutions built to drive impact.'
				content=''
			/>
			<Hero />
			<Metrics />
      <WhatWeBuild />
      <StandOut />
		</>
	);
};
export default Home;
