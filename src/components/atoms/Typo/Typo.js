import { node, string, bool } from '@@helpers/prop-types'
import React from 'react'
import { hot } from 'react-hot-loader/root'
import { TypoBase } from './typo.css'

const Typo = ({ children, as, color, center, ...props }) => (
  <TypoBase color={color} center={center} {...props}>
    {children}
  </TypoBase>
)

Typo.propTypes = {
  children: node.isRequired,
  color: string,
  center: bool,
  as: string,
}

export default hot(Typo)
