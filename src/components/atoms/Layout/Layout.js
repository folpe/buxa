import React from 'react'
import { string, node, oneOf, oneOfType, any } from '@@helpers/prop-types'

import { LayoutBase } from './layout.css'
import { hot } from 'react-hot-loader/root'

const Layout = ({
  alignItems,
  justifyContent,
  flexDirection = 'row',
  wrap,
  children,
  as,
  forwardRef,
  ...props
}) => {
  return (
    <LayoutBase
      as={as}
      alignItems={alignItems}
      justifyContent={justifyContent}
      flexDirection={flexDirection}
      wrap={wrap}
      ref={forwardRef}
      {...props}
    >
      {children}
    </LayoutBase>
  )
}

Layout.propTypes = {
  alignItems: string, // todo
  justifyContent: string,
  flexDirection: oneOf(['column', 'row']),
  wrap: string,
  as: oneOfType([string, any]),
  children: node.isRequired,
  forwardRef: any,
}

export default hot(Layout)
