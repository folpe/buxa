import styled from '@emotion/styled'

export const ButtonBase = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  min-width: 150px;
  height: 30px;
  padding: ${({ theme }) =>
    `${2 * theme.spacing.unit}px ${4 * theme.spacing.unit}px`};
  font-weight: 700;
  font-size: 14px; // 12px
  text-transform: uppercase;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  transition: background-color 0.5s, transform 0.3s;

  ${({ theme, color, variant }) => {
    if (variant === 'plain') {
      if (color === 'primary') {
        return `
          border: none;
          background: ${theme.palette.primary.main};
          color: ${theme.palette.common.white};
          &:hover {
            background: ${theme.palette.primary.dark};
          }
        `
      }
      if (color === 'secondary') {
        return `
          border: none;
          background: ${theme.palette.secondary.main};
          color: ${theme.palette.common.white};
          &:hover {
            background: ${theme.palette.secondary.dark};
          }
        `
      }
    }

    if (variant === 'outlined') {
      if (color === 'primary') {
        return `
          background: ${theme.palette.common.white};
          border: 2px solid ${theme.palette.primary.main};
          color:${theme.palette.primary.main};
          &:hover {
            background: ${theme.palette.primary.xtralight};
          }
        `
      }
      if (color === 'secondary') {
        return `
          background: ${theme.palette.common.white};
          border: 2px solid ${theme.palette.secondary.main};
          color:${theme.palette.secondary.main};
          &:hover {
            background: ${theme.palette.secondary.xtralight};
          }
        `
      }
    }
    if (variant === 'naked') {
      return `
        background: none;
        border: none;
        min-width: unset;
        padding: ${({ theme }) =>
          `${2 * theme.spacing.unit}px ${2 * theme.spacing.unit}px`};
      `
    }
  }}
`
