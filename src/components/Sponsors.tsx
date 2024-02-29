import { sponsor } from '@/lib/Images';
import styles from '@/styles/components/Sponsors.module.css';
import Link from 'next/link';

const Sponsors = () => {
    return (
        <div>
            <div className={styles.becomeButtonContainer}>
                <Link href='https://www.register.pickhacks.io' target='_blank' className={styles.becomeButton}>Become a Sponsor</Link>
            </div>
            <div className={styles.sponsorContainer}>
                <div className={styles.sponsorImg}>
                    <img src={sponsor.src}></img>
                    <img src={sponsor.src}></img>
                </div>
                <div className={styles.sponsorImg2}>
                    <img src={sponsor.src}></img>
                    <img src={sponsor.src}></img>
                    <img src={sponsor.src}></img>
                </div>
                <div className={styles.sponsorImg3}>
                    <img src={sponsor.src}></img>
                    <img src={sponsor.src}></img>
                    <img src={sponsor.src}></img>
                    <img src={sponsor.src}></img>
                </div>
            </div>
        </div>
    );
}

export default Sponsors;