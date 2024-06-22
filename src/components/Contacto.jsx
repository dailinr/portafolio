import React from 'react'
import './../css/contacto.css'

export const Contacto = () => {
  
  // const {contextTheme} = useContextTheme  
  // Selecciona todos los inputs de tipo texto y todos los textareas
  const inputs = document.querySelectorAll('input[type="text"], textarea');

  // Selecciona el elemento .contacto
  const contacto = document.querySelector('.contacto');

  // Función para cambiar el fondo de .contacto
  function cambiarFondo() {
      
    contacto.style.setProperty('box-shadow', '#fad02e 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px', 'important');
  }

  // Función para revertir el fondo de .contacto
  function revertirFondo() {
      contacto.style.boxShadow = ''; // Asume el boxShadow original o puedes especificar uno
  }

  // Asigna los eventos focus y blur a cada input y textarea
  inputs.forEach(input => {
      input.addEventListener('focus', cambiarFondo);
      input.addEventListener('blur', revertirFondo);
  });

  return (
    <div className='page'>
        
      <section className='contacto'>

        <h3 className='contacto-title'>Contactame </h3>

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
