import { ThemeModeContext } from "@/context/ThemeMode"
import { useContext } from "react"
import { GoMoon, GoSun } from "react-icons/go";

export default function Darkmode() {
    const { isDark, setTheme } = useContext(ThemeModeContext);
    return (
        <div className={`absolute right-5 top-5 ${isDark? "text-white" : "text-black"}`}>
            <button className="text-2xl" onClick={() => setTheme()}>
                {isDark? <GoSun /> : <GoMoon />} 
            </button>
        </div>
    )
}