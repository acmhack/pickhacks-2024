import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { bullet, bulletExpand } from '@/lib/Images';
import styles from '@/styles/components/Faq.module.css';

type Props = {
    question: string,
    answer: string,
    turn: boolean[],
    setTurn: Dispatch<SetStateAction<boolean[]>>,
    idx: number
}

const Secret = ({question, answer, turn, setTurn, idx}: Props) => {

    const toggleAccordian = () => { // close all other
        let newTurn = [...turn!];
        let turnIdx = !newTurn[idx];
        newTurn = newTurn.fill(false);
        newTurn[idx] = turnIdx;
        setTurn!(newTurn)
    }

    return (
        <div>
            <button onClick={toggleAccordian}
            className={styles.accordianButton}
            style={
                turn![idx]
                ? { animation: '0.5s linear 0s 1 normal none running star-spin'} :
                { animation: '0.5s linear 0s 1 normal none running star-spin-back'}}>
            <div className={styles['faq-bullet']}>
                { turn![idx] ?
                <img className={styles['bullet-img']} src={bulletExpand.src} alt=""/> :
                <img className={styles['bullet-img']} src={bullet.src} alt=""/>
                }
                <p className={styles['faq-question']}>{question}</p>
            </div>
            </button>
            <div className={styles['faq-answer']}
            style={
                turn![idx]
                ? { maxHeight: "60px" } :
                { maxHeight: "0"}
            }>
                <p>{answer}</p>
            </div>
        {/* <div className={styles.accordianContent}>
            <button onClick={toggleAccordian}
                    className={styles.accordianButton}>
                    <div>
                        <span className={styles.bullet}>
                            { turn![idx] ? 
                            <img src={bulletExpand.src} alt=""/> :
                            <img src={bullet.src} alt=""/> }
                        </span>
                        <span className={styles.accordianQuestion}>{question}</span>
                    </div>
                    <div className={styles.accordianAnswer} ref={contentRef}>
                        <p>
                            {answer}
                        </p>
                    </div>
            </button>
        </div> */}
        </div>
    )
}

export default Secret;