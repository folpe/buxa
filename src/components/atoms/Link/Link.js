import React from 'react'
import { node, string, oneOf } from '@@helpers/prop-types'

const Link = (props) => {
  return <a {...props}>{props.children}</a>
}

const relPropTypes = [
  'alternate',
  'author',
  'bookmark',
  'external',
  'help',
  'license',
  'next',
  'nofollow',
  'noreferrer',
  'noopener',
  'prev',
  'search',
  'tag',
]

const targetPropTypes = ['_blank', '_parent', '_self', '_top']

Link.propTypes = {
  children: node.isRequired,
  href: string.isRequired,
  title: string,
  rel: oneOf(relPropTypes),
  target: oneOf(targetPropTypes),
}

export default Link
