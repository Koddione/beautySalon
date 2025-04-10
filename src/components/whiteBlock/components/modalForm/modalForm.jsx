import { InputField } from './inputField/inputField';
import styles from './modalForm.module.scss';
import PropTypes from 'Prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../../../schemas/schemaBuy';

export const ModalForm = ({ setIsOpen, id = 'modal-form' }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) });

	const onSubmit = (data) => {
		console.log(data);
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
					onClick={() => setIsOpen(false)}
					aria-label="Закрыть модальное окно"
				>
					&times;
				</button>
				<form onSubmit={handleSubmit(onSubmit)}>
					<InputField
						idName={'name'}
						placeHolder="Ваше имя"
						register={register}
						errors={errors}
					/>
					<InputField
						register={register}
						errors={errors}
						idName={'telegram'}
						placeHolder="Имя пользователя telegram"
					/>
					<InputField
						register={register}
						errors={errors}
						idName={'instagram'}
						placeHolder="Имя пользователя instagram"
					/>
					<button type="submit" className={styles.button}>
						Оставить заявку
					</button>
				</form>
			</dialog>
		</>
	);
};

ModalForm.propTypes = {
	setIsOpen: PropTypes.func,
	id: PropTypes.string,
};
