import styles from '@/styles/components/Member.module.css';

interface IProps {
	linkedin: string;
	avatar: string;
	index: number;
}

const Member = ({ linkedin, avatar, index }: IProps) => {
	return (
		<div className={styles.container}>
			<img
				src={avatar}
				className={styles.avatar}
				style={{
					borderColor: index % 4 == 0 ? '#FF8EE2' : index % 3 == 0 ? '#FF1100' : index % 2 == 0 ? '#8732FF' : index % 1 == 0 ? '#1100FF' : '#A4EF00',
				}}
				onClick={() => window.open(linkedin, '_ blank')}
			></img>
		</div>
	);
};

export default Member;
