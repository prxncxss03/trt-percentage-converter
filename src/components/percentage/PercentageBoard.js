import { BoardName } from "../general/BoardName"
export const PercentageBoard = ({
    name,
    percentage,
    handlePercentageChange,
    handleChangePage,
}) => {
    return(
        <div className="w-full flex flex-col md:w-1/2 lg:w-5/12">
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