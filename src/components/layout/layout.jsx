import { Outlet } from "react-router";
import Footer from "./footer";
import Navbar from "./navbar";
import LiveChat from "./live-chat";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./ScrollToTop"; // <-- Add this import

const  Layout = () => {
	return (
		
		<main className='relative w-full h-full bg-white'>
			<Toaster/>
			<LiveChat />
			<ScrollToTop /> 
				<Navbar />
				<Outlet />
				<Footer />
			</main>
		
	);
};
export default Layout;
