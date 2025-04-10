import styles from './inputField.module.scss';
import PropTypes from 'Prop-types';

export const InputField = ({ placeHolder, register, errors, idName }) => {
	return (
		<div className={styles.input}>
			<input type="text" {...register(idName)} placeholder={placeHolder} />
			<p>{errors?.[idName]?.message} &#8203;</p>
		</div>
	);
};

InputField.propTypes = {
	placeHolder: PropTypes.string,
	register: PropTypes.func,
	errors: PropTypes.object,
	idName: PropTypes.string,
};
