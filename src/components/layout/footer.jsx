import { Link, useLocation } from "react-router";
import logo from "../../assets/imgs/klord-footer-logo.png";
import { contactData, footerlinks } from "../../lib/link-data";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Footer = () => {
	const { pathname } = useLocation();
	const [isCurrentDropdown, setIsCurrentDropdown] = useState(null);

	const handleDropdown = (index) => {
		setIsCurrentDropdown(index === isCurrentDropdown ? null : index);
	};
	return (
		<footer className='bg-[#00090F] md:py-20 py-10 text-[#FFFEF5] text-[15px]/[22.5px] tracking-[-0.45px] font-medium font-inter'>
			<div className='max-w-[1440px] w-[90%] mx-auto'>
				<div className='md:flex justify-between items-center space-y-10'>
					<div className='md:space-y-12 space-y-8'>
						<img
							src={logo}
							alt='K-Lord Logo'
							className='w-[201px] h-[76px] object-cover object-left'
						/>
						<p className='text-lg/[25px] font-medium tracking-[-0.18px] md:block hidden'>
							The next big thing starts here; reach out and let’s get creating!
							<br className='md:flex hidden'/> reach out and let’s get creating!
						</p>
					</div>
					<div className='space-y-6'>
						<div className='text-[#FFA587] flex md:justify-end justify-between md:gap-x-10 gap-x-5'>
							<ul className='space-y-2.5'>
								{footerlinks.quicklinks.map((item, index) =>
									item.dropdownMenu ? (
										<li key={index} className='space-y-3'>
											<div
												className={`flex-center gap-x-2 hover:underline cursor-pointer`}>
												{item.name}
												<button
													className='-hover:translate-0.5 transition-all duration-600 cursor-pointer'
													onClick={() => {
														handleDropdown(item.dropdownMenu);
													}}>
													{isCurrentDropdown === item.dropdownMenu ? (
														<ChevronUp className='text-[#FFA587] w-4 h-4' />
													) : (
														<ChevronDown className='text-[#FFA587] w-4 h-4' />
													)}
												</button>
											</div>

											<>
												{isCurrentDropdown === item.dropdownMenu && (
													<ul className='bg-white absolute p-3 max-w-[250px] border-[#EAECF0] lg:rounded-[20px] rounded-[16px] shadow-lg shadown-[0px_12px_16px_-4px_rgba(16,24,40,0.08),_0px_4px_6px_-2px_rgba(16,24,40,0.03)] w-full space-y-2 font-sora text-black cursor-auto z-50'>
														{item.dropdownMenu.map((data, index) => (
															<li key={index} className='p-3'>
																<Link
																	to={data.path}
																	onClick={() => {
																		return setTimeout(
																			setIsCurrentDropdown(null),
																			4000
																		);
																	}}
																	className='w-full flex gap-4 items-start'>
																	<img
																		src={data.icon}
																		alt=''
																		className='w-6 h-6'
																	/>
																	<div>
																		<p className='text-base/6 tracking-[-0.24px]'>
																			{data.title}
																		</p>
																		{data.des && (
																			<p className='text-[#707070] font-inter text-sm/5'>
																				{data.des}
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
										<li key={index}>
											<Link to={item.path}>{item.name}</Link>
										</li>
									)
								)}
							</ul>

							<ul className='space-y-2.5'>
								{footerlinks.socials.map((item, index) => (
									<li key={index}>
										<Link to={item.path}>{item.name}</Link>
									</li>
								))}
							</ul>

							<ul className='space-y-2.5'>
								{footerlinks.legal.map((item, index) => (
									<li key={index}>
										<Link to={item.path}>{item.name}</Link>
									</li>
								))}
							</ul>
						</div>
						<p className='text-lg/[25px] font-medium tracking-[-0.18px] block md:hidden'>
							The next big thing starts here; reach out and let’s get creating!
							<br className='md:flex hidden'/> reach out and let’s get creating!
						</p>
					</div>
				</div>
				<div className='md:flex items-start gap-x-20 space-y-10 my-10  md:py-[30px] py-5 border-y border-[rgba(255,255,255,0.30)]'>
					{contactData.map((item, index) => (
						<div key={index} className='max-w-[200px] space-y-2.5'>
							<h5 className='text-[#FFA587] flex items-center-safe md:gap-x-7 gap-x-2.5'>
								<img src={item.icon} alt={item.name} />
								{item.name}
							</h5>
							<p>{item.data}</p>
						</div>
					))}
				</div>
				<div className='md:flex justify-between items-center md:space-y-0 space-y-7'>
					<p className='hover:underline'>©Template by Market Master USA</p>
					<p className='hover:underline'>Built by Market Master USA</p>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
