import React from 'react'
import '../css/inicio.css'
import { Link } from 'react-router-dom'
import { trabajos } from '../data/trabajos'
import { informacion } from '../data/info_personal'
// import { lenguajes } from '../data/lenguajes'
import { redes } from '../data/redes'

export const Inicio = ( ) => {
    
    const handleDownloadCV = () => {
        const cvPath = '../public/dailinromeroCV.pdf';

        window.open( cvPath, '_blank'); // Abrir el PDF en una nueva pestaña del navegador
      
        // Forzar la descarga del PDF
        const link = document.createElement('a'); // Crea un elemento <a> temporalmente en el DOM para iniciar la descarga
        link.href = cvPath;
        link.setAttribute('download', 'dailinromeroCv.pdf'); // Esto sugiere el nombre de archivo para guardar
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

  return (
    <div className='inicio'>
        
        <div className='perfil'>

            <div className="perfil-image">
                <img src="../public/perfil-ilustracion.jpeg" alt="image proyecto" />
            </div>

            <div className="perfil-content">

                <h3 className="perfil-title">{informacion.nombreCompleto}</h3>
                <p className="perfil-description">
                    Developer
                </p>
                
                <div className='redes'>
                    {redes.map((red) => (
                        
                        <a key={red.id} href={red.url} target="_blank" rel="noreferrer" className='red-item'>
                            <i className={red.icon} style={{ backgroundColor: red.color, padding: '4px 6px', borderRadius: '13px'}}></i>
                        </a>
                    ))}
                </div>
                
                <p className="correo">
                    {informacion.correo}
                </p>

                <button className="cv-button" onClick={handleDownloadCV} >
                    Descargar CV
                </button>
            </div>
        </div>

        <div className='idk'>  </div> 

        <div className='sobreMi '>
            
            
            <div className='img-sb'>
                {/* <img  src="../public/Learn Programming.png" alt="" /> */}
            </div>
            <h4>Hola, soy {informacion.nombreCompleto}</h4>
            <div className='sb-content'>
                <p> 
                    {informacion.descripcion_corta}
                </p>
            </div>
            
        </div>

        <div className='proyecto '>
            
            {trabajos.slice(0, 2).map((trabajos) => (
                
                <div key={trabajos.id} className="cardP">
                    
                    <div className="cardP-content " 
                        style={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${trabajos.image})`
                            
                        }}>
                        
                        <div>
                            <h6 className="cardP-title"> {trabajos.titulo} </h6> 
                            
                            <p className="cardP-description">
                                {trabajos.descripcion}
                            </p>
                        </div>

                        <div className='links'>
                            <a className="btn" href={trabajos.github} target="_blank" >
                                <i className="bi bi-github text-center "></i>
                            </a>
                            <a className="btn" title="ir a la página" href={trabajos.link} target="_blank" >
                                <i className='bx bx-link-external'></i>
                            </a>
                        </div>
                        
                    </div>
                </div>
            ))}
            
           <Link style={{display: 'none'}} to="/proyectos">ver más</Link>
            
        </div> 

        <div className='skills skills-inicio' >

            <div>
                <h6>Front-end</h6>
                
                <i className='bx bxl-html5' style={{color: '#E34F26'}}></i>
                <i className='bx bxl-css3' style={{color: '#1572B6'}}></i>
                <i className='bx bxl-bootstrap' style={{color: ' #7952B3'}}></i>
                <i className='bx bxl-sass' style={{color: '#CC6699'}}></i>
                <i className='bx bxl-javascript' style={{color: '#F7DF1E'}}></i>
                <i className='bx bxl-react' style={{color: '#61DAFB'}}></i>
                
            </div>

            <div>
                <h6>Back-end</h6>
                <i className='bx bxl-java' style={{color: '#007396'}}></i>
                <i className='bx bxl-php' style={{color: '#777BB4'}}></i>
                <i className='bx bxl-postgresql' style={{color: ' #336791'}}></i>
                <i class='bx bxl-c-plus-plus'  style={{color: '#00599C'}}></i>
            </div>

            <div >
                <h6>Otros</h6>
                <i className='bx bxl-git' style={{color: '#F05032'}}></i>
                <i className='bx bxl-github' style={{color: '#FFFF'}}></i>
                <i className='bx bxl-figma' style={{color: '#1572B6'}}></i>
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: 'rgba(255, 255, 255, 1)'}}><path d="M15.332 8.668a3.333 3.333 0 0 0 0-6.663H8.668a3.333 3.333 0 0 0 0 6.663 3.333 3.333 0 0 0 0 6.665 3.333 3.333 0 0 0 0 6.664A3.334 3.334 0 0 0 12 18.664V8.668h3.332z"></path><circle cx="15.332" cy="12" r="3.332"></circle></svg> */}

            </div>
        </div>
    </div>
  )
}
