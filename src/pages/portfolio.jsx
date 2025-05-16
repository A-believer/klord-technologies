import HeroComp from "../common/hero-comp";
import Seo from "../common/seo";
import bgSrc from "../assets/imgs/portfolio-bg.png";
import PortfolioView from "../components/porfolio/portfolio-view";
import StandOut from "../common/stand-out";
import { whyChooseKlordData } from "../lib/portfolio-data";
import PortfolioCTA from "../components/porfolio/portfolio-cta";

const Portfolio = () => {
	return (
		<>
			<Seo
				title='K-Lord Technologies Portfolio | Digital Solutions for Video Conferencing, Healthcare, ERP, and More'
				description="Discover K-Lord Technologies' innovative solutions in video conferencing, patient referral software, and modular ERP systems. Our portfolio includes UrCalls, NexaLife Care, and Sharework Flow, helping businesses and healthcare providers scale efficiently."
				content=''
			/>
			<HeroComp
				headerWidth='max-w-[1123px] w-full'
				header='Real-World Solutions for Businesses, Healthcare, and Public Institutions'
				paragraphWidth='max-w-[885px] w-full'
				paragraph='K-Lord Technologies designs and implements innovative digital solutions that make a real difference. Our portfolio spans video conferencing, patient referral systems, and agile ERP solutions—each tailored to the unique challenges of our clients. Here’s how we’ve helped organizations drive growth, enhance service delivery, and achieve impactful results.'
				bgSrc={bgSrc}
			/>
			<PortfolioView />
			<StandOut
				data={whyChooseKlordData}
				desc={
					<p className='text-lg/8 font-medium font-inter max-w-[922px]'>
						At K-Lord Technologies, we don’t just deliver software—we build
						solutions that help organizations thrive. Our products are designed
						to{" "}
						<b className='text-[#FF5F0F]'>
							scale with your business, improve efficiency
						</b>
						, and <b className='text-[#FF5F0F]'>ensure regulatory compliance</b>
						.
					</p>
				}
			/>
			<PortfolioCTA/>
		</>
	);
};
export default Portfolio;
