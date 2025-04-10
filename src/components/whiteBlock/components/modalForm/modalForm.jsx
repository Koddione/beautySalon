import { InputField } from './inputField/inputField';
import styles from './modalForm.module.scss';
import PropTypes from 'Prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../../../schemas/schemaBuy';

export const ModalForm = ({ setIsOpen }) => {
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
			<div className={styles.shadow}></div>
			<div className={styles.container}>
				<div className={styles.close} onClick={() => setIsOpen(false)}>
					&times;
				</div>
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
					<button type="submit">Оставить заявку</button>
				</form>
			</div>
		</>
	);
};

ModalForm.propTypes = {
	setIsOpen: PropTypes.func,
};
