import { ISponsor } from '@/interfaces/ISponsor';
import styles from '@/styles/components/SponsorBox.module.css';

interface IProps {
	link: string;
	logo: string;
	tier: 'Gold' | 'Silver' | 'Bronze';
}

const SponsorBox = ({ link, logo, tier }: IProps) => {
	return (
		<a className={styles.sponsorBox} href={link} target='_blank'>
			<div
				className={styles.imageContainer}
				style={
					tier === 'Gold'
						? { width: '21em', height: '10em' }
						: tier === 'Silver'
						? { width: '18em', height: '8.5em' }
						: { width: '15em', height: '7em' }
				}
			>
				<img src={logo} className={styles.logo}></img>
			</div>
		</a>
	);
};

export default SponsorBox;
