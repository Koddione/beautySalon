import styles from './pinkBlock.module.scss';
import { Title } from './components/title/title';
import { Description } from './components/description/description';
import photo from '../../assets/photoKsu.jpg';
import { ModalDescription } from './components/modalDescription/modalDescription';
import { useState } from 'react';

export const PinkBlock = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClickOpen = () => {
		setIsOpen(true);
	};

	return (
		<div className={styles.container}>
			<div className={styles.textContainer}>
				<Title />
				<Description />
				<button className={styles.button} onClick={handleClickOpen}>
					Узнать подробнее
				</button>
				{isOpen && <ModalDescription setIsOpen={setIsOpen} />}
			</div>
			<img className={styles.image} src={photo} alt="Ксения" />
		</div>
	);
};
