import styles from './table.module.scss';

export const Table = () => {
	return (
		<div className={styles.table}>
			<h3 className={styles.head}>Для тех, кто хочет</h3>
			<ul className={styles.contant}>
				<li className={styles.row}>
					убрать морщинки, носогубные складки, межбровный залом
				</li>
				<li className={`${styles.row} ${styles.darkRow}`}>подтянуть овал лица</li>
				<li className={styles.row}>избваиться от второго подбородка</li>
				<li className={`${styles.row} ${styles.darkRow}`}>
					убрать напряжение с жевательных мышц и напряжение с нижней челюсти
				</li>
			</ul>
		</div>
	);
};
