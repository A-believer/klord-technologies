import { MoveUpRight } from "lucide-react";
import { Link } from "react-router";

const Cards = ({ data }) => {
	return (
		<div>
			<img
				loading='lazy'
				src={data.img}
				alt=''
				className='rounded-[20px] object-cover object-center w-full md:aspect-auto aspect-video'
			/>
			<div className='flex items-start justify-between mt-8 mb-3'>
				<h3 className='text-[#101828] font-sora font-semibold text-xl/[30px]'>
					{data.title}
				</h3>{" "}
				<Link to={data.link}>
					<MoveUpRight />
				</Link>
			</div>

			<p className='text-base/6 font-normal font-inter text-[#696969]'>
				{data.description}
			</p>
		</div>
	);
};
export default Cards;
