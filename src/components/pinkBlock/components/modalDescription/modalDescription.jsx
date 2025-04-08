import styles from './modalDescription.module.scss';
import PropTypes from 'Prop-types';

export const ModalDescription = ({ setIsOpen }) => {
	const handleCliskClose = () => {
		setIsOpen(false);
	};

	return (
		<>
			<div className={styles.shadow}></div>
			<div className={styles.container}>
				<div className={styles.close} onClick={handleCliskClose}>
					&times;
				</div>
				<p>
					Соединив магию своих рук и силу ума, я создала возможность для каждой
					женщины быть самой себе целителем.
				</p>
				<p>
					По профессии я врач-патологоанатом, обладаю глубокими знаниями
					анатомии мышц, нервов и сосудов.
				</p>
				<p>
					Понимаю, какие точки самые чувствительные и как воздействие на них
					может привести к реальным изменениям.
				</p>
				<p>
					На клеточном уровне разбираюсь в процессе старения, благодаря чему
					могу предложить эффективные техники для профилактики и замедления
					возрастных изменений.
				</p>
			</div>
		</>
	);
};

ModalDescription.propTypes = {
	setIsOpen: PropTypes.func,
};
