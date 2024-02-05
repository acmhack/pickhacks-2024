import * as React from 'react';
import { picklogo24, discord, instagram, linkedin, tiktok, mlh } from '@/lib/Images';
import styles from '@/styles/components/Navbar.module.css';
import Link from 'next/link';
import { useMediaQuery } from 'usehooks-ts';
import MobileNavbar from './MobileNavbar';

function Navbar() {
	const matches = useMediaQuery('(max-width: 1139px)');

	if (matches) {
		return <MobileNavbar />;
	}

	return (
		<nav className={styles.navbar}>
			<div className={styles.container}>
				<ul className={styles.list}>
					<li className={styles.logo}>
						<a href='#home'>
							<img src={picklogo24.src} />
						</a>
					</li>
					<li className={styles.item}>
						<a className={styles.buttons} href='#schedule'>
							Schedule
						</a>
					</li>
					<li className={styles.item}>
						<a className={styles.buttons} href='#sponsors'>
							Sponsors
						</a>
					</li>
					<li className={styles.item}>
						<a className={styles.buttons} href='#team'>
							Team
						</a>
					</li>
					<li className={styles.item}>
						<a className={styles.buttons} href='#faq'>
							FAQ
						</a>
					</li>
					<Link href='' target='_blank' className={styles.applyButton}>
						REGISTER
					</Link>
				</ul>
				<ul className={styles.social}>
					<div className={styles.socialContainer}>
						<li className={styles.socialitem}>
							<a className={styles.icon} href='https://www.instagram.com/sandtpickhacks' target='_blank'>
								<img src={instagram.src} />
							</a>
						</li>
						<li className={styles.socialitem}>
							<a className={styles.icon} href='https://discord.gg/p3fcxGzjxa' target='_blank'>
								<img src={discord.src} />
							</a>
						</li>
						<li className={styles.socialitem}>
							<a className={styles.icon} href='https://www.linkedin.com/company/pickhacks' target='_blank'>
								<img src={linkedin.src} />
							</a>
						</li>
						<li className={styles.socialitem}>
							<a className={styles.icon} href='https://www.tiktok.com/@sandtpickhacks' target='_blank'>
								<img src={tiktok.src} />
							</a>
						</li>
					</div>

					<li className={styles.banneritem}>
						<a className={styles.banner} href='https://mlh.io/' target='_blank'>
							<img src={mlh.src} />
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
