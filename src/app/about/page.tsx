'use client';

import { Layout } from '@/components/layout/Layout';
import { Experience } from '@/components/sections/Experience';
import { FadeIn } from '@/components/animations/FadeIn';
import { motion } from 'framer-motion';
import { Code, Globe, Zap, Award } from 'lucide-react';

const stats = [
	{ icon: Code, value: '50+', label: 'Projects Completed' },
	{ icon: Globe, value: '10+', label: 'Countries Served' },
	{ icon: Zap, value: '5+', label: 'Years Experience' },
	{ icon: Award, value: '100%', label: 'Client Satisfaction' },
];

const AboutPage = () => {
	return (
		<Layout>
			<article className='pt-32 pb-16'>
				<div className='container px-4'>
					<FadeIn>
						<header className='text-center mb-16'>
							<p className='text-primary font-mono text-sm mb-4 tracking-widest uppercase'>
								{'// About Me'}
							</p>
							<h1 className='font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6'>
								The <span className='text-glow text-primary'>Developer</span>{' '}
								Behind the Code
							</h1>
							<p className='text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed'>
								I'm Nzenong Kombou Mc Braxton (Cyber-Lord), a passionate Full Stack Developer
								from Cameroon. With expertise spanning frontend frameworks,
								backend systems, and mobile development, I transform complex
								ideas into elegant, scalable digital solutions.
							</p>
						</header>
					</FadeIn>

					{/* Stats Section */}
					<div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-20'>
						{stats.map((stat, index) => (
							<FadeIn key={stat.label} delay={0.1 * index}>
								<motion.div
									className='p-6 bg-card border border-border rounded-lg text-center hover:border-primary transition-colors'
									whileHover={{ y: -4 }}
								>
									<stat.icon className='w-8 h-8 text-primary mx-auto mb-4' />
									<p className='font-display text-3xl font-bold text-foreground mb-2'>
										{stat.value}
									</p>
									<p className='text-sm text-muted-foreground'>{stat.label}</p>
								</motion.div>
							</FadeIn>
						))}
					</div>

					{/* Bio Section */}
					<FadeIn>
						<section
							className='max-w-4xl mx-auto mb-20'
							aria-labelledby='bio-heading'
						>
							<h2
								id='bio-heading'
								className='font-display text-2xl font-bold mb-6 text-primary'
							>
								My Journey
							</h2>
							<div className='prose prose-invert max-w-none space-y-4 text-muted-foreground'>
								<p>
									Starting my journey as a self-taught developer, I've grown to
									master multiple programming languages and frameworks. My
									passion lies in creating seamless user experiences while
									ensuring robust backend architectures.
								</p>
								<p>
									As "Cyber-Lord," I embrace the ever-evolving tech landscape,
									continuously learning and adapting to new technologies. My
									expertise spans from crafting pixel-perfect frontends with
									React and Tailwind CSS to building scalable backends with
									Laravel and Node.js.
								</p>
								<p>
									Beyond coding, I'm passionate about mentoring aspiring
									developers and contributing to the tech community in Cameroon
									and beyond.
								</p>
							</div>
						</section>
					</FadeIn>
				</div>
			</article>
			<Experience />
		</Layout>
	);
};

export default AboutPage;
