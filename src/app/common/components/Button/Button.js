import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './button.scss'

function Button({ classNames, children }) {
  const buttonClass = classnames(
    styles.button,
    classNames,
  )

  return (
    <button
      type="button"
      className={buttonClass}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  classNames: PropTypes.string,
}

Button.defaultProps = {
  children: '',
  classNames: '',
}

export default Button
