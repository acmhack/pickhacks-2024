import { IQA } from '@/interfaces/IQA';
import { QAData } from '@/lib/FaqData';
import styles from '@/styles/components/Faq.module.css';
import { bullet, bulletExpand } from '@/lib/Images';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Accordian from '@/components/FaqAccordian';

const Faq = () => {

    const [active, setActive] = useState<boolean[]>([false, false, false, false, false, false, false, false]);


	return (
		<div className={styles.App}>
            <p className={styles.title}>FAQ</p>

            <div className={styles.grid}>
                {QAData.map((el, i) => {
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

		</div>
	);
};

export default Faq;