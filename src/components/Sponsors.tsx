import styles from '@/styles/components/Sponsors.module.css';
import Link from 'next/link';
import { GoldSponsors, SilverSponsors, BronzeSponsors } from '@/lib/SponsorList';
import SponsorBox from './SponsorBox';

const Sponsors = () => {
	return (
		<div>
			<div className={styles.becomeButtonContainer}>
				<Link href="mailto:pickhacks@mst.edu?subject=Sponsorship" className={styles.becomeButton}>
					Become a Sponsor
				</Link>
			</div>
			<div className={styles.sponsorContainer}>
				<div className={styles.sponsorRow}>
					{GoldSponsors.map((sponsor) => (
						<SponsorBox link={sponsor.link} tier="Gold" logo={sponsor.logo} key={sponsor.link}></SponsorBox>
					))}
				</div>
				<div className={styles.sponsorRow}>
					{SilverSponsors.map((sponsor) => (
						<SponsorBox link={sponsor.link} tier="Silver" logo={sponsor.logo} key={sponsor.link}></SponsorBox>
					))}
				</div>
				<div className={styles.sponsorRow}>
					{BronzeSponsors.map((sponsor) => (
						<SponsorBox link={sponsor.link} tier="Bronze" logo={sponsor.logo} key={sponsor.link}></SponsorBox>
					))}
				</div>
			</div>
		</div>
	);
};

export default Sponsors;
