import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavItem {
	path: string;
	label: string;
}

interface ServiceItem {
	path: string;
	label: string;
}

const Header: React.FC = (): JSX.Element => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const [isServicesOpen, setIsServicesOpen] = useState<boolean>(false);
	const [isMobileServicesOpen, setIsMobileServicesOpen] =
		useState<boolean>(false);
	const location = useLocation();
	const servicesRef = useRef<HTMLDivElement>(null);

	const toggleMenu = (): void => {
		setIsMenuOpen(!isMenuOpen);
	};

	const toggleServices = (): void => {
		setIsServicesOpen(!isServicesOpen);
	};

	const toggleMobileServices = (): void => {
		setIsMobileServicesOpen(!isMobileServicesOpen);
	};

	const isActiveLink = (path: string): boolean => {
		return location.pathname === path;
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				servicesRef.current &&
				!servicesRef.current.contains(event.target as Node)
			) {
				setIsServicesOpen(false);
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	const navItems: NavItem[] = [
		{ path: '/', label: 'Home' },
		{ path: '/about', label: 'About' },
		{ path: '/contact', label: 'Contact' },
	];

	const serviceItems: ServiceItem[] = [
		{
			path: '/services/windchill-configurations',
			label: 'Windchill Configurations',
		},
		{
			path: '/services/windchill-customizations',
			label: 'Windchill Customizations',
		},
		{
			path: '/services/windchill-integrations',
			label: 'Windchill Integrations',
		},
		{
			path: '/services/windchill-automations',
			label: 'Windchill Automations',
		},
	];

	const isServicesActive = serviceItems.some((item) => isActiveLink(item.path));

	return (
		<header className="bg-white shadow-md sticky top-0 z-50">
			<nav
				className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
				role="navigation"
				aria-label="Main navigation"
			>
				<div className="flex justify-between items-center h-16">
					<Link
						to="/"
						className="flex items-center space-x-2 text-2xl font-bold text-red-800 hover:text-red-900 transition-colors duration-200"
						aria-label="RD4 Consulting - Home"
					>
						<img
							src="https://rd4.s3.us-east-1.amazonaws.com/logos/rd4_logo.png"
							alt="RD4 Logo"
							className="h-20 w-auto"
						/>
					</Link>
					<div className="hidden md:flex space-x-8 items-center">
						{navItems.map((item) => (
							<Link
								key={item.path}
								to={item.path}
								className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
									isActiveLink(item.path)
										? 'text-red-800 bg-red-50 border-b-2 border-red-800'
										: 'text-gray-700 hover:text-red-800 hover:bg-gray-50'
								}`}
								aria-current={isActiveLink(item.path) ? 'page' : undefined}
							>
								{item.label}
							</Link>
						))}
						<div className="relative" ref={servicesRef}>
							<button
								onClick={toggleServices}
								className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
									isServicesActive
										? 'text-red-800 bg-red-50 border-b-2 border-red-800'
										: 'text-gray-700 hover:text-red-800 hover:bg-gray-50'
								}`}
								aria-expanded={isServicesOpen}
								aria-haspopup="true"
							>
								Services
								<ChevronDown
									className={`ml-1 h-4 w-4 transition-transform duration-200 ${
										isServicesOpen ? 'rotate-180' : ''
									}`}
									aria-hidden="true"
								/>
							</button>
							{isServicesOpen && (
								<div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
									{serviceItems.map((service) => (
										<Link
											key={service.path}
											to={service.path}
											onClick={() => setIsServicesOpen(false)}
											className={`block px-4 py-2 text-sm transition-colors duration-200 ${
												isActiveLink(service.path)
													? 'text-red-800 bg-red-50'
													: 'text-gray-700 hover:text-red-800 hover:bg-gray-50'
											}`}
										>
											{service.label}
										</Link>
									))}
								</div>
							)}
						</div>
					</div>
					<div className="md:hidden">
						<button
							onClick={toggleMenu}
							className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-red-800 hover:bg-gray-50 transition-colors duration-200"
							aria-expanded={isMenuOpen}
							aria-controls="mobile-menu"
							aria-label="Toggle navigation menu"
						>
							{isMenuOpen ? (
								<X className="h-6 w-6" aria-hidden="true" />
							) : (
								<Menu className="h-6 w-6" aria-hidden="true" />
							)}
						</button>
					</div>
				</div>
				{isMenuOpen && (
					<div className="md:hidden" id="mobile-menu">
						<div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
							{navItems.map((item) => (
								<Link
									key={item.path}
									to={item.path}
									onClick={() => setIsMenuOpen(false)}
									className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
										isActiveLink(item.path)
											? 'text-red-800 bg-red-50'
											: 'text-gray-700 hover:text-red-800 hover:bg-gray-50'
									}`}
									aria-current={isActiveLink(item.path) ? 'page' : undefined}
								>
									{item.label}
								</Link>
							))}
							{/* Mobile Services Dropdown */}
							<div>
								<button
									onClick={toggleMobileServices}
									className={`flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
										isServicesActive
											? 'text-red-800 bg-red-50'
											: 'text-gray-700 hover:text-red-800 hover:bg-gray-50'
									}`}
									aria-expanded={isMobileServicesOpen}
								>
									Services
									<ChevronDown
										className={`h-5 w-5 transition-transform duration-200 ${
											isMobileServicesOpen ? 'rotate-180' : ''
										}`}
										aria-hidden="true"
									/>
								</button>
								{isMobileServicesOpen && (
									<div className="ml-4 mt-1 space-y-1">
										{serviceItems.map((service) => (
											<Link
												key={service.path}
												to={service.path}
												onClick={() => {
													setIsMenuOpen(false);
													setIsMobileServicesOpen(false);
												}}
												className={`block px-3 py-2 rounded-md text-sm transition-colors duration-200 ${
													isActiveLink(service.path)
														? 'text-red-800 bg-red-50'
														: 'text-gray-600 hover:text-red-800 hover:bg-gray-50'
												}`}
											>
												{service.label}
											</Link>
										))}
									</div>
								)}
							</div>
						</div>
					</div>
				)}
			</nav>
		</header>
	);
};

export default Header;
