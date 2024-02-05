import styles from '@/styles/components/Hero.module.css';
import { lildude } from '@/lib/Images';
import Link from 'next/link';

const Hero = () => {
	return (
		<div className={styles.main} id="home">
			<div className={styles.left}>
				<img src={lildude.src} className={styles.securityGuard} alt='security guard'></img>
			</div>
			<div className={styles.right}>
				<div>
					<p className={styles.title}>PickHacks 2024</p>
					<p className={styles.subtitle}>Learn, build, and share at Missouri S&T&apos;s security hackathon!</p>
				</div>

				<div>
					<p className={styles.date}>Join us from April 5th - 7th!</p>
					<Link href='' target='_blank' className={styles.registerButton}>
						REGISTER
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Hero;
