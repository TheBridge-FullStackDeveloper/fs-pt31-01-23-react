import { useState, useEffect } from 'react'

import Input from 'components/input'
import Paragraph from 'components/paragraph'

export default () => {
  const [text, setText] = useState('')
  const [random, setRandom] = useState(0)
  let id = null

  const handlechange = ({ target }) => {
    setText(target.value)
  }

  useEffect(() => {
    setTimeout(() => {
      setRandom(Math.random() * 10000)
    }, 1000)
  }, [random])

  useEffect(() => {
    if (text) {
      id = setInterval(() => {
        console.info('> "text" contiene texto!')
      }, 1000)
    }

    if (text.length > 5) {
      console.info('> Longitud de "text" mayor que 5')
      clearInterval(id)
    }

    if (random > 2000) {
      console.info('> Condición de random!')
      clearInterval(id)
    }

    return () => {
      clearInterval(id)
    }
  }, [text, random])

  return (
    <section>
      <Input
        value={text}
        onChange={handlechange}
        placeholder="Type something..." />
      <Paragraph text={text} />
      <p>{random}</p>
    </section>
  )
}