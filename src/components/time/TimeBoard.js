import {BoardName} from '../general/BoardName';
import {TimeInputWithLabel} from './TimeInputWithLabel';
import {ErrorMessage} from './ErrorMessage';

export const TimeBoard = ({
    name,error, timeMIN, timeHR, timeSEC,  handleTimeHrChange, handleTimeMinChange, handleTimeSecChange
}) => {
    return(
        <div className="w-full flex flex-col ">
                <BoardName name={name} />
                <ErrorMessage message={error}></ErrorMessage>
                <div className="flex items-center bg-161614 dark:bg-gray-600 p-4 rounded-xl">
                    <TimeInputWithLabel unit="HR" time={timeHR} handleTimeChange={(e)=> {handleTimeHrChange(e)}}/>
                    <TimeInputWithLabel unit="MIN" time={timeMIN} handleTimeChange={(e)=> {handleTimeMinChange(e)}}/>
                    <TimeInputWithLabel unit="SEC" time={timeSEC} handleTimeChange={(e)=> {handleTimeSecChange(e)}}/>
                </div>
        </div>
    )
}


