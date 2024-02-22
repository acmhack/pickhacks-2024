import * as React from 'react';
import styles from '../styles/components/Prizes.module.css';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import useMeasure from 'react-use-measure';
import { IPrize } from '@/interfaces/IPrize';
import { PrizeList } from '@/lib/PrizeList';

const CARD_WIDTH = 300;
const CARD_HEIGHT = 300;
const MARGIN = 40;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
	sm: 640,
	lg: 1024,
};

const Prizes = () => {
	const [ref, { width }] = useMeasure();
	const [offset, setOffset] = useState(0);

	const CARD_BUFFER = width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

	const CAN_SHIFT_LEFT = offset < 0;

	const CAN_SHIFT_RIGHT = Math.abs(offset) < CARD_SIZE * (PrizeList.length - CARD_BUFFER);

	const shiftLeft = () => {
		if (!CAN_SHIFT_LEFT) {
			return;
		}
		setOffset((pv) => (pv += CARD_SIZE));
	};

	const shiftRight = () => {
		if (!CAN_SHIFT_RIGHT) {
			return;
		}
		setOffset((pv) => (pv -= CARD_SIZE));
	};

	return (
		<section ref={ref}>
			<div className={styles.container}>
				{/* CARDS */}
				<div className={styles.row}>
					<motion.div
						animate={{
							x: offset,
						}}
                        style={{
                            display: 'flex',
                        }}
					>
						{PrizeList.map((item) => {
							return <Card key={item.id} {...item} />;
						})}
					</motion.div>
				</div>

				{/* BUTTONS */}
				<>
					<motion.button
						initial={false}
						animate={{
							x: CAN_SHIFT_LEFT ? '0%' : '-100%',
						}}
						className={styles.leftButton}
						onClick={shiftLeft}
					>
						<FiChevronLeft />
					</motion.button>
					<motion.button
						initial={false}
						animate={{
							x: CAN_SHIFT_RIGHT ? '0%' : '100%',
						}}
						className={styles.rightButton}
						onClick={shiftRight}
					>
						<FiChevronRight />
					</motion.button>
				</>
			</div>
		</section>
	);
};

const Card = ({ img, title, description, link }: IPrize) => {
	return (
		<a
			className={styles.cardContainer}
			style={{
				width: CARD_WIDTH,
				height: CARD_HEIGHT,
				marginRight: MARGIN,
				backgroundColor: '#2A1449'
			}}
            href={link}
            target='_blank'
		>
            <p className={styles.title}>{title}</p>
            <p className={styles.description}>{description}</p>
            <img src={img} className={styles.image}></img>
		</a>
	);
};

export default Prizes;