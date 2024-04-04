import { ISponsor } from '@/interfaces/ISponsor';
import { mosystems, mlh, standoutstickers, stuco } from './Images';

export const PartnerList: ISponsor[] = [
	//placeholder links
	{
		logo: mlh.src,
		link: 'https://mlh.io/'
	},
	{
		logo: mosystems.src,
		link: 'https://www.umsystem.edu/'
	},
	{
		logo: stuco.src,
		link: 'https://stuco.mst.edu/'
	}
];
