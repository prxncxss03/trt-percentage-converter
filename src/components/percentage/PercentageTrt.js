import { PercentageBoard } from "./PercentageBoard"
import { TimeBoard } from "../time/TimeBoard"
import { SeeResultBtn } from "../general/SeeResultBtn"
import { HomeBtn } from "../home/HomeBtn"
export const PercentageTrt = ({
    percentage,
    handlePercentageChange,
    GoHomePage,
    error,
    timeMIN,
    timeHR,
    timeSEC,
    handleTimeHrChange,
    handleTimeMinChange,
    handleTimeSecChange,
    handleChangePage

}) => {
    return(
        <div className="flex flex-col h-full justify-center md:w-1/2 lg:w-5/12 w-full">
            
            <PercentageBoard name="Percentage" percentage={percentage} handlePercentageChange={handlePercentageChange}></PercentageBoard>
            <TimeBoard name="Total RT" error={error} timeMIN={timeMIN} timeHR={timeHR} timeSEC={timeSEC} handleTimeHrChange={handleTimeHrChange} handleTimeMinChange={handleTimeMinChange} handleTimeSecChange={handleTimeSecChange}></TimeBoard>
            <SeeResultBtn name="See Result" onClick={handleChangePage}/>
            <HomeBtn name="Go Home" handleChangePage={GoHomePage} />
        </div>
    )
}