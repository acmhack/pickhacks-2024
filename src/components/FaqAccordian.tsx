import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { bullet, bulletExpand } from '@/lib/Images';

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
            className={''}>
                <div className=''>
                    <div className=''>
                        <span style={{paddingRight: '10px'}}>
                            { turn![idx] ? 
                            <img src={bulletExpand.src} alt=""/> :
                            <img src={bullet.src} alt=""/> }
                        </span>
                        <span className="question">{question}</span>
                    </div>
                    <div ref={contentRef}>
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