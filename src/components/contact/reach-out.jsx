import { MapPin, MessageCircle, Phone } from "lucide-react";

const data = [
	{
		id: 1,
		header: "Chat to support",
		desc: "We’re here to help.",
		dets: "info@Klordtechnologies.com",
		icon: <MessageCircle color='#FFFFFF' />,
	},
	{
		id: 2,
		header: "Visit us",
		desc: "Visit our office HQ.",
		dets: "403 W. Pennsylvania Ave. Towson, MD. 21204",
		icon: <MapPin color='#FFFFFF' />,
	},
	{
		id: 3,
		header: "Call us",
		desc: "Mon-Fri from 8am to 5pm.",
		dets: "443-590-9921",
		icon: <Phone color='#FFFFFF' />,
	},
];

const ReachOut = () => {
	return (
		<section className='contain md:py-16 py-10 lg:space-y-11 space-y-8'>
			<div className='max-w-[862px] w-full space-y-4'>
				<h1 className='font-sora lg:text-5xl/[64px] text-[32px]/normal font-semibold tracking-[-2.4px] text-[#0f0f0f]'>
					Reach Out to Us
				</h1>
				<p className='text-black/80 font-inter text-xl/normal tracking-[-0.18px]'>
					For inquiries, demos, or support, get in touch with our team. We’re
					ready to help you get started with solutions that drive growth and
					efficiency in your organization.
				</p>
			</div>

			<div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6'>
				{data.map((item) => (
					<div key={item.id} className='p-6 bg-[#F7F7F7] space-y-16'>
						<span className='h-12 w-12 flex-center bg-[#FF5F0F] rounded-[10px]'>
							{item.icon}
						</span>
						<div>
							<p className='text-[#101828] text-xl/[30px]'>{item.header}</p>
							<p className='mt-2 mb-5 font-inter text-[#8D8D8D] text-base/6'>
								{item.desc}
							</p>
							<p className='text-[#FF5F0F] text-base/6'>{item.dets}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};
export default ReachOut;
