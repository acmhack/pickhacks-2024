import styles from '@/styles/components/Footer.module.css';
import { heart } from '@/lib/Images';
import { useMediaQuery } from 'usehooks-ts';
import MobileFooter from './MobileFooter';

const Footer = () => {
	const matches = useMediaQuery('(max-width: 700px)');

	if (matches) {
        return (
            <MobileFooter />
        );
	}

	return (
		<footer className={styles.footer}>
			<div className={styles.left}>
				<a target='_blank' href='https://static.mlh.io/docs/mlh-code-of-conduct.pdf'>
					Code of Conduct
				</a>
				<a target='_blank' href='https://mlh.io/privacy'>
					Privacy Policy
				</a>
			</div>
			<div className={styles.mid}>
				<p className={styles.love}>made with love by ACM Hack</p>
				<img src={heart.src} />
			</div>
			<p className={styles.right}>PickHacks 2024</p>
		</footer>
	);
};

export default Footer;
