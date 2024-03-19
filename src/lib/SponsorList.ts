import { ISponsor } from '@/interfaces/ISponsor';
import { accenture, tradebot, shelter, johndeere, sandia, nsc } from './Images';

export const GoldSponsors: ISponsor[] = [
	// {
	// 	logo: tradebot.src,
	// 	link: '',
	// },
];

export const SilverSponsors: ISponsor[] = [
	{
		logo: johndeere.src,
		link: 'https://www.deere.com/en/index.html', //no link in database
	},
	{
		logo: nsc.src,
		link: 'https://kcnsc.doe.gov/',
	},
];

export const BronzeSponsors: ISponsor[] = [
	{
		logo: tradebot.src,
		link: 'https://www.tradebot.com/',
	},
	{
		logo: accenture.src,
		link: 'https://boards.greenhouse.io/accenturefederalservices/jobs/4271718006?gh_jid=4271718006',
	},
	{
		logo: shelter.src,
		link: 'https://www.shelterinsurance.com/',
	},
	{
		logo: sandia.src,
		link: 'https://www.sandia.gov/careers/',
	},
];
