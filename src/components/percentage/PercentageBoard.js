import { BoardName } from "../general/BoardName"
import { PercentageInput } from "./PercentageInput"

export const PercentageBoard = ({
    name,
    percentage,
    handlePercentageChange,
}) => {
    return(
        <div className="w-full flex flex-col md:w-1/2 lg:w-5/12">
                <BoardName name={name} />
                
                <div className="flex items-center bg-161614 dark:bg-gray-600 p-4 rounded-xl w-full">
                    <PercentageInput percentage={percentage} handlePercentageChange={handlePercentageChange}></PercentageInput>
                </div>
        </div>
    )
}