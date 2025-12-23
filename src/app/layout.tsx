import type { Metadata } from 'next';
import { Orbitron, Rajdhani, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { JsonLd } from '@/components/JsonLd';

const orbitron = Orbitron({
	subsets: ['latin'],
	variable: '--font-display',
	weight: ['400', '500', '600', '700', '800', '900'],
});

const rajdhani = Rajdhani({
	subsets: ['latin'],
	variable: '--font-body',
	weight: ['300', '400', '500', '600', '700'],
});

const jetbrainsMono = JetBrains_Mono({
	subsets: ['latin'],
	variable: '--font-mono',
	weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
	title: {
		default:
			'NZENONG KOMBOU MC BRAXTON (CYBER-LORD) | Fullstack Software Engineer & Architect',
		template: '%s | NZENONG KOMBOU MC BRAXTON (CYBER-LORD)',
	},
	description:
		'I am a NZENONG KOMBOU MC BRAXTON (CYBER-LORD) an English-speaking Cameroonian Fullstack Software Engineer and Architect of 5+ years of experience (since 2020) and more proficient in Laravel - residing in Buea, attended the College of Technology - Buea (COT), tech advocate, tech tutor, mathematician, Congo enthusiasist, lover of politcs and the sole proprietor of Cyber Lord Tech Solutions LLC. My father, Kombou Paul Brice - is from the Bamilike clan of the Ménoua Division of the West Region of Cameroon and my mother, Eposi Becke - is from the Bakweri clan of the Fako Division of the Southwest Region of Cameroon.',
	keywords: [
		'PHP',
		'Laravel',
		'Software Architect',
		'Fullstack Developer',
		'Buea',
		'COT',
		'Cameroon',
		'Cyber Lord Tech Solutions',
		'Cyber-Lord',
		'Nzenong Braxton',
		'Nzenong Braxton (Cyber-Lord)'
	],
	authors: [{ name: 'NZENONG KOMBOU MC BRAXTON (CYBER-LORD)' }],
	creator: 'NZENONG KOMBOU MC BRAXTON (CYBER-LORD)',
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://nzenongbraxton.com',
		title:
			'NZENONG KOMBOU MC BRAXTON (CYBER-LORD) | Fullstack Software Engineer & Architect',
		description:
			'English-speaking Cameroonian Fullstack Software Engineer and Architect. Specialist in Laravel, based in Buea.',
		siteName: 'Cyber Lord Tech Solutions',
		images: [
			{
				url: '/favicon.jpeg',
				width: 1200,
				height: 630,
				alt: 'NZENONG KOMBOU MC BRAXTON (CYBER-LORD)',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'NZENONG KOMBOU MC BRAXTON (CYBER-LORD)',
		description: 'Fullstack Software Engineer & Architect | Laravel Specialist',
		images: ['/favicon.jpeg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${orbitron.variable} ${rajdhani.variable} ${jetbrainsMono.variable} antialiased min-h-screen bg-background font-body`}
			>
				<JsonLd />
				<ThemeProvider
					attribute='class'
					defaultTheme='dark'
					enableSystem
					disableTransitionOnChange
				>
					<TooltipProvider>
						{children}
						<Toaster />
						<Sonner />
					</TooltipProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
