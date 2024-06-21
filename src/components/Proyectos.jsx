import React from 'react'
import '../css/proyectos.css'
import { trabajos } from '../data/trabajos'
import { lenguajes } from '../data/lenguajes'

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

              <button className="card-button mt-2 d-flex">
                <a href={trabajos.link} target="_blank" style={{textDecoration: 'none', color: 'white'}} >Ver</a>
              </button>
              
              <div className='lenguajes'>
                {trabajos.lenguajes.map((lenguajeNombre, index) => {
                  
                  const lenguaje = lenguajes.find(l => l.nombre === lenguajeNombre);
                  
                  return lenguaje ? (

                    <span key={index} className='bi' style={{color: lenguaje.color }}>
                      <i className={lenguaje.icon}></i>
                    </span>
                  ) : null;

                })}

              </div>
              
            </div>
          </div>

        ))}

      </div>
    </div>
  )
}
