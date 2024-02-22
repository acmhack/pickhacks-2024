import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Members } from '@/lib/Members';
import Member from './Member';
import styles from '@/styles/components/Team.module.css';
import { useMediaQuery } from 'usehooks-ts';

const Team = () => {
	const [selected, setSelected] = useState(0);

	var settings = {
		infinite: true,
		slidesToShow: 9,
		slidesToScroll: 1,
		autoplay: true,
		speed: 2000,
		autoplaySpeed: 4000,
		arrows: false,
		pauseOnHover: true,
		centerMode: true,
		initialSlide: 0,
		centerPadding: '0px',
		responsive: [
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 7
				}
			},
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 5
				}
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 3
				}
			}
		],
		afterChange: (newIndex: number) => {
			setSelected(newIndex);
		}
	};
	return (
		<>
			<div className={styles.textContainer}>
				<h2 className={styles.name}>{Members[selected].name}</h2>
				<p className={styles.role}>{Members[selected].role}</p>
			</div>
			<div className={styles.carouselContainer}>
				<Slider {...settings}>
					{Members.map((member, i) => (
						<Member avatar={member.avatar} linkedin={member.linkedin} index={i} key={member.name}></Member>
					))}
				</Slider>
			</div>
		</>
	);
};

export default Team;
