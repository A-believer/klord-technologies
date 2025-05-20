const caseData = [
	"Workforce & HR Systems ",
	"CRM & Customer Experience Platforms",
	"Audit & Compliance Tools",
	"Project & Task Management Tools",
	"Vendor & Procurement Portals",
	"Business Intelligence & Analytics",
	"Accounting & Financial Management ",
];
const UseCases = () => {
	return (
		<section className='contain md:space-y-16 space-y-10 md:py-16 py-10 text-[#F5F7F9]/[0.8] font-inter text-[15px]/[25px] tracking-[-0.45px] font-medium'>
			<h2 className='text-[#0F0F0F] font-sora font-semibold lg:tracking-[-2.4px] tracking-[-1px] lg:text-5xl/[64px] text-[32px]/[44px] md:text-center text-left'>
				Key Use Cases
			</h2>
			<ul className='flex flex-wrap gap-2.5 gap-y-[30px] justify-center md:w-[90%] w-full mx-auto'>
				{caseData.map((item, idx) => (
					<li
						className='px-[25.5px] py-[37px] border-[2.5px] border-[#01588E] rounded-[58px] text-[#0F0F0F] text-2xl/normal font-semibold tracking-[-0.6px]'
						key={idx}>
						{item}
					</li>
				))}
			</ul>
		</section>
	);
};
export default UseCases;
