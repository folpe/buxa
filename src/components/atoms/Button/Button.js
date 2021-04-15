import React from 'react'
import { hot } from 'react-hot-loader/root'
import { node, oneOf, func } from '@@helpers/prop-types'

import { ButtonBase } from './button.css'
import { string } from 'prop-types'

/**
 * Represents a button.
 * @component
 * @param {color} color - The color of the button.
 * @param {variant} variant - The variant of the button.
 */
const Button = ({ children, onClick, color, variant = 'plain', className }) => {
  return (
    <ButtonBase
      color={color}
      variant={variant}
      onClick={onClick}
      className={className}
    >
      {children}
    </ButtonBase>
  )
}

Button.propTypes = {
  children: node.isRequired,
  onClick: func,
  color: oneOf(['primary', 'secondary']).isRequired,
  variant: oneOf(['outlined', 'plain', 'naked']),
  className: string,
}

export default hot(Button)
