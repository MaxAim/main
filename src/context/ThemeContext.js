import { useState } from "react";
import GlobalContext from "./GlobalContext";


function ThemeContext({children}){
    const [theme, setTheme] = useState("Dark")
    const handleTheme = (props) => {
        setTheme(props);
    }
    return(
        <GlobalContext.Provider value={{theme, setTheme, handleTheme}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default ThemeContext