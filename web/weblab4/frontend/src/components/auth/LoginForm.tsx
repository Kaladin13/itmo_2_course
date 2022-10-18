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
import {
  CheckIcon,
  SmallCloseIcon,
  ViewIcon,
  ViewOffIcon,
} from '@chakra-ui/icons'
import { FC, useContext, useState } from 'react'

import { loginValidationSchema } from '../../validation/loginValidation'
import LoginWithForm from './LoginWithForm'
import { useFormik } from 'formik'

const LoginForm: FC = () => {
  const [showPass, setShowPass] = useState(false)
  const handlePasswordClick = () => setShowPass(!showPass)
  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
    validationSchema: loginValidationSchema,
  })

  return (
    <Box w={'70%'} py={4}>
      <LoginWithForm />
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
        <Center>
          <Button px={10} type='submit'>
            Вход
          </Button>
        </Center>
      </form>
    </Box>
  )
}

export default LoginForm
