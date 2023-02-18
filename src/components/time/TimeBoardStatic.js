import {BoardName} from '../general/BoardName';
import {TimeInputWithLabel} from './TimeInputWithLabel';

export const TimeBoardStatic = ({
    name,timeMIN, timeHR, timeSEC,
}) => {
    return(
        <div className="w-full flex flex-col mb-4">
                <BoardName name={name} />
                <div className="flex items-center bg-161614 dark:bg-gray-600 p-4 rounded-xl">
                    <TimeInputWithLabel time={timeHR < 10 ? `0${timeHR}`: timeHR} handleTimeChange={()=>{}} unit="HR" />
                    <TimeInputWithLabel time={timeMIN < 10 ? `0${timeMIN}`: timeMIN} handleTimeChange={()=>{}} unit="MIN" />
                    <TimeInputWithLabel time={timeSEC < 10 ? `0${timeSEC}`: timeSEC} handleTimeChange={()=>{}} unit="SEC" />
                </div>
        </div>
    )
}
