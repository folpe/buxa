import { css } from '@emotion/core'

import boxSizing from './generics/boxSizing'
import reducedMotion from './generics/reducedMotion'
import reset from './generics/reset'
import normalize from './generics/normalize'

import focus from './elements/focus'
import heading from './elements/heading'
import media from './elements/media'
import page from './elements/page'
import selection from './elements/selection'
import link from './elements/link'

import hidden from './utilities/hidden'
import fullHeight from './utilities/fullHeight'

const makeGlobalStyles = (theme) => {
  return css`
    // generics
    ${normalize()}
    ${boxSizing()}
    ${reducedMotion()}
    ${reset()}

    // elements
    ${focus()}
    ${heading()}
    ${link(theme)}
    ${media()}
    ${page(theme)}
    ${selection()}

    // utilities
    ${hidden()}
    ${fullHeight()}
  `
}

export default makeGlobalStyles

// `${focus()} ${heading()} ${link({ theme })} ${media()} ${page({ theme })} ${selection()}`
