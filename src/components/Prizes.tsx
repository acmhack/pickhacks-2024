import styles from '../styles/components/Prizes.module.css';

import { PrizeList } from '@/lib/PrizeList';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import PrizeCard from './PrizeCard';

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

const Prizes = () => {
	var settings = {
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		speed: 1500,
        draggable: false,
		arrows: true,
		initialSlide: 0,
		centerPadding: '0px',
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		responsive: [
			{
				breakpoint: 1650,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 1250,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 825,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	};
	return (
		<>
			<div className={styles.carouselContainer}>
				<Slider {...settings} className={styles.inner}>
					{PrizeList.map((item) => (
						<PrizeCard key={item.id} title={item.title} description={item.description} image={item.img} link={item.link}></PrizeCard>
					))}
				</Slider>
			</div>
		</>
	);
};

export default Prizes;
