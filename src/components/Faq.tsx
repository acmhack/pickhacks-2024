import { QAData } from '@/lib/FaqData';
import styles from '@/styles/components/Faq.module.css';
import { useState } from 'react';
import Accordian from '@/components/FaqAccordian';
import Secret from '@/components/secret';

const Faq = () => {

    let halfIndex = (QAData.length+1)/2;
    let QAData1 = QAData.slice(0, halfIndex); //force two columns
    let QAData2 = QAData.slice(halfIndex);

    const [active1, setActive1] = useState<boolean[]>([false, false, false, false]);
    const [active2, setActive2] = useState<boolean[]>([false, false, false, false])

	return (
        <div className={styles['faq-content']}>
            <div className={styles['faq-div']}>
                {QAData1.map((el, i) => {
                    return (
                        <div key={"questions" + i}>
                            <Secret
                            question={el.question}
                            answer={el.answer}
                            turn={active1}
                            setTurn={setActive1}
                            idx={el.idx}
                            />
                        </div>
                    )
                })}
            </div>
            <div className={styles['faq-div']}>
                {QAData2.map((el, i) => {
                    return (
                        <div key={"questions" + i}>
                            <Secret
                            question={el.question}
                            answer={el.answer}
                            turn={active2}
                            setTurn={setActive2}
                            idx={el.idx}
                            />
                        </div>
                    )
                })}
            </div>
            {/* <div className={styles.faqcontent}>
            <div className={styles.column}>
                {QAData1.map((el, i) => {
                        return (
                            <div className='w-full' key={"questions" + i}>
                                <Accordian
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
            <div className={styles.column}>
                {QAData2.map((el, i) => {
                        return (
                            <div className='w-full' key={"questions" + i + halfIndex}>
                                <Accordian
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
        </div> */}
        </div>
	);
};

export default Faq;