import React from 'react'
import '../css/proyectos.css'
import { trabajos } from '../data/trabajos'

export const Proyectos = () => {

  return (
    <div className='page'>

      <h3>Proyectos<hr/> </h3>

      <div className='cont-proy'>

        {trabajos.map((trabajos) => (

          <div key={trabajos.id} className="card">
            <div className="card-image">
              <img src={trabajos.image} alt="image proyecto" />
            </div>

            <div className="card-content">

              <h3 className="card-title">{trabajos.titulo}</h3>

              <p className="card-description">
                {trabajos.descripcion}
              </p>

              <button className="card-button mt-2 d-flex">Ver</button>
              
              <div className='lenguajes'>
                <i className='bx bxl-html5' style={{color: '#E34F26'}}></i>
                <i className='bx bxl-css3' style={{color: '#1572B6'}}></i>
                <i className='bx bxl-react' style={{color: '#61DAFB'}}></i>
                <i className='bx bxl-php' style={{color: '#777BB4'}}></i>
              </div>
              
            </div>
          </div>

        ))}

      </div>
    </div>
  )
}
