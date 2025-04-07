import styles from './title.module.scss';

export const Title = () => {
	return (
		<div className={styles.container}>
			<p className={styles.title1}>Пошагово рецепт преображения</p>
			<p className={styles.title2}>и возвращение себе в отражении и по жизни</p>
		</div>
	);
};
