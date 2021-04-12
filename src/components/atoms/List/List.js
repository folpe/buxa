import React from 'react'
import { node, oneOf } from '@@helpers/prop-types'
import { hot } from 'react-hot-loader/root'
import { ListBase } from './list.css'

const List = ({ type, children }) => {
  const listType = type === 'ordered' ? 'ol' : 'ul'

  return <ListBase as={listType}>{children}</ListBase>
}

List.propTypes = {
  children: node.isRequired,
  type: oneOf(['ordered', 'unordered']),
}

export default hot(List)
