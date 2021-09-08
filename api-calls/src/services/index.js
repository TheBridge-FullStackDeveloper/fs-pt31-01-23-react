import axios from 'axios'
// Más información de axios en: https://www.npmjs.com/package/axios

import { getAll, getOne } from './pokemons'

const client = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default {
  getAll: getAll(client),
  getOne: getOne(axios),
}