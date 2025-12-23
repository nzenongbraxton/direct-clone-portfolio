'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
	Terminal,
	Phone,
	MapPin,
	Mail,
	MessageCircle,
	Send,
	Download,
} from 'lucide-react';

const contactInfo = {
	phones: ['+237 699 59 65 51', '+237 650 90 16 43'],
	whatsapp: { number: '+237 699 59 65 51', link: 'https://wa.me/237699596551' },
	telegram: { handle: '@237679710344', link: 'https://t.me/237679710344' },
	address: 'Great Soppo, Buea - Cameroon',
	emails: {
		personal: 'braxtonnzenong@gmail.com',
		professional: 'contact@nzenongbraxton.com',
	},
};

const footerLinks = [
	{ name: 'Home', href: '/' },
	{ name: 'Projects', href: '/projects' },
	{ name: 'About', href: '/about' },
	{ name: 'Team', href: '/team' },
	{ name: 'Contact', href: '/contact' },
];

export const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='bg-card border-t border-border' role='contentinfo'>
			<div className='container px-4 py-16'>
				<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-12'>
					{/* Brand */}
					<div>
						<Link
							href='/'
							className='flex items-center gap-2 font-display font-bold text-xl mb-6'
							aria-label='Nzenong Braxton - Home'
						>
							<Terminal className='text-primary' size={24} aria-hidden='true' />
							<span className='text-primary'>CYBER</span>
							<span className='text-foreground'>-LORD</span>
						</Link>
						<p className='text-muted-foreground text-sm mb-6'>
							Full Stack Developer & SEO Specialist crafting premium digital
							experiences from Cameroon.
						</p>
						<motion.a
							href='/resume.pdf'
							download='Nzenong_Braxton_Resume.pdf'
							className='inline-flex items-center gap-2 px-4 py-2 font-display font-semibold text-sm text-primary border border-primary rounded hover:bg-primary/10 transition-colors'
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
						>
							<Download size={16} aria-hidden='true' />
							Download CV
						</motion.a>
					</div>

					{/* Quick Links */}
					<nav aria-label='Footer navigation'>
						<h2 className='font-display font-bold text-foreground mb-6'>
							Quick Links
						</h2>
						<ul className='space-y-3'>
							{footerLinks.map((link) => (
								<li key={link.name}>
									<Link
										href={link.href}
										className='text-muted-foreground hover:text-primary transition-colors text-sm'
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</nav>

					{/* Contact Info */}
					<div>
						<h2 className='font-display font-bold text-foreground mb-6'>
							Contact
						</h2>
						<address className='not-italic space-y-4'>
							{/* Phones */}
							<div className='flex items-start gap-3'>
								<Phone
									size={18}
									className='text-primary mt-1 flex-shrink-0'
									aria-hidden='true'
								/>
								<div className='text-sm'>
									{contactInfo.phones.map((phone) => (
										<a
											key={phone}
											href={`tel:${phone.replace(/\s/g, '')}`}
											className='block text-muted-foreground hover:text-primary transition-colors'
										>
											{phone}
										</a>
									))}
								</div>
							</div>

							{/* WhatsApp */}
							<div className='flex items-center gap-3'>
								<MessageCircle
									size={18}
									className='text-primary flex-shrink-0'
									aria-hidden='true'
								/>
								<a
									href={contactInfo.whatsapp.link}
									target='_blank'
									rel='noopener noreferrer'
									className='text-sm text-muted-foreground hover:text-primary transition-colors'
								>
									WhatsApp
								</a>
							</div>

							{/* Telegram */}
							<div className='flex items-center gap-3'>
								<Send
									size={18}
									className='text-primary flex-shrink-0'
									aria-hidden='true'
								/>
								<a
									href={contactInfo.telegram.link}
									target='_blank'
									rel='noopener noreferrer'
									className='text-sm text-muted-foreground hover:text-primary transition-colors'
								>
									Telegram
								</a>
							</div>

							{/* Address */}
							<div className='flex items-center gap-3'>
								<MapPin
									size={18}
									className='text-primary flex-shrink-0'
									aria-hidden='true'
								/>
								<a
									href='https://maps.app.goo.gl/tMyyv1goq63yYQWq5'
									target='_blank'
									className='text-muted-foreground hover:text-primary transition-colors break-all'
								>
									{contactInfo.address}
								</a>
							</div>
						</address>
					</div>

					{/* Email */}
					<div>
						<h2 className='font-display font-bold text-foreground mb-6'>
							Email
						</h2>
						<div className='space-y-4'>
							<div className='flex items-start gap-3'>
								<Mail
									size={18}
									className='text-primary mt-1 flex-shrink-0'
									aria-hidden='true'
								/>
								<div className='text-sm'>
									<p className='text-xs text-muted-foreground mb-1'>Personal</p>
									<a
										href={`mailto:${contactInfo.emails.personal}`}
										className='text-muted-foreground hover:text-primary transition-colors break-all'
									>
										{contactInfo.emails.personal}
									</a>
								</div>
							</div>
							<div className='flex items-start gap-3'>
								<Mail
									size={18}
									className='text-primary mt-1 flex-shrink-0'
									aria-hidden='true'
								/>
								<div className='text-sm'>
									<p className='text-xs text-muted-foreground mb-1'>
										Professional
									</p>
									<a
										href={`mailto:${contactInfo.emails.professional}`}
										className='text-muted-foreground hover:text-primary transition-colors break-all'
									>
										{contactInfo.emails.professional}
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className='mt-12 pt-8 border-t border-border'>
					<div className='flex flex-col md:flex-row items-center justify-between gap-4'>
						<p className='text-sm text-muted-foreground font-mono'>
							© {currentYear} Nzenong Kombou Mc Braxton. All rights reserved.
						</p>
						<motion.div whileHover={{ y: -2 }}>
							<Link
								href='/'
								className='text-sm text-muted-foreground hover:text-primary transition-colors font-mono'
							>
								Back to top ↑
							</Link>
						</motion.div>
					</div>
				</div>
			</div>
		</footer>
	);
};
