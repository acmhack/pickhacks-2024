import React, { Dispatch, SetStateAction } from 'react';
import { bullet, bulletExpand } from '@/lib/Images';
import styles from '@/styles/components/Faq.module.css';

type Props = {
	question: string;
	answer: string;
	turn: boolean[];
	setTurn: Dispatch<SetStateAction<boolean[]>>;
	idx: number;
};

const FaqAccordian = ({ question, answer, turn, setTurn, idx }: Props) => {
	const toggleAccordian = () => {
		let newTurn = [...turn!];
		newTurn[idx] = !newTurn[idx];
		setTurn!(newTurn);
	};

	return (
		<div style={{margin: '1em 0'}}>
			<button onClick={toggleAccordian} className={styles['faq-button']}>
				<div className={styles['faq-bullet']}>
					{turn![idx] ? (
						<img className={styles['bullet-img']} src={bulletExpand.src} alt="" />
					) : (
						<img className={styles['bullet-img']} src={bullet.src} alt="" />
					)}
					<p className={styles['faq-question']}>{question}</p>
				</div>
			</button>
			<div
				className={styles.answerContainer}
				style={
					turn![idx]
						? { gridTemplateRows: '1fr' } // bc of verbose answers 60px -> 250px
						: { gridTemplateRows: '0fr' }
				}
			>
				<div className={styles.answer}>
					<p>{answer}</p>
				</div>
			</div>
		</div>
	);
};

export default FaqAccordian;
