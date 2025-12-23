'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Terminal } from 'lucide-react';

const navLinks = [
	{ name: 'Home', href: '/' },
	{ name: 'Projects', href: '/projects' },
	{ name: 'About', href: '/about' },
	{ name: 'Team', href: '/team' },
	{ name: 'Contact', href: '/contact' },
];

export const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<motion.header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled
					? 'bg-background/80 backdrop-blur-lg border-b border-border'
					: ''
			}`}
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.5 }}
			role='banner'
		>
			<nav className='container mx-auto px-4 py-4' aria-label='Main navigation'>
				<div className='flex items-center justify-between'>
					{/* Logo */}
					<motion.div whileHover={{ scale: 1.05 }}>
						<Link
							href='/'
							className='flex items-center gap-2 font-display font-bold text-xl'
							aria-label='Nzenong Braxton - Home'
						>
							<Terminal className='text-primary' size={24} aria-hidden='true' />
							<span className='text-glow text-primary'>CYBER</span>
							<span className='text-foreground'>-LORD</span>
						</Link>
					</motion.div>

					{/* Desktop Nav */}
					<div className='hidden md:flex items-center gap-8'>
						{navLinks.map((link) => (
							<motion.div key={link.name} whileHover={{ y: -2 }}>
								<Link
									href={link.href}
									className={`relative font-mono text-sm transition-colors ${
										pathname === link.href
											? 'text-primary'
											: 'text-muted-foreground hover:text-primary'
									}`}
									aria-current={pathname === link.href ? 'page' : undefined}
								>
									{link.name}
									{pathname === link.href && (
										<motion.span
											className='absolute -bottom-1 left-0 w-full h-0.5 bg-primary'
											layoutId='navbar-indicator'
										/>
									)}
								</Link>
							</motion.div>
						))}
						<motion.a
							href='/resume.pdf'
							download='Nzenong_Braxton_Resume.pdf'
							className='px-4 py-2 font-display font-semibold text-sm text-primary border border-primary rounded hover:bg-primary/10 transition-colors'
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							Download CV
						</motion.a>
					</div>

					{/* Mobile Menu Button */}
					<motion.button
						className='md:hidden p-2 text-foreground'
						onClick={() => setIsOpen(!isOpen)}
						whileTap={{ scale: 0.95 }}
						aria-label={isOpen ? 'Close menu' : 'Open menu'}
						aria-expanded={isOpen}
						aria-controls='mobile-nav'
					>
						{isOpen ? (
							<X size={24} aria-hidden='true' />
						) : (
							<Menu size={24} aria-hidden='true' />
						)}
					</motion.button>
				</div>

				{/* Mobile Nav */}
				<AnimatePresence>
					{isOpen && (
						<motion.div
							id='mobile-nav'
							className='md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border'
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: 'auto' }}
							exit={{ opacity: 0, height: 0 }}
							transition={{ duration: 0.3 }}
						>
							<div className='container px-4 py-6 flex flex-col gap-4'>
								{navLinks.map((link, index) => (
									<motion.div
										key={link.name}
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: index * 0.1 }}
									>
										<Link
											href={link.href}
											className={`block font-mono text-lg py-2 transition-colors ${
												pathname === link.href
													? 'text-primary'
													: 'text-muted-foreground hover:text-primary'
											}`}
											onClick={() => setIsOpen(false)}
											aria-current={pathname === link.href ? 'page' : undefined}
										>
											<span className='text-primary mr-2' aria-hidden='true'>
												//
											</span>
											{link.name}
										</Link>
									</motion.div>
								))}
								<motion.a
									href='/resume.pdf'
									download='Nzenong_Braxton_Resume.pdf'
									className='mt-4 px-4 py-3 font-display font-semibold text-center text-primary border border-primary rounded hover:bg-primary/10 transition-colors'
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.5 }}
									onClick={() => setIsOpen(false)}
								>
									Download CV
								</motion.a>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</nav>
		</motion.header>
	);
};
