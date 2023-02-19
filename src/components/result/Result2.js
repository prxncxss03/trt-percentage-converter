import { TimeBoardStatic } from "../time/TimeBoardStatic"
import { GoBackBtn } from "../general/GoBackBtn"
import { HomeBtn } from "../home/HomeBtn"

export const Result2 = ({
timeHR,
timeMIN,
timeSEC,
handleChangePage,
GoHomePage
}) => {
    return(
        <div className="flex flex-col h-full justify-center md:w-1/2 lg:w-5/12 w-full p-4 select-none">
            <TimeBoardStatic name="Result 🎉:" timeMIN={timeMIN} timeHR={timeHR} timeSEC={timeSEC}></TimeBoardStatic>
            <GoBackBtn name="Go Back" handleChangePage={handleChangePage} />
          <HomeBtn name="Go Home" handleChangePage={GoHomePage} />
        </div>
    )
}