import { createContext, useContext } from "react";

const ThemeContext = createContext({
    themeMode:"light",
    themeLight: ()=>{},
    themeDark:()=>{}

});

export const ThemeProvider=ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}
