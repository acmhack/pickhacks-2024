import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import { useEffect, useState } from 'react';
import Schedule from '@/components/Schedule';
import Prizes from '@/components/Prizes'
import Hero from '@/components/Hero';
import Title from '@/components/Title';
import Footer from '@/components/Footer';
import { littlestGuy, stars, leftblur, rightblur } from '@/lib/Images';
import TotalPrizes from '@/components/TotalPrizes';

export default function Home() {
	return (
		<>
			<Head>
				<title>PickHacks 2024</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className={styles.main}>
				<object data={stars.src} type='image/svg+xml' className={styles.background} />
				<Hero />
				<div className={styles.section} id='schedule'>
					<Title>Schedule</Title>
					<Schedule />
                    <img src={leftblur.src} className={styles.leftBlur}></img>
                    <img src={rightblur.src} className={styles.rightBlur}></img>
				</div>
				<div className={styles.section} id='prizes'>
					<Title>Prizes</Title>
					<Prizes/>
					<p className={styles.fillerText}>Coming soon...</p>
				</div>
				<TotalPrizes/>
				<div className={styles.section} id='sponsors'>
					<Title>Sponsors</Title>
					<p className={styles.fillerText}>Coming soon...</p>
				</div>
				<div className={styles.section} id='partners'>
					<Title>Partners</Title>
					<p className={styles.fillerText}>Coming soon...</p>
				</div>
				<div className={styles.section} id='faq'>
					<Title>FAQ</Title>
					<p className={styles.fillerText}>Coming soon...</p>
					<div className={styles.separate} id='team'></div>
					<Title>Team</Title>
					<p className={styles.fillerText}>Coming soon...</p>
				</div>
				<div className={styles.smallGuySection}>
					<img src={littlestGuy.src} />
				</div>
			</main>
			<Footer />
		</>
	);
}
