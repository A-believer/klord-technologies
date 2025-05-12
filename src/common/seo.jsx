import { Helmet } from "react-helmet-async";
import logo  from "../assets/svgs/klord-nav-logo.svg";

const Seo = ({ title, description, content }) => {
	return (
		<Helmet>
			{/* Standard metadata tags */}
			<title>{title}</title>
			<meta name='description' content={description} />
			<meta name='keywords' content={content} />
			<meta name='author' content='K-Lord Technologies' />
			<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			{/* End standard metadata tags */}
			{/* Facebook tags */}
			<meta property='og:type' content='website' />
			<meta property='og:title' content={title} />
			<meta property='og:description' content={description} />
			<meta property='og:url' content='' />
			<meta property='og:image' content={logo} />
			{/* End Facebook tags */}
			{/* Twitter tags */}
			<meta name='twitter:creator' content='K-Lord Technologies' />
			<meta property="twitter:card" content="summary_large_image" />
			<meta name='twitter:title' content={title} />
			<meta name='twitter:description' content={description} />
			<meta property='twitter:image' content={logo} />
			{/* End Twitter tags */}

			{/* Canonical URL */}
			<link rel='canonical' href='' />
		</Helmet>
	);
};
export default Seo;
