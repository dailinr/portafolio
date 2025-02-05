import { useState } from 'react'
import './App.css'
import { MisRutas } from './router/MisRutas'
import './index.css'
import ReactSwitch from 'react-switch';
import { useThemeContext } from './context/ThemeContext';

function App() {
  const [checked, setChecked] = useState(true);
  const {contextTheme, setContextTheme} = useThemeContext();
  const iconDark = '#141414';
  const iconLight = '#f2f4f6';

  // Cambiar el estado del switch
  const cambiarSwitch = (nextChecked) => {
    setContextTheme((state) => (state === "light")? 'dark' : 'light');
    setChecked(nextChecked);
  }


  return (
    <div className="app" id={contextTheme}  >

      
      <div className="modeIcon" style={{ display: 'flex', alignItems: 'center', position: 'absolute', top: '10px', right: '45px', zIndex: 1 }}>

        <i className='bx bxs-brightness-half'
          style={{color: `${ contextTheme === "light" ?  iconDark  :  iconLight }` }}
        /> &nbsp;

        <ReactSwitch   
          onChange={cambiarSwitch}
          onColor="#262727"
          checked={checked}
          onHandleColor="#f2f4f6"
          handleDiameter={10}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 5px rgba(0, 0, 0, 0.2)"
          height={15}
          width={30}
          className="react-switch"
          id="material-switch"
        />
      </div> 

      <MisRutas />
    </div>
  )
}

export default App
