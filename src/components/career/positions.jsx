import { Building2, Clock, MapPin, MoveRight } from "lucide-react";
import { Link } from "react-router";

const Positions = ({ jobData }) => {
	return (
		<section className='contain py-16 md:space-y-16 space-y-10' id='positions'>
			<div className='max-w-[800px] w-full'>
				<p className='text-[#FF5F0F] font-inter text-base/6 font-medium'>
					Open positions
				</p>
				<h2 className='font-sora text-[#0F0F0F] lg:text-5xl/[50px] text-[32px]/10 font-semibold tracking-[-2.4px] mt-3 mb-5'>
					Current Openings
				</h2>
				<p className='mt-3 text-xl/9 font-medium font-inter text-[#696969]'>
					Want to work with global talent and help build software that
					transforms care delivery, operations, and digital engagement? Apply
					today.
				</p>
			</div>
			<div className='grid lg:grid-cols-2 gap-12 '>
				{jobData.map((job, idx) => (
					<div
						key={idx}
						className='border-t border-[#EAECF0] pt-6 text-[#696969] font-inter text-base/6'>
						<h3 className='font-sora text-lg/7 font-semibold text-[#101828]'>
							{job.title}
						</h3>
						<p className='mt-2 mb-6'>{job.description}</p>
						<div className='flex flex-wrap gap-6 mt-2 font-semibold mb-5'>
							<span className='flex items-center gap-x-2  '>
								<MapPin color='#696969' size={20} />
								{job.location}
							</span>
							<span className='flex items-center gap-x-2'>
								<Clock color='#696969' size={20} />
								{job.employmentType}
							</span>
							<span className='flex items-center gap-x-2'>
								<Building2 color='#696969' size={20} />
								{job.department}
							</span>
						</div>
						<div className='block w-fit ml-auto hover:underline'>
							<Link
								to={`/careers/${job.id}`}
								className='flex items-center gap-x-2 w-fit text-[#FF5F0F]'>
								View Job <MoveRight />
							</Link>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Positions;
