import { Route, Routes } from "react-router";
import Layout from "./components/layout/layout";
import React, { Suspense, lazy } from "react";

const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const Products = lazy(() => import("./pages/products"));
const HealthcareSoftware = lazy(() =>
    import("./pages/solutions/healthcare-software")
);
const EnterpriseSoftware = lazy(() =>
    import("./pages/solutions/enterprise-software")
);
const PublicSoftwareTechnology = lazy(() =>
    import("./pages/solutions/public-software-technology")
);
const CustomSoftwareDevelopment = lazy(() =>
    import("./pages/solutions/custom-software-development")
);
const Portfolio = lazy(() => import("./pages/portfolio"));
const Contact = lazy(() => import("./pages/contact"));
const Resources = lazy(() => import("./pages/resources"));
const Faqs = lazy(() => import("./pages/faqs"));
const GetStarted = lazy(() => import("./pages/get-started"));
const PrivacyAndTerms = lazy(() =>
    import("./components/layout/privacy-and-terms")
);
const Career = lazy(() => import("./pages/career/career"));
const JobDescription = lazy(() => import("./pages/career/job-description"));
const JobForm = lazy(() => import("./pages/career/job-form"));

// A better fallback component with spinner and message
const FallbackLoader = () => (
    <div
        style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "60vh",
            fontFamily: "inherit",
        }}
    >
        <div
            style={{
                border: "4px solid #f3f3f3",
                borderTop: "4px solid #3498db",
                borderRadius: "50%",
                width: 48,
                height: 48,
                animation: "spin 1s linear infinite",
            }}
        />
        <p style={{ marginTop: 16, color: "#555" }}>Loading, please wait...</p>
        <style>
            {`@keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }`}
        </style>
    </div>
);

const App = () => {
    return (
        <Suspense fallback={<FallbackLoader />}>
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
                    <Route path='/careers/:id' element={<JobDescription />} />
                    <Route path='/careers/:id/apply' element={<JobForm />} />
                </Route>
                <Route path='/get-started' element={<GetStarted />} />
            </Routes>
        </Suspense>
    );
};
export default App;
