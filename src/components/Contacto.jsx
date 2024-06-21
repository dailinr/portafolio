import React from 'react'
import './../css/contacto.css'

export const Contacto = () => {

  return (
    <div className='page'>
        
      <section className='contacto'>

        <h3>Contactame </h3>

        <form className='form-container'>
          
          <div className='item-form'>
            <input type="text" 
              placeholder='Nombre'
            />
          </div>
          
          <div className='item-form'>
            <input type="text" 
              placeholder='Apellido'
            />
          </div>
          
          <div className='item-form'>
            <input type="text" 
              placeholder='Correo Electronico'
            />
          </div>

          <div className='item-form'>
            <textarea  
              placeholder='Motivo de consulta'
            />
          </div>
          
          <div className='item-form'>
            <input type="submit"  className='btn-enviar'
              placeholder='Enviar'
            />
          </div>

        </form>
      </section>

    </div>
  )
}
