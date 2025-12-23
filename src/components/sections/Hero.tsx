import { motion } from 'framer-motion';
import Link from 'next/link';
import { FadeIn } from '../animations/FadeIn';
import { TypeWriter } from '../animations/TypeWriter';
import { GlowingParticles } from '../animations/GlowingParticles';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpeg';

export const Hero = () => {
	return (
		<section
			className='relative min-h-screen flex items-center justify-center overflow-hidden'
			aria-labelledby='hero-heading'
		>
			{/* Background Image with Overlay */}
			<div
				className='absolute inset-0 bg-cover bg-center bg-no-repeat'
				style={{
					backgroundImage: `url(${
						typeof heroBg === 'string' ? heroBg : heroBg.src
					})`,
				}}
				role='img'
				aria-label='Cyber Lord background artwork'
			/>
			<div className='absolute inset-0 bg-background/85 backdrop-blur-sm' />

			{/* Hero gradient overlay */}
			<div className='absolute inset-0 hero-gradient' />
			<GlowingParticles />

			{/* Scanline overlay */}
			<div
				className='absolute inset-0 scanline opacity-50'
				aria-hidden='true'
			/>

			{/* Content */}
			<div className='container relative z-10 px-4'>
				<div className='max-w-4xl mx-auto text-center'>
					{/* Greeting */}
					<FadeIn delay={0.2}>
						<p className='text-muted-foreground font-mono text-sm md:text-base mb-4 tracking-widest uppercase'>
							{'// Welcome to my digital realm'}
						</p>
					</FadeIn>

					{/* Main Title */}
					<FadeIn delay={0.4}>
						<h1
							id='hero-heading'
							className='font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight'
						>
							<span className='text-foreground'>I'm </span>
							<span className='text-glow text-primary' aria-label='Nzenong Braxton'>Nzenong Kombou</span>
						</h1>
					</FadeIn>

					<FadeIn delay={0.6}>
						<p className='font-display text-2xl md:text-4xl lg:text-5xl font-bold mb-6'>
							<span className='text-foreground' aria-label='Mc Braxton'>Mc Braxton</span>
						</p>
					</FadeIn>

					{/* Alias with typing effect */}
					<FadeIn delay={0.8}>
						<div className='flex items-center justify-center gap-3 mb-8'>
							<span className='text-muted-foreground font-mono'>alias:</span>
							<span className='font-display text-xl md:text-3xl text-glow-green text-accent font-bold'>
								<TypeWriter text='CYBER-LORD' delay={1500} speed={100} />
							</span>
						</div>
					</FadeIn>

					{/* Role */}
					<FadeIn delay={1}>
						<p className='text-lg md:text-xl text-muted-foreground font-body mb-8 max-w-2xl mx-auto'>
							<span className='text-primary'>
								Full Stack Developer & SEO Specialist
							</span>{' '}
							crafting digital experiences with code, creativity, and a passion
							for innovation
						</p>
					</FadeIn>

					{/* CTA Buttons */}
					<FadeIn delay={1.2}>
						<div className='flex flex-col sm:flex-row items-center justify-center gap-4 mb-12'>
							<motion.div
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<Link
									href='/projects'
									className='group relative inline-block px-8 py-3 font-display font-semibold text-primary-foreground bg-primary rounded overflow-hidden'
								>
									<span className='relative z-10'>View Projects</span>
									<motion.div
										className='absolute inset-0 bg-accent'
										initial={{ x: '-100%' }}
										whileHover={{ x: 0 }}
										transition={{ duration: 0.3 }}
									/>
								</Link>
							</motion.div>

							<motion.a
								href='/resume.pdf'
								download='Nzenong_Braxton_Resume.pdf'
								className='flex items-center gap-2 px-8 py-3 font-display font-semibold text-primary border border-primary rounded hover:bg-primary/10 transition-colors border-glow'
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<Download size={18} aria-hidden='true' />
								Download CV
							</motion.a>
						</div>
					</FadeIn>

					{/* Social Links */}
					<FadeIn delay={1.4}>
						<div className='flex items-center justify-center gap-6'>
							{[
								{
									icon: Github,
									href: 'https://github.com/braxtonnzenong',
									label: 'GitHub Profile',
								},
								{
									icon: Linkedin,
									href: 'https://linkedin.com/in/nzenongbraxton',
									label: 'LinkedIn Profile',
								},
								{
									icon: Mail,
									href: 'mailto:contact@nzenongbraxton.com',
									label: 'Send Email',
								},
							].map(({ icon: Icon, href, label }) => (
								<motion.a
									key={label}
									href={href}
									target={href.startsWith('mailto:') ? undefined : '_blank'}
									rel={
										href.startsWith('mailto:')
											? undefined
											: 'noopener noreferrer'
									}
									aria-label={label}
									className='p-3 text-muted-foreground hover:text-primary transition-colors border border-border rounded hover:border-primary hover:box-glow-sm'
									whileHover={{ scale: 1.1, y: -2 }}
									whileTap={{ scale: 0.95 }}
								>
									<Icon size={20} aria-hidden='true' />
								</motion.a>
							))}
						</div>
					</FadeIn>
				</div>
			</div>

			{/* Scroll Indicator */}
			<motion.div
				className='absolute bottom-8 left-1/2 -translate-x-1/2'
				animate={{ y: [0, 10, 0] }}
				transition={{ duration: 2, repeat: Infinity }}
				aria-hidden='true'
			>
				<ChevronDown className='text-primary/60' size={32} />
			</motion.div>
		</section>
	);
};
