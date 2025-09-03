import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServicePage from './components/ServicePage';
import ScrollToTop from './components/ScrollToTop';

function App(): JSX.Element {
	return (
		<Router>
			<ScrollToTop />
			<div className="min-h-screen flex flex-col">
				<Header />
				<div className="flex-grow">
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/about" element={<AboutPage />} />
						<Route path="/contact" element={<ContactPage />} />

						<Route
							path="/services/windchill-configurations"
							element={
								<ServicePage
									title="Windchill Configurations"
									description="At RD4, we specialize in configuring PTC Windchill to fit your unique business needs. Our team follows industry best practices and proven methodologies to ensure a seamless and robust setup. We work closely with your stakeholders to align system capabilities with your goals, maximizing the value of your PLM investment. Let us help you accelerate your digital transformation and drive operational excellence."
								/>
							}
						/>
						<Route
							path="/services/windchill-customizations"
							element={
								<ServicePage
									title="Windchill Customizations"
									description="Unlock the full potential of Windchill with our expert customizations. We leverage advanced backend capabilities to deliver solutions that are flexible, scalable, and tailored to your specific requirements. Our consultants collaborate with you to design enhancements that streamline workflows and improve user experience. With RD4, your Windchill environment evolves as your business grows."
								/>
							}
						/>
						<Route
							path="/services/windchill-integrations"
							element={
								<ServicePage
									title="Windchill Integrations"
									description="Seamlessly connect Windchill with ERP, CAD, and other enterprise systems to enable true end-to-end digital engineering. Our integration services ensure data flows securely and efficiently across your technology landscape, eliminating silos and manual work. We design integrations that support your business processes and future growth. Experience the benefits of a unified, intelligent ecosystem with RD4."
								/>
							}
						/>
						<Route
							path="/services/windchill-automations"
							element={
								<ServicePage
									title="Windchill Automations"
									description="Transform your operations with Windchill automations designed for speed and reliability. We implement modern automation tools and techniques to streamline repetitive tasks, reduce errors, and boost productivity. Our team works within Agile frameworks to deliver solutions quickly and adapt to your evolving needs. Let RD4 help you achieve consistent, high-quality results through intelligent automation."
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
