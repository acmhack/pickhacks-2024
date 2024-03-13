import styles from '@/styles/components/TotalPrizes.module.css';
import { bigblur } from '@/lib/Images';

function TotalPrizes () {
	return (
		<div className={styles.container}>
			<div className={styles.text}>
				<p className={styles.title}>$5,500+</p>
				<p className={styles.bottomtext}>available in prizes this year!</p>
			</div>
			<img src={bigblur.src} className={styles.bigBlur}></img>
		</div>
	);
};

export default TotalPrizes;
