const faqs = [
	{
		id: 1,
		question: "What is K-Lord Technologies?",
		answer:
			"K-Lord Technologies is a leading provider of digital transformation solutions, offering scalable, secure software for healthcare systems, SMEs, enterprises, and public sector organizations. We specialize in creating custom software applications that help businesses streamline operations, improve patient care, and stay compliant with industry regulations.",
	},
	{
		id: 2,
		question: "What industries does K-Lord Technologies serve?",
		answer:
			"We cater to a wide range of industries, including healthcare, enterprise solutions, education, public sector, and non-profit organizations. Our products and services are tailored to meet the unique needs of each sector, from managing data to enabling efficient business operations.",
	},
	{
		id: 3,
		question: "What are the key products offered by K-Lord Technologies?",
		answer:
			"We offer three flagship products: UrCalls – a high-performance video conferencing solution for remote teams, telehealth, and enterprise collaboration; NexaLife Care – a HIPAA-compliant patient referral software designed to connect underserved patient populations with care and social benefits; Sharework Flow – a modular ERP system that streamlines business operations for growth, offering tools for HR, finance, CRM, and project management.",
	},
	{
		id: 4,
		question: "How can UrCalls help my business?",
		answer:
			"UrCalls provides reliable and seamless video conferencing with HD audio and video, screen sharing, session recording, chat functionality, and live streaming. It’s ideal for remote teams, online education, telehealth, and corporate meetings. UrCalls offers a flexible pricing model, including a free plan, to support businesses of all sizes.",
	},
	{
		id: 5,
		question: "How does NexaLife Care improve patient referral management?",
		answer:
			"NexaLife Care automates the patient referral workflow, simplifying case intake, routing, and appointment tracking. Designed for HIPAA compliance, it helps healthcare providers manage patient referrals, improve operational efficiency, and connect patients to necessary care and social benefits.",
	},
	{
		id: 6,
		question: "What is Sharework Flow, and how does it help my business?",
		answer:
			"Sharework Flow is a modular ERP solution designed to help SMEs and enterprises streamline their operations. With features like CRM, HR management, accounting, inventory, and project management, Sharework Flow eliminates the complexity of using multiple systems and improves operational efficiency.",
	},
	{
		id: 7,
		question: "Is K-Lord Technologies HIPAA-compliant?",
		answer:
			"Yes, all our healthcare-related solutions, including NexaLife Care, are designed to be fully HIPAA-compliant. We prioritize security, data encryption, and privacy to ensure that patient information is protected.",
	},
	{
		id: 8,
		question:
			"What sets K-Lord Technologies apart from other software providers?",
		answer:
			"Our solutions are built with scalability, security, and compliance in mind. We focus on providing tailored solutions that integrate seamlessly with your existing systems, ensuring that your operations run smoothly and efficiently.",
	},
	{
		id: 9,
		question: "Do you provide support and maintenance for your products?",
		answer:
			"Yes, K-Lord Technologies offers comprehensive support and maintenance services for all our products. Our team ensures that your software runs smoothly, is updated regularly, and remains compliant with industry standards.",
	},
	{
		id: 10,
		question:
			"Can I integrate K-Lord Technologies solutions with my existing systems?",
		answer:
			"Yes, our products, including UrCalls and Sharework Flow, are designed to integrate easily with existing systems through APIs and custom integrations. We ensure a seamless transition and minimal disruption to your operations.",
	},
	{
		id: 11,
		question: "What security measures do you take to protect data?",
		answer:
			"We employ industry-leading security measures, including encryption, multi-factor authentication, role-based access control, and secure cloud hosting. Our solutions are built to meet security and compliance standards such as ISO, GDPR, SOC 2, and HIPAA.",
	},
	{
		id: 12,
		question: "How can I request a demo of your products?",
		answer:
			'To schedule a demo for any of our products, simply visit the product page of interest and click the "Request a Demo" button. Alternatively, you can contact our sales team directly to arrange a personalized demo at your convenience.',
	},
	{
		id: 13,
		question: "What kind of businesses benefit from your solutions?",
		answer:
			"Our solutions are designed to support businesses of all sizes, from startups to large enterprises. We work with healthcare providers, educational institutions, government agencies, SMEs, and nonprofit organizations, offering tailored solutions for each sector.",
	},
	{
		id: 14,
		question: "What is the pricing for your products?",
		answer:
			"We offer flexible pricing models based on the needs and size of your organization. For instance, UrCalls provides a free plan for startups, with scalable paid options for larger enterprises. Sharework Flow is priced based on deployment scale and user requirements. Contact us for a custom quote.",
	},
	{
		id: 15,
		question: "How can I get in touch with K-Lord Technologies?",
		answer:
			"You can reach us through our <a title='Contact Us' href='/contact' class='text-red-500 font-semibold underline'>contact page</a>, where you’ll find various ways to get in touch, including phone, email, and live chat. Alternatively, you can fill out the business contact form, and one of our team members will respond promptly.",
	},
];

const privacypolicy = {
	title: "Privacy Policy",
	lastUpdated: "February 1, 2025",
	introduction:
		"At K-Lord Technologies, we prioritize the privacy and security of your personal data. This Privacy Policy outlines how we collect, use, and safeguard your information when you use our services, products, and website. By accessing our website or using our products, you agree to the terms outlined in this policy.",
	sections: [
		{
			id: "information-we-collect",
			title: "Information We Collect",
			content: [
				{
					type: "paragraph",
					text: "We collect personal and non-personal information when you use our products, services, or website. This may include:",
				},
				{
					type: "list",
					items: [
						{
							main: "Personal Information",
							details:
								"Name, email address, phone number, billing details, and any other information you provide to us when filling out forms or interacting with our products.",
						},
						{
							main: "Non-Personal Information",
							details:
								"Usage data, IP addresses, browser types, device information, and general location data that help us improve our services and user experience.",
						},
					],
				},
			],
		},
		{
			id: "how-we-use-your-information",
			title: "How We Use Your Information",
			content: [
				{
					type: "paragraph",
					text: "We use the information we collect for the following purposes:",
				},
				{
					type: "list",
					items: [
						{
							main: "Providing Services",
							details:
								"To deliver and support the products and services you request, including video conferencing, healthcare solutions, ERP systems, etc.",
						},
						{
							main: "Communication",
							details:
								"To respond to inquiries, send updates about our products, services, and promotions, and manage customer service interactions.",
						},
						{
							main: "Customization",
							details:
								"To improve user experience and customize features based on usage patterns.",
						},
						{
							main: "Security & Compliance",
							details:
								"To ensure the security and integrity of our systems, protect against fraud, and comply with applicable laws and regulations, including HIPAA for healthcare-related services.",
						},
						{
							main: "Marketing",
							details:
								"To send promotional emails, newsletters, and special offers based on your preferences (you can opt-out at any time).",
						},
					],
				},
			],
		},
		{
			id: "how-we-protect-your-data",
			title: "How We Protect Your Data",
			content: [
				{
					type: "paragraph",
					text: "We take the security of your data seriously and implement several measures to safeguard it:",
				},
				{
					type: "list",
					items: [
						{
							main: "Encryption",
							details:
								"All personal and sensitive data are encrypted using industry-standard encryption protocols.",
						},
						{
							main: "Secure Servers",
							details:
								"Our data is stored on secure cloud servers, with access controlled by firewalls and multi-factor authentication.",
						},
						{
							main: "Data Access Control",
							details:
								"Only authorized personnel can access your personal data, and they do so under strict confidentiality agreements.",
						},
					],
				},
			],
		},
		{
			id: "sharing-your-information",
			title: "Sharing Your Information",
			content: [
				{
					type: "paragraph",
					text: "We do not sell, rent, or trade your personal information to third parties. However, we may share your information with trusted service providers and partners who assist us in delivering our services, such as cloud hosting services, payment processors, and analytics providers. These third parties are required to protect your data and use it only for the purpose of providing services on our behalf.",
				},
				{
					type: "paragraph",
					text: "In certain circumstances, we may disclose your information if required by law or in response to legal processes, such as a subpoena or court order.",
				},
			],
		},
		{
			id: "your-rights-and-choices",
			title: "Your Rights and Choices",
			content: [
				{
					type: "paragraph",
					text: "You have the following rights regarding your personal data:",
				},
				{
					type: "list",
					items: [
						{
							main: "Access",
							details:
								"You can request access to the personal information we hold about you.",
						},
						{
							main: "Correction",
							details:
								"You can request corrections to any inaccurate or incomplete information.",
						},
						{
							main: "Deletion",
							details:
								"You can request that we delete your personal information, subject to legal and contractual obligations.",
						},
						{
							main: "Opt-out",
							details:
								"You can opt-out of receiving promotional emails at any time by following the unsubscribe instructions in the emails or by contacting us directly.",
						},
						{
							main: "Data Portability",
							details:
								"You can request a copy of your personal data in a structured, machine-readable format.",
						},
					],
				},
				{
					type: "paragraph",
					text: "If you wish to exercise any of these rights, please contact us at.",
				},
			],
		},
		{
			id: "cookies-and-tracking-technologies",
			title: "Cookies and Tracking Technologies",
			content: [
				{
					type: "paragraph",
					text: "We use cookies and similar tracking technologies to enhance your experience on our website. These technologies allow us to remember your preferences, analyze site traffic, and improve functionality.",
				},
				{
					type: "paragraph",
					text: "You can control cookie settings through your browser preferences. However, disabling cookies may affect the functionality of our website and services.",
				},
			],
		},
		{
			id: "childrens-privacy",
			title: "Children’s Privacy",
			content: [
				{
					type: "paragraph",
					text: "Our services and products are not intended for children under the age of 13, and we do not knowingly collect or solicit personal information from children. If we learn that we have collected personal information from a child under 13, we will take steps to delete that information.",
				},
			],
		},
		{
			id: "third-party-links",
			title: "Third-Party Links",
			content: [
				{
					type: "paragraph",
					text: "Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party websites you visit.",
				},
			],
		},
		{
			id: "changes-to-this-privacy-policy",
			title: "Changes to This Privacy Policy",
			content: [
				{
					type: "paragraph",
					text: 'We may update this Privacy Policy from time to time. When we do, we will post the updated policy on our website and update the "Last Updated" date at the top of this page. We encourage you to review this policy periodically to stay informed about how we are protecting your information.',
				},
			],
		},
		{
			id: "contact-us",
			title: "Contact Us",
			content: [
				{
					type: "paragraph",
					text: "If you have any questions about this Privacy Policy or our data practices, please reach out to us on any of the channels provided on our <a href='/contact' className='text-red-500 font-semibold underline' title='Contact Us'>Contact page</a>.",
				},
			],
		},
	],
};

const termsOfService = {
	title: "Terms of Service",
	lastUpdated: "February 1, 2025",
	introduction:
		'These Terms of Service ("Terms") govern your use of the services provided by K-Lord Technologies ("we," "us," or "our") through our digital platforms, including UrCalls, NexaLife Care, Sharework Flow, and all other related software solutions and services (collectively, "Services"). By accessing or using our Services, you agree to these Terms, as well as our Privacy Policy. Please read these Terms carefully. If you do not agree with these Terms, you should not use our Services.',
	sections: [
		{
			id: "acceptance-of-terms",
			title: "1. Acceptance of Terms",
			content: [
				{
					type: "paragraph",
					text: "By accessing or using our Services, you agree to comply with and be bound by these Terms, including any modifications. If you do not agree to these Terms, you may not use the Services.",
				},
			],
		},
		{
			id: "changes-to-terms",
			title: "2. Changes to Terms",
			content: [
				{
					type: "paragraph",
					text: 'We may update these Terms from time to time. When we do, we will post the revised Terms on our website and update the "Last Updated" date at the top of this page. We encourage you to review these Terms periodically. Continued use of our Services after changes to the Terms will constitute acceptance of those changes.',
				},
			],
		},
		{
			id: "access-to-services",
			title: "3. Access to Services",
			content: [
				{
					type: "paragraph",
					text: "K-Lord Technologies grants you a non-exclusive, non-transferable, revocable license to access and use our Services, subject to your compliance with these Terms.",
				},
				{
					type: "list",
					items: [
						{
							main: "Account Creation",
							details:
								"To access certain Services, you may need to create an account. You agree to provide accurate, complete, and current information when creating your account and to keep your account information up to date.",
						},
						{
							main: "Account Security",
							details:
								"You are responsible for maintaining the confidentiality of your account login details, including your username and password. You agree to notify us immediately if you suspect any unauthorized use of your account.",
						},
					],
				},
			],
		},
		{
			id: "user-responsibilities",
			title: "4. User Responsibilities",
			content: [
				{
					type: "list",
					items: [
						{
							main: "Legal Compliance",
							details:
								"You agree to comply with all applicable laws, regulations, and rules in connection with your use of the Services, including, but not limited to, privacy, data protection, and intellectual property laws.",
						},
						{
							main: "Prohibited Activities",
							details: `You shall not use the Services for any unlawful, harmful, or unauthorized purpose, including but not limited to:<br><br><ul class='list-disc list-inside'><li>Engaging in any activity that violates any applicable law or regulation</li><br><li>Interfering with the operation of our Services or any security features</li><br><li>Distributing malware, viruses, or any harmful software</li><br><li>Attempting to access or use another user's account without authorization</li></ul>`,
						},
					],
				},
			],
		},
		{
			id: "privacy-and-data-security",
			title: "5. Privacy and Data Security",
			content: [
				{
					type: "paragraph",
					text: "Our Privacy Policy governs the collection, use, and protection of your personal data. By using our Services, you acknowledge that you have read and understood our Privacy Policy.",
				},
				{
					type: "list",
					items: [
						{
							main: "Data Storage and Protection",
							details:
								"We employ industry-standard security measures to protect your data. However, we cannot guarantee complete security due to the inherent risks of transmitting data over the internet.",
						},
						{
							main: "HIPAA Compliance",
							details:
								"For Services related to healthcare, we adhere to HIPAA compliance requirements to ensure the privacy and security of your health-related information.",
						},
					],
				},
			],
		},
		{
			id: "subscription-and-fees",
			title: "6. Subscription and Fees",
			content: [
				{
					type: "list",
					items: [
						{
							main: "Subscription Fees",
							details:
								"Some of our Services may require a subscription or other fees, including but not limited to UrCalls, NexaLife Care, and Sharework Flow. These fees will be clearly outlined when you sign up for or purchase a Service.",
						},
						{
							main: "Billing",
							details:
								"Subscriptions and fees will be billed on a recurring basis, as specified during the subscription process. You agree to provide accurate and up-to-date billing information.",
						},
						{
							main: "Cancellation and Refunds",
							details:
								"You may cancel your subscription at any time by following the cancellation procedure outlined in your account settings. Refunds, if applicable, will be processed in accordance with our refund policy.",
						},
					],
				},
			],
		},
		{
			id: "intellectual-property",
			title: "7. Intellectual Property",
			content: [
				{
					type: "list",
					items: [
						{
							main: "Ownership",
							details:
								"All content, software, and technology used to deliver the Services are the intellectual property of K-Lord Technologies or our licensors. You agree not to copy, modify, or distribute any part of the Services without express permission.",
						},
						{
							main: "License",
							details:
								"We grant you a limited, non-exclusive, and non-transferable license to access and use the Services for their intended purposes. You do not acquire any ownership rights to the Services or the underlying intellectual property.",
						},
					],
				},
			],
		},
		{
			id: "termination-and-suspension",
			title: "8. Termination and Suspension",
			content: [
				{
					type: "list",
					items: [
						{
							main: "Termination by You",
							details:
								"You may terminate your account at any time by following the account deactivation process in your settings or contacting us directly.",
						},
						{
							main: "Termination by Us",
							details:
								"We may suspend or terminate your access to the Services if we believe you have violated these Terms or engaged in any unlawful or harmful activities.",
						},
						{
							main: "Effects of Termination",
							details:
								"Upon termination of your account, your access to the Services will be revoked. You may lose access to any data or content associated with your account.",
						},
					],
				},
			],
		},
		{
			id: "disclaimers-and-limitation-of-liability",
			title: "9. Disclaimers and Limitation of Liability",
			content: [
				{
					type: "list",
					items: [
						{
							main: "Disclaimers",
							details:
								'The Services are provided "as-is" and "as available" without warranties of any kind, either express or implied. We do not guarantee the accuracy, reliability, or availability of the Services.',
						},
						{
							main: "Limitation of Liability",
							details:
								"To the fullest extent permitted by law, K-Lord Technologies shall not be liable for any direct, indirect, incidental, special, or consequential damages, including loss of profits, data, or business interruption, arising from the use or inability to use the Services.",
						},
					],
				},
			],
		},
		{
			id: "indemnification",
			title: "10. Indemnification",
			content: [
				{
					type: "paragraph",
					text: "You agree to indemnify and hold K-Lord Technologies, its affiliates, officers, employees, and partners harmless from any claims, losses, damages, liabilities, or expenses (including legal fees) arising from your use of the Services or your violation of these Terms.",
				},
			],
		},
		{
			id: "governing-law-and-dispute-resolution",
			title: "11. Governing Law and Dispute Resolution",
			content: [
				{
					type: "paragraph",
					text: "These Terms are governed by the laws of the State of Maryland, United States, without regard to its conflict of law principles. Any disputes arising from these Terms shall be resolved through binding arbitration in Maryland, except for injunctive relief, which may be sought in any court of competent jurisdiction.",
				},
			],
		},
		{
			id: "third-party-links",
			title: "12. Third-Party Links",
			content: [
				{
					type: "paragraph",
					text: "Our Services may contain links to third-party websites or services that are not owned or controlled by K-Lord Technologies. We are not responsible for the content or practices of any third-party websites or services. You access such third-party links at your own risk.",
				},
			],
		},
		{
			id: "force-majeure",
			title: "13. Force Majeure",
			content: [
				{
					type: "paragraph",
					text: "K-Lord Technologies shall not be liable for any failure or delay in performance of its obligations under these Terms due to events beyond its reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, labor disputes, or governmental actions.",
				},
			],
		},
		{
			id: "severability",
			title: "14. Severability",
			content: [
				{
					type: "paragraph",
					text: "If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and effect and enforceable.",
				},
			],
		},
		{
			id: "contact-us",
			title: "15. Contact Us",
			content: [
				{
					type: "paragraph",
					text: "If you have any questions about these Terms, please contact us through the information provided on our <a href='/contact' className='text-red-500 font-semibold underline' title='Contact Us'>Contact page</a>.",
				},
			],
		},
	],
};

const quickPrompts = [
	{
		id: 1,
		label: "I'm interested in enterprise-grade digital solutions",
	},
	{
		id: 2,
		label: "Tell me more about NexaLife Care for patient referrals",
	},
	{ id: 3, label: "I need a custom software solution for my organization" },
	{ id: 4, label: "I'm interested in UrCalls" },
	{ id: 5, label: "What ERP tools do you offer for scaling operations?" },
	{
		id: 6,
		label: "How can K-Lord help with healthcare & public sector solutions?",
	},
];

export { faqs, privacypolicy, termsOfService, quickPrompts };
