import { TimeInput } from "./TimeInput";
import { Colon } from "./Colon";
export const TimeBoard = ({ time }) => {
    return (
        <div className="flex items-center bg-161614 p-4 ">
        <label htmlFor="time" className=" font-bold text-white">
            HR
        </label>
        <div className="flex items-center bg-rose-300">
            <TimeInput time={time}  />
            <Colon />
        </div>
            <TimeInput time={time}  />
            <Colon />
            <TimeInput time={time}  label="SECS"/>
        </div>
    );
}