import * as React from 'react';
import { picklogo24, discord, instagram, linkedin, tiktok, mlh } from '@/lib/Images';
import styles from '../styles/components/Navbar.module.css'

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <ul className={styles.list}>
          <li className={styles.logo}><a className={styles.icon} href='#'><img src={picklogo24.src}/></a></li>
          <li className={styles.item}><a className={styles.buttons} href='#schedule'>Schedule</a></li>
          <li className={styles.item}><a className={styles.buttons} href='#sponsors'>Sponsors</a></li>
          <li className={styles.item}><a className={styles.buttons} href='#team'>Team</a></li>
          <li className={styles.item}><a className={styles.buttons} href='#faq'>FAQ</a></li>
          <li className={styles.apply}><a className={styles.buttons} href='https://www.pickhacks.io'>APPLY TODAY!</a></li>
        </ul>
        <ul className={styles.social}>
          <li className={styles.item}><a className={styles.icon} href='#'><img src={discord.src}/></a></li>
          <li className={styles.item}><a className={styles.icon} href='#'><img src={instagram.src}/></a></li>
          <li className={styles.item}><a className={styles.icon} href='#'><img src={linkedin.src}/></a></li>
          <li className={styles.item}><a className={styles.icon} href='#'><img src={tiktok.src}/></a></li>
          <li className={styles.banneritem}><a className={styles.banner} href='#'><img src={mlh.src}/></a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar