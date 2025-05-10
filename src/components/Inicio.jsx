import React from 'react'
import '../css/inicio.css'
import { Link } from 'react-router-dom'
import { trabajos } from '../data/trabajos'
import { informacion } from '../data/info_personal'

// import { lenguajes } from '../data/lenguajes'
import { redes } from '../data/redes'
import { lenguajes } from '../data/lenguajes'

export const Inicio = ( ) => {
    
    const handleDownloadCV = () => {
        const cvPath = `${import.meta.env.BASE_URL}dailinromeroCV.pdf`;

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
                <img src={`${import.meta.env.BASE_URL}photo-perfil.jpg`} alt="image proyecto" />
            </div>

            <div className="perfil-content">

                <h3 className="perfil-title">{informacion.nombreCompleto}</h3>
                <p className="perfil-description">
                    Developer
                </p>
                
                <div className='redes'>
                    {redes.map((red) => (
                        
                        (red.nombre == "workana" ? 
                            <a key={red.id} href={red.url} target="_blank" rel="noreferrer" className='red-item'>
                                <img src={`${import.meta.env.BASE_URL}workana.png`} 
                                    width="29" height="26" alt="workana"
                                    style={{ backgroundColor: 'white', padding: '4px 6px', borderRadius: '13px'}} 
                                />
                            </a> 
                        :
                            <a key={red.id} href={red.url} target="_blank" rel="noreferrer" className='red-item'>
                                <i className={red.icon} style={{ fontSize: '16px', backgroundColor: red.color, padding: '4px 6px', borderRadius: '13px'}}></i>
                            </a> 
                        )
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
                    {informacion.descripcion_corta} {''}
                    {informacion.descripcion_larga}
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
    
                {lenguajes.map(lenguaje => (
                    lenguaje.frontend &&
                    <i 
                        key={lenguaje.id} 
                        className={`${lenguaje.icon}`}
                        style={{color: `${lenguaje.color}`}}
                    />
                ))}
            </div>

            <div>
                <h6>Back-end</h6>

                <i className='bx bxl-spring-boot' style={{color: '#6DB33F'}}></i>
                <img src={`${import.meta.env.BASE_URL}mysql.ico`} alt="mysql"  style={{ marginRight: "3px", width: "25px", height: "25px"}} />
                <i className='bx bxl-nodejs' style={{color: '#339933', marginRight: "3px"}}></i>
                <img src={`${import.meta.env.BASE_URL}icons8-expresar-js-50.png`} alt="expressjs" width="22px" height="22px" />
                <i className='bx bxl-mongodb' style={{color: '#47A248'}}></i>
                <img src={`${import.meta.env.BASE_URL}icons8-postgresql-48.png`} alt="postgresql" width="30px" height="30px" />
            </div>

            <div >
                <h6>Otros</h6>
                <i className='bx bxl-git' style={{color: '#F05032'}}></i>
                <i className='bx bxl-github' style={{color: '#FFFF'}}></i>
                <img src={`${import.meta.env.BASE_URL}icons8-figura-48.png`} alt="figma" width="30px" height="30px" />
                <img src={`${import.meta.env.BASE_URL}postman-icon.png`} alt="postman" width="28px" height="28px" />
            </div>
        </div>
    </div>
  )
}
