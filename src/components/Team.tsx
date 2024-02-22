import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Members } from '@/lib/Members';
import Member from './Member';
import styles from '@/styles/components/Team.module.css';
import { useMediaQuery } from 'usehooks-ts';

const Team = () => {
    const firstBreakpoint = useMediaQuery('(max-width: 1024px)');
    const secondBreakpoint = useMediaQuery('(max-width: 700px)');

	const [selected, setSelected] = useState(0);
	var settings = {
		infinite: true,
		slidesToShow: 9,
		slidesToScroll: 1,
		autoplay: true,
		speed: 2500,
		autoplaySpeed: 4500,
		arrows: false,
		pauseOnHover: true,
        initialSlide: Members.length - 4,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 5,
                    initialSlide: Members.length - 2,
				},
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 3,
                    initialSlide: Members.length - 1,
					// initialSlide: 2,
				},
			},
		],
		afterChange: (newIndex: number) => {
			setSelected((newIndex + 4) % Members.length);
		},
	};
	return (
		<>
			<div className={styles.textContainer}>
				<h2 className={styles.name}>{Members[selected].name}</h2>
				<p className={styles.role}>{Members[selected].role}</p>
			</div>

			<Slider {...settings}>
				{Members.map((member, i) => (
					<Member avatar={member.avatar} linkedin={member.linkedin} index={i} key={member.name}></Member>
				))}
			</Slider>
		</>
	);
};

export default Team;
