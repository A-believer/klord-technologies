import homeHero from "../../assets/imgs/home-hero.gif";
import homeHeroMobile from "../../assets/imgs/home-hero-mobile.gif";
import { Link } from "react-router";

const Hero = () => {
	return (
		<section className='w-full bg-[#fdfdfd]'>
			<div className='max-w-[1440px] h-full w-[86.5%] mx-auto relative pt-16 max-h-fit'>
				<img
					src={homeHero}
					alt=''
					className='aspect-video max-h-[560px] mx-auto md:flex hidden'
				/>
				<img
					src={homeHeroMobile}
					alt=''
					className='aspect-auto mx-auto md:hidden flex'
				/>
				<div className='absolute right-0 left-0 lg:bottom-[85px] md:bottom-14 bottom-20 flex md:flex-row flex-col justify-center w-full gap-5'>
					<Link
						to={"/get-started"}
						className='bg-[#01588E] border border-[#01588E] hover:bg-white text-white hover:text-[#01588E] py-2.5 px-[30px] md:w-fit w-full rounded-[55px] text-base/6 font-medium cursor-pointer text-center h-fit shadow-lg shadow-gray-400  hover:translate-1 transition-all duration-500'>
						Request a Consultation
					</Link>
					<Link
						to={"/products"}
						className='text-[#01588E] hover:text-white border border-[#01588E] bg-white hover:bg-[#01588E] py-2.5 px-[30px] md:w-fit w-full rounded-[55px] text-base/6 font-medium cursor-pointer text-center h-fit hover:translate-1 transition-all duration-500'>
						View Products
					</Link>
				</div>
			</div>
		</section>
	);
};
export default Hero;
