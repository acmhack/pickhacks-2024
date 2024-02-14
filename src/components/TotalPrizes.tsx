import styles from '@/styles/components/TotalPrizes.module.css';

function TotalPrizes () {
	return (
		<div className={styles.container}>
			<p className={styles.title}>$1010101</p>
            <p className={styles.bottomtext}>in prize money has been awarded over 6 years.</p>
		</div>
	);
};

export default TotalPrizes;
