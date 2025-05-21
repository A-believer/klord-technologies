import { Route, Routes } from "react-router";
import Layout from "./components/layout/layout";
import Home from "./pages/home";
import About from "./pages/about";
import Products from "./pages/products";
import HealthcareSoftware from "./pages/solutions/healthcare-software";
import EnterpriseSoftware from "./pages/solutions/enterprise-software";
import PublicSoftwareTechnology from "./pages/solutions/public-software-technology";
import CustomSoftwareDevelopment from "./pages/solutions/custom-software-development";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import Resources from "./pages/resources";
import Faqs from "./pages/faqs";
import GetStarted from "./pages/get-started";
import PrivacyAndTerms from "./components/layout/privacy-and-terms";
import Career from "./pages/career";

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='/products' element={<Products />} />
				<Route
					path='/solutions/healthcare-software'
					element={<HealthcareSoftware />}
				/>
				<Route
					path='/solutions/enterprise-software'
					element={<EnterpriseSoftware />}
				/>
				<Route
					path='/solutions/public-software-technology'
					element={<PublicSoftwareTechnology />}
				/>
				<Route
					path='/solutions/custom-software-development'
					element={<CustomSoftwareDevelopment />}
				/>
				<Route path='/contact' element={<Contact />} />
				<Route path='/portfolio' element={<Portfolio />} />
				<Route path='/resources' element={<Resources />} />
				<Route path='/faqs' element={<Faqs />} />
				<Route
					path='/terms-of-service'
					element={<PrivacyAndTerms page='terms-of-service' />}
				/>
				<Route
					path='/privacy-policy'
					element={<PrivacyAndTerms page='privacy-policy' />}
				/>

				<Route path='/about' element={<About />} />
				<Route path='/careers' element={<Career />} />
				<Route path='/careers/:id' element={<Career />} />
				<Route path='/careers/:id/apply' element={<Career />} />
			</Route>
			<Route path='/get-started' element={<GetStarted />} />
		</Routes>
	);
};
export default App;
