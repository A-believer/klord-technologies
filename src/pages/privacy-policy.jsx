import Seo from "../common/seo";
import { privacypolicy } from "../lib/msic-data";

const PrivacyPolicy = () => {
	return (
		<>
			<Seo
				title='Privacy Policy | K-Lord Technologies – Protecting Your Privacy and Data'
				description='Learn how K-Lord Technologies protects your personal data. Read our comprehensive Privacy Policy to understand how we handle and secure your information across our digital solutions.'
				content=''
			/>
			<div className='font-inter space-y-[30px] text-[#0F0F0F] text-lg/8'>
				<div>
					<h1 className='lg:text-5xl/[64px] text-[32px]/10 tracking-[-2.4px]  font-semibold'>
						{privacypolicy.title}
					</h1>
					<p className='text-lg/8 font-medium text-[#999999]'>
						Last Updated: {privacypolicy.lastUpdated}
					</p>
				</div>

				<p className=''>{privacypolicy.introduction}</p>

				{privacypolicy.sections.map((section) => (
					<section key={section.id} id={section.id} className='space-y-3'>
						<h2 className='font-sora text-2xl/8 font-semibold tracking-[-1.04px]'>
							{section.title}
						</h2>
						{section.content.map((item, index) => {
							if (item.type === "paragraph") {
								return (
									<p
										key={`${section.id}-p-${index}`}
										dangerouslySetInnerHTML={{ __html: item.text }}
									/>
								);
							}
							if (item.type === "list") {
								return (
									<ul
										key={`${section.id}-ul-${index}`}
										className='list-disc pl-5 space-y-3'>
										{item.items.map((listItem, listItemIndex) => (
											<li key={`${section.id}-li-${listItemIndex}`}>
												<strong>{listItem.main}:</strong> {listItem.details}
											</li>
										))}
									</ul>
								);
							}
							return null;
						})}
					</section>
				))}
			</div>
		</>
	);
};

export default PrivacyPolicy;
