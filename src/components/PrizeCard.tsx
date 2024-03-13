import styles from '@/styles/components/PrizeCard.module.css';

interface IProps {
	title: string;
	description: string;
	image: string;
	link: string;
}

const PrizeCard = ({ title, description, image, link }: IProps) => {
	return (
		<div className={styles.box}>
			<a className={styles.cardContainer} href={link} target="_blank">
				<p className={styles.title}>{title}</p>
				<p className={styles.description}>{description}</p>
				<div className={styles.imageContainer}>
					<img src={image} className={styles.image} />
				</div>
			</a>
		</div>
	);
};

export default PrizeCard;
