import { Outlet } from "react-router";
import Footer from "./footer";
import Navbar from "./navbar";
import LiveChat from "./live-chat";
import { Toaster } from "react-hot-toast";

const Layout = () => {
	return (
		
		<main className='relative w-full min-h-screen bg-white'>
			<Toaster/>
			<LiveChat />
				<Navbar />
				<Outlet />
				<Footer />
			</main>
		
	);
};
export default Layout;
