import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServicePage from './components/ServicePage';

function App(): JSX.Element {
	return (
		<Router>
			<div className="min-h-screen flex flex-col">
				<Header />
				<div className="flex-grow">
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/about" element={<AboutPage />} />
						<Route path="/contact" element={<ContactPage />} />
						<Route
							path="/services/application-management"
							element={
								<ServicePage
									title="Application Management"
									description="Maximize your business value with our tailored application management services. We offer scalable, proactive support designed to optimize your operations and adapt to your evolving needs, ensuring your systems run smoothly and efficiently."
								/>
							}
						/>
						<Route
							path="/services/data-migrations"
							element={
								<ServicePage
									title="Data Migrations"
									description="Unlock new possibilities with seamless data and system migrations. Our experienced team ensures a smooth transition, leveraging deep business and technical expertise to enhance your data quality and system performance while minimizing disruption."
								/>
							}
						/>
						<Route
							path="/services/enhancements"
							element={
								<ServicePage
									title="Enhancements"
									description="Elevate your existing solutions with our enhancement services. We work closely with you to tailor your systems, ensuring they meet your unique business requirements and deliver lasting value."
								/>
							}
						/>
						<Route
							path="/services/project-implementation"
							element={
								<ServicePage
									title="Project Implementation"
									description="Achieve your business goals with confidence through our comprehensive project implementation services. We partner with your team to develop realistic, results-driven plans that align with your priorities and deliver measurable outcomes."
								/>
							}
						/>
						<Route
							path="/services/system-upgrades"
							element={
								<ServicePage
									title="System Upgrades"
									description="Empower your business with expertly managed system upgrades. Our team leverages deep expertise in PTC's PLM suite, including Windchill and FlexPLM, to deliver upgrades that are tailored to your needs, minimize risk, and maximize system performance."
								/>
							}
						/>
						<Route
							path="/services/system-integration"
							element={
								<ServicePage
									title="System Integration"
									description="Connect your business like never before with our system integration services. We specialize in unifying data and processes across platforms, enabling you to make smarter decisions and drive innovation."
								/>
							}
						/>
					</Routes>
				</div>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
