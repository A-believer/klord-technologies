import img1 from "../../assets/imgs/1.png";
import img2 from "../../assets/imgs/2.png";
import img3 from "../../assets/imgs/3.png";
import img4 from "../../assets/imgs/4.png";
import img5 from "../../assets/imgs/5.png";
import quotes from "../../assets/imgs/quotes.png";

const clientImages = [img1, img2, img3, img4, img5];

const Testimonials = ({ testimonials }) => {
	return (
		<section className='contain py-16 md:space-y-16 space-y-10 text-[#0F0F0F]'>
			<h3 className='font-sora  lg:text-5xl/[50px] text-[32px]/10  font-semibold tracking-[-3px] text-center max-w-[800px] w-full mx-auto'>
				Hear Stories
				<span className='inline-block align-middle mx-2'>
					<div className='flex items-center justify-center -space-x-4'>
						{clientImages.map((img, idx) => (
							<img
								key={idx}
								src={img}
								alt={`client ${idx + 1}`}
								className='w-[52px] h-[52px] rounded-[20px] border-4 border-white object-cover'
							/>
						))}
					</div>
				</span>
				Straight From Our Clients
			</h3>

			<div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-4 gap-y-6  w-full '>
				{testimonials.map((testimonial, idx) => (
					<div key={idx} className='w-full space-y-5'>
						<div className='bg-[#1C1C1C] rounded-[30px] pl-3.5 pr-[25.35px] pt-[30px] pb-10 flex items-start gap-x-5 h-[138px]'>
							<img src={quotes} alt='quotes' className='w-8 h-auto mt-1' />
							<p className='text-[15px]/[22px] font-medium tracking-[-0.45px] text-[#F5F7F9]'>
								<i>"</i>
								{testimonial.quote}
								<i>"</i>
							</p>
						</div>
						<div className='flex items-center gap-x-3.5 px-5'>
							<img
								src={testimonial.image}
								alt={testimonial.name}
								className='w-[61px] h-[61px]'
							/>
							<div className='font-inter gap-2'>
								<p className='text-lg/[25.2px] tracking-[-0.18px]'>
									{testimonial.name}
								</p>
								<p className='opacity-70 text-sm/4 font-bold tracking-[-0.55px] uppercase text-wrap'>
									{testimonial.position}
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};
export default Testimonials;
