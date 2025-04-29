import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import {getGameId} from "../data/api"

const GameScreen = () => {
    const {id} = useParams()
    const [game, setGame] = useState(null)
    useEffect(() => {
      getGameId(id).then((response) => setGame(response))
    }, [])
    
  return (
    <div className="container">
        <div className="row py-5">
            <div className="col">
                <h1 className='text-light'>Detalle del juego</h1>
            </div>
        </div>
        <div className="row">
            <div className="col">
                {
                    game ? (
                        <div className="card mb-3 card-custom-detalle">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={game.background_image} className="img-fluid rounded-start" alt={game.name}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title text-light">{game.name}</h5>
        <p className="card-text text-light">{game.description}</p>
        <button className='btn custom-boton text-light'>Comprar</button>
      </div>
    </div>
  </div>
</div>
                    ) : (<h3 className='text-light'>Cargando...</h3>)
                }
            </div>
        </div>
    </div>
  )
}

export default GameScreen