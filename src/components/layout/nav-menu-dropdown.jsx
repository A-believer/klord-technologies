import { Link, useLocation } from "react-router";
import { navlinks } from "../../lib/link-data";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

function DropDownMenu({ dropdownMenu, setIsCurrentDropdown }) {
	return (
		<ul className='absolute top-16 xl:max-w-[336px] lg:max-w-[400px] lg:p-5 pl-2 bg-white border border-[#EAECF0] lg:rounded-[40px] shadow-lg shadown-[0px_12px_16px_-4px_rgba(16,24,40,0.08),_0px_4px_6px_-2px_rgba(16,24,40,0.03)] w-full space-y-2 font-sora text-black cursor-auto z-50'>
			{dropdownMenu.map((item, index) => (
				<li key={index} className='p-3'>
					<Link
						to={item.path}
						onClick={() => {
							return setTimeout(setIsCurrentDropdown(null), 4000);
						}}
						className='w-full flex gap-4 items-start'>
						<img src={item.icon} alt='' className='w-6 h-6' />
						<div>
							<p className='text-base/6 tracking-[-0.24px] hover:font-semibold'>{item.title}</p>
							{item.des && (
								<p className='text-[#707070] font-inter text-sm/5 hover:underline'>
									{item.des}
								</p>
							)}
						</div>
					</Link>
				</li>
			))}
		</ul>
	);
}

function MobileMenu() {
	const { pathname } = useLocation();
	const [isCurrentDropdown, setIsCurrentDropdown] = useState(null);

	const handleDropdown = (index) => {
		setIsCurrentDropdown(index === isCurrentDropdown ? null : index);
	};
	return (
		<div className='absolute xl:hidden block lg:top-20 top-14 p-5 rounded-xl w-full right-5 md:max-w-[300px] max-w-[80%] border border-[#EAECF0] shadow-lg shadown-[0px_12px_16px_-4px_rgba(16,24,40,0.08),_0px_4px_6px_-2px_rgba(16,24,40,0.03)] bg-[#FAFAFA] space-y-4'>
			<h4 className='font-bold text-xl'>Menu</h4>
			<hr className='border-none bg-black h-0.5' />
			<ul className='space-y-8'>
				{navlinks.map((navlink, index) =>
					navlink.dropdownMenu ? (
						<li key={index} className='space-y-3'>
							<div
								className={`${
									(navlink.path.includes("/products") ||
										navlink.path.includes("/solutions")) &&
									"text-"
								} flex-center gap-x-2 hover:underline cursor-pointer`}>
								{navlink.title}
								<button
									className='-hover:translate-0.5 transition-all duration-600 cursor-pointer'
									onClick={() => {
										handleDropdown(navlink.dropdownMenu);
									}}>
									{isCurrentDropdown === navlink.dropdownMenu ? (
										<ChevronUp />
									) : (
										<ChevronDown />
									)}
								</button>
							</div>

							<>
								{isCurrentDropdown === navlink.dropdownMenu && (
									<ul className=' font-sora text-black cursor-auto z-50'>
										{navlink.dropdownMenu.map((item, index) => (
											<li key={index} className='p-3'>
												<Link
													to={item.path}
													onClick={() => {
														return setTimeout(setIsCurrentDropdown(null), 4000);
													}}
													className='w-full flex gap-4 items-start'>
													<img src={item.icon} alt='' className='w-6 h-6' />
													<div>
														<p className='text-base/6 tracking-[-0.24px]'>
															{item.title}
														</p>
														{item.des && (
															<p className='text-[#707070] font-inter text-sm/5'>
																{item.des}
															</p>
														)}
													</div>
												</Link>
											</li>
										))}
									</ul>
								)}
							</>
						</li>
					) : (
						<li key={index} className="w-full text-center">
							<Link
								to={navlink.path}
								className={`
											${pathname === navlink.path && "font-bold text-black"} hover:underline  w-full text-center`}>
								{navlink.title}
							</Link>
						</li>
					)
				)}
			</ul>
			<div className='block lg:hidden space-y-4'>
				<Link
					className='block py-2.5 px-[18px] hover:border rounded-[30px] transition-all duration-500 text-center'
					to='/contact'>
					Contact
				</Link>
				<Link
					className='block py-2.5 px-[18px] border  border-[#F95607] text-white bg-[#F95607] hover:bg-white hover:text-[#F95607] rounded-[30px] transition-all duration-500 text-center'
					to='/get-started'>
					Get Started
				</Link>
			</div>
		</div>
	);
}

export { MobileMenu, DropDownMenu };
