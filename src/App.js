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
    let totalUserTime = parseInt(userHr) * 3600 + parseInt(userMin) * 60 + parseInt(userSec);
    let TotalRT = parseInt(totalHr) * 3600 + parseInt(totalMin) * 60 + parseInt(totalSec);
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
  return (
    <div className="font-sans flex justify-center h-screen items-center">
    <div>
      
    </div>
      {
        page === 1 ? <div className="flex flex-col items-center">
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
        <div>
          <TimeBoardName name="Your progress" />
          <ProgressBar percentage={percentage} />
          <p className="font-bold text-xl text-center">{percentage}%</p>
          <button onClick={handleChangePage} className="bg-e4c1f9  text-161614 font-bold rounded-md px-4 py-2 flex w-full items-center justify-center">Go Back<RiArrowGoBackLine className="ml-2 " /></button>
        </div>
      }
      
    </div>
  );
}

export default App;
