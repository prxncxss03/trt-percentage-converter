import { RiPercentFill,RiHome3Fill } from "react-icons/ri"
import {TbNumbers} from "react-icons/tb"

export const HomeBtn = ({name, handleChangePage}) => {
    return(
        <button onClick={(e) => handleChangePage(e)}
        className="hover:bg-transparent bg-fcf6bd hover:border-fcf6bd border-transparent border hover:border my-1 flex items-center justify-center hover:text-fcf6bd text-161614 font-bold  rounded-md px-4 py-2  w-full shadow-sm">
            <span className="mr-2">{name}</span>
            {
            name === "RT to Percentage" ? <RiPercentFill /> : name === "Go Home" ? <RiHome3Fill/> : <TbNumbers />
            }
        </button>
    )
}   