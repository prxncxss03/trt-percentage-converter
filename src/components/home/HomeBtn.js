import { RiPercentFill,RiHome3Fill } from "react-icons/ri"
import {TbNumbers} from "react-icons/tb"

export const HomeBtn = ({name, handleChangePage}) => {
    return(
        <button onClick={(e) => handleChangePage(e)}
        className="bg-fcf6bd my-1 flex items-center justify-center text-161614 font-bold  rounded-md px-4 py-2 w-full shadow-sm">
            <span className="mr-2">{name}</span>
            {
            name === "RT to Percentage" ? <RiPercentFill /> : name === "Go Home" ? <RiHome3Fill/> : <TbNumbers />
            }
        </button>
    )
}   