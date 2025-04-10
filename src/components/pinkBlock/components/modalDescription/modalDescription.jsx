import styles from './modalDescription.module.scss';
import PropTypes from 'Prop-types';

export const ModalDescription = ({ setIsOpen, id = 'modal-description' }) => {
	const handleCliskClose = () => {
		setIsOpen(false);
	};

	return (
		<>
			<div className={styles.shadow} aria-hidden="true" />
			<dialog
				className={styles.container}
				id={id}
				open
				aria-labelledby={`${id}-title`}
				aria-modal="true"
				role="dialog"
			>
				<button
					className={styles.close}
					onClick={handleCliskClose}
					aria-label="Закрыть модальное окно"
				>
					&times;
				</button>
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
			</dialog>
		</>
	);
};

ModalDescription.propTypes = {
	setIsOpen: PropTypes.func,
	id: PropTypes.string,
};
