import styles from './title.module.scss';

export const Title = () => {
	return (
		<header className={styles.container}>
			<h1 className={styles.title1}>Пошагово рецепт преображения</h1>
			<h2 className={styles.title2}>и возвращение себя в отражении и по жизни</h2>
		</header>
	);
};
