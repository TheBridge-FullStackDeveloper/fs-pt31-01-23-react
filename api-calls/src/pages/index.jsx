import { useEffect, useState } from "react"

import Input from 'components/input'
import Pokedex from 'components/pokedex'

import pokemons from 'services'

export default () => {
  const [pokedex, setPokedex] = useState([])
  const [search, setSearch] = useState('')

  const handleChange = ({ target }) =>
    setSearch(target.value)

  const searchFilter = list =>
    list.filter(({ name }) =>
      !search ||
      name.toLowerCase()
        .includes(search.toLowerCase()))

  useEffect(() => {
    (async () => {
      const response = await pokemons.getAll()

      // Para cambiar el estado por cada respuesta de la API
      for await (let pokemon of response.results) {
        const item = await pokemons.getOne(pokemon.url)
        setPokedex(prevState => [...prevState, item])
      }

      // Para cambiar el estado tras todas las respuestas de la API
      // const list = []
      // for await (let pokemon of response.results) {
      //   const item = await pokemons.getOne(pokemon.url)
      //   list.push(item)
      // }
      // setPokedex([...list])
    })()
  }, [])

  return (
    <section>
      <Input
        value={search}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <Pokedex pokedex={searchFilter(pokedex)} />
    </section>
  )
}