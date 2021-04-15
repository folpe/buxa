import { node, oneOf, string } from '@@helpers/prop-types'
import { any } from 'prop-types'
import React from 'react'
import { hot } from 'react-hot-loader/root'

import { HeadingText, Underline, IconWrapper } from './heading.css'

const Heading = ({
  title,
  as = 'h2',
  variant,
  color,
  icon,
  forwardRef,
  ...props
}) => {
  return (
    <div ref={forwardRef}>
      {icon && <IconWrapper>{icon}</IconWrapper>}
      <HeadingText as={as} variant={variant} color={color} {...props}>
        {title}
      </HeadingText>
      {variant === 'underlined' && <Underline />}
    </div>
  )
}

Heading.propTypes = {
  title: string.isRequired,
  as: oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  variant: oneOf(['underlined']),
  color: string,
  icon: node,
  forwardRef: any,
}

export default hot(Heading)
