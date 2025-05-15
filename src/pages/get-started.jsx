import Seo from "../common/seo";
import { createContext, useState } from "react";
import GsFormTwo from "../components/get-started/gs-form-two";
import GsFormThree from "../components/get-started/gs-form-three";
import GsFormFour from "../components/get-started/gs-form-four";
import GsFormOne from "../components/get-started/gs-form-one";
import { motion, AnimatePresence } from "framer-motion";
import { levelData } from "../lib/msic-data";
import GetStartedSuccess from "../components/get-started/get-started-success";

const getStartedStructure = {
	first_name: "",
	last_name: "",
	job_title: "",
	email: "",
	phone_number: "",
	company_name: "",
	website_url: "",
	industry: "",
	team_size: "",
	help_needed: "",
	other_help_needed: "",
	project_description: "",
	project_timeline: "",
	estimated_budget: "",
};

export const GetStartedContext = createContext({});

const GetStarted = () => {
	const [data, setData] = useState(getStartedStructure);
	const [currentLevel, setCurrentLevel] = useState(1);
	const [levels, setLevels] = useState(levelData);
	const [direction, setDirection] = useState(1);

	const toggleCurrentLevelCompletion = () => {
		setLevels((prevLevels) => {
			return prevLevels.map((level) => {
				if (level.id === currentLevel) {
					return { ...level, isCompleted: !level.isCompleted };
				}
				return level;
			});
		});
	};

	// Update setCurrentLevel to also set direction
	const handleLevelChange = (newLevel) => {
		setDirection(newLevel > currentLevel ? 1 : -1);
		setCurrentLevel(newLevel);
	};

	// Animation variants
	const variants = {
		enter: (direction) => ({
			x: direction > 0 ? 500 : -500,
			opacity: 0,
		}),
		center: {
			x: 0,
			opacity: 1,
		},
		exit: (direction) => ({
			x: direction > 0 ? -500 : 500,
			opacity: 0,
		}),
	};

	// Animation transition
	const transition = {
		type: "spring",
		stiffness: 300,
		damping: 30,
	};

	return (
		<>
			<Seo
				title='Get Started with K-Lord Technologies | Book a Demo or Request a Consultation'
				description='Connect with K-Lord Technologies to explore custom-built software solutions. Book a live demo, request a consultation, or speak with our team to accelerate your digital transformation in healthcare, enterprise, or government.'
				content=''
			/>
			<GetStartedContext.Provider
				value={{
					data,
					setData,
					currentLevel,
					setCurrentLevel: handleLevelChange,
					levels,
					setLevels,
					toggleCurrentLevelCompletion,
				}}>
				{currentLevel === 5 ? (
					<GetStartedSuccess />
				) : (
					<main className='w-full'>
						<div className='max-w-[1246px] xl:w-full w-[86.5%] mx-auto lg:pt-[106px] pt-10 space-y-[65px] pb-20'>
							<div className='md:flex hidden justify-between gap-4'>
								{levels.map((level, index) => (
									<button
										key={index}
										className={`border-t-[4px] ${
											currentLevel === level.id && "border-[#FFA587]"
										} ${
											level.isCompleted && "border-[#FF5F0F]"
										} border-[#EAECF0] lg:pt-5 pt-3 max-w-1/4 w-full text-base/6 text-left`}>
										<p
											className={`${
												currentLevel === level.id && "text-[#F15533]"
											} text-[#344054] font-sora font-semibold`}>
											{level.title}
										</p>
										<p
											className={`${
												currentLevel === level.id && "text-[#F15533]"
											} text-[#667085] font-inter`}>
											{level.desc}
										</p>
									</button>
								))}
							</div>

							<div className='w-full flex lg:flex-row flex-col lg:justify-between lg:items-start items-center justify-center gap-y-16 xl:gap-x-0 gap-x-20 max-w-[1157px] '>
								<div className='max-w-[457px] w-full font-inter'>
									<h1 className='md:text-5xl/[64px] text-[32px]/10 text- font-semibold tracking-[-2.4px] text-[#0F0F0F]'>
										Let's Get You Started!
									</h1>
									<p className='text-lg/8 tracking-[-0.18px] text-black/80'>
										Bring your vision to life. Share a few quick details so we
										can design the right solution for you.
									</p>
								</div>
								<div className='max-w-[480px] w-full relative overflow-hidden'>
									<AnimatePresence custom={direction} mode='wait'>
										<motion.div
											key={currentLevel}
											custom={direction}
											variants={variants}
											initial='enter'
											animate='center'
											exit='exit'
											transition={transition}
											className='w-full'>
											{currentLevel === 1 && <GsFormOne />}
											{currentLevel === 2 && <GsFormTwo />}
											{currentLevel === 3 && <GsFormThree />}
											{currentLevel === 4 && <GsFormFour />}
										</motion.div>
									</AnimatePresence>
								</div>
							</div>
						</div>
					</main>
				)}
			</GetStartedContext.Provider>
		</>
	);
};
export default GetStarted;
