import React from 'react'
import { Link } from 'react-router-dom'

const CardGame = (props) => {
    const {background_image, name, id} = props.game
  return (
    <div className="col">
      <Link className='text-decoration-none' to={`/game/${id}`}>
      <div className="card h-100 card-custom">
      <img src={background_image} className="card-img-top card-imagen" alt={name}/>
      <div className="card-body">
        <h5 className="card-title text-light">{name}</h5>
      </div>
    </div>
      </Link>
  </div>
  )
}

export default CardGame