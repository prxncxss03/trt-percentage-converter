import {BoardName} from '../general/BoardName';
import {TimeInputWithLabel} from './TimeInputWithLabel';
import {TimeLabel} from './TimeLabel';
import { Colon } from './Colon';

export const TimeBoardStatic = ({
    name,timeMIN, timeHR, timeSEC,
}) => {
    return(
        <div className="w-full flex flex-col ">
                <BoardName name={name} />
                <div className="flex items-center bg-161614 dark:bg-gray-600 p-4 rounded-xl">
                    <TimeInputWithLabel time={timeHR} handleTimeChange={()=>{}} unit="HR" />
                    <TimeInputWithLabel time={timeMIN} handleTimeChange={()=>{}} unit="MIN" />
                    <TimeInputWithLabel time={timeSEC} handleTimeChange={()=>{}} unit="SEC" />
                </div>
        </div>
    )
}

