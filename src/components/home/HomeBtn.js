import { RiHome3Fill } from "react-icons/ri"
export const HomeBtn = ({name, handleChangePage,page}) => {
    return(
        <button onClick={(e,page) => handleChangePage(e)}
        className="bg-fcf6bd mt-4 text-161614 font-bold md:w-1/2 lg:w-5/12 rounded-md px-4 py-2 w-full shadow-sm">
            <span className="mr-2">{name}</span>
            <RiHome3Fill size={20}/>
        </button>
    )
}   