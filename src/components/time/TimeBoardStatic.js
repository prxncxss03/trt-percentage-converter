import {BoardName} from '../general/BoardName';
import {TimeInputWithLabel} from './TimeInputWithLabel';

export const TimeBoardStatic = ({
    name,timeMIN, timeHR, timeSEC,
}) => {
    return(
        <div className="w-full flex flex-col ">
                <BoardName name={name} />
                <div className="flex items-center bg-161614 dark:bg-gray-600 p-4 rounded-xl">
                    <TimeInputWithLabel unit="HR" time={timeHR} />
                    <TimeInputWithLabel unit="MIN" time={timeMIN} />
                    <TimeInputWithLabel unit="SEC" time={timeSEC} />
                </div>
        </div>
    )
}