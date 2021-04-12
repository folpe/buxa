import styled from '@emotion/styled'

import BG from '@@assets/images/BG.jpg'
import wave from '@@assets/images/wave1.png'

export const HeaderBase = styled.header`
  position: relative;
  color: white;
  width: 100vw;
  max-width: 100%;
  height: 500px;
  background: linear-gradient(
      to right,
      rgba(81, 45, 168, 0.9),
      rgba(113, 30, 114, 0.9)
    ),
    url(${BG});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    height: 120px;
    width: 100vw;
    max-width: 100%;
    background-image: url(${wave});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
  }
`
export const Navigation = styled.nav`
  height: 60px;
  align-self: flex-start;
`

export const Logo = styled.div`
  margin-right: 50px;
  width: 40px;
`
