import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Container from './Container.js'

const SERVER_URL = "http://localhost:8080/api"


const App = () => {
  const [chars, setChars] = useState([])

  const getChar = async () => {
    try {
      const res = await axios.get(SERVER_URL + '/chars')
      console.log(res)
      setChars(res.data)
    } catch (err) {
      console.log(err)

      setChars([])
    }
  }

  useEffect(() => {
    getChar()
  }, [])

  return (
    <div>
      <Header />
      <CharacterList
        title="Characters"
        listCharacter={chars}
      />
    </div>
  )
}

const Header = () => {
  return (
    <h1>Genshin Characters</h1>
  )
}

const CharacterList = ({ title, listCharacter = [] }) => {
  return (
    <>
      <h2 >{title}</h2>
      <div className='characterlist'>
        {
          listCharacter.map(character =>
            <Container key={character.id} character={character} />
          )
        }
      </div>
    </>
  );
};

export default App