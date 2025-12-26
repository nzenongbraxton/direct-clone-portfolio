import React from 'react';

export const JsonLd = () => {
	const personData = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'NZENONG KOMBOU MC BRAXTON',
		alternateName: 'CYBER-LORD',
		jobTitle: 'Fullstack Software Engineer and Architect',
		url: 'https://nzenongbraxton.com',
		sameAs: [
			'https://github.com/nzenongbraxon',
			'https://linkedin.com/in/nzenongbraxton',
			'https://wa.me/237699596551',
			'https://t.me/nzenongbraxton',
			'https://twitter.com/nzenongbraxton',
			'https://instagram.com/nzenongbraxton1',
			'https://threads.com/@nzenongbraxton1',
			'https://gravatar.com/nzenongbraxton',
			'https://youtube.com/@nzenongbraxton',
			'https://linkedin.com/in/nzenongbraxton',
			'https://tiktok.com/@nzenongbraxton',
			'https://signal.me/#p/+237699596551',
		],
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'Buea',
			addressRegion: 'Southwest Region',
			addressCountry: 'Cameroon',
		},
		description:
			'An English-speaking Cameroonian Fullstack Software Engineer and Architect of 5+ years of experience (since 2020) and more proficient in Laravel - residing in Buea, attended the College of Technology - Buea (COT), tech advocate, tech tutor, mathematician, Congo enthusiasist, lover of politcs and the sole proprietor of Cyber Lord Tech Solutions LLC.',
		alumniOf: {
			'@type': 'EducationalOrganization',
			name: 'College of Technology - Buea (COT)',
		},
		parent: [
			{
				'@type': 'Person',
				name: 'Kombou Paul Brice',
			},
			{
				'@type': 'Person',
				name: 'Eposi Becke',
			},
		],
		worksFor: {
			'@type': 'Organization',
			name: 'Cyber Lord Tech Solutions LLC',
		},
	};

	const organizationData = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: 'Cyber Lord Tech Solutions LLC',
		url: 'https://nzenongbraxton.com', // Placeholder if different [cyberlord.tech]
		logo: 'https://nzenongbraxton.com/favicon.jpeg',
		founder: {
			'@type': 'Person',
			name: 'NZENONG KOMBOU MC BRAXTON',
			alternateName: 'CYBER-LORD',
		},
		description:
			'Software development and tech solutions provided by NZENONG KOMBOU MC BRAXTON (CYBER-LORD).',
	};

	return (
		<script
			type='application/ld+json'
			dangerouslySetInnerHTML={{
				__html: JSON.stringify([personData, organizationData]),
			}}
		/>
	);
};
