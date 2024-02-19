import styles from '@/styles/components/TotalPrizes.module.css';
import { bigblur } from '@/lib/Images';

function TotalPrizes () {
	return (
		<div className={styles.container}>
			<div className={styles.text}>
				<p className={styles.title}>$1010101</p>
				<p className={styles.bottomtext}>in prize money has been awarded over 6 years.</p>
			</div>
			<img src={bigblur.src} className={styles.bigBlur}></img>
			
		</div>
	);
};

export default TotalPrizes;
