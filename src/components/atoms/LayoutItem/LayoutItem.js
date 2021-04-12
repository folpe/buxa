import React from 'react'
import { node, nonNegativeInteger } from '@@helpers/prop-types'
import { LayoutItemBase } from './layoutItem.css'
import { hot } from 'react-hot-loader/root'

const LayoutItem = ({ children, division }) => {
  return <LayoutItemBase division={division}>{children}</LayoutItemBase>
}

LayoutItem.propTypes = {
  children: node.isRequired,
  division: nonNegativeInteger,
}

export default hot(LayoutItem)
