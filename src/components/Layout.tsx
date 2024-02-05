import Image from 'next/image';
import { background2024 } from '@/lib/Images';
import styles from '@/styles/components/Layout.module.css';
import Navbar from './Navbar';
interface IProps {
	children: JSX.Element;
}

export default function Layout({ children }: IProps) {
	return (
		<div className={styles.main}>
			<Navbar />
			{children}
		</div>
	);
}
