import { catcher } from '../helpers'

export const getAll = ({ get }) => async () =>
  await catcher(get)('/pokemon?limit=30&offset=0')

export const getOne = ({ get }) => async url =>
  await catcher(get)(url)

// Mismo código con bloque try/catch en lugar del helper "catcher"
// export const getAll = ({ get }) => async () => {
//   try {
//     return (await get('/pokemon?limit=30&offset=0')).data
//   } catch (error) {
//     console.info('> something went wrong')
//     return false
//   }
// }

// export const getOne = ({ get }) => async url => {
//   try {
//     return (await get(url)).data
//   } catch (error) {
//     console.info('> something went wrong')
//     return false
//   }
// }