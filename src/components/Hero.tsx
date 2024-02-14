import styles from '@/styles/components/Hero.module.css';
import { flashlightguy } from '@/lib/Images';
import Link from 'next/link';
import { useMediaQuery } from 'usehooks-ts';

const Hero = () => {
	const matches = useMediaQuery('(min-width: 1139px)');
	return (
		<div className={styles.main} id='home'>
			{matches && (
				<div className={styles.left}>
					<object data={flashlightguy.src} type='image/svg+xml' className={styles.securityGuard} />
				</div>
			)}

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
