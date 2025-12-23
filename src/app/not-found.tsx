'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFound() {
	return (
		<div className='min-h-screen bg-background flex items-center justify-center px-4 overflow-hidden relative'>
			{/* Glitch Effect Content */}
			<div className='text-center relative z-10'>
				<motion.h1
					className='font-display text-9xl font-bold text-primary mb-4 glitch-text'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					data-text='404'
				>
					404
				</motion.h1>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2 }}
				>
					<h2 className='font-display text-2xl md:text-3xl font-bold mb-6 text-foreground tracking-tight'>
						SYSTEM ERROR: PAGE_NOT_FOUND
					</h2>
					<p className='text-muted-foreground font-body text-lg mb-12 max-w-md mx-auto'>
						The encrypted data you're looking for has been moved to another
						quadrant or deleted by the system administrator.
					</p>

					<div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
						<Link
							href='/'
							className='flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-display font-bold hover:box-glow-sm transition-all'
						>
							<Home size={18} />
							Return Home
						</Link>
						<Link
							href='/contact'
							className='flex items-center gap-2 px-8 py-3 font-display font-semibold text-primary border border-primary rounded hover:bg-primary/10 transition-colors border-glow'
						>
							<Home size={18} />
							Contact Me
						</Link>
					</div>
				</motion.div>
			</div>
		</div>
	);
}
