import { RiHome3Fill } from "react-icons/ri"
export const HomeBtn = () => {
    return(
        <Link to="/">
            <button className="bg-focus:outline-none">
                <RiHome3Line size={30}/>
            </button>
        </Link>
    )
}   