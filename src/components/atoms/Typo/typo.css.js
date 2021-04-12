import styled from '@emotion/styled'

export const TypoBase = styled.span`
  ${({ center }) =>
    center &&
    `
    display: block;
    text-align: center;
  `}
`
