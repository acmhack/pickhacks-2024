import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Members } from '@/lib/Members';
import Member from './Member';
import styles from '@/styles/components/Team.module.css';
import { useMediaQuery } from 'usehooks-ts';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

function PrevArrow(props: any) {
	const { className, style, onClick } = props;
	return (
		<div className={styles.leftButton} style={{ ...style, display: 'block' }} onClick={onClick}>
			<FiChevronLeft />
		</div>
	);
}

function NextArrow(props: any) {
	const { className, style, onClick } = props;
	return (
		<div className={styles.rightButton} style={{ ...style, display: 'block' }} onClick={onClick}>
			<FiChevronRight />
		</div>
	);
}

const Team = () => {
	const [selected, setSelected] = useState(0);

	var settings = {
		infinite: true,
		slidesToShow: 9,
		slidesToScroll: 1,
		autoplay: true,
		speed: 2000,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		autoplaySpeed: 4000,
		arrows: true,
		draggable: false,
		pauseOnHover: true,
		centerMode: true,
		initialSlide: 0,
		centerPadding: '0px',
		responsive: [
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 7,
				},
			},
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 5,
				},
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 450,
				settings: {
					slidesToShow: 1,
				},
			},
		],
		afterChange: (newIndex: number) => {
			setSelected(newIndex);
		},
	};
	return (
		<>
			<div className={styles.textContainer}>
				<h2 className={styles.name}>{Members[selected].name}</h2>
				<p className={styles.role}>{Members[selected].role}</p>
			</div>
			<div className={styles.carouselContainer}>
				<Slider {...settings} className={styles.inner}>
					{Members.map((member, i) => (
						<Member avatar={member.avatar} linkedin={member.linkedin} index={i} key={member.name}></Member>
					))}
				</Slider>
			</div>
		</>
	);
};

export default Team;
