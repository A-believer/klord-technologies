import { motion, useInView } from "framer-motion";
import { Link } from "react-router";
import { useRef, useState, useEffect } from "react";
import LazyLottie from "../../common/LazyLottie";

const data = [
    {
        title: "UrCalls in action",
        gif: "/lottiefiles/home-urcalls.mp4",
        preview: "/lottiefiles/home-urcalls.mp4",
    },
    {
        title: "NexaLife in action",
        gif: "/lotties/home-nexalifecare.json",
        preview: "/lottiefiles/home-nexalifecare.gif",
    },
];

const Experience = () => {
    const sectionRef = useRef(null);
    const isSectionInView = useInView(sectionRef, { amount: 1, once: false });
    const [isPlaying, setIsPlaying] = useState({});
    const [isHovered, setIsHovered] = useState({});

    const handlePlay = (index) => {
        const video = window[`videoRef${index}`];
        if (video) {
            video.play();
            setIsPlaying((prev) => ({ ...prev, [index]: true }));
        }
    };

    const handlePause = (index) => {
        const video = window[`videoRef${index}`];
        if (video) {
            video.pause();
            setIsPlaying((prev) => ({ ...prev, [index]: false }));
        }
    };

    const handleVideoEvents = (index) => {
        const video = window[`videoRef${index}`];
        if (video) {
            video.onplay = () => setIsPlaying((prev) => ({ ...prev, [index]: true }));
            video.onpause = () => setIsPlaying((prev) => ({ ...prev, [index]: false }));
            video.onended = () => setIsPlaying((prev) => ({ ...prev, [index]: false }));
        }
    };

    useEffect(() => {
        data.forEach((item, index) => {
            handleVideoEvents(index);
        });
        // eslint-disable-next-line
    }, []);

    return (
        <section
            ref={sectionRef}
            className='contain  py-8 md:space-y-28 space-y-20'>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isSectionInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 40 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className='flex md:items-end justify-between md:flex-row flex-col w-full gap-y-10 md:mb-28 mb-20'>
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className={` font-sora lg:text-5xl/[64px] text-[32px]/[44px] font-semibold tracking-[-2.4px] max-w-[788px] text-primary`}>
                    Experience How K-Lord’s Products Can Help Your Business Scale
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
                    className='md:w-fit w-full'>
                    <Link
                        to='/get-started'
                        className='bg-[#01588E] py-2.5 px-[30px] md:w-fit w-full block rounded-[40px] shadow-[0px_1.344px_0.537px_-0.625px_rgba(0,0,0,0.09),0px_3.185px_1.274px_-1.25px_rgba(0,0,0,0.09),0px_5.809px_2.324px_-1.875px_rgba(0,0,0,0.08),0px_9.658px_3.863px_-2.5px_rgba(0,0,0,0.08),0px_15.597px_6.239px_-3.125px_rgba(0,0,0,0.07),0px_25.531px_10.212px_-3.75px_rgba(0,0,0,0.06),0px_43.962px_17.585px_-4.375px_rgba(0,0,0,0.04)] border border-[#01588E] hover:bg-transparent text-white hover:text-[#01588E] text-center transition-all duration-500 text-nowrap'>
                        Request a Demo
                    </Link>
                </motion.div>
            </motion.div>
            <div className='flex justify-center md:flex-row flex-col gap-x-4 gap-y-10 md:mt-28 mt-20'>
                {data.map((item, index) => (
                    <div key={index} className='md:w-[48.5%] w-full space-[22px]'>
                        <div className='rounded-[30px] overflow-hidden relative'>
                            {item.title === "UrCalls in action" ? (
                                <div
                                    className="relative group"
                                    onMouseEnter={() => setIsHovered((prev) => ({ ...prev, [index]: true }))}
                                    onMouseLeave={() => setIsHovered((prev) => ({ ...prev, [index]: false }))}
                                >
                                    <video
                                        ref={el => (window[`videoRef${index}`] = el)}
                                        className='aspect-video block w-full h-full'
                                        src={item.gif}
                                        type="video/mp4"
                                        preload="metadata"
                                        style={{ background: "#000" }}
                                        controls={false}
                                        tabIndex={-1}
                                    />
                                    {/* Play Button: show if not playing, or on hover while playing */}
                                    {(!isPlaying[index] || isHovered[index]) && (
                                        <button
                                            type="button"
                                            className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity cursor-pointer"
                                            style={{ zIndex: 2 }}
                                            onClick={() =>
                                                isPlaying[index] ? handlePause(index) : handlePlay(index)
                                            }
                                            aria-label={isPlaying[index] ? "Pause" : "Play"}
                                        >
                                            {isPlaying[index] ? (
                                                // Pause icon
                                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                                                    <circle cx="32" cy="32" r="32" fill="white" fillOpacity="0.7"/>
                                                    <rect x="22" y="20" width="8" height="24" rx="2" fill="#01588E"/>
                                                    <rect x="34" y="20" width="8" height="24" rx="2" fill="#01588E"/>
                                                </svg>
                                            ) : (
                                                // Play icon
                                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                                                    <circle cx="32" cy="32" r="32" fill="white" fillOpacity="0.7"/>
                                                    <polygon points="26,20 48,32 26,44" fill="#01588E"/>
                                                </svg>
                                            )}
                                        </button>
                                    )}
                                </div>
                            ) : (
                                <LazyLottie
                                    src={item.gif}
                                    preview={item.preview}
                                    loop={true}
                                    className='aspect-video block'
                                />
                            )}
                        </div>
                        <p className='font-sora text-[26px]/8 font-semibold tracking-[1.04px] mt-[22px] text-primary'>
                            {item.title}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};
export default Experience;