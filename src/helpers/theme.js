// px to em function
export const pixelToEm = (target, context) => {
  if (typeof target !== 'number') {
    throw new Error(`${target} needs to be a number`)
  }

  if (typeof context !== 'number') {
    throw new Error(`${context} needs to be a number`)
  }

  if (target === 0) {
    return 0
  }
  return `${target / context}em`
}

// px to rem function
export const pixelToRem = (target, root = 16) => {
  if (typeof target !== 'number') {
    throw new Error(`${target} needs to be a number`)
  }

  if (typeof root !== 'number') {
    throw new Error(`${root} needs to be a number`)
  }

  if (target === 0) {
    return 0
  }
  return `${target / root}rem`
}
