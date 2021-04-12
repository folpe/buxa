import styled from '@emotion/styled'
import { pixelToRem } from '@@helpers/theme'

const widthSize = (division) => `
  width: calc(100% / ${division} -
    (${pixelToRem(20)} * ${division - 1} / ${division}));
  &:nth-of-type(-n + ${division}) {
    margin-bottom: ${pixelToRem(48)}; // 48px
  }
`

export const LayoutItemBase = styled.div`
  display: flex;
  ${({ division }) => division && widthSize(division)}}
`
