import { Link, useLocation } from "react-router";
import logo from "../../assets/svgs/klord-nav-logo.svg";
import { navlinks } from "../../lib/link-data";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import { useState } from "react";
import { DropDownMenu, MobileMenu } from "./nav-menu-dropdown";

const Navbar = () => {
	const { pathname } = useLocation();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isCurrentDropdown, setIsCurrentDropdown] = useState(null);

	const handleDropdown = (index) => {
		setIsCurrentDropdown(index === isCurrentDropdown ? null : index);
	};

	return (
		<nav className='max-w-[1440px] md:w-[90%] mx-auto w-full fixed lg:top-8 sm:top-3 top-0 left-0 right-0 bg-[#FAFAFA] md:rounded-[48px] z-50 shadow-lg'>
			<div className=' md:py-4 py-3 flex-between font-sora text-[#667085] text-sm/6 sm:w-[95%] w-[90%] mx-auto'>
				<div className='flex item-center gap-x-10'>
					<Link to='/'>
						<img loading='lazy' src={logo} alt='K-lord Logo' />
					</Link>

					<ul className='xl:flex hidden items-center gap-x-8'>
						{navlinks.map((navlink, index) =>
							navlink.dropdownMenu ? (
								<li
									className={`flex items-center gap-x-2 hover:underline cursor-pointer`}
									key={index}>
									{navlink.path ? (
										<Link to={navlink?.path}>{navlink.title}</Link>
									) : (
										navlink.title
									)}
									<button
										className='-hover:translate-0.5 transition-all duration-600'
										onClick={() => {
											handleDropdown(navlink.dropdownMenu);
										}}>
										{isCurrentDropdown === navlink.dropdownMenu ? (
											<ChevronUp />
										) : (
											<ChevronDown className='cursor-pointer' />
										)}
									</button>

									{isCurrentDropdown === navlink.dropdownMenu && (
										<DropDownMenu
											setIsCurrentDropdown={setIsCurrentDropdown}
											dropdownMenu={isCurrentDropdown}
										/>
									)}
								</li>
							) : (
								<li key={index}>
									<Link
										to={navlink.path}
										className={`
											${pathname === navlink.path && "font-bold text-black"} hover:underline										`}>
										{navlink.title}
									</Link>
								</li>
							)
						)}
					</ul>
				</div>
				<div className='flex gap-x-2 justify-end'>
					<div className='lg:flex hidden items-center gap-x-3 '>
						<Link
							className={`${
								pathname === "/contact" && "font-bold text-black"
							} block py-2.5 px-[18px] hover:border rounded-[30px] transition-all duration-500`}
							to='/contact'>
							Contact
						</Link>
						<Link
							className='block py-2.5 px-[18px] border  border-[#F95607] text-white bg-[#F95607] hover:bg-white hover:text-[#F95607] rounded-[30px] transition-all duration-500'
							to='/get-started'>
							Get Started
						</Link>
					</div>
					<button
						onClick={() => setIsMobileMenuOpen((prev) => !prev)}
						className='transition-all duration-500 xl:hidden block'>
						{isMobileMenuOpen ? <X /> : <Menu />}
					</button>
				</div>
				{isMobileMenuOpen && (
					<MobileMenu setIsMobileMenuOpen={setIsMobileMenuOpen} />
				)}
			</div>
		</nav>
	);
};
export default Navbar;
