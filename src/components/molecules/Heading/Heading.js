import { node, oneOf, string } from '@@helpers/prop-types'
import React from 'react'
import { hot } from 'react-hot-loader/root'

import { HeadingBase, Underline, IconWrapper } from './heading.css'

const Heading = ({ title, as = 'h2', variant, color, icon, ...props }) => {
  return (
    <>
      {icon && <IconWrapper>{icon}</IconWrapper>}
      <HeadingBase as={as} variant={variant} color={color} {...props}>
        {title}
      </HeadingBase>
      {variant === 'underlined' && <Underline />}
    </>
  )
}

Heading.propTypes = {
  title: string.isRequired,
  as: oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  variant: oneOf(['underlined']),
  color: string,
  icon: node,
}

export default hot(Heading)
