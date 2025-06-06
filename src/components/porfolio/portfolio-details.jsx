import { Link } from "react-router";
import Card from "../../common/card";

const PortfolioDetails = ({ portfolio }) => {
	return (
		<div className='space-y-10 text-xl/[38.2px] font-inter font-medium tracking-[-0.18px] text-black/80'>
			<h3 className='text-primary lg:text-5xl/[64px] text-[32px]/[42px] tracking-[-2.4px] font-semibold text-center font-inter'>
				{portfolio?.header}
			</h3>
			<img
				loading='lazy'
				src={portfolio?.img}
				alt=''
				className='rounded-[18px] mx-auto w-full'
			/>
			<div>
				<h4 className='md:text-4xl/[64px] text-[28px]/normal font-sora tracking-[-0.6px] font-semibold mb-1 text-primary'>
					Overview
				</h4>
				<h4>{portfolio?.overview}</h4>
			</div>
			<div className='grid lg:grid-cols-2 grid-cols-1 gap-x-8'>
				<div className='bg-[#1C1C1C] rounded-[26px] text-[#F5F7F9]/60 py-8 pl-8 pr-12'>
					<h4 className='md:text-4xl/[64px] text-[28px]/normal font-sora tracking-[-0.6px] font-semibold mb-1 text-[#F5F7F9]'>
						Challenge
					</h4>
					<p>{portfolio?.challenge}</p>
				</div>
				<div className="bg-[#FF5F0F] rounded-[26px] text-[#F5F7F9]/60 py-8 pl-8 pr-12">
					<h4 className='md:text-4xl/[64px] text-[28px]/normal font-sora tracking-[-0.6px] font-semibold mb-1 text-[#F5F7F9]'>
						Solution
					</h4>
					<p>{portfolio?.solution}</p>
				</div>
			</div>

			<div className='space-y-5'>
				<h4 className='md:text-4xl/[64px] text-[28px]/normal font-sora tracking-[-0.6px] font-semibold mb-4'>
					Key Features
				</h4>
				<div
					className={`flex w-full flex-wrap justify-center  ${
						portfolio.name === "NexaLife Care"
							? "lg:[&>*]:w-[23%] sm:[&>*]:w-[48%] [&>*]:w-full gap-x-8 lg:gap-y-16 gap-y-8"
							: "xl:[&>*]:w-[31.6%] lg:[&>*]:w-[30.92%] sm:[&>*]:w-[47.5%] [&>*]:w-full gap-x-8 lg:gap-y-16 gap-y-8"
					}`}>
					{portfolio?.keyFeatures.map((card, idx) => (
						<Card key={idx} content={card} />
					))}
				</div>
			</div>

			<div>
				<h4 className='md:text-4xl/[64px] text-[28px]/normal font-sora tracking-[-0.6px] font-semibold mb-1 text-primary'>
					Impact
				</h4>
				<ul className='list-disc md:ml-8 ml-5 text-secondary'>
					{portfolio?.impact.map((item, idx) => (
						<li key={idx}>
							<p dangerouslySetInnerHTML={{ __html: item }} />
						</li>
					))}
				</ul>
			</div>
			<div>
				<h4 className='md:text-4xl/[64px] text-[28px]/normal font-sora tracking-[-0.6px] font-semibold mb-1 text-primary'>
					Results
				</h4>
				<p className="text-secondary">{portfolio?.results}</p>
			</div>
			<div className='flex lg:flex-row flex-col gap-5 w-full'>
				<Link
					to={portfolio?.url}
					className='bg-[#01588E] py-2.5 lg:w-fit w-full px-[30px] rounded-[40px] shadow-[0px_1.344px_0.537px_-0.625px_rgba(0,0,0,0.09),0px_3.185px_1.274px_-1.25px_rgba(0,0,0,0.09),0px_5.809px_2.324px_-1.875px_rgba(0,0,0,0.08),0px_9.658px_3.863px_-2.5px_rgba(0,0,0,0.08),0px_15.597px_6.239px_-3.125px_rgba(0,0,0,0.07),0px_25.531px_10.212px_-3.75px_rgba(0,0,0,0.06),0px_43.962px_17.585px_-4.375px_rgba(0,0,0,0.04)] border border-[#01588E] hover:bg-transparent text-white hover:text-black hover:dark:text-gray-200 text-center transition-all duration-500 text-nowrap'>
					{portfolio?.ctaText}
				</Link>

				{portfolio?.name !== "Sharework Flow" && (
					<Link
						to='/get-started'
						className='bg-transparent py-2.5 lg:w-fit w-full px-[30px] rounded-[40px] border border-[#01588E]  text-primary hover:bg-gray-200 hover:dark:text-gray-800  text-center transition-all duration-500 text-nowrap'>
						Request a Demo
					</Link>
				)}
			</div>
		</div>
	);
};
export default PortfolioDetails;
