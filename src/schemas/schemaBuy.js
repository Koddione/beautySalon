import * as yup from 'yup';

const required = 'Поле обязательно к заполнению';
const usernameRegex = /^[a-zA-Z0-9_@]{1,32}$/;

export const schema = yup.object().shape({
	name: yup.string().required(required).max(20, 'Максимум 20 символов'),
	telegram: yup
		.string()
		.required(required)
		.matches(usernameRegex, 'Введите корректный ник Telegram')
		.max(32, 'Максимум 32 символа'),
	instagram: yup
		.string()
		.required(required)
		.matches(usernameRegex, 'Введите корректный ник Instagram')
		.max(30, 'Максимум 30 символов'),
});
