import React from 'react'
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Inicio } from '../components/Inicio';
import { SobreMi } from '../components/SobreMi';
import { Proyectos } from '../components/Proyectos';
import { Contacto } from '../components/Contacto';
import Aside from '../components/Aside';
import { useThemeContext } from '../context/ThemeContext';

export const MisRutas = () => {

  const {contextTheme} = useThemeContext();

  return (
    <>
      <Aside/>    

      <section className='contenido'>
          
        <Routes className="main">
          <Route path="/" element={<Navigate to="/inicio" />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/sobremi" element={<SobreMi />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/contacto" element={<Contacto />} />

          <Route path="*" element={ 
            <div className="page">
              <h1 className='d-flex justify-content-center'>Error 404</h1> 
            </div>
          } />
            
        </Routes>
      </section>
    </>

  )
}
