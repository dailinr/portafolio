import React from 'react'
import { Routes, Route, BrowserRouter, NavLink } from "react-router-dom";
import { Inicio } from '../components/Inicio';
import { SobreMi } from '../components/SobreMi';
import { Proyectos } from '../components/Proyectos';
import { Contacto } from '../components/Contacto';

export const MisRutas = () => {
  return (
    /* esta etiqueta nos sirve para crear un enlace que nos lleva a una ruta */
    <BrowserRouter>
        {/* HEADER Y NAVEGACIÓN*/}    

        {/* CONTENIDO CENTRAL */}
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/sobremi" element={<SobreMi />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/contacto" element={<Contacto />} />
        </Routes>

        {/* FOOTER */}

    </BrowserRouter>


  )
}
