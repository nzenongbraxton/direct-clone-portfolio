'use client';

import { motion } from 'framer-motion';
import { FadeIn } from '../animations/FadeIn';
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';

export const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission
		console.log('Form submitted:', formData);
	};

	return (
		<section id='contact' className='py-20 relative'>
			<div className='container px-4'>
				<FadeIn>
					<div className='text-center mb-16'>
						<p className='text-primary font-mono text-sm tracking-widest uppercase mb-2'>
							{"// Let's Connect"}
						</p>
						<h2 className='font-display text-3xl md:text-5xl font-bold text-glow'>
							Get In Touch
						</h2>
					</div>
				</FadeIn>

				<div className='max-w-4xl mx-auto grid md:grid-cols-2 gap-12'>
					{/* Contact Info */}
					<FadeIn direction='left'>
						<div className='space-y-8'>
							<div>
								<h3 className='font-display text-xl font-bold mb-4'>
									Ready to bring your ideas to life?
								</h3>
								<p className='text-muted-foreground'>
									I'm always interested in hearing about new projects and
									opportunities. Whether you have a question or just want to say
									hi, feel free to reach out!
								</p>
							</div>

							<div className='space-y-4'>
								<motion.a
									href='mailto:contact@nzenongbraxton.com'
									className='flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors group'
									whileHover={{ x: 5 }}
								>
									<div className='p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors'>
										<Mail className='text-primary' size={20} />
									</div>
									<div>
										<p className='text-xs text-muted-foreground font-mono uppercase'>
											Email
										</p>
										<p className='text-foreground'>contact@nzenongbraxton.com</p>
									</div>
								</motion.a>

								<motion.div
									className='flex items-center gap-4 p-4 bg-card border border-border rounded-lg'
									whileHover={{ x: 5 }}
								>
									<div className='p-3 bg-primary/10 rounded-lg'>
										<MapPin className='text-primary' size={20} />
									</div>
									<div>
										<p className='text-xs text-muted-foreground font-mono uppercase'>
											Location
										</p>
										<p className='text-foreground'>Available Worldwide</p>
									</div>
								</motion.div>
							</div>

							{/* Social Links */}
							<div>
								<p className='text-sm text-muted-foreground mb-4 font-mono'>
									// Find me on
								</p>
								<div className='flex gap-4'>
									{[
										{ icon: Github, href: '#', label: 'GitHub' },
										{ icon: Linkedin, href: '#', label: 'LinkedIn' },
										{ icon: Twitter, href: '#', label: 'Twitter' },
									].map(({ icon: Icon, href, label }) => (
										<motion.a
											key={label}
											href={href}
											aria-label={label}
											className='p-3 bg-card border border-border rounded-lg hover:border-primary hover:text-primary transition-all hover:box-glow-sm'
											whileHover={{ scale: 1.1, y: -2 }}
											whileTap={{ scale: 0.95 }}
										>
											<Icon size={20} />
										</motion.a>
									))}
								</div>
							</div>
						</div>
					</FadeIn>

					{/* Contact Form */}
					<FadeIn direction='right'>
						<form onSubmit={handleSubmit} className='space-y-6'>
							<div>
								<label
									htmlFor='name'
									className='block text-sm font-mono text-muted-foreground mb-2'
								>
									Name
								</label>
								<input
									type='text'
									id='name'
									value={formData.name}
									onChange={(e) =>
										setFormData({ ...formData, name: e.target.value })
									}
									className='w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-primary focus:box-glow-sm transition-all font-body'
									placeholder='Your name'
									required
								/>
							</div>

							<div>
								<label
									htmlFor='email'
									className='block text-sm font-mono text-muted-foreground mb-2'
								>
									Email
								</label>
								<input
									type='email'
									id='email'
									value={formData.email}
									onChange={(e) =>
										setFormData({ ...formData, email: e.target.value })
									}
									className='w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-primary focus:box-glow-sm transition-all font-body'
									placeholder='your.email@example.com'
									required
								/>
							</div>

							<div>
								<label
									htmlFor='message'
									className='block text-sm font-mono text-muted-foreground mb-2'
								>
									Message
								</label>
								<textarea
									id='message'
									value={formData.message}
									onChange={(e) =>
										setFormData({ ...formData, message: e.target.value })
									}
									rows={5}
									className='w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-primary focus:box-glow-sm transition-all font-body resize-none'
									placeholder='Tell me about your project...'
									required
								/>
							</div>

							<motion.button
								type='submit'
								className='w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground font-display font-semibold rounded-lg hover:bg-primary/90 transition-colors'
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
							>
								Send Message
								<Send size={18} />
							</motion.button>
						</form>
					</FadeIn>
				</div>
			</div>
		</section>
	);
};
