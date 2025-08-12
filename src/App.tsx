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
									description="Manage your applications effectively."
								/>
							}
						/>
						<Route
							path="/services/data-migrations"
							element={
								<ServicePage
									title="Data Migrations"
									description="Seamlessly migrate your data with our expert services."
								/>
							}
						/>
						<Route
							path="/services/enhancements"
							element={
								<ServicePage
									title="Enhancements"
									description="Seamlessly enhance your systems with our expert services."
								/>
							}
						/>
						<Route
							path="/services/project-implementation"
							element={
								<ServicePage
									title="Project Implementation"
									description="Ensure successful project delivery with our implementation services."
								/>
							}
						/>
						<Route
							path="/services/system-upgrades"
							element={
								<ServicePage
									title="System Upgrades"
									description="Upgrade your systems seamlessly with our expert services."
								/>
							}
						/>
						<Route
							path="/services/system-integration"
							element={
								<ServicePage
									title="System Integration"
									description="Integrate your systems seamlessly with our expert services."
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
