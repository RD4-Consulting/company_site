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
			<div className="flex justify-center mt-8">
				<a
					href="/contact"
					className="inline-block px-8 py-3 bg-red-800 text-white text-lg font-semibold rounded-lg shadow hover:bg-red-900 transition-colors duration-200"
				>
					Contact Us
				</a>
			</div>
		</div>
	);
};

export default ServicePage;
