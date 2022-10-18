import * as Yup from 'yup'

export const loginValidationSchema = Yup.object({
  login: Yup.string()
    .min(4, 'Слишком короткий логин. Минимум 4 символа')
    .max(20, 'Слишком длинный логин. Максимум 20 символов')
    .required('Обязательное поле'),
  password: Yup.string()
    .min(4, 'Слишком короткий пароль. Минимум 4 символа')
    .max(20, 'Слишком длинный пароль. Максимум 20 символов')
    .required('Обязательное поле'),
})
