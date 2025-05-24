import { Link, useParams } from "react-router";
import { jobData } from "../../lib/job-data";
import { Building2, Clock, MapPin, MoveRight } from "lucide-react";

const JobDescription = () => {
	const { id } = useParams();
	console.log(id);
	const job = jobData[id - 1];
	console.log(job);
	return (
		<section className='contain grid lg:grid-cols-2 xl:gap-x-20 gap-x-14 gap-y-14 lg:pt-[186px] sm:pt-[120px] pt-20 lg:pb-20 pb-14'>
			<div className='max-w-[485px] w-full'>
				<h1 className='font-sora text-[#0F0F0F] lg:text-5xl/[50px] text-[32px]/10 font-semibold tracking-[-2.4px]'>
					{job.title}
				</h1>
				<div className='mt-4 space-y-6'>
					<p className='flex items-center gap-x-2  '>
						<MapPin color='#696969' size={20} />
						{job.location}
					</p>
					<p className='flex items-center gap-x-2'>
						<Clock color='#696969' size={20} />
						{job.employmentType}
					</p>
					<p className='flex items-center gap-x-2'>
						<Building2 color='#696969' size={20} />
						{job.department}
					</p>
				</div>

				<Link
					to={`/careers/${job.id}/apply`}
					className='bg-[#01588E] py-2.5 md:px-[110px] lg:w-fit h-fit w-full px-[30px] rounded-[40px] shadow-[0px_1.344px_0.537px_-0.625px_rgba(0,0,0,0.09),0px_3.185px_1.274px_-1.25px_rgba(0,0,0,0.09),0px_5.809px_2.324px_-1.875px_rgba(0,0,0,0.08),0px_9.658px_3.863px_-2.5px_rgba(0,0,0,0.08),0px_15.597px_6.239px_-3.125px_rgba(0,0,0,0.07),0px_25.531px_10.212px_-3.75px_rgba(0,0,0,0.06),0px_43.962px_17.585px_-4.375px_rgba(0,0,0,0.04)] border border-[#01588E] hover:bg-transparent text-white hover:text-black text-center transition-all duration-500 text-nowrap  block mt-11'>
					Apply Now
				</Link>
			</div>

			<div className='max-w-[683px] w-full space-y-[30px] text-[#0F0F0F]/[0.8] text-lg/[32px] tracking-[-0.45px] font-inter'>
				<div className='space-y-[26px]'>
					<h4 className='font-semibold text-[#0F0F0F] text-3xl/9 font-sora tracking-[-1.04px]'>
						About
					</h4>
					<p>{job.aboutRole}</p>
				</div>
				<div className='space-y-[26px]'>
					<h4 className='font-semibold text-[#0F0F0F] text-3xl/9 font-sora tracking-[-1.04px]'>
						Responsibilities
					</h4>
					<ul className='list-disc list-outside w-[90%] mx-auto space-y-3'>
						{job.responsibilities.map((item, i) => (
							<li key={i}>{item}</li>
						))}
					</ul>
				</div>
				<div className='space-y-[26px]'>
					<h4 className='font-semibold text-[#0F0F0F] text-3xl/9 font-sora tracking-[-1.04px]'>
						Requirements
					</h4>
					<ul className='list-disc list-outside w-[90%] mx-auto space-y-3'>
						{job.requirements.map((item, i) => (
							<li key={i}>{item}</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};
export default JobDescription;
