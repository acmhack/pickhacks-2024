import styles from '@/styles/components/Title.module.css';

interface IProps {
	children: string;
}

const Title = ({ children }: IProps) => {
	return (
		<div className={styles.container}>
			<p className={styles.title}>{children}</p>
		</div>
	);
};

export default Title;
