import { useState } from "react";

import { TimeBoard } from "./components/time/TimeBoard";
import { ProgressBar } from "./components/result/ProgressBar";
import { TimeBoardName } from "./components/time/TimeBoardName";
import { BsFillMoonFill,BsFillSunFill ,BsSun} from "react-icons/bs";
import { RiArrowGoBackLine } from "react-icons/ri";
//RiArrowGoBackLine

function App() {
  const [page, setPage] = useState(1);
  const [userHr, setUserHr] = useState("00");
  const [userMin, setUserMin] = useState("00");
  const [userSec, setUserSec] = useState("00");

  const [totalSec, setTotalSec] = useState("00");
  const [totalMin, setTotalMin] = useState("00");
  const [totalHr, setTotalHr] = useState("00");

  const [percentage, setPercentage] = useState(0);

  const handleTimeChange = (e,state) => {
      let length = e.target.value.length;
      if (length < 3) {
          state(e.target.value);
      }

      
     
  };

  const computeTotalTime = () => {
    
    if (totalSec === "00" && totalMin === "00" && totalHr === "00"  ) {
      alert("Please fill in all the fields");
      return;
    }
    if (userSec === "" && userMin === "" && userHr === "") {
      alert("Please fill in all the fields");
      return;
    }
    //if greater than 60
    if (parseInt(userSec) > 60 || parseInt(userMin) > 60 || parseInt(totalMin) > 60 || parseInt(totalSec) > 60) {
      alert("Please enter a valid time");
      return;
    }
    let totalUserTime = parseInt(userHr ? userHr : 0) * 3600 + parseInt(userMin ? userMin : 0 ) * 60 + parseInt(userSec ? userSec : 0);
    let TotalRT = parseInt(totalHr ? totalHr : 0) * 3600 + parseInt(totalMin ? totalMin : 0) * 60 + parseInt(totalSec ? totalSec : 0);
    if (totalUserTime > TotalRT) {
      alert("Your total time is greater than the total RT time");
      return;
    }
    setPage(2);
    
    let percentage = (totalUserTime / TotalRT) * 100;
    let percentageRounded = Math.round(percentage * 100) / 100;
    setPercentage(percentageRounded);

}

  const handleChangePage = () => {
    setPage(1);
  }

  let message = {
    20: "Celebrate small wins",
    40: "You're doing great keep it up",
    50: "You're half way na yey!",
    90: "You're almost there!",
    100: "You're done! Congratulations!"
  }
  return (
    <div className="font-sans flex flex-col  justify-center h-screen items-center ">
    <div className="absolute top-0 right-0 p-4">
      <button>
        <BsFillMoonFill className="text-4xl  text-black" />
      </button>
    </div>
      {
        page === 1 ? <div className="flex flex-col items-center w-full mb-6">
          <TimeBoard 
            userHr={userHr} handleUserHrChange={(e)=> {handleTimeChange(e, setUserHr)}}
            userMin={userMin} handleUserMinChange={(e)=> {handleTimeChange(e, setUserMin)}}
            userSec={userSec} handleUserSecChange={(e)=> {handleTimeChange(e, setUserSec)}}
            totalHr={totalHr} handleTotalHrChange={(e)=> {handleTimeChange(e, setTotalHr)}}
            totalMin={totalMin} handleTotalMinChange={(e)=> {handleTimeChange(e, setTotalMin)}}
            totalSec={totalSec} handleTotalSecChange={(e)=> {handleTimeChange(e, setTotalSec)}}
            computeTotalTime={computeTotalTime}
          />
        </div> : 
        <div className="flex flex-col w-full px-4">
          <TimeBoardName name="Your progress" />
          <div className="mt-10 mb-10">
            <ProgressBar percentage={percentage} />
            <p className="font-bold text-xl text-center my-2">{percentage}%</p>
            <p className="font-bold mt-2 text-center">
              {
                percentage < 20 ? message[20] : percentage < 40 ? message[40] : percentage == 50 ? message[50] : percentage < 99.99 ? message[90] : message[100]
              }
            </p>
          </div>
          <button onClick={handleChangePage} className="bg-e4c1f9  text-161614 font-bold rounded-md px-4 py-2 flex w-full items-center justify-center">Go Back<RiArrowGoBackLine className="ml-2 " /></button>
        </div>
      }
      
    </div>
  );
}

export default App;
