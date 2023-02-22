import {RiArrowRightLine} from 'react-icons/ri'
export const SeeResultBtn = ({name, onClick}) => {
    return(
        <button onClick={onClick}
        className="bg-d0f4de dark:hover:bg-transparent dark:hover:border-d0f4de hover:border-161614 shadow-sm mt-4 border-transparent border text-161614 transition-all dark:hover:text-d0f4de font-bold rounded-md px-4 py-2 flex w-full items-center justify-center mb-1">
            <span className='mr-2'>{name} </span>
            <RiArrowRightLine />
        </button>
    )
}