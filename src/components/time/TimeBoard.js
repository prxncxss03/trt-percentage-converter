import { IndivTimeBoard } from "./IndivTimeBoard";

export const TimeBoard = ({
    userHr,userMin,userSec,totalHr,totalMin,totalSec,computeTotalTime,
    handleUserHrChange,handleUserMinChange,handleUserSecChange,
    handleTotalHrChange,handleTotalMinChange,handleTotalSecChange,
    error1, error2
}) => {
    
    return (
        <div className="flex flex-col w-full p-4 justify-center items-center select-none">
            <IndivTimeBoard name="Your RT" error={error1} timeHR={userHr} timeMIN={userMin} timeSEC={userSec} handleTimeHrChange={handleUserHrChange} handleTimeMinChange={handleUserMinChange} handleTimeSecChange={handleUserSecChange}></IndivTimeBoard>
            <IndivTimeBoard name="Total RT" error={error2} timeHR={totalHr} timeMIN={totalMin} timeSEC={totalSec} handleTimeHrChange={handleTotalHrChange} handleTimeMinChange={handleTotalMinChange} handleTimeSecChange={handleTotalSecChange}></IndivTimeBoard>      
            <button onClick={computeTotalTime} className=
            "mt-4 bg-d0f4de text-161614 font-bold md:w-1/2 lg:w-5/12 rounded-md px-4 py-2 w-full shadow-sm">See my progress! ✨</button>
       </div>
    );
}


