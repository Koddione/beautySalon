import styles from './pinkBlock.module.scss';
import { Title } from './components/title/title';
import { Description } from './components/description/description';
import photo from '../../assets/photoKsu.jpg';

export const PinkBlock = () => {
	return (
		<div className={styles.container}>
			<div className={styles.textContainer}>
				<Title />
				<Description />
				<button className={styles.button}>Узнать подробнее</button>
			</div>
			<img className={styles.image} src={photo} alt="Ксения" />
		</div>
	);
};
