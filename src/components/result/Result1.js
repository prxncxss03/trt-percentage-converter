import { TimeBoardName } from "../time/TimeBoardName"
import { RiArrowGoBackLine } from "react-icons/ri"
import { ProgressBar } from "./ProgressBar"

export const Result1 = ({percentage, handleChangePage}) => {
    let message = {
        10: "Go go go!",
        20: "Celebrate small wins",
        40: "You're doing great keep it up",
        50: "You're half way na yey!",
        75: "Going strong!",
        90: "You're almost there!",
        100: "You're done! Congratulations!"
      }

    return(
        <div className="flex flex-col w-full h-full md:w-1/2 lg:w-5/12 px-4 justify-center">
          <TimeBoardName name="Your progress" />
          <div className="mt-10 mb-10">
            <ProgressBar percentage={percentage} />
            <p className="font-bold text-xl text-center my-2">{percentage}%</p>
            <p className="font-bold mt-2 text-center">
              {
                percentage < 10 ? message[10] : percentage < 20 ? message[20] : percentage < 40 ? message[40] : percentage === 50 ? message[50] : percentage < 75 ? message[75] : percentage < 99.99 ? message[90] : message[100]
              }
            </p>
          </div>
          <button onClick={(e) => handleChangePage(e)} className="bg-e4c1f9 shadow-sm  text-161614 font-bold rounded-md px-4 py-2 flex w-full items-center justify-center">Go Back<RiArrowGoBackLine className="ml-2 " /></button>
        </div>
      
    )
}