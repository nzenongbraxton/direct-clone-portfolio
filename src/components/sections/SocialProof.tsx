'use client';

import { motion } from 'framer-motion';
import { FadeIn } from '../animations/FadeIn';
import { Github, Linkedin, ExternalLink } from 'lucide-react';

const platforms = [
	{
		name: 'GitHub',
		icon: Github,
		href: 'https://github.com/nzenongbraxton',
		description: 'Open source contributions',
	},
	{
		name: 'LinkedIn',
		icon: Linkedin,
		href: 'https://linkedin.com/in/nzenongbraxton',
		description: 'Professional network',
	},
	{
		name: 'Upwork',
		icon: ExternalLink,
		href: 'https://upwork.com/freelancers/~0123799e5727e4490a',
		description: 'Freelance services',
	},
	{
		name: 'Freelancer',
		icon: ExternalLink,
		href: 'https://freelancer.com/u/nzenongbraxton',
		description: 'Project collaborations',
	},
];

export const SocialProof = () => {
	return (
		<section
			className='py-16 border-t border-border'
			aria-labelledby='social-proof-heading'
		>
			<div className='container px-4'>
				<FadeIn>
					<h2
						id='social-proof-heading'
						className='font-display text-2xl md:text-3xl font-bold text-center mb-4'
					>
						<span className='text-primary'>Find Me</span> On These Platforms
					</h2>
					<p className='text-muted-foreground text-center mb-12 max-w-2xl mx-auto'>
						Connect with me across professional and developer platforms
					</p>
				</FadeIn>

				<div className='grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto'>
					{platforms.map((platform, index) => (
						<FadeIn key={platform.name} delay={0.1 * index}>
							<motion.a
								href={platform.href}
								target='_blank'
								rel='noopener noreferrer'
								className='group flex flex-col items-center gap-3 p-6 bg-card border border-border rounded-lg hover:border-primary transition-all'
								whileHover={{ y: -4 }}
								aria-label={`Visit my ${platform.name} profile`}
							>
								<platform.icon className='w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors' />
								<span className='font-display font-semibold text-foreground'>
									{platform.name}
								</span>
								<span className='text-xs text-muted-foreground text-center'>
									{platform.description}
								</span>
							</motion.a>
						</FadeIn>
					))}
				</div>
			</div>
		</section>
	);
};
