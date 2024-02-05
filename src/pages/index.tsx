import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Schedule from '@/components/Schedule';
import Hero from '@/components/Hero';

export default function Home() {
	return (
		<>
			<Head>
				<title>PickHacks 2024</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className={`${styles.main}`}>
				<Navbar />
				<Hero />
				<Schedule />
			</main>
		</>
	);
}
