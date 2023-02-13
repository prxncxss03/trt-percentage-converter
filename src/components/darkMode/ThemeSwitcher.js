import { useState } from "react";
import { useDarkMode } from "./useDarkMode";
import { RiMoonClearLine, RiSunLine } from "react-icons/ri";

export const ThemeSwitcher = () => {
    const [colorTheme, setTheme] = useDarkMode();
    const [darkMode, setDarkMode] = useState(
        colorTheme === "light" ? true : false
    )

    const handleThemeChange = () => {
        setTheme(colorTheme);
        setDarkMode(!darkMode);
    };

    return(
        <button onClick={handleThemeChange} className="bg-transparent focus:outline-none">
            {darkMode ? <RiSunLine size={30}/> : <RiMoonClearLine size={30}/>}
        </button>
    )

}