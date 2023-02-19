import {BoardName} from '../general/BoardName';
import { TimeResult } from './TimeResult';

export const TimeBoardStatic = ({
    name,timeMIN, timeHR, timeSEC,
}) => {
    return(
        <div className="w-full flex flex-col my-6">
                <BoardName name={name} />
                <div className="flex items-center bg-161614 dark:bg-gray-600 p-4 mt-4 rounded-xl">
                    <TimeResult time={timeHR < 10 ? `0${timeHR}`: timeHR} unit="HR" />
                    <TimeResult time={timeMIN < 10 ? `0${timeMIN}`: timeMIN} unit="MIN" />
                    <TimeResult time={timeSEC < 10 ? `0${timeSEC}`: timeSEC} unit="SEC" />
                </div>
        </div>
    )
}

