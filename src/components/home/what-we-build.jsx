import { Link } from "react-router";
import { ChevronRight, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import nexalifecarePreview from "../../assets/lottiefiles/home-nexalifecare.gif";
import urcallsPreview from "../../assets/lottiefiles/home-urcalls.gif";
import shareworkflowPreview from "../../assets/lottiefiles/home-shareworkflow.gif";
import LazyLottie from "../../common/LazyLottie";

const ourSolutions = [
    {
        name: "NexaLife Care",
        des: "Every patient deserves access. Every provider needs reach.",
        text: "NexaLife Care bridges the gap between underserved communities and healthcare providers. Designed to simplify referrals, coordinate care, and expand provider networks, it empowers clinics, NGOs, and health systems to connect with more patients faster and more efficiently.",
        gif: "/lotties/home-nexalifecare.json",
        preview: nexalifecarePreview,
        link: "/products#nexalifecare",
        url: "https://nexalifecare.com",
    },
    {
        name: "UrCalls",
        des: "What if your meetings actually moved work forward?",
        text: "UrCalls isn’t just another video platform. It’s built for teams that value clarity, control, and real-time collaboration without the clunky interfaces or connectivity issues. From internal standups to livestreamed events, UrCalls keeps communication sharp, sessions productive, and your entire team in sync.",
        gif: "/lotties/home-urcalls.json",
        preview: urcallsPreview,
        link: "/products#urcalls",
        url: "https://urcalls.com",
    },
    {
        name: "Custom Software Solutions",
        des: "When off-the-shelf doesn’t fit, we build what does.",
        text: "Your operations are unique; and your software should be too. We design and develop custom tools tailored to your workflows, regulatory needs, and growth goals. From healthcare and enterprise solutions to public service products, we create applications that work exactly the way you do.",
        gif: "/lotties/home-shareworkflow.json",
        preview: shareworkflowPreview,
        link: "/custom-software-development",
        url: "/get-started",
    },
];

const WhatWeBuild = () => {
    const sectionRef = useRef(null);
    const isSectionInView = useInView(sectionRef, { amount: 0.2, once: false });

    const cardRefs = ourSolutions.map(() => useRef(null));
    const cardInViews = cardRefs.map((ref) =>
        useInView(ref, { amount: 1, once: false })
    );
    const currentInViewIndex = cardInViews.findIndex(Boolean);

    return (
        <section ref={sectionRef}>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={
                    isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0.7, y: 40 }
                }
                transition={{ duration: 0.7, ease: "easeOut" }}
                className='py-16 max-w-[1440px] mx-auto w-[90%] md:space-y-16 space-y-10 font-sora'>
                <h1 className='heading'>What We Build</h1>
                <div className='font-inter flex items-start justify-between gap-x-[62px]'>
                    <div
                        className='space-y-2.5 md:flex hidden flex-col items-start sticky top-[120px] z-30 h-fit shrink-0'
                        style={{ alignSelf: "flex-start" }}>
                        {ourSolutions.map((sol, index) => (
                            <button
                                key={index + 1}
                                className={`transition-all duration-700 px-2 py-1 rounded-lg flex items-center text-left text-xl/[25.2px] font-semibold ${
                                    currentInViewIndex === index ? "text-[#0f0f0f]" : "text-[#0f0f0f]/60"
                                }`}
                                tabIndex={-1}
                                style={{ pointerEvents: "none" }}
                            >
                                {currentInViewIndex === index ? (
                                    <ChevronRight color='#FF5F0F' className='mr-1' />
                                ) : null}
                                {sol.name}
                            </button>
                        ))}
                    </div>
                    <div className='w-full space-y-8'>
                        {ourSolutions.map((sol, index) => (
                            <motion.div
                                ref={cardRefs[index]}
                                key={index + 1}
                                className='p-2.5 bg-[#F5F7F9] w-full rounded-[34px] space-y-[22px]'>
                                <div className='flex xl:flex-row flex-col items-start md:gap-[30px] gap-5'>
                                    <div className='rounded-[24.732px] max-w-[492px] w-fit overflow-hidden aspect-video'>
                                        <LazyLottie
                                            src={sol.gif}
                                            preview={sol.preview}
                                            loop={true}
                                            className='w-full object-cover rounded-[24.732px] aspect-auto'
                                        />
                                    </div>
                                    <div className='space-y-4 pt-5 w-full'>
                                        <h4 className='font-sora text-[26px]/tight font-semibold text-[#F95607]'>
                                            {sol.name}
                                        </h4>
                                        <p className='text-[15px]/[22px] text-[#0f0f0f] font-semibold font-inter mb-2 mt-4'>{sol.des}</p>
                                        <p className='text-[15px]/[22px] text-[#0f0f0f]/80 font-inter'>{sol.text}</p>
                                    </div>
                                </div>
                                <div className='font-inter lg:text-xl/7 text-lg/6 tracking-[-0.6px] flex items-center justify-between bg-white rounded-[30px] py-7 px-5  text-[#01588E] font-medium'>
                                    <Link to={sol.link} className="hover:underline flex items-center gap-x-2 hover:scale-[96%] transition-all duration-300">Learn More <ArrowRight/></Link>
                                    <Link to={sol.url} className="hover:underline flex items-center gap-x-2 hover:scale-[96%] transition-all duration-300">{sol.name === 'Custom Software Solutions' ? 'Get Started' : 'See in it Action'} <ArrowRight/></Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};
export default WhatWeBuild;