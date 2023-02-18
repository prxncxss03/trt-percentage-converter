import { PercentageBoard } from "./PercentageBoard"
import { TimeBoard } from "../time/TimeBoard"
import { SeeResultBtn } from "../general/SeeResultBtn"
import { HomeBtn } from "../home/HomeBtn"
export const PercentageTrt = ({
    percentage,
    handlePercentageChange,
    GoHomePage,
    error3,
    timeMIN,
    timeHR,
    timeSEC,
    handleTimeHrChange,
    handleTimeMinChange,
    handleTimeSecChange,
    handleComputeRt,
    error4

}) => {
    return(
        <div className="flex flex-col h-full justify-center md:w-1/2 lg:w-5/12 w-full p-4">
            <PercentageBoard name="Percentage" percentage={percentage} error4={error4} handlePercentageChange={handlePercentageChange}></PercentageBoard>
            <TimeBoard name="Total RT" error={error3} timeMIN={timeMIN} timeHR={timeHR} timeSEC={timeSEC} handleTimeHrChange={handleTimeHrChange} handleTimeMinChange={handleTimeMinChange} handleTimeSecChange={handleTimeSecChange}></TimeBoard>
            <SeeResultBtn name="See Result" onClick={handleComputeRt}/>
            <HomeBtn name="Go Home" handleChangePage={GoHomePage} />
        </div>
    )
}