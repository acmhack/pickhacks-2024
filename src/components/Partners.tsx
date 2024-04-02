import styles from '@/styles/components/Sponsors.module.css';
import SponsorBox from './SponsorBox';
import { PartnerList } from '@/lib/PartnerList';

const Partners = () => {
	return (
		<div className={styles.sponsorContainer} style={{ marginTop: '2em' }}>
			<div className={styles.sponsorRow} style={{ gap: '3em' }}>
				{PartnerList.map((sponsor) => (
					<SponsorBox link={sponsor.link} tier='Silver' logo={sponsor.logo} key={sponsor.link}></SponsorBox>
				))}
			</div>
		</div>
	);
};

export default Partners;
