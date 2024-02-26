import { QAData } from '@/lib/FaqData';
import styles from '@/styles/components/Faq.module.css';
import { useState } from 'react';
import FaqAccordian from '@/components/FaqAccordian';
import { useMediaQuery } from 'usehooks-ts';

const Faq = () => {
	const matches = useMediaQuery('(max-width: 700px)');

	let halfIndex = (QAData.length + 1) / 2;
	let QAData1 = QAData.slice(0, halfIndex); //force same two columns
	let QAData2 = QAData.slice(halfIndex);

	const [active, setActive] = useState<boolean[]>([false, false, false, false, false, false, false, false]);

	return (
		<div className={styles['faq-background']}>
			<div className={styles['faq-content']}>
				<div className={styles['faq-div']}>
					{QAData1.map((el, i) => {
						return <FaqAccordian question={el.question} answer={el.answer} turn={active} setTurn={setActive} idx={el.idx} key={'questions' + i} />;
					})}
				</div>
				<div className={styles['faq-div']}>
					{QAData2.map((el, i) => {
						return (
							<FaqAccordian
								question={el.question}
								answer={el.answer}
								turn={active}
								setTurn={setActive}
								idx={el.idx}
								key={'questions' + (i + halfIndex)}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Faq;
