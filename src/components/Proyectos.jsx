import React from 'react'
import { ListProyects } from './ListProyects'
import '../css/proyectos.css'
import { trabajos } from '../data/trabajos'

export const Proyectos = () => {

  return (
    <div className='page'>

        <h3>Proyectos<hr/> </h3>

        <div className='cont-proy'>

            {trabajos.map((trabajos) => (
              <ListProyects key={trabajos.id} data={trabajos} />
            ))}
        </div>
        
    </div>
  )
}
