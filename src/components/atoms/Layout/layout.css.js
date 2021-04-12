import styled from '@emotion/styled'

export const LayoutBase = styled.div`
  display: flex;
  ${({ theme, flexDirection, alignItems, justifyContent, wrap }) => `
    flex-direction: ${flexDirection};
    align-items: ${alignItems};
    justify-content: ${justifyContent};
    flex-wrap: ${wrap};
  `}
`
