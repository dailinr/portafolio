import React from 'react'
import './../css/sobremi.css';
import { informacion } from '../data/info_personal'
import { lenguajes } from '../data/lenguajes';

export const SobreMi = () => {
  return (
    <div className='page pg-sbmi'>

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

          <p><strong>Edad </strong> <br/>{informacion.edad}s</p>
          <p><strong>Ocupación </strong> <br/>{informacion.ocupacion}</p>
          <p><strong>Dirección </strong> <br/>{informacion.ciudad}</p>
          <p><strong>Formación </strong> <br/>{informacion.formacion}</p>
          <p><strong>Email </strong> <br/>{informacion.correo}</p>
          
        </div>

        <div className='skills-sb' >

          <div>
            <h4>Front-end</h4>

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
            <h4>Back-end</h4>

            <i className='bx bxl-spring-boot' style={{color: '#6DB33F'}}></i>
            <img src={`${import.meta.env.BASE_URL}mysql.ico`} alt="mysql"  style={{ marginRight: "5px", width: "22px", height: "22px"}} />
            <i className='bx bxl-nodejs' style={{color: '#339933'}}></i>
            <img src={`${import.meta.env.BASE_URL}icons8-expresar-js-50.png`} alt="expressjs" width="18px" height="18px" />
            <i className='bx bxl-mongodb' style={{color: '#47A248', marginRight: 0}}></i>
            <img src={`${import.meta.env.BASE_URL}icons8-postgresql-48.png`} alt="postgresql" width="24px" height="24px" />
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
