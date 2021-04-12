const boxSizing = () => `
html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}
`

export default boxSizing
