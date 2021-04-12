import styled from '@emotion/styled'
import { pixelToRem } from '@@helpers/theme'

export const WrapperBase = styled.div`
  padding-right: ${pixelToRem(30)}; // 30px
  padding-left: ${pixelToRem(30)}; // 30px

  // From 992px (992px or higher)
  @media screen and (min-width: 62rem) {
    margin-right: auto;
    margin-left: auto;
    padding-right: 0;
    padding-left: 0;
    width: 100%;
    max-width: ${pixelToRem(930)}; // 930px
  }
`
