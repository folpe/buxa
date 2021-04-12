import { pixelToRem } from '@@helpers/theme'

const heading = () => `
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 300;
    line-height: 1.25;
  }

  h1 {
    font-size: ${pixelToRem(48)}; // 36px
  }

  h2 {
    font-size: ${pixelToRem(36)}; // 24px
  }

  h3 {
    font-size: ${pixelToRem(24)}; // 22px
  }

  h4 {
    font-size: ${pixelToRem(20)}; // 20px
  }

  h5 {
    font-size: ${pixelToRem(18)}; // 18px
  }

  h6 {
    font-size: 1rem; // 16px
  }
`

export default heading
