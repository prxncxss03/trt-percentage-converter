import {RiArrowGoBackLine } from "react-icons/ri"
export const GoBackBtn = ({name, handleChangePage}) => {
    return(
        <button onClick={(e) => handleChangePage(e)}
        className="bg-e4c1f9 hover:border-161614  dark:hover:bg-transparent border-transparent border transition-all delay-50  dark:hover:border-e4c1f9 shadow-sm  text-161614 dark:hover:text-e4c1f9 font-bold rounded-md px-4 py-2 flex w-full items-center justify-center mb-1 ">
            <span className="mr-2">{name}</span>
            <RiArrowGoBackLine />
        </button>
    )
}