import React,{useEffect, useState} from 'react'
import './../css/contacto.css'

export const Contacto = () => {

  // // Estado para manejar los datos del formulario (JSON inicialmente vacio)
  // const [formData, setFormData] = useState({
  //   nombre: '',
  //   apellido: '',
  //   email: '',
  //   mensaje: ''
  // });

  // // Estado para manejar el mensaje de respuesta
  // const [message, setMessage] = useState('');
  
  // para que se ejecute cada vez que se carge el componente
  useEffect(() => {

    // Selecciona todos los inputs de tipo texto y todos los textareas
    const inputs = document.querySelectorAll('input[type="text"], textarea');

    // Selecciona el elemento .contacto
    const contacto = document.querySelector('.contacto');

    // Función para cambiar el fondo de .contacto
    function cambiarFondo() {
        // if(contextTheme === "light")
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

  },[]);

  // // ----------------------------------------------------------------------------------

  // // Funcion para manejar los cambios del formulario
  // const handleChange = (e) => {
  //   const { name, value } = e.target; // extrae las propiedades name y value del objeto e.target
  //   // name (nombre del campo del formulario), value (valor de lo q digta el usuario)

  //   setFormData({ // se actualiza el estado formData
  //     ...formData, // operador ... se copian todas las propiedades existentes del obj formData en un nuevo objeto
  //     [name]: value 

  //     /* [name]: value: Añade o actualiza la propiedad name en el objeto formData,
  //      asignándole el valor de la variable value. Si name ya existe en formData, su valor será actualizado a value.
  //      Si name no existe, se creará una nueva propiedad en el objeto con ese nombre y valor. */
  //   });
  // };
  
  // // Maneja el envío del formulario
  // const handleSubmit = async (e) => {
  //   e.preventDefault(); // Previene el comportamiento por defecto del formulario (recargar la página)

  //   try {
  //     // Envía una solicitud POST al servidor con los datos del formulario en formato JSON
  //     const response = await fetch('http://localhost:8080/sendEmail.php', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(formData) // guarda el JSON como una cadena de texto 
  //     });

  //     // Verifica la respuesta del servidor y muestra un mensaje correspondiente
  //     if (response.ok) {
  //       setMessage('Correo enviado con éxito');
  //     }
  //     else {
  //       const errorData = await response.json();
  //       setMessage(errorData.message || 'Error al enviar el correo');
  //     }
  //   } catch (error) {
  //     setMessage('Error al enviar el correo');
  //   }
  // };


  return (
    <div className='page page-contacto'>
        
      <section className='contacto'>

        <h3 className='contacto-title'>Contactame </h3>

        <form className='form-container' action="https://formspree.io/f/mjvqzjpb " method="POST">
          
          <div className='item-form'>

            <input type="text" 
              name="name"
              placeholder='Nombre'
              // value={formData.nombre}
              // onChange={handleChange} 
              required
            />
          </div>
          
          <div className='item-form'>

            <input type="text" 
              name="apellido"
              placeholder='Apellido'
              // value={formData.apellido}
              // onChange={handleChange}
              
            />
          </div> 
          
          <div className='item-form'>

            <input type="email" 
              name="email"
              placeholder='name@example.com'
              // value={formData.email}
              // onChange={handleChange}
              required
            />
          </div>

          <div className='item-form'>

            <textarea  
              name='descripcion'
              rows="3"
              placeholder='Motivo de consulta'
              // value={formData.mensaje}
              // onChange={handleChange}
              required
            />
          </div>
          
          <div className='item-form'>

            <input type="submit"  className='btn-enviar'
              // value="Enviar"
              // placeholder='Enviar'
            />
          </div>

{/* {message && <p>{message}</p>} */}

        </form>
      </section>

    </div>
  )
}
