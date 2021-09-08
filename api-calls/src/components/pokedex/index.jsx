import Pokemon from 'components/pokemon'

import './index.css'

export default ({ pokedex }) => {
  return (
    <section className="pokedex">
      {pokedex.map(({ sprites, name }, index) =>
        <Pokemon {...{ sprites, name }} key={index} />)}
    </section>
  )
}