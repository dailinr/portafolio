import React from 'react'
import '../css/proyectos.css'
import { trabajos } from '../data/trabajos'
import { lenguajes } from '../data/lenguajes'

export const Proyectos = () => {

  return (
    <div className='page page-proyecto'>

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

              <div className='links-p '>
                
                {trabajos.link && 
                  <a className="btn-p" title="ir a la página" href={trabajos.link} target="_blank" >
                    <i className='bx bx-link-external'></i>
                  </a>
                }
                
                <a className="btn-p" href={trabajos.github} target="_blank" >
                  <i className="bi bi-github "></i>
                </a>
              </div>
              
              <div className='lenguajes'>
                {trabajos.lenguajes.map((lenguajeNombre, index) => {
                  
                  const lenguaje = lenguajes.find(l => l.nombre === lenguajeNombre);
                  
                  return lenguaje ? (

                    <span key={index} className='bi' >
                      <i className={lenguaje.icon} style={{color: lenguaje.color }}></i>
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
