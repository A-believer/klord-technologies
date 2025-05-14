import { ChevronLeft, ChevronRight } from "lucide-react"

const StandOut = () => {
  return (
		<section className='container py-16 space-y-8'>
			<div className='space-y-[42px]'>
				<h3 className='font-sora text-[#0F0F0F] lg:text-5xl/[50px] text-[32px]/10  font-semibold tracking-[-3px] text-left'>
					Why K-Lord Stands Out
				</h3>
				<div className='md:flex hidden items-center justify-end gap-x-2.5'>
					<button className='bg-[#F15533] rounded-[10px] w-[45px] h-[45px] flex items-center justify-center cursor-pointer'>
						<ChevronLeft color='#ffffff' />
					</button>
					<button className='bg-[#F15533] rounded-[10px] w-[45px] h-[45px] flex items-center justify-center cursor-pointer'>
						<ChevronRight color='#ffffff' />
					</button>
				</div>
			</div>
			<div className='rounded-[30px]'></div>
		</section>
	);
}
export default StandOut