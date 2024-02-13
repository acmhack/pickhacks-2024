import { QAData } from '@/lib/FaqData';
import styles from '@/styles/components/Faq.module.css';
import { useState } from 'react';
import Accordian from '@/components/FaqAccordiansad';
import FaqAccordian from '@/components/FaqAccordian';

const Faq = () => {

    let halfIndex = (QAData.length+1)/2;
    let QAData1 = QAData.slice(0, halfIndex); //force two columns
    let QAData2 = QAData.slice(halfIndex);

    const [active, setActive] = useState<boolean[]>([false, false, false, false, false, false, false, false]);

	return (
        <div className={styles['faq-background']}>
            <div className={styles['faq-content']}>
                <div className={styles['faq-div']}>
                    {QAData1.map((el, i) => {
                        return (
                            <div key={"questions" + i}>
                                <FaqAccordian
                                question={el.question}
                                answer={el.answer}
                                turn={active}
                                setTurn={setActive}
                                idx={el.idx}
                                />
                            </div>
                        )
                    })}
                </div>
                <div className={styles['faq-div']}>
                    {QAData2.map((el, i) => {
                        return (
                            <div key={"questions" + (i+halfIndex)}>
                                <FaqAccordian
                                question={el.question}
                                answer={el.answer}
                                turn={active}
                                setTurn={setActive}
                                idx={el.idx}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
	);
};

export default Faq;