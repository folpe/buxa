import React from 'react'
import { hot } from 'react-hot-loader/root'
import { string, object, node } from '@@helpers/prop-types'

import { CardBase, CardHeading } from './card.css'
import { Typo, Heading } from '@@components'

const Card = ({ icon, title, body }) => {
  return (
    <CardBase>
      <Heading as={CardHeading} icon={icon} title={title} />
      <Typo>{body}</Typo>
    </CardBase>
  )
}

Card.propTypes = {
  title: string.isRequired,
  body: object.isRequired,
  icon: node,
}

export default hot(Card)
