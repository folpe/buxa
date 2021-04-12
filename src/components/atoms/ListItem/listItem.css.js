import styled from '@emotion/styled'
import { pixelToRem } from '@@helpers/theme'

export const ListItemBase = styled.li`
  margin: 0;
  padding: 0;
  list-style: none;

  ${({ theme, inline }) => {
    if (inline) {
      return `
        display: inline-block;
        :not(:first-of-type) {
            margin-left: ${pixelToRem(16)}; // 16px;
          }
      `
    }
  }}
`
