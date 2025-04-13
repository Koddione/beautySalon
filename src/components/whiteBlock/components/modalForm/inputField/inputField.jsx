import styles from './inputField.module.scss';
import PropTypes from 'prop-types';

export const InputField = ({ placeHolder, register, errors, idName }) => {
	return (
		<div className={styles.input}>
			<input
				id={idName}
				type="text"
				{...register(idName)}
				placeholder={placeHolder}
				aria-invalid={!!errors?.[idName]}
				aria-describedby={`${idName}-error`}
			/>
			<p id={`${idName}-error`}>{errors?.[idName]?.message} &#8203;</p>
		</div>
	);
};

InputField.propTypes = {
	placeHolder: PropTypes.string,
	register: PropTypes.func,
	errors: PropTypes.object,
	idName: PropTypes.string,
};
