import styles from '@/styles/components/MobileNavbar.module.css';
import { useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import { IoClose } from 'react-icons/io5';
import { picklogo24, discord, instagram, linkedin, tiktok, mlh } from '@/lib/Images';
import Link from 'next/link';

const MobileNavbar = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			{!open && (
				<div className={styles.navbar}>
					<IoMenu color='white' size={32} onClick={() => setOpen(true)} className={styles.icon} />
				</div>
			)}

			<div className={styles.container} style={{ opacity: open ? 1 : 0, zIndex: open ? 98 : 0 }}>
				<div className={styles.iconContainer}>
					<a href='#home' onClick={() => setOpen(false)}>
						<img src={picklogo24.src} height={35} />
					</a>
					<IoClose color='white' size={32} onClick={() => setOpen(false)} className={styles.icon} />
				</div>
				<a href='#schedule' className={styles.navbarOption} onClick={() => setOpen(false)}>
					Schedule
				</a>
				<a href='#sponsors' className={styles.navbarOption} onClick={() => setOpen(false)}>
					Sponsors
				</a>
				<a href='#team' className={styles.navbarOption} onClick={() => setOpen(false)}>
					Team
				</a>
				<a href='#faq' className={styles.navbarOption} onClick={() => setOpen(false)}>
					FAQ
				</a>
				<Link href='' target='_blank' className={styles.registerButton}>
					REGISTER
				</Link>
				<div className={styles.socials}>
					<a className={styles.icon} href='https://www.instagram.com/sandtpickhacks' target='_blank'>
						<img src={instagram.src} />
					</a>

					<a className={styles.icon} href='https://discord.gg/p3fcxGzjxa' target='_blank'>
						<img src={discord.src} />
					</a>

					<a className={styles.icon} href='https://www.linkedin.com/company/pickhacks' target='_blank'>
						<img src={linkedin.src} />
					</a>

					<a className={styles.icon} href='https://www.tiktok.com/@sandtpickhacks' target='_blank'>
						<img src={tiktok.src} />
					</a>
				</div>
			</div>
		</>
	);
};

export default MobileNavbar;
