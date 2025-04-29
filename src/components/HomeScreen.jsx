import React, { useEffect, useState } from 'react'
import {getGames} from "../data/api"
import CardGame from './CardGame';

const HomeScreen = () => {
    const [games, setGames] = useState({results: []})
    const [filteredResults, setFilteredResults] = useState([]);
    const [inputValue, setInputValue] = useState("")
    useEffect(() => {
      getGames().then((respuesta) => {
        setGames(respuesta)
        setFilteredResults(respuesta.results)
      })
    }, [])

    useEffect(() => {
      filtrarJuegos()
    }, [inputValue])
    

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const filtrarJuegos = () => {
        const filtro = games.results.filter((item) => 
            item.name.toLowerCase().includes(inputValue.toLowerCase())
        )
        setFilteredResults(filtro)
    }
    
  return (
    <div className="container">
        <div className="row py-5">
            <div className="col">
                <h1 className='text-light'>Rolling Games</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-12 col-md-6 mb-3">
                <input type="text" className='form-control' placeholder='Buscar juego...' value={inputValue} onChange={handleChange} />
            </div>
        </div>
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
            {
                filteredResults.map((game) => (
                    <CardGame key={game.id} game={game}/>
                ))
            }
        </div>
    </div>
  )
}

export default HomeScreen