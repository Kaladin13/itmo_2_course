import * as Yup from 'yup'

import { validX } from '../const/xValues'

export const validationSchemaX = Yup.number().oneOf(
  validX,
  `X должно быть одно из значений ${validX}`
)
