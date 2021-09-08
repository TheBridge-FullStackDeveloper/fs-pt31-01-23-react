export const catcher = fn => async (...args) => {
  try {
    return (await fn(...args)).data
  } catch (error) {
    console.info('> something went wrong')
    return false
  }
}