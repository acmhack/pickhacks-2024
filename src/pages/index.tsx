import Faq from '@/components/Faq';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Partners from '@/components/Partners';
import Prizes from '@/components/Prizes';
import Schedule from '@/components/Schedule';
import Sponsors from '@/components/Sponsors';
import Team from '@/components/Team';
import Title from '@/components/Title';
import TotalPrizes from '@/components/TotalPrizes';
import { leftblur, littlestGuy, rightblur, stars } from '@/lib/Images';
import styles from '@/styles/Home.module.css';
import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>PickHacks 2024</title>
				<meta name="author" content="PickHacks" />
				<meta name="description" content="Stay up to date with the PickHacks 2024 event!" />
				<meta name="keywords" content="hackathon,mst,pickhacks" />
				<meta property="og:locale" content="en_US" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="PickHacks 2024" />
				<meta property="og:description" content="Stay up to date with the PickHacks 2024 event!" />
				<meta property="og:url" content="https://pickhacks.io" />
				<meta property="og:site_name" content="PickHacks" />
				<meta property="og:image" content="https://pickhacks.io/images/Logo2024.png" />
				<meta name="theme-color" content="#ff52d2" />
			</Head>
			<main className={styles.main}>
				<object data={stars.src} type="image/svg+xml" className={styles.background} />
				<Hero />
				<div className={styles.section} id="schedule">
					<Title>Schedule</Title>
					<Schedule />
					<img src={leftblur.src} className={styles.leftBlur}></img>
					<img src={rightblur.src} className={styles.rightBlur}></img>
				</div>
				<div className={styles.section} id="prizes">
					<Title>Prizes</Title>
					<Prizes />
					<TotalPrizes />
				</div>
				<div className={styles.section} style={{ minHeight: '75vh' }} id="sponsors">
					<Title>Sponsors</Title>
					<Sponsors />
				</div>
				<div className={styles.section} style={{ minHeight: '50vh', marginTop: '5em' }} id="partners">
					<Title>Partners</Title>
					<Partners />
				</div>
				<div className={styles.section} style={{ marginTop: '5em' }} id="faq">
					<Title>FAQ</Title>
					<Faq />
					<div style={{ width: '100vw', marginTop: '5em', marginBottom: '2em' }} id="team">
						<Title>Team</Title>
						<Team></Team>
					</div>
				</div>
				<div className={styles.smallGuySection}>
					<img src={littlestGuy.src} />
				</div>
			</main>
			<Footer />
		</>
	);
}

