import styled from '@emotion/styled'

import { pixelToRem } from '@@helpers/theme'

export const MediaBase = styled.div`
  display: block;
  border-radius: ${({ rounded }) => rounded && '50%'};
  ::after {
    content: '';
    clear: both;
    display: block;
  }
  & img {
    width: 100%;
    float: left;
    margin-right: ${pixelToRem(30)}; // 30px
  }
`

// // 1. Create a formatting context
// // @see [Overflow – a secret benefit](http://www.stubbornella.org/content/2009/07/23/overflow-a-secret-benefit/)
// .o-media__body {
//   display: block;
//   overflow: hidden; // 1
// }
