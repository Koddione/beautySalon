import styles from './description.module.scss';

export const Description = () => {
	return (
		<section className={styles.description} aria-label="Описание Ксении">
			<p className={styles.desc1}>Косолапова Ксения - врач, массажист</p>
			<p className={styles.desc2}>
				Соеденив магию своих рук и силу ума, я создала возможность для каждой
				женщины быть самой себе целителем
			</p>
		</section>
	);
};
