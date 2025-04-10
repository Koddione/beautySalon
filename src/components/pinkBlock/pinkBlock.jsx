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
		<section className={styles.container} aria-labelledby="about-ksu">
			<article className={styles.textContainer}>
				<Title id="about-ksu" />
				<Description />
				<button
					className={styles.button}
					onClick={handleClickOpen}
					aria-controls="modal-description"
				>
					Узнать подробнее
				</button>
				{isOpen && (
					<ModalDescription setIsOpen={setIsOpen} id="modal-description" />
				)}
			</article>
			<img className={styles.image} src={photo} alt="Портрет Ксении" />
		</section>
	);
};
