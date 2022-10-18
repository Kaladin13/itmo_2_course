import * as Yup from 'yup'

export const registerValidationSchema = Yup.object({
  login: Yup.string()
    .min(4, 'Слишком короткий логин. Минимум 4 символа')
    .max(20, 'Слишком длинный логин. Максимум 20 символов')
    .required('Обязательное поле'),
  password: Yup.string()
    .min(4, 'Слишком короткий пароль. Минимум 4 символа')
    .max(20, 'Слишком длинный пароль. Максимум 20 символов')
    .required('Обязательное поле'),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Пароли не совпадают')
    .required('Повторите пароль'),
})
