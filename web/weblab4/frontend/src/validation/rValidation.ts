import * as Yup from 'yup'

import { validR } from '../const/rValues'

export const validationSchemaR = Yup.number().oneOf(
  validR,
  `R должно быть одно из значений ${validR}`
)
