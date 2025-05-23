import check from "../../assets/svgs/check.svg";
import checkOrange from "../../assets/svgs/check-orange.svg";

const ChallengeSolutions = ({ header, challenges, solutions }) => {
	return (
		<section className='contain md:space-y-16 space-y-10 md:py-16 py-10 text-[#F5F7F9]/[0.8] font-inter text-[15px]/[25px] tracking-[-0.45px] font-medium'>
			<h2 className='text-[#0F0F0F] font-sora font-semibold lg:tracking-[-2.4px] tracking-[-1px] lg:text-5xl/[64px] text-[32px]/[44px] md:text-center text-left'>
				{header}
			</h2>

			<div className='flex lg:flex-row flex-col justify-center gap-[22px]'>
				{/* Challenges */}
				<div className='max-w-[612px] w-full bg-[#1C1C1C] rounded-[26px] space-y-5 p-8'>
					<h5 className='text-[#F5F7F9] text-[27px]/[37.25px] font-semibold tracking-[-1.04px]'>
						The Challenge
					</h5>
					<p>{challenges.paragraph}</p>
					{challenges.list &&
						challenges.list.map((item, idx) => (
							<p className='flex item-start gap-x-[10px]' key={idx}>
								<img
									loading='lazy'
									src={check}
									alt='check icon'
									className='h-[18px] w-[18px] lg:mt-o mt-1.5'
								/>
								{item}
							</p>
						))}
				</div>

				{/* Solution */}
				<div className='max-w-[612px] w-full bg-[#FF5F0F] rounded-[26px] space-y-5 p-8'>
					<h5 className='text-[#F5F7F9] text-[27px]/[37.25px] font-semibold tracking-[-1.04px]'>
						The Solution
					</h5>
					<p>{solutions.paragraph}</p>
					{solutions.list &&
						challenges.list.map((item, idx) => (
							<p className='flex item-start gap-x-[10px]' key={idx}>
								<img
									loading='lazy'
									src={checkOrange}
									alt='check icon'
									className='h-[18px] w-[18px] lg:mt-o mt-1.5'
								/>
								{item}
							</p>
						))}
				</div>
			</div>
		</section>
	);
};
export default ChallengeSolutions;
