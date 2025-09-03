interface ServicePageProps {
	title: string;
	description: string;
}

const ServicePage = ({ title, description }: ServicePageProps) => {
	return (
		<div>
			<section className="w-full bg-gradient-to-br from-red-800 via-red-900 to-red-950 text-white py-20 flex flex-col items-center justify-center">
				<div className="max-w-3xl w-full px-4 text-center">
					<h1 className="text-5xl font-bold mb-4">{title}</h1>
					<p className="text-xl mb-6">{description}</p>
				</div>
			</section>
			<section className="flex flex-col items-center justify-center mt-16 mb-20 px-4">
				<h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
					Take the Next Step
				</h2>
				<p className="text-lg text-gray-700 max-w-2xl mb-8 text-center">
					Ready to explore how we can help you succeed? Reach out to start a
					conversation about your goals and discover which of our services are
					the perfect fit for your needs. We're here to support you every step
					of the way.
				</p>
				<a
					href="/contact"
					className="inline-block px-10 py-4 bg-red-800 text-white text-lg font-semibold rounded-lg shadow hover:bg-red-900 transition-colors duration-200"
				>
					Connect with Us
				</a>
			</section>
		</div>
	);
};

export default ServicePage;
