import React from 'react'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import img6 from '../assets/img6.jpg'
import '../styles/Sobrenosotros.css'

const Sobrenosotros = () => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 sobremargin">
      <div className="col card-nosotros">
        <div className="custom-card">
          <img src={img1} className="card-img-top" alt="..." />
          <h5 className="card-title">Lucho Martinez</h5>
        </div>
      </div>
      <div className="col card-nosotros">
        <div className="custom-card">
          <img src={img2} className="card-img-top" alt="..." />
          <h5 className="card-title">Mariana Estofan Ceballos</h5>
        </div>
      </div>
      <div className="col card-nosotros">
        <div className=" custom-card">
          <img src={img3} className="card-img-top" alt="..." />
          <h5 className="card-title">María Laura Díaz</h5>
        </div>
      </div>
      <div className="col card-nosotros">
        <div className="custom-card">
          <img src={img4} className="card-img-top img-gonzalo" alt="..." />
          <h5 className="card-title">Gonzalo Rodríguez Carrizo</h5>
        </div>
      </div>
      <div className="col card-nosotros">
        <div className="custom-card">
          <img src={img5} className="card-img-top" alt="..." />
          <h5 className="card-title">Esteban Córdoba</h5>
        </div>
      </div>
      <div className="col card-nosotros">
        <div className="custom-card">
          <img src={img6} className="card-img-top" alt="..." />
          <h5 className="card-title">Celeste Galindo</h5>
        </div>
      </div>
    </div>
  )
}

export default Sobrenosotros
