import Image from 'next/image';
import { background2024 } from '@/lib/Images';
import styles from "@/styles/components/Layout.module.css"

interface IProps {
    children: JSX.Element
}

export default function Layout({ children }: IProps ) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}