import { useState } from "react";
import { TimeBoard } from "./components/time/TimeBoard";

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
    setPage(2);
    let totalUserTime = parseInt(userHr) * 3600 + parseInt(userMin) * 60 + parseInt(userSec);
    let TotalRT = parseInt(totalHr) * 3600 + parseInt(totalMin) * 60 + parseInt(totalSec);
    if (totalSec === "00" && totalMin === "00" && totalHr === "00"  ) {
        alert("Please fill in all the fields");
        return;
    }
    if (userSec === "" && userMin === "" && userHr === "") {
        alert("Please fill in all the fields");
        return;
    }

    if (totalUserTime > TotalRT) {
        alert("Your total time is greater than the total RT time");
        return;
    }
    let percentage = (totalUserTime / TotalRT) * 100;
    let percentageRounded = Math.round(percentage * 100) / 100;
    setPercentage(percentageRounded);

}
  return (
    <div className="font-sans flex justify-center h-screen items-center">
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
        <div><p>Hello</p></div>
      }
      
    </div>
  );
}

export default App;
