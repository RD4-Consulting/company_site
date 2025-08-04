import React from 'react';
import { Award, Users, Target, Lightbulb } from 'lucide-react';

interface TeamMember {
	name: string;
	role: string;
	image: string;
	bio: string;
}

interface Value {
	icon: React.ElementType;
	title: string;
	description: string;
}

interface Stats {
	number: string;
	label: string;
}

const AboutPage: React.FC = (): JSX.Element => {
	const values: Value[] = [
		{
			icon: Award,
			title: 'Excellence',
			description:
				'We strive for excellence in every project, delivering high-quality solutions that exceed expectations.',
		},
		{
			icon: Users,
			title: 'Collaboration',
			description:
				'We believe in close collaboration with our clients, working as partners to achieve shared goals.',
		},
		{
			icon: Target,
			title: 'Results-Driven',
			description:
				'Our focus is on delivering measurable results that drive real business value and growth.',
		},
		{
			icon: Lightbulb,
			title: 'Innovation',
			description:
				'We embrace cutting-edge technologies and innovative approaches to solve complex challenges.',
		},
	];

	const stats: Stats[] = [
		{ number: '200+', label: 'Projects Completed' },
		{ number: '50+', label: 'Happy Clients' },
		{ number: '8+', label: 'Years Experience' },
		{ number: '25+', label: 'Team Members' },
	];

	const teamMembers: TeamMember[] = [
		{
			name: 'Rob Downs',
			role: 'CEO & Founder',
			image:
				'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
			bio: '15+ years in software development and business strategy.',
		},
		{
			name: 'Timmy Wilmot',
			role: 'Tech Lead',
			image:
				'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=400',
			bio: 'Specializes in enterprise solutions and client relationships.',
		},
		{
			name: 'Alexander Gonzalez',
			role: 'Cloud Architect',
			image:
				'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
			bio: 'Expert in cloud architecture and digital transformation.',
		},
	];

	return (
		<main>
			<section className="py-20 bg-gradient-to-br from-red-800 to-red-950 text-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<h1 className="text-4xl sm:text-5xl font-bold mb-6">
							About RD4 Consulting
						</h1>
						<p className="text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
							We are a team of passionate software consultants dedicated to
							helping businesses harness the power of technology to achieve
							their goals and drive innovation.
						</p>
					</div>
				</div>
			</section>
			<section className="py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
								Our Story
							</h2>
							<div className="space-y-6 text-gray-600 leading-relaxed">
								<p>
									Founded in 2023, RD4 Consulting was born from a simple yet
									powerful vision: to bridge the gap between business needs and
									technology solutions. Our founders, experienced software
									engineers and business strategists, recognized that many
									companies struggled to effectively leverage technology for
									growth.
								</p>
								<p>
									Over the years, we've grown from a small team of consultants
									to a comprehensive software consulting firm, serving clients
									ranging from startups to Fortune 500 companies. Our success is
									built on a foundation of technical excellence, strategic
									thinking, and unwavering commitment to client satisfaction.
								</p>
								<p>
									Today, we continue to evolve and adapt to the ever-changing
									technology landscape, ensuring our clients stay ahead of the
									curve and achieve sustainable competitive advantages.
								</p>
							</div>
						</div>
						<div className="relative">
							<img
								src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
								alt="RD4 team members collaborating in a modern office environment"
								className="rounded-lg shadow-xl w-full h-auto"
								loading="lazy"
							/>
						</div>
					</div>
				</div>
			</section>
			<section className="py-20 bg-gray-50" aria-labelledby="values-heading">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2
							id="values-heading"
							className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
						>
							Our Core Values
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							These principles guide everything we do and define how we work
							with our clients and each other.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{values.map((value: Value, index) => {
							const IconComponent = value.icon;
							return (
								<div
									key={index}
									className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 text-center"
								>
									<div className="text-red-800 mb-4 flex justify-center">
										<IconComponent className="h-12 w-12" aria-hidden="true" />
									</div>
									<h3 className="text-xl font-semibold text-gray-900 mb-3">
										{value.title}
									</h3>
									<p className="text-gray-600 leading-relaxed">
										{value.description}
									</p>
								</div>
							);
						})}
					</div>
				</div>
			</section>
			<section
				className="py-20 bg-red-800 text-white"
				aria-labelledby="stats-heading"
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2
							id="stats-heading"
							className="text-3xl sm:text-4xl font-bold mb-4"
						>
							Our Impact in Numbers
						</h2>
						<p className="text-xl text-red-100 max-w-2xl mx-auto">
							These numbers represent the trust our clients place in us and the
							results we deliver together.
						</p>
					</div>
					<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
						{stats.map((stat: Stats, index: number) => (
							<div key={index} className="text-center">
								<div className="text-4xl sm:text-5xl font-bold text-red-300 mb-2">
									{stat.number}
								</div>
								<div className="text-red-100 font-medium">{stat.label}</div>
							</div>
						))}
					</div>
				</div>
			</section>
			<section className="py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
							Leadership Team
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Meet the experienced professionals who lead our consulting
							practice and drive our success.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
						{teamMembers.map((member: TeamMember, index: number) => (
							<div key={index} className="text-center">
								<img
									src={member.image}
									alt={`${member.name}, ${member.role} at RD4 Consulting`}
									className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-lg"
									loading="lazy"
								/>
								<h3 className="text-xl font-semibold text-gray-900 mb-2">
									{member.name}
								</h3>
								<p className="text-red-700 font-medium mb-3">{member.role}</p>
								<p className="text-gray-600">{member.bio}</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</main>
	);
};

export default AboutPage;
