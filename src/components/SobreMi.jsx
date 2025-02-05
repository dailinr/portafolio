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

        <div className='datos ' >

          <p><strong>Edad </strong> <br/>22 años</p>
          <p><strong>Ocupación </strong> <br/>{informacion.ocupacion}</p>
          <p><strong>Dirección </strong> <br/>{informacion.ciudad}</p>
          <p><strong>Formación </strong> <br/>{informacion.formacion}</p>
          <p><strong>Email </strong> <br/>{informacion.correo}</p>
          
        </div>

        <div className='skills-sb' >

          <div>
            <h4>Front-end</h4>
            
            <i className='bx bxl-html5' style={{color: '#E34F26'}}></i>
            <i className='bx bxl-css3' style={{color: '#1572B6'}}></i>
            <i className='bx bxl-sass' style={{color: '#CC6699'}}></i>
            <i className='bx bxl-tailwind-css' style={{color: '#06B6D4'}} ></i>
            <i className='bx bxl-javascript' style={{color: '#F7DF1E'}}></i>
            <i className='bx bxl-react' style={{color: '#61DAFB'}}></i>
              
          </div>

          <div>
            <h4>Back-end</h4>
            <i className='bx bxl-nodejs' style={{color: '#339933'}}></i>
            <img src={`${import.meta.env.BASE_URL}icons8-expresar-js-50.png`} alt="expressjs" width="18px" height="18px" />
            <i className='bx bxl-mongodb' style={{color: '#47A248', marginRight: 0}}></i>
            <img src={`${import.meta.env.BASE_URL}icons8-postgresql-48.png`} alt="postgresql" width="24px" height="24px" />
            <img src={`${import.meta.env.BASE_URL}icons8-logotipo-de-java-coffee-cup-48.png`} alt="java" width="26px" height="26px" />
          </div>

          <div >
            <h4>Otros</h4>
            <i className='bx bxl-git' style={{color: '#F05032'}}></i>
            <i className='bx bxl-github' style={{color: '#FFFF', marginRight: 0}}></i>
            <img src={`${import.meta.env.BASE_URL}icons8-figura-48.png`} width="24px" height="24px" />
            <img src={`${import.meta.env.BASE_URL}postman-icon.png`}  alt="postman" width="24px" height="24px" />

          </div>
        </div>
        

      </section>
    </div>
  )
}
