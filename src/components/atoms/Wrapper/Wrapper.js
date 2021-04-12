import React from 'react'
import { string, node } from '@@helpers/prop-types'

import { WrapperBase } from './wrapper.css'
import { hot } from 'react-hot-loader/root'

const Wrapper = ({ as, children, ...props }) => {
  return <WrapperBase {...props}>{children}</WrapperBase>
}

Wrapper.propTypes = {
  as: string,
  children: node.isRequired,
}

export default hot(Wrapper)
