import React from 'react';
import { Code2, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = (): JSX.Element => {
	return (
		<footer className="bg-black text-white" role="contentinfo">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div>
						<div className="flex items-center space-x-2 mb-4">
							<Code2 className="h-8 w-8 text-red-400" aria-hidden="true" />
							<span className="text-2xl font-bold">RD4</span>
						</div>
						<p className="text-gray-300 mb-4 leading-relaxed">
							Leading software consulting company specializing in digital
							transformation and custom development solutions for businesses of
							all sizes.
						</p>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-4">Contact Info</h3>
						<div className="space-y-3">
							<div className="flex items-center space-x-3">
								<Mail className="h-5 w-5 text-red-400" aria-hidden="true" />
								<a
									href="mailto:contact@rd4consulting.com"
									className="text-gray-300 hover:text-white transition-colors duration-200"
									aria-label="Email RD4 Consulting"
								>
									contact@rd4consulting.com
								</a>
							</div>
							<div className="flex items-center space-x-3">
								<Phone className="h-5 w-5 text-red-400" aria-hidden="true" />
								<a
									href="tel:+1-111-111-1111"
									className="text-gray-300 hover:text-white transition-colors duration-200"
									aria-label="Call RD4 Consulting"
								>
									+1 (111) 111-1111
								</a>
							</div>
							<div className="flex items-center space-x-3">
								<MapPin className="h-5 w-5 text-red-400" aria-hidden="true" />
								<span className="text-gray-300">Raleigh, NC</span>
							</div>
						</div>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-4">Services</h3>
						<ul className="space-y-2">
							<li>
								<span className="text-gray-300">
									Custom Software Development
								</span>
							</li>
							<li>
								<span className="text-gray-300">Digital Transformation</span>
							</li>
							<li>
								<span className="text-gray-300">Cloud Solutions</span>
							</li>
							<li>
								<span className="text-gray-300">Technology Consulting</span>
							</li>
						</ul>
					</div>
				</div>
				<div className="border-t border-gray-700 mt-8 pt-8 text-center">
					<p className="text-gray-400">
						© {new Date().getFullYear()} RD4 Consulting. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
