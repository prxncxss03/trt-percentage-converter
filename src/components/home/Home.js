import { HomeBtn } from "./HomeBtn"
export const Home = ({handleChangePage1,handleChangePage2}) => {
    return(
        <div className="flex flex-col h-full justify-center md:w-1/2 lg:w-5/12">
            <HomeBtn name="RT to Percentage" handleChangePage={handleChangePage1}/>
            <HomeBtn name="Percentage to RT" handleChangePage={handleChangePage2}/>
        </div>
    )
}