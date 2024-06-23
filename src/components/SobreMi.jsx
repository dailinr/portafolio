import React from 'react'
import './../css/sobremi.css';
import { informacion } from '../data/info_personal'

export const SobreMi = () => {
  return (
    <div className='page pg-sbmi'>

      {/* <h3>Sobre Mi<hr/> </h3> */}

      <section className='cont-sobremi'>

        <div className='ab-image'>
          {/* <img src="../public/Learn Programming.png" alt="image" /> */}
        </div>

        <div className='biografia'>
          <h3>Biografia<hr/></h3>
          <p>
            {informacion.descripcion_corta} <br/><br/>
            {informacion.descripcion_larga}
          </p>
        </div>

        

        <div className='datos'>
          <p><strong>Edad </strong> <br/>{informacion.edad} años</p>
          <p><strong>Ocupación </strong> <br/>{informacion.ocupacion}</p>
          <p><strong>Dirección </strong> <br/>{informacion.ciudad}</p>
          <p><strong>Email </strong> <br/>{informacion.correo}</p>
          
        </div>

        <div className='skills-sb' >

          <div>
              <h4>Front-end</h4>
              
              <i className='bx bxl-html5' style={{color: '#E34F26'}}></i>
              <i className='bx bxl-css3' style={{color: '#1572B6'}}></i>
              <i className='bx bxl-bootstrap' style={{color: ' #7952B3'}}></i>
              <i className='bx bxl-sass' style={{color: '#CC6699'}}></i>
              <i className='bx bxl-javascript' style={{color: '#F7DF1E'}}></i>
              <i className='bx bxl-react' style={{color: '#61DAFB'}}></i>
              
          </div>

          <div>
              <h4>Back-end</h4>
              <i className='bx bxl-java' style={{color: '#007396'}}></i>
              <i className='bx bxl-php' style={{color: '#777BB4'}}></i>
              <i className='bx bxl-postgresql' style={{color: ' #336791'}}></i>
              <i class='bx bxl-c-plus-plus'  style={{color: '#00599C'}}></i>
          </div>

          <div >
              <h4>Otros</h4>
              <i className='bx bxl-git' style={{color: '#F05032'}}></i>
              <i className='bx bxl-github' style={{color: '#FFFF'}}></i>
              <i className='bx bxl-figma' style={{color: '#1572B6'}}></i>
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: 'rgba(255, 255, 255, 1)'}}><path d="M15.332 8.668a3.333 3.333 0 0 0 0-6.663H8.668a3.333 3.333 0 0 0 0 6.663 3.333 3.333 0 0 0 0 6.665 3.333 3.333 0 0 0 0 6.664A3.334 3.334 0 0 0 12 18.664V8.668h3.332z"></path><circle cx="15.332" cy="12" r="3.332"></circle></svg> */}

          </div>
        </div>
        

      </section>
    </div>
  )
}
