import React from 'react'
import { any, node, bool } from '@@helpers/prop-types'
import { ListItemBase } from './listItem.css'
import { hot } from 'react-hot-loader/root'

const ListItem = ({ children, component, inline, ...props }) => {
  const Component = component || ''
  return (
    <ListItemBase inline={inline} {...props}>
      <Component {...props}>{children}</Component>
    </ListItemBase>
  )
}

ListItem.propTypes = {
  component: any,
  inline: bool,
  children: node.isRequired,
}

export default hot(ListItem)
