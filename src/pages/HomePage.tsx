import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Cloud, Users, Zap } from 'lucide-react';

interface Service {
	icon: React.ElementType;
	title: string;
	description: string;
}

const HomePage: React.FC = (): JSX.Element => {
	const services: Service[] = [
		{
			icon: Code,
			title: 'Windchill Configurations',
			description:
				'Seamless configurations of PTC Windchill to accelerate your digital transformation and maximize product lifecycle value.',
		},
		{
			icon: Cloud,
			title: 'Windchill Customizations',
			description:
				'Expert-led customizations utilizing powerful backend capabilities, ensuring flexible and tailored solutions.',
		},
		{
			icon: Users,
			title: 'Windchill Integrations',
			description:
				'Integrate Windchill with ERP, CAD, and other enterprise systems to facilitate end to end digital engineering.',
		},
		{
			icon: Zap,
			title: 'Windchill Automations',
			description:
				'Leverage modern automation tools and techniques to deliver quickly and consistently within Agile methodologies.',
		},
	];

	return (
		<main>
			<section className="bg-gradient-to-br from-red-800 via-red-900 to-red-950 text-white py-20 lg:py-32">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
								Unlock the Power of your custom PLM Solution
								<span className="text-red-300 block">
									Your Trusted PTC Windchill Experts
								</span>
							</h1>
							<p className="text-xl text-red-100 mb-8 leading-relaxed">
								RD4 Consulting specializes in PTC Windchill
								solutions—configurations, customizations, integrations, and
								streamlined deliveries. Empower your product lifecycle
								management and drive innovation with our certified PTC
								consultants.
							</p>
							<div className="flex flex-col sm:flex-row gap-4">
								<Link
									to="/contact"
									className="inline-flex items-center justify-center px-8 py-4 bg-white text-red-800 font-semibold rounded-lg hover:bg-red-50 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-300"
									aria-label="Get started with Windchill and PTC services"
								>
									Get Started
									<ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
								</Link>
								<Link
									to="/about"
									className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-red-800 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-red-300"
									aria-label="Learn more about Windchill and PTC"
								>
									Learn More
								</Link>
							</div>
						</div>
						<div className="relative">
							<img
								src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
								alt="Windchill and PTC experts collaborating on a project"
								className="rounded-lg shadow-2xl w-full h-auto"
								loading="eager"
							/>
							<div className="absolute inset-0 bg-blue-700 opacity-20 rounded-lg"></div>
							<div className="absolute inset-0 bg-red-800 opacity-20 rounded-lg"></div>
						</div>
					</div>
				</div>
			</section>
			<section
				className="py-20 bg-gray-50"
				id="services"
				aria-labelledby="services-heading"
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2
							id="services-heading"
							className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
						>
							PTC Windchill PLM Services
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Accelerate your digital transformation with our full suite of PTC
							Windchill solutions—configuration, customization, integrations,
							streamlined deliveries.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{services.map((service: Service, index: number) => {
							const IconComponent = service.icon;
							return (
								<div
									key={index}
									className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 border border-gray-100 text-center"
								>
									<div className="text-red-800 mb-4 flex justify-center">
										<IconComponent className="h-12 w-12" aria-hidden="true" />
									</div>
									<h3 className="text-xl font-semibold text-gray-900 mb-3">
										{service.title}
									</h3>
									<p className="text-gray-600 leading-relaxed">
										{service.description}
									</p>
								</div>
							);
						})}
					</div>
				</div>
			</section>
			<section className="py-20 bg-red-800 text-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="text-3xl sm:text-4xl font-bold mb-6">
						Ready to Elevate Your Windchill Experience?
					</h2>
					<p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
						Connect with our PTC Windchill experts to discuss your PLM goals,
						streamline your processes, and unlock the full value of your PTC
						investment.
					</p>
					<Link
						to="/contact"
						className="inline-flex items-center justify-center px-8 py-4 bg-white text-red-800 font-semibold rounded-lg hover:bg-red-50 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-300"
						aria-label="Contact RD4 for Windchill and PTC services"
					>
						Contact Us Today
						<ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
					</Link>
				</div>
			</section>
		</main>
	);
};

export default HomePage;
