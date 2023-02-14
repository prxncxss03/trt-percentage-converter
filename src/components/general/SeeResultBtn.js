import {RiArrowRightLine} from 'react-icons/ri'
export const SeeResultBtn = ({name, onClick}) => {
    return(
        <button onClick={onClick}
        className="bg-e4c1f9 shadow-sm mt-4  text-161614 font-bold rounded-md px-4 py-2 flex w-full items-center justify-center mb-1">
            <span className='mr-2'>{name} </span>
            <RiArrowRightLine />
        </button>
    )
}