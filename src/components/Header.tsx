import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';

interface NavItem {
	path: string;
	label: string;
}

const Header: React.FC = (): JSX.Element => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const location = useLocation();

	const toggleMenu = (): void => {
		setIsMenuOpen(!isMenuOpen);
	};

	const isActiveLink = (path: string): boolean => {
		return location.pathname === path;
	};

	const navItems: NavItem[] = [
		{ path: '/', label: 'Home' },
		{ path: '/about', label: 'About' },
		{ path: '/contact', label: 'Contact' },
	];

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
						<Code2 className="h-8 w-8" aria-hidden="true" />
						<span>RD4</span>
					</Link>
					<div className="hidden md:flex space-x-8">
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
						</div>
					</div>
				)}
			</nav>
		</header>
	);
};

export default Header;
