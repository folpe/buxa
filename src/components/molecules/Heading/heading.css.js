import styled from '@emotion/styled'

export const HeadingBase = styled.h2`
  color: ${({ color }) => color}
    ${({ variant }) => {
      if (variant === 'underlined') {
        return `
        text-transform: uppercase;
        flex-direction: column;
        display: flex;
        align-items: center;
        justify-content: center;
      `
      }
    }};
`

export const IconWrapper = styled.i`
  font-size: 32px;
  height: 68px;
  width: 68px;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 0 1.25rem rgba(108, 118, 134, 0.1);
  line-height: 68px;
  transition: background-color ease-in-out 0.5s;
`

export const Underline = styled.span`
  display: block;
  margin: 12px auto 36px;
  width: 50px;
  height: 4px;
  background: ${({ theme }) => theme.palette.secondary.main};
`
