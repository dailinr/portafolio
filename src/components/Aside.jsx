import React from 'react';
import { useState, useEffect } from 'react';
import '../css/aside.css'

export const Aside = () => {
    // Estado para manejar si estamos en un ancho de ventana de 800px o menos
    const [isNarrowScreen, setIsNarrowScreen] = useState(window.innerWidth <= 800);

    const items = {
        inicio: 'Inicio',
        sobreMi: 'Sobre mí',
        proyectos: 'Proyectos',
        skills: 'Skills',
        contactame: 'Contactame'
    }

    useEffect(() => {
        // Función para actualizar el estado basado en el ancho de la ventana
        const checkScreenSize = () => {
          setIsNarrowScreen(window.innerWidth <= 800);
        };
    
        // Agrega el detector de eventos al montar
        window.addEventListener('resize', checkScreenSize);
    
        // Limpia el detector de eventos al desmontar
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []); // El arreglo vacío asegura que el efecto se ejecute solo al montar y desmontar
     

  return (
    
    // <div className="aside d-flex flex-column flex-shrink-0 p-3 " style={{width: '200px'}}>
    <div className={`aside d-flex ${isNarrowScreen ? 'flex-row' : 'flex-column'} flex-shrink-0 p-3`} style={{ width: isNarrowScreen ? '100%' : '200px' }} >

        <div className="icon-terminal ">
            <i className="bi bi-terminal" style={{ color: '#FAD02E', fontSize: '30px '}} ></i> 
            {/* <img src="../public/2-removebg-preview.png" alt="" width="80px" height="80px" /> */}
        </div>

        <ul className={`nav nav-pills ${isNarrowScreen ? 'flex-row' : 'flex-column'} mb-auto`}>
        {/* <ul className="nav nav-pills flex-column mb-auto"> */}
            <li className="nav-item">
                <a href="/" className="nav-link text-white" >
                    <i class="bi bi-house" /> &nbsp;
                    {!isNarrowScreen ? items.inicio : null}
                </a>
            </li>
            
            <li className="nav-item">
                <a href="/" className="nav-link text-white">
                    <i class="bi bi-person-vcard"></i> &nbsp;
                    {!isNarrowScreen ? items.sobreMi : null}
                </a>
            </li>
            <li className="nav-item">
                <a href="/" className="nav-link text-white">
                    <i class="bi bi-code-slash"></i> &nbsp;
                    {!isNarrowScreen ? items.proyectos : null}
                </a>
            </li>
            <li className="nav-item">
                <a href="/" className="nav-link text-white">
                    <i class="bi bi-lightning-charge-fill"></i> &nbsp;
                    {!isNarrowScreen ? items.skills : null}
                </a>
            </li>
            <li className="nav-item">
                <a href="/" className="nav-link text-white">
                    <i class="bi bi-envelope-at"></i> &nbsp;
                    {!isNarrowScreen ? items.contactame : null}
                </a>
            </li>
        </ul>
        
        {!isNarrowScreen ? (
        <div className='imagen'>
            <img src="../public/css-24-removebg-preview (1).png" alt="" />
        </div>) : null }
        
    </div>
    
  );
};

export default Aside;