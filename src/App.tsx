import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

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
					</Routes>
				</div>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
