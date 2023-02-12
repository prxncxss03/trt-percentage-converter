import { useState } from "react";


import { TimeInput } from "./TimeInput";
import { Colon } from "./Colon";
import { TimeLabel } from "./TimeLabel";
import { TimeBoardName } from "./TimeBoardName";

export const TimeBoard = () => {
    const [userHr, setUserHr] = useState("00");
    const [userMin, setUserMin] = useState("00");
    const [userSec, setUserSec] = useState("00");

    const [totalSec, setTotalSec] = useState("00");
    const [totalMin, setTotalMin] = useState("00");
    const [totalHr, setTotalHr] = useState("00");

    const [totalUserTime, setTotalUserTime] = useState("00");

    const handleTimeChange = (e,state) => {
        let length = e.target.value.length;
        if (length < 3) {
            state(e.target.value);
        }
    };

    const computeTotalTime = () => {
        let totalUserTime = parseInt(userHr) * 3600 + parseInt(userMin) * 60 + parseInt(userSec);
        setTotalUserTime(totalUserTime);

    }
    return (
        <div className="flex flex-col p-4 ">
            <div>
                <TimeBoardName name="Your RT" />
                <div className="flex items-center bg-161614 p-4 rounded-xl">
                    <TimeInputWithLabel unit="HR" time={userHr} handleTimeChange={(e)=> {handleTimeChange(e, setUserHr)}}/>
                    <TimeInputWithLabel unit="MIN" time={userMin} handleTimeChange={(e)=> {handleTimeChange(e, setUserMin)}}/>
                    <TimeInputWithLabel unit="SEC" time={userSec} handleTimeChange={(e)=> {handleTimeChange(e, setUserSec)}}/>
                </div>
            </div>
            <div>
                <TimeBoardName name="Total RT" />
                <div className="flex items-center bg-161614 p-4 rounded-xl">
                    <TimeInputWithLabel unit="HR" time={totalHr} handleTimeChange={(e)=> {handleTimeChange(e, setTotalHr)}}/>
                    <TimeInputWithLabel unit="MIN" time={totalMin} handleTimeChange={(e)=> {handleTimeChange(e, setTotalMin)}}/>
                    <TimeInputWithLabel unit="SEC" time={totalSec} handleTimeChange={(e)=> {handleTimeChange(e, setTotalSec)}}/>
                </div>
            </div>
        <button onClick={computeTotalTime} className="bg-d0f4de text-161614 font-bold rounded-md px-4 py-2 ml-4 ">See my progress! ✨</button>
        <div>
            {userHr}
            <p className=" font-bold text-2xl">{totalUserTime}</p>
        </div>
            
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
