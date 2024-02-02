import { IQA } from '@/interfaces/IQA';
import { QAData } from '@/lib/FaqData';
import styles from '@/styles/components/Faq.module.css';
import { bullet, bulletExpand } from '@/lib/Images';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Accordian from '@/components/FaqAccordian';

const Faq = () => {

    const [active, setActive] = useState<boolean[]>([false, false, false, false, false, false, false, false]);

    const isSomeActive = active.some((element)=> element);

    const handleClick = () => {
        isSomeActive ? setActive([false, false, false, false, false, false, false, false]) : setActive([true, true, true, true, true, true, true, true])
    }

	return (
		<div className={styles.App}>
            <p className={styles.title}>FAQ</p>

            <div className={styles.duh}>
                <button className={styles.wholethign} onClick={handleClick}>
                    <img src={bullet.src} alt='bullet' style={{paddingRight: '10px'}}/>
                    <span className={styles.suggestions}>
                        {!isSomeActive ? "OpenAll" : "CloseAll"}
                    </span>
                </button>
            </div>
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