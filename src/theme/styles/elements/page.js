const page = (theme) => `
  html {
    scroll-behavior: smooth;
  }

  body {
    color: ${theme.palette.grey.main};
    font-family: 'Baloo Tamma 2', sans-serif, cursive;
    font-weight: 300;
    font-size: 1rem; // 16px
    line-height: 1.15;
    background-color: #ffffff;
  }
`
export default page
