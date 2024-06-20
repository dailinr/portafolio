import React from 'react'
import { ListProyects } from './ListProyects'
import '../css/proyectos.css'

export const Proyectos = () => {

  const dataProyect = [
    {
        id: 1,
        image: '../public/monitorias.jpg',
        titulo: 'Easy-tutos',
        descripcion: 'Plataforma para monitorias academicas en la universidad del magdalena',
        lenguajes: ['html', 'css', 'react', 'php'],
        link: '',
        github: ''
    },
    {
        id: 2,
        image: '../public/blog-web.jpg',
        titulo: 'Blog articulos',
        descripcion: 'Pagina web donde se pueden publicar articulos',
        lenguajes: ['html', 'css', 'react', 'php'],
        link: '',
        github: ''
    },
    {
        id: 3,
        image: '../public/aero-proy.jpg',
        titulo: 'Rutas aeropuerto',
        descripcion: 'Proyecto que ayuda a escoger mejor ruta al usuario',
        lenguajes: ['html', 'css', 'react', 'php'],
        link: '',
        github: ''
    },
  ];

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
