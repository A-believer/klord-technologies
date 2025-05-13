import Lottie from "lottie-react";
import homeHero from "../../assets/lottiefiles/home-hero.lottie.json";
import homeHeroMobile from "../../assets/lottiefiles/home-hero-mobile.lottie.json";
import { Link } from "react-router";

const Hero = () => {
	return (
		<div className='max-w-[1440px] h-full w-[90%] mx-auto relative pt-16 max-h-fit'>
			<Lottie
				animationData={homeHero}
				loop={true}
				className='aspect-video max-h-[560px] mx-auto md:flex hidden'
			/>
			<Lottie
				animationData={homeHeroMobile}
				loop={true}
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
					className='text-[#01588E] hover:text-white border border-[#01588E] bg-white hover:bg-[#01588E] py-2.5 px-[30px] md:w-fit w-full rounded-[55px] text-base/6 font-medium cursor-pointer text-center  shadow-lg shadow-gray-400 h-fit hover:translate-1 transition-all duration-500'>
					View Products
				</Link>
			</div>
		</div>
	);
};
export default Hero;
