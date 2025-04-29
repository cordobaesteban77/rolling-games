import React, { useEffect, useState } from 'react'
import {getGames} from "../data/api"
import CardGame from './CardGame';

const HomeScreen = () => {
    const [games, setGames] = useState([])
    console.log(games);
    useEffect(() => {
      getGames().then((respuesta) => {
        setGames(respuesta)
      })
    }, [])
    
  return (
    <div className="container">
        <div className="row py-5">
            <div className="col">
                <h1>Rolling Games</h1>
            </div>
        </div>
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
            {
                games.map((game) => (
                    <CardGame key={game.results.id} game={game}/>
                ))
            }
        </div>
    </div>
  )
}

export default HomeScreen