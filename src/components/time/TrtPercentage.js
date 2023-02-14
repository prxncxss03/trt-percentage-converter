import { TimeBoard } from "./TimeBoard";
import { HomeBtn } from "../home/HomeBtn";
import { SeeResultBtn } from "../general/SeeResultBtn";

export const TrtPercentage = ({
    userHr,userMin,userSec,totalHr,totalMin,totalSec,computeTotalTime,
    handleUserHrChange,handleUserMinChange,handleUserSecChange,
    handleTotalHrChange,handleTotalMinChange,handleTotalSecChange,
    GoHomePage,
    error1, error2
}) => {
    
    return (
        <div className="flex flex-col w-full md:w-1/2 lg:w-5/12 p-4 justify-center items-center select-none">
            <TimeBoard name="Your RT" error={error1} timeHR={userHr} timeMIN={userMin} timeSEC={userSec} handleTimeHrChange={handleUserHrChange} handleTimeMinChange={handleUserMinChange} handleTimeSecChange={handleUserSecChange}></TimeBoard>
            <TimeBoard name="Total RT" error={error2} timeHR={totalHr} timeMIN={totalMin} timeSEC={totalSec} handleTimeHrChange={handleTotalHrChange} handleTimeMinChange={handleTotalMinChange} handleTimeSecChange={handleTotalSecChange}></TimeBoard>      
            <SeeResultBtn name="See Result" onClick={computeTotalTime} />
            <HomeBtn name="Go Home" handleChangePage={GoHomePage} />
       </div>
    );
}


