import {
  Box,
  Button,
  Center,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react'
/* eslint-disable indent */
import {
  CheckIcon,
  SmallCloseIcon,
  ViewIcon,
  ViewOffIcon,
} from '@chakra-ui/icons'
import { FC, useState } from 'react'

import LoginWithGoogle from './LoginWithGoogle'
import { registerValidationSchema } from '../../validation/registerValidation'
import { useFormik } from 'formik'

const RegisterForm: FC = () => {
  const [showPass, setShowPass] = useState(false)
  const [showPasswordConf, setShowPasswordConf] = useState(false)
  const handlePasswordClick = () => setShowPass(!showPass)
  const handlePasswordConfClick = () => setShowPasswordConf(!showPass)
  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
      passwordConfirmation: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
    validationSchema: registerValidationSchema,
  })

  return (
    <Box w={'70%'} py={4}>
      <Box mb={4}>
        <LoginWithGoogle w={'100%'} />
      </Box>
      <form onSubmit={formik.handleSubmit}>
        <InputGroup mb={4}>
          <Input
            id='login'
            name='login'
            type='text'
            placeholder='Логин'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.login}
          />
          {formik.touched.login && (
            <InputRightElement>
              {formik.errors.login ? (
                <SmallCloseIcon color='red.500' />
              ) : (
                <CheckIcon color='green.500' />
              )}
            </InputRightElement>
          )}
        </InputGroup>
        {formik.touched.login && formik.errors.login ? (
          <div>{formik.errors.login}</div>
        ) : null}
        <InputGroup mb={4}>
          <InputLeftElement>
            <IconButton
              variant={'ghost'}
              h='1.75rem'
              size='sm'
              onClick={handlePasswordClick}
              aria-label={'Show password'}
            >
              {showPass ? <ViewOffIcon /> : <ViewIcon />}
            </IconButton>
          </InputLeftElement>
          <Input
            id='password'
            name='password'
            placeholder='Пароль'
            type={showPass ? 'text' : 'password'}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && (
            <InputRightElement>
              {formik.errors.password ? (
                <SmallCloseIcon color='red.500' />
              ) : (
                <CheckIcon color='green.500' />
              )}
            </InputRightElement>
          )}
        </InputGroup>
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}
        <InputGroup mb={4}>
          <InputLeftElement>
            <IconButton
              variant={'ghost'}
              h='1.75rem'
              size='sm'
              onClick={handlePasswordConfClick}
              aria-label={'Show password'}
            >
              {showPasswordConf ? <ViewOffIcon /> : <ViewIcon />}
            </IconButton>
          </InputLeftElement>
          <Input
            id='passwordConfirmation'
            name='passwordConfirmation'
            placeholder='Повторите пароль'
            type={showPasswordConf ? 'text' : 'password'}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.passwordConfirmation}
          />
          {formik.touched.passwordConfirmation && (
            <InputRightElement>
              {formik.errors.passwordConfirmation ? (
                <SmallCloseIcon color='red.500' />
              ) : (
                <CheckIcon color='green.500' />
              )}
            </InputRightElement>
          )}
        </InputGroup>
        {formik.touched.passwordConfirmation &&
        formik.errors.passwordConfirmation ? (
          <div>{formik.errors.passwordConfirmation}</div>
        ) : null}
        <Center>
          <Button px={10} type='submit'>
            Регистрация
          </Button>
        </Center>
      </form>
    </Box>
  )
}

export default RegisterForm
