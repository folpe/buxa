const colorShade = (col, amt) => {
  col = col.replace(/^#/, '')
  if (col.length === 3)
    col = col[0] + col[0] + col[1] + col[1] + col[2] + col[2]

  let [r, g, b] = col.match(/.{2}/g)
  ;[r, g, b] = [
    parseInt(r, 16) + amt,
    parseInt(g, 16) + amt,
    parseInt(b, 16) + amt,
  ]

  r = Math.max(Math.min(255, r), 0).toString(16)
  g = Math.max(Math.min(255, g), 0).toString(16)
  b = Math.max(Math.min(255, b), 0).toString(16)

  const rr = (r.length < 2 ? '0' : '') + r
  const gg = (g.length < 2 ? '0' : '') + g
  const bb = (b.length < 2 ? '0' : '') + b

  return `#${rr}${gg}${bb}`
}

const palette = {
  common: {
    black: '#000',
    white: '#fff',
  },
  grey: {
    darker: colorShade('#a8aeb4', -100),
    dark: colorShade('#a8aeb4', -50),
    main: '#a8aeb4',
    light: colorShade('#a8aeb4', 50),
    lighter: colorShade('#a8aeb4', 100),
  },
  primary: {
    dark: colorShade('#3f51b5', -50),
    main: '#3f51b5',
    light: colorShade('#3f51b5', 50),
    xtralight: colorShade('#3f51b5', 150),
  },
  secondary: {
    dark: colorShade('#FF1493', -50),
    main: '#FF1493',
    light: colorShade('#FF1493', 50),
    xtralight: colorShade('#FF1493', 150),
  },
  error: { main: 'red' },
  warning: { main: 'orange' },
  info: { main: 'blue' },
  success: { main: 'green' },
}

export default palette
