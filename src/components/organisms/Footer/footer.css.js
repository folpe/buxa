import styled from '@emotion/styled'
import { pixelToRem } from '@@helpers/theme'

export const FooterBase = styled.footer`
  height: 40px;
  width: 100vw;
  max-width: 100%;
  margin-top: ${pixelToRem(48)};
  padding-top: ${pixelToRem(16)};
  background: ${({ theme }) => theme.palette.grey.darker};
  color: ${({ theme }) => theme.palette.common.white};
`
