import styles from './table.module.scss';

export const Table = () => {
	return (
		<div className={styles.table}>
			<div className={styles.head}>Для тех, кто хочет</div>
			<div className={styles.contant}>
				<div className={styles.row}>
					убрать морщинки, носогубные складки, межбровный залом
				</div>
				<div className={`${styles.row} ${styles.darkRow}`}>
					подтянуть овал лица
				</div>
				<div className={styles.row}>избваиться от второго подбородка</div>
				<div className={`${styles.row} ${styles.darkRow}`}>
					убрать напряжение с жевательных мышц и напряжение с нижней челюсти
				</div>
			</div>
		</div>
	);
};
