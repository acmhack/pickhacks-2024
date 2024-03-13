import { IEvent } from '@/interfaces/IEvent';
import { Events } from '@/lib/Events';
import styles from '@/styles/components/Schedule.module.css';
import { useState, useEffect } from 'react';

const Schedule = () => {
	const [selected, setSelected] = useState<string>('Friday');
	const [currData, setCurrData] = useState<IEvent[]>([]);

	useEffect(() => {
		setCurrData([...Events.filter((obj) => obj.day === selected)]);
	}, [selected]);

	const toggle = (day: string) => {
		if (selected != day) {
			setSelected(day);
			setCurrData([...Events.filter((obj) => obj.day === day)]);
		}
	};
	return (
		<div className={styles.App}>
			<div className={styles.row}>
				{['Friday', 'Saturday', 'Sunday'].map((day) => (
					<div
						className={`${styles.dayContainer} ${selected === day ? styles.selectedDay : ''}`}
						key={day}
						onClick={() => toggle(day)}
						// style={{ background: selected == day ? 'rgb(91, 82, 224)' : 'rgb(42, 20, 73)' }}
					>
						<p className={styles.day}>{day}</p>
					</div>
				))}
			</div>
			{currData.map((obj) => (
				<div key={`${obj.day}-${obj.event}-${obj.time}`} className={styles.eventContainer}>
					<div className={styles.column}>
						<p className={styles.event}>{obj.event}</p>
						<p className={styles.time}>{obj.time}</p>
					</div>
					<div className={styles.column}>
						<p className={styles.location}>{obj.location}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Schedule;
