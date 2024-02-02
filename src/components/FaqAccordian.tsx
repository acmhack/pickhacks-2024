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

const Accordian = ({question, answer, turn, setTurn, idx}: Props) => {

    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        if(contentRef.current) {
            contentRef.current.style.maxHeight = turn![idx] ? `${contentRef.current.scrollHeight}px` : "0px";
            contentRef.current.style.opacity = turn![idx] ? '100%' : '0%';
            contentRef.current.style.fontSize = turn![idx] ? '15px' : '0px';
        }
    }, [contentRef, turn, idx])

    const toggleAccordian = () => {
        let newTurn = [...turn!]
        newTurn[idx] = !newTurn[idx]
        setTurn!(newTurn)
    }

    return (
        <div>
            <button onClick={toggleAccordian}
            className={styles.accordianButton}>
                <div className=''>
                    <div className={styles.accordian}>
                        <span style={{paddingRight: '10px'}}>
                            { turn![idx] ? 
                            <img src={bulletExpand.src} alt=""/> :
                            <img src={bullet.src} alt=""/> }
                        </span>
                        <span className="question">{question}</span>
                    </div>
                    <div className={styles.accordianAnswer} ref={contentRef}>
                        <p>
                            {answer}
                        </p>
                    </div>
                </div>
            </button>
        </div>
    )
}

export default Accordian;