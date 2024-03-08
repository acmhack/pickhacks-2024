import { ISponsor } from '@/interfaces/ISponsor';
import { accenture, tradebot } from './Images';

export const GoldSponsors: ISponsor[] = [
	// {
	// 	logo: tradebot.src,
	// 	link: '',
	// },
];

export const SilverSponsors: ISponsor[] = [
	// {
	// 	logo: tradebot.src,
	// 	link: '',
	// },
	// {
	// 	logo: tradebot.src,
	// 	link: '',
	// },
	// {
	// 	logo: tradebot.src,
	// 	link: '',
	// },
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
];
