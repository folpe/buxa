import React from 'react'
import { string, oneOf, bool } from '@@helpers/prop-types'
import { hot } from 'react-hot-loader/root'
import { MediaBase } from './media.css'

const Media = ({ type = 'photo', src, alt, rounded, ...props }) => {
  // if (type === 'photo') {
  //   return (
  //     <div className="o-media">
  //       <img className="o-media__img" src={src} alt={alt} {...props} />
  //     </div>
  //   )
  // }
  return (
    <MediaBase rounded={rounded}>
      <img src={src} alt={alt} {...props} />
    </MediaBase>
  )
}

Media.propTypes = {
  src: string.isRequired,
  alt: string.isRequired,
  rounded: bool,
  type: oneOf(['photo', 'video']),
}

export default hot(Media)
