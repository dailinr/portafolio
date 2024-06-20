import React from 'react'
import { Proyectos } from "./Proyectos";
import { Inicio } from './Inicio';

export const Main = () => {
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
    <div className='main'>
       <Proyectos dataProyect={dataProyect} /> 
      {/* <Inicio data={dataProyect} /> */}
    </div>
  )
}
