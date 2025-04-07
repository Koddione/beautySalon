import styles from './description.module.scss';

export const Description = () => {
	return (
		<div className={styles.description}>
			<p className={styles.desc1}>Косолапова Ксения - врач, массажист</p>
			<p className={styles.desc2}>
				Соеденив магию своих рук и силу ума, я создала возможность для каждой
				женщины быть самой себе целитилем
			</p>
		</div>
	);
};
