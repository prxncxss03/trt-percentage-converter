
import { TimeInput } from "./TimeInput";
import { Colon } from "./Colon";
import { TimeLabel } from "./TimeLabel";
import { TimeBoardName } from "./TimeBoardName";


export const TimeBoard = ({
    userHr,userMin,userSec,totalHr,totalMin,totalSec,computeTotalTime,
    handleUserHrChange,handleUserMinChange,handleUserSecChange,
    handleTotalHrChange,handleTotalMinChange,handleTotalSecChange,
    error1, error2
}) => {
    
    return (
        <div className="flex flex-col w-full p-4 justify-center items-center select-none">
            <div className="w-full flex flex-col md:w-1/2 lg:w-5/12">
                <TimeBoardName name="Your RT" />
                <ErrorMessage message={error1}></ErrorMessage>
                <div className="flex items-center bg-161614 dark:bg-gray-600 p-4 rounded-xl">
                    <TimeInputWithLabel unit="HR" time={userHr} handleTimeChange={(e)=> {handleUserHrChange(e)}}/>
                    <TimeInputWithLabel unit="MIN" time={userMin} handleTimeChange={(e)=> {handleUserMinChange(e)}}/>
                    <TimeInputWithLabel unit="SEC" time={userSec} handleTimeChange={(e)=> {handleUserSecChange(e)}}/>
                </div>
            </div>
            <div className="w-full flex flex-col md:w-1/2 lg:w-5/12">
                <TimeBoardName name="Total RT" />
                <ErrorMessage message={error2}></ErrorMessage>
                <div className="flex items-center bg-161614 dark:bg-gray-600 p-4 rounded-xl">
                    <TimeInputWithLabel unit="HR" time={totalHr} handleTimeChange={(e)=> {handleTotalHrChange(e)}}/>
                    <TimeInputWithLabel unit="MIN" time={totalMin} handleTimeChange={(e)=> {handleTotalMinChange(e)}}/>
                    <TimeInputWithLabel unit="SEC" time={totalSec} handleTimeChange={(e)=> {handleTotalSecChange(e)}}/>
                </div>
            </div>
            
            <button onClick={computeTotalTime} className=
            "mt-4 bg-d0f4de text-161614 font-bold md:w-1/2 lg:w-5/12 rounded-md px-4 py-2 w-full shadow-sm">See my progress! ✨</button>
        
            
        
       </div>
    );
}

const TimeInputWithLabel = ({time, handleTimeChange, unit})=>{
    return(
        <div className="flex flex-col justify-center w-full ">
                <TimeLabel unit={unit} />
                <div className="flex items-center justify-center">
                    <TimeInput time={time}  handleTimeChange={handleTimeChange}/>
                    {
                        unit === "SEC" ? null : <Colon />
                    }
                </div>
            </div>
    )
}

const ErrorMessage = ({message}) => {
    return(
        <p className="text-red-500">{message}</p>
    )
}