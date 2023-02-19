import { Colon2 } from "./Colon"
import { TimeLabel } from "./TimeLabel"

export const TimeResult = ({time, handleTimeChange, unit})=>{
    return(
        <div className="flex flex-col justify-center w-full ">
                <TimeLabel unit={unit} />
                <div className="flex items-center justify-center">
                    <TimeInputStatic time={time} />
                    {
                        unit === "SEC" ? null : <Colon2 />
                    }
                </div>
            </div>
    )
}

export const TimeInputStatic = ({time, })=>{
    return(
        <div className="flex flex-col rounded-md items-center justify-center ">
            <span  className="bg-transparent text-d0f4de dark:drop-shadow-sm font-bold w-14 text-center outline-none text-4xl">{time}</span>
        </div>
    )
}