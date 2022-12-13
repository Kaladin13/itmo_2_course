import * as Yup from 'yup'

import {
  Box,
  Button,
  ButtonGroup,
  Center,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
} from '@chakra-ui/react'
import { FC, MouseEventHandler, useContext, useState } from 'react'

import Api from '../../http/api'
import { AuthContext } from '../../pages/_app'
import { Dot } from '../../models/Dot'
import { useFormik } from 'formik'
import { validationSchemaR } from '../../validation/rValidation'
import { validationSchemaX } from '../../validation/xValidarion'
import { validationSchemaY } from '../../validation/yValidation'
import { validR } from '../../const/rValues'
import { validX } from '../../const/xValues'

const DotsForm: FC = () => {
  const user = useContext(AuthContext)
  const [Rvalue, setRvalue] = useState(1)
  const [Xvalue, setXvalue] = useState(0)
  const [Yvalue, setYValue] = useState(0)
  // const canvas = useRef<HTMLCanvasElement>('canvas')
  // const ctx = canvas.getContext('2d')
  const handleYChange = (newVal) => {
    // @ts-ignore
    setYValue(Number(newVal))
    // @ts-ignore
    formik.values.y = Number(newVal)
  }
  const handleXClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    // @ts-ignore
    setXvalue(Number(e.target.innerText))
    // @ts-ignore
    formik.values.x = Number(e.target.innerText)
  }
  const handleRClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    // @ts-ignore
    setRvalue(Number(e.target.innerText))
    // @ts-ignore
    formik.values.r = Number(e.target.innerText)
  }
  const formik = useFormik({
    initialValues: {
      login: user.login,
      r: Rvalue,
      sessionId: user.sessionId,
      x: Xvalue,
      y: Yvalue,
      // TODO: Добавить юзера сюда
    },
    onSubmit: (values) => {
      try {
        const { x, y, r } = values
        const { login, sessionId } = values
        Api.sendHit({ r, x, y } as Dot, sessionId, login)
      } catch {
        alert(JSON.stringify(values, null, 2))
      }
    },
    validationSchema: Yup.object({
      r: validationSchemaR,
      x: validationSchemaX,
      y: validationSchemaY,
    }),
  })
  return (
    <Box>
      <form onSubmit={formik.handleSubmit}>
        <Text>Выберите X:</Text>
        <ButtonGroup isAttached my={4}>
          {validX.map((val, ind) => {
            return (
              <Button
                key={ind}
                variant={val == Xvalue ? 'solid' : 'ghost'}
                onClick={handleXClick}
              >
                {val}
              </Button>
            )
          })}
        </ButtonGroup>
        <Text>Введите Y:</Text>
        <NumberInput
          my={4}
          precision={5}
          step={0.1}
          min={-5}
          max={3}
          onChange={(newVal) => handleYChange(newVal)}
          value={formik.values.y}
        >
          <NumberInputField
            placeholder={'Y: (-5 ... 3)'}
            name={'y'}
            id={'y'}
            // onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        {formik.touched.y && formik.errors.y ? (
          <div>{formik.errors.y}</div>
        ) : null}
        <Text>Выберите R:</Text>
        <ButtonGroup isAttached my={4}>
          {validR.map((val, ind) => {
            return (
              <Button
                key={ind}
                disabled={val < 0}
                onClick={handleRClick}
                variant={val == Rvalue ? 'solid' : 'ghost'}
              >
                {val}
              </Button>
            )
          })}
        </ButtonGroup>
        <Center>
          <Button type={'submit'}>Отправить</Button>
        </Center>
      </form>
    </Box>
  )
}

export default DotsForm
