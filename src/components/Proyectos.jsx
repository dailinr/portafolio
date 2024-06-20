import React from 'react'
import { ListProyects } from './ListProyects'
import '../css/proyectos.css'

export const Proyectos = ({ dataProyect }) => {

    

  return (
    <div className='proyectos'>

        <h3 >Proyectos<hr /></h3>
        
        
        <div className='cont-proy'>
            {dataProyect.map((dataProyect) => (
              <ListProyects key={dataProyect.id} data={dataProyect} />
            
            ))}
        </div>
        
    </div>
  )
}
