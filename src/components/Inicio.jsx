import React from 'react'
import '../css/inicio.css'
import { ListProyects } from './ListProyects'

export const Inicio = ( {data}) => {
    const imagenes = {
        monitorias: '../public/monitorias.jpg',
        blog: '../public/blog-web.jpg',
        aero: '../public/aero-proy.jpg'
    }
  return (
    <div className='inicio'>
        

        <div className='perfil'>
            <div className="perfil-image">
                <img src="../public/perfil.jpeg" alt="image proyecto" />
            </div>
            <div className="perfil-content">
                <h3 className="perfil-title">Dailin Romero</h3>
                <p className="perfil-description">
                    Estudiante de ing sistemas
                </p>
                
                
                <div className='redes'>
                    <i className='bi bi-linkedin' style={{color: '#0A66C2'}}></i>
                    <i className='bi bi-github'></i>
                    <i className='bi bi-twitter' style={{color: '#1DA1F2'}}></i>
                    <i className='bi bi-youtube' style={{color: 'red'}}></i>
                </div>
                
                <p className="correo">
                    dailinromero123@gmail.com
                </p>

                <button className="cv-button ">Descargar CV</button>
                
            </div>
        </div>

        <div className='idk'>

        </div> 

        

        <div className='sobreMi '>
            <h4>Hola, soy Dailin Romero</h4>
            <div className='img-sb'>
            <img  src="../public/coding-2-91-removebg-preview.png" alt="" />
            </div>
            
            <div className='sb-content'>
                
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla dolor molestiae non unde accusantium corporis pariatur quae doloremque tempora tempore, laudantium, facilis doloribus, facere vel! Esse laborum placeat aut totam.</p>
                
            </div>
            
        </div>

        <div className='proyecto '>
            
            <div className="cardP">
                
                <div className="cardP-content " 
                    style={{
                        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("../public/monitorias.jpg")' 
                    }}>
                    
                    <div>
                        <h6 className="cardP-title">
                            Monitorias unimag 
                           
                        </h6> 
                        
                        <p className="cardP-description">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        </p>
                    </div>
                    <div className='links'>
                        <a class="btn" href="https://github.com/dailinr/blog-web" target="_blank" >
                            <i class="bi bi-github text-center "></i>
                        </a>
                        <a class="btn" title="ir a la página" href="https://blogweblive.000webhostapp.com/" target="_blank" >
                            <i class='bx bx-link-external'></i>
                        </a>
                    </div>
                    
                </div>

                
            </div>

            

            <div className="cardP">
                
                <div className="cardP-content " 
                    style={{
                        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("../public/blog-web.jpg")' 
                    }}>
                    
                    <div>
                        <h6 className="cardP-title">
                            Blog articulos
                           
                        </h6> 
                        
                        <p className="cardP-description">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        </p>
                    </div>
                    <div className='links'>
                        <a class="btn" href="https://github.com/dailinr/blog-web" target="_blank" >
                            <i class="bi bi-github text-center "></i>
                        </a>
                        <a class="btn" title="ir a la página" href="https://blogweblive.000webhostapp.com/" target="_blank" >
                            <i class='bx bx-link-external'></i>
                        </a>
                    </div>
                    
                </div>

                
            </div>

            
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
