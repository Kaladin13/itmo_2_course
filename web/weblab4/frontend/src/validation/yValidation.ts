import * as Yup from 'yup'

export const validationSchemaY = Yup.number()
  .moreThan(-5, 'Y должен быть строго больше -5')
  .lessThan(3, 'Y должен быть строго меньше 3')
