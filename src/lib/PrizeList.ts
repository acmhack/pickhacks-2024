import { IPrize } from '@/interfaces/IPrize';
import { metaquest3, switcholed, sennheiser, keyboard, giftcard, projector, watch } from './Images';

export const PrizeList: IPrize[] = [
	{
		id: 1,
		img: metaquest3.src,
		title: 'Overall 1st Place',
		description: '4x Meta Quest 3 128GB Bundle',
		link: 'https://www.amazon.com/Meta-Quest-128GB-Breakthrough-Reality-3/dp/B0C8VKH1ZH?th=1',
	},
	{
		id: 2,
		img: switcholed.src,
		title: ' Overall 2nd Place',
		description: '4x Nintendo Switch OLED',
		link: 'https://www.amazon.com/Nintendo-Switch-OLED-Model-Neon-Joy/dp/B098RL6SBJ/ref=sr_1_3?crid=B1XOO2T88DSA&keywords=Switch+oled&qid=1707840821&sprefix=switch+oled%2Caps%2C98&sr=8-3',
	},
	{
		id: 3,
		img: sennheiser.src,
		title: 'Overall 3rd Place',
		description: '4x Sennheiser Accentum BT Headphones',
		link: 'https://www.amazon.com/Sennheiser-Consumer-Audio-Bluetooth-Headphones/dp/B0CHFJJNZ7/ref=sr_1_3?crid=1UCWTASC7O7E4&keywords=sennheiser%2Baccentum%2Bwireless&qid=1707013862&sprefix=sennheiser%2Baccentum%2Bwireless%2Caps%2C97&sr=8-3&th=1',
	},
	{
		id: 4,
		img: keyboard.src,
		title: 'Best Hardware Hack',
		description: '4x Logitech Keyboard',
		link: 'https://www.amazon.com/Logitech-Advanced-Wireless-Illuminated-Keyboard/dp/B07S92QBCJ/ref=sr_1_3?crid=2N0SF0AG64Z5E&keywords=logitech%2Bmx%2Bkeys%2Badvanced%2Bwireless%2Billuminated%2Bkeyboard&qid=1677533896&s=electronics&sprefix=logitech%2Bmx%2Bkeys%2Celectronics%2C156&sr=1-3&th=1',
	},
	{
		id: 5,
		img: giftcard.src,
		title: "Best Women's Hack",
		description: '4x $50 Amazon Gift Card',
		link: 'https://www.amazon.com/gift-cards/b?ie=UTF8&node=2238192011',
	},
	{
		id: 6,
		img: giftcard.src,
		title: 'Community Vote',
		description: '4x $50 Amazon Gift Card',
		link: 'https://www.amazon.com/gift-cards/b?ie=UTF8&node=2238192011',
	},
	{
		id: 7,
		img: watch.src,
		title: 'Best Solo Hack',
		description: '1x Fitbit Charge 5',
		link: 'https://www.amazon.com/dp/B09BXDZ9BD?starsLeft=1&ref_=cm_sw_r_cso_cp_apin_dp_9Z6AEKZ89TV9336QMXFM',
	},
	{
		id: 8,
		img: projector.src,
		title: 'Best Beginner Hack',
		description: '4x TMY Mini Projector',
		link: 'https://www.amazon.com/TMY-Projector-Supported-Projection-Compatible/dp/B082F13J55/ref=sr_1_1_sspa?crid=2AN5UDLAU3OY4&keywords=tmy+mini+projector&qid=1707840712&sprefix=tmy%2Caps%2C96&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1',
	},
	{
		id: 9,
		img: giftcard.src,
		title: 'Raffle Prizes',
		description: '3x $25 Amazon Gift Card',
		link: 'https://www.amazon.com/gift-cards/b?ie=UTF8&node=2238192011',
	},
];
