import { useState, useEffect } from "react";

export const useDarkMode = () => {
     const [theme, setTheme] = useState(localStorage.theme);
     const colorTheme = theme === "dark" ? "light" : "dark";

     useEffect(()=>{
        //returns html element
        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme);
        localStorage.setItem("theme", theme);
     },[theme, colorTheme]);

    return [colorTheme, setTheme];

}