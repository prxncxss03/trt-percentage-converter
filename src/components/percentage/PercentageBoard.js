import { BoardName } from "../general/BoardName"
import { PercentageInput } from "./PercentageInput"
import { ErrorMessage } from "../time/ErrorMessage"

export const PercentageBoard = ({
    name,
    percentage,
    handlePercentageChange,
    error4
}) => {
    return(
        <div className="w-full flex flex-col ">
                <BoardName name={name} />
                <ErrorMessage message={error4} />
                <div className="flex items-center justify-center bg-161614 dark:bg-gray-600 p-4 rounded-xl w-full">
                    <PercentageInput percentage={percentage} handlePercentageChange={handlePercentageChange}></PercentageInput>
                    <p className="text-e4c1f9 dark:drop-shadow-sm font-bold w-14 text-center outline-none text-4xl">%</p>
                </div>
        </div>
    )
}