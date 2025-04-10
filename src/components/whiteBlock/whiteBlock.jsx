import styles from './whiteBlock.module.scss';
import picture from '../../assets/selecon.jpg';
import { Table } from './components/table/table';
import { ModalForm } from './components/modalForm/modalForm';
import { useState } from 'react';

export const WhiteBlock = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className={styles.container}>
			<p className={styles.title}>
				Курс <br /> САМОМАССАЖ лица
			</p>
			<button className={styles.btn} onClick={() => setIsOpen(true)}>
				Купить
			</button>
			{isOpen && <ModalForm setIsOpen={setIsOpen} />}
			<div className={styles.info}>
				<div className={styles.textInfo}>
					<img className={styles.image} src={picture} alt="фото" />
					<div className={styles.text}>
						<p className={styles.text1}>
							Я создаю этот курс, чтобы каждая девушка смогла прикоснуться к
							своему лицу с исцеляющей силой и заботой
						</p>
						<p className={styles.text2}>
							С курсом вы сможете любоваться своим отражением в зеркале
						</p>
					</div>
				</div>
				<Table />
			</div>
			<p className={styles.footer}>
				После прохождения курса любоваться своим отражением в зеркале, получать
				комплименты, вернуть своей коже сияние, здоровый цвет и тонус станет не
				просто мечтой, а реальностью.
			</p>
		</div>
	);
};
