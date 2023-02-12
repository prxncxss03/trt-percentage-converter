import { useState } from "react";
import { TimeInput } from "./TimeInput";
import { Colon } from "./Colon";
import { TimeLabel } from "./TimeLabel";
import { TimeBoardName } from "./TimeBoardName";
import { ProgressBar } from "../result/ProgressBar"; 

export const TimeBoard = ({
    userHr,userMin,userSec,totalHr,totalMin,totalSec,computeTotalTime,
    handleUserHrChange,handleUserMinChange,handleUserSecChange,
    handleTotalHrChange,handleTotalMinChange,handleTotalSecChange
}) => {
    
    return (
        <div className="flex flex-col p-4 bg-sky-100 justify-center items-center">
            <div>
                <TimeBoardName name="Your RT" />
                <div className="flex items-center bg-161614 p-4 rounded-xl">
                    <TimeInputWithLabel unit="HR" time={userHr} handleTimeChange={(e)=> {handleUserHrChange(e)}}/>
                    <TimeInputWithLabel unit="MIN" time={userMin} handleTimeChange={(e)=> {handleUserMinChange(e)}}/>
                    <TimeInputWithLabel unit="SEC" time={userSec} handleTimeChange={(e)=> {handleUserSecChange(e)}}/>
                </div>
            </div>
            <div>
                <TimeBoardName name="Total RT" />
                <div className="flex items-center bg-161614 p-4 rounded-xl">
                    <TimeInputWithLabel unit="HR" time={totalHr} handleTimeChange={(e)=> {handleTotalHrChange(e)}}/>
                    <TimeInputWithLabel unit="MIN" time={totalMin} handleTimeChange={(e)=> {handleTotalMinChange(e)}}/>
                    <TimeInputWithLabel unit="SEC" time={totalSec} handleTimeChange={(e)=> {handleTotalSecChange(e)}}/>
                </div>
            </div>
        <button onClick={computeTotalTime} className="bg-d0f4de text-161614 font-bold rounded-md px-4 py-2 ml-4 ">See my progress! ✨</button>
       </div>
    );
}

const TimeInputWithLabel = ({time, handleTimeChange, unit})=>{
    return(
        <div className="flex flex-col justify-center">
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
