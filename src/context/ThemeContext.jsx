import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext()
    
    // provedor de contexto que proveera a los componentes hijos
export const ThemeContextProvider = ({ children }) => {
    const [contextTheme, setContextTheme] = useState('light');
    const values = {
        contextTheme,
        setContextTheme
    }
    
    return (
        // vamos a devolver un componente para que se aplique todos los hijos
        <ThemeContext.Provider value={values}>
            {children } 
        </ThemeContext.Provider>
    )
}
// exportamos un custom hook
export const useThemeContext = () => {
    const context = useContext(ThemeContext); // lo usamos para crear el custom hook
    return context;
}