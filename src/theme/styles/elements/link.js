const link = (theme) => `
  a,
  a:visited {
    color: ${theme.palette.primary.main};
    text-decoration: none;
    &.darkMode{
      color: ${theme.palette.common.white};
    }
  }


  a:focus,
  a:hover,
  a:active {
    color: ${theme.palette.secondary.main};
    text-decoration: underline;
    &.darkMode{
      color: ${theme.palette.secondary.main};
    }
  }
`

export default link
