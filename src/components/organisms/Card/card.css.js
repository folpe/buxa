import styled from '@emotion/styled'

export const CardHeading = styled.h3``

export const CardBase = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  transition: transform 0.5s;
  &:hover {
    transform: translateY(-10px);
    & i {
      background: ${({ theme }) => theme.palette.secondary.main};
      & svg path {
        fill: white;
      }
    }
  }
`
