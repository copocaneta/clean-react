import React from 'react'
import Styles from './spinner-styles.scss'
import PropTypes from 'prop-types'

type Props = React.HTMLAttributes<HTMLElement>

// the code for this loading spinner was taken from https://loading.io/css

const Spinner: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <div {... props} data-testid="spinner" className={[Styles.spinner, props.className].join(' ')}>
        <div/>
        <div/>
        <div/>
        <div/>
    </div>
  )
}

Spinner.propTypes = {
  className: PropTypes.string
}

export default Spinner
