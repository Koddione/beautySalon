import styles from './whiteBlock.module.scss';
import picture from '../../assets/selecon.jpg';
import { Table } from './components/table/table';
import { ModalForm } from './components/modalForm/modalForm';
import { useState } from 'react';

export const WhiteBlock = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<section className={styles.container}>
			<h2 className={styles.title}>
				Курс <br /> САМОМАССАЖ лица
			</h2>
			<button
				className={styles.btn}
				onClick={() => setIsOpen(true)}
				aria-expanded={isOpen}
				aria-controls="modal-form"
			>
				Купить
			</button>
			{isOpen && <ModalForm setIsOpen={setIsOpen} id="modal-form" />}
			<article className={styles.info}>
				<div className={styles.textInfo}>
					<img className={styles.image} src={picture} alt="Фото курса" />
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
			</article>
			<footer className={styles.footer}>
				После прохождения курса любоваться своим отражением в зеркале, получать
				комплименты, вернуть своей коже сияние, здоровый цвет и тонус станет не
				просто мечтой, а реальностью.
			</footer>
		</section>
	);
};
