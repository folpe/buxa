import React from 'react'
import { hot } from 'react-hot-loader/root'
import { node, oneOf } from '@@helpers/prop-types'

import { ButtonBase } from './button.css'

/**
 * Represents a button.
 * @component
 * @param {color} color - The color of the button.
 * @param {variant} variant - The variant of the button.
 */
const Button = ({ children, color, variant = 'plain' }) => {
  return (
    <ButtonBase color={color} variant={variant}>
      {children}
    </ButtonBase>
  )
}

Button.propTypes = {
  children: node.isRequired,
  color: oneOf(['primary', 'secondary']).isRequired,
  variant: oneOf(['outlined', 'plain']),
}

export default hot(Button)
