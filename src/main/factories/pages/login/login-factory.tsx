import { makeLoginValidation } from './login-validation-factory'
import React from 'react'
import { Login } from '@/presentation/pages'
import { makeRemoteAuthentication } from '@/main/factories/usecases/authentication/remote-authentication-factory'

export const makeLogin: React.FC = () => {
  return <Login authentication={makeRemoteAuthentication()} validation={makeLoginValidation()} />
}
