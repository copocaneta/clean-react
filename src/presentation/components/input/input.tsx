import React, { useContext } from 'react'
import Styles from './input-styles.scss'
import Context from '@/presentation/contexts/form/form-context'
import PropTypes from 'prop-types'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<Props> = (props: Props) => {
  //   const enableInput = (event: React.FocusEvent<HTMLInputElement>): void => {
  //     event.target.readOnly = false
  //   }
  const { state, setState } = useContext(Context)

  const error = state[`${props.name}Error`]

  const enableInput: React.FocusEventHandler<HTMLInputElement> = (event) => {
    event.target.readOnly = false
  }

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
  }

  const getStatus = (): string => {
    return error ? '🔴' : '🟢'
  }

  const getTitle = (): string => {
    return error || 'Tudo certo!'
  }

  return (
        <div className={Styles.inputWrap}>
            <input {... props} data-testid={props.name} readOnly onFocus={enableInput} onChange={handleChange} />
            <span data-testid={`${props.name}-status`} title={getTitle()} className={Styles.status}>{getStatus()}</span>
        </div>
  )
}

Input.propTypes = {
  name: PropTypes.string
}

export default Input
