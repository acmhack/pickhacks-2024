import { accenture, tradebot } from '@/lib/Images';
import styles from '@/styles/components/Sponsors.module.css';
import Link from 'next/link';

const Sponsors = () => {
    return (
        <div>
            <div className={styles.becomeButtonContainer}>
                <Link href='https://www.register.pickhacks.io' target='_blank' className={styles.becomeButton}>Become a Sponsor</Link>
            </div>
            <div className={styles.sponsorContainer}>
                <div className={styles.sponsorImgLarge}>
                    <div className={styles.imgBG}>
                        <img src={tradebot.src}></img>
                    </div>
                    <div className={styles.imgBG}>
                        <img src={accenture.src}></img>
                    </div>
                </div>
                <div className={styles.sponsorImgMedium}>
                    <div className={styles.imgBG}>
                        <img src={accenture.src}></img>
                    </div>
                    <div className={styles.imgBG}>
                        <img src={tradebot.src}></img>
                    </div>
                    <div className={styles.imgBG}>
                        <img src={accenture.src}></img>
                    </div>
                </div>
                <div className={styles.sponsorImgSmall}>
                    <div className={styles.imgBG}>
                        <img src={tradebot.src}></img>
                    </div>
                    <div className={styles.imgBG}>
                        <img src={accenture.src}></img>
                    </div>
                    <div className={styles.imgBG}>
                        <img src={tradebot.src}></img>
                    </div>
                    <div className={styles.imgBG}>
                        <img src={accenture.src}></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sponsors;