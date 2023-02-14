import { HomeBtn } from "./HomeBtn"
export const Home = ({handleChangePage1,handleChangePage2}) => {
    return(
        <div>
            <HomeBtn name="RT to Percentage" handleChangePage={handleChangePage1}/>
            <HomeBtn name="Percentage to RT" handleChangePage={handleChangePage2}/>
        </div>
    )
}