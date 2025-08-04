import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

interface ContactFormData {
	name: string;
	email: string;
	company: string;
	message: string;
}

interface FAQ {
	question: string;
	answer: string;
}

const ContactPage: React.FC = (): JSX.Element => {
	const [formData, setFormData] = useState<ContactFormData>({
		name: '',
		email: '',
		company: '',
		message: '',
	});
	const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

	const faqs: FAQ[] = [
		{
			question: 'How do you approach new consulting projects?',
			answer:
				'We start with a comprehensive discovery phase to understand your business needs, current technology stack, and goals. This allows us to create a tailored strategy and roadmap for your project.',
		},
		{
			question: 'What industries do you serve?',
			answer:
				'We work with clients across various industries including healthcare, finance, e-commerce, manufacturing, and technology startups. Our expertise adapts to different sector requirements.',
		},
		{
			question: 'Do you provide ongoing support after project completion?',
			answer:
				'Yes, we offer various support and maintenance packages to ensure your solutions continue to perform optimally. We also provide training for your team when needed.',
		},
		{
			question: 'How do you ensure project quality and timeline adherence?',
			answer:
				'We use agile methodologies, regular communication, and quality assurance processes. Our project managers provide weekly updates and maintain close collaboration with your team.',
		},
	];

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	): void => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log('Form submitted:', formData);
		setIsSubmitted(true);
		setTimeout(() => {
			setIsSubmitted(false);
			setFormData({ name: '', email: '', company: '', message: '' });
		}, 3000);
	};

	return (
		<main>
			<section className="py-20 bg-gradient-to-br from-red-800 to-red-950 text-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<h1 className="text-4xl sm:text-5xl font-bold mb-6">
							Get In Touch
						</h1>
						<p className="text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
							Ready to transform your business with expert software consulting?
							We'd love to hear about your project and discuss how we can help.
						</p>
					</div>
				</div>
			</section>
			<section className="py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
						<div>
							<h2 className="text-3xl font-bold text-gray-900 mb-8">
								Send us a Message
							</h2>
							{isSubmitted ? (
								<div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
									<CheckCircle
										className="h-16 w-16 text-green-600 mx-auto mb-4"
										aria-hidden="true"
									/>
									<h3 className="text-xl font-semibold text-green-800 mb-2">
										Thank you for your message!
									</h3>
									<p className="text-green-700">
										We've received your inquiry and will get back to you within
										24 hours.
									</p>
								</div>
							) : (
								<form onSubmit={handleSubmit} className="space-y-6" noValidate>
									<div>
										<label
											htmlFor="name"
											className="block text-sm font-medium text-gray-700 mb-2"
										>
											Full Name *
										</label>
										<input
											type="text"
											id="name"
											name="name"
											value={formData.name}
											onChange={handleInputChange}
											required
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-200"
											aria-describedby="name-error"
										/>
									</div>
									<div>
										<label
											htmlFor="email"
											className="block text-sm font-medium text-gray-700 mb-2"
										>
											Email Address *
										</label>
										<input
											type="email"
											id="email"
											name="email"
											value={formData.email}
											onChange={handleInputChange}
											required
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-200"
											aria-describedby="email-error"
										/>
									</div>
									<div>
										<label
											htmlFor="company"
											className="block text-sm font-medium text-gray-700 mb-2"
										>
											Company Name
										</label>
										<input
											type="text"
											id="company"
											name="company"
											value={formData.company}
											onChange={handleInputChange}
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-200"
										/>
									</div>
									<div>
										<label
											htmlFor="message"
											className="block text-sm font-medium text-gray-700 mb-2"
										>
											Message *
										</label>
										<textarea
											id="message"
											name="message"
											value={formData.message}
											onChange={handleInputChange}
											required
											rows={6}
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-200 resize-vertical"
											placeholder="Tell us about your project, goals, and how we can help..."
											aria-describedby="message-error"
										/>
									</div>
									<button
										type="submit"
										className="w-full inline-flex items-center justify-center px-8 py-4 bg-red-800 text-white font-semibold rounded-lg hover:bg-red-900 focus:outline-none focus:ring-4 focus:ring-red-300 transition-all duration-200 transform hover:scale-105"
										aria-label="Send message to RD4 Consulting"
									>
										Send Message
										<Send className="ml-2 h-5 w-5" aria-hidden="true" />
									</button>
								</form>
							)}
						</div>
						<div>
							<h2 className="text-3xl font-bold text-gray-900 mb-8">
								Contact Information
							</h2>
							<div className="space-y-8">
								<div className="flex items-start space-x-4">
									<div className="flex-shrink-0">
										<Mail
											className="h-6 w-6 text-red-800 mt-1"
											aria-hidden="true"
										/>
									</div>
									<div>
										<h3 className="text-lg font-semibold text-gray-900 mb-2">
											Email
										</h3>
										<a
											href="mailto:contact@rd4consulting.com"
											className="text-red-800 hover:text-red-900 transition-colors duration-200"
											aria-label="Email RD4 Consulting"
										>
											contact@rd4consulting.com
										</a>
										<p className="text-gray-600 mt-1">
											We typically respond within 24 hours
										</p>
									</div>
								</div>
								<div className="flex items-start space-x-4">
									<div className="flex-shrink-0">
										<Phone
											className="h-6 w-6 text-red-800 mt-1"
											aria-hidden="true"
										/>
									</div>
									<div>
										<h3 className="text-lg font-semibold text-gray-900 mb-2">
											Phone
										</h3>
										<a
											href="tel:+1-111-111-1111"
											className="text-red-800 hover:text-red-900 transition-colors duration-200"
											aria-label="Call RD4 Consulting"
										>
											+1 (111) 111-1111
										</a>
										<p className="text-gray-600 mt-1">
											Monday - Friday, 9:00 AM - 6:00 PM PST
										</p>
									</div>
								</div>
								<div className="flex items-start space-x-4">
									<div className="flex-shrink-0">
										<MapPin
											className="h-6 w-6 text-red-800 mt-1"
											aria-hidden="true"
										/>
									</div>
									<div>
										<h3 className="text-lg font-semibold text-gray-900 mb-2">
											Office
										</h3>
										<address className="text-gray-700 not-italic">
											123 Innovation Drive
											<br />
											Raleigh, NC 27601
											<br />
											United States
										</address>
									</div>
								</div>
							</div>
							<div className="mt-12">
								<img
									src="https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800"
									alt="RD4 Consulting office building in San Francisco"
									className="rounded-lg shadow-lg w-full h-64 object-cover"
									loading="lazy"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="py-20 bg-gray-50">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl font-bold text-gray-900 mb-4">
							Frequently Asked Questions
						</h2>
						<p className="text-xl text-gray-600">
							Common questions about our consulting services and process.
						</p>
					</div>
					<div className="space-y-8">
						{faqs.map((faq: FAQ, index: number) => (
							<details
								key={index}
								className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
							>
								<summary className="text-lg font-semibold text-gray-900 cursor-pointer hover:text-red-800 transition-colors duration-200">
									{faq.question}
								</summary>
								<p className="mt-4 text-gray-600 leading-relaxed">
									{faq.answer}
								</p>
							</details>
						))}
					</div>
				</div>
			</section>
		</main>
	);
};

export default ContactPage;
