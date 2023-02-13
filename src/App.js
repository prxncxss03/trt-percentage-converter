import { useState } from "react";

import { ThemeSwitcher } from "./components/darkMode/ThemeSwitcher";
import { TimeBoard } from "./components/time/TimeBoard";
import { ProgressBar } from "./components/result/ProgressBar";
import { TimeBoardName } from "./components/time/TimeBoardName";
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
  const [percentageBool, setPercentageBool] = useState(true);

  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");

  

  const handleTimeChange = (e,state) => {
      let length = e.target.value.length;
      if (length < 3) {
          state(e.target.value);
          setError1("");
          setError2("");
          setPercentageBool(true)
      } 
  };

  const computeTotalTime = () => {
    
    if (totalSec === "00" && totalMin === "00" && totalHr === "00"  ) {
      setError2("This field cannot be empty");
      return;
    }
    if (userSec === "" && userMin === "" && userHr === "") {
      setError1("This field cannot be empty");
      return;
    }
    //if greater than 60
    if (parseInt(userSec) > 60 || parseInt(userMin) > 60 ) {
      setError1("Please enter a valid time");
      return;
    }
    if (parseInt(totalMin) > 60 || parseInt(totalSec) > 60){
      setError2("Please enter a valid time");
      return;
    }
    let totalUserTime = parseInt(userHr ? userHr : 0) * 3600 + parseInt(userMin ? userMin : 0 ) * 60 + parseInt(userSec ? userSec : 0);
    let TotalRT = parseInt(totalHr ? totalHr : 0) * 3600 + parseInt(totalMin ? totalMin : 0) * 60 + parseInt(totalSec ? totalSec : 0);
    if (totalUserTime === 0) {
      setError1("Your progress should not be zero");
      return;
    }
    if (TotalRT === 0) {
      setError2("Total time cannot be zero");
      return;
    }
    if (totalUserTime > TotalRT) {
      setError1("The time you entered is greater than the total time");
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
    <div className="font-sans flex flex-col md:p-6 bg-gray-100 dark:bg-161614 dark:text-white justify-center h-screen items-center ">
    <div className="absolute top-0 right-0 p-4">
      <ThemeSwitcher />
    </div>
    
      {
        page === 1 ? <div className="flex flex-col items-center w-full mb-6">
          <div>
            
          </div>
          <TimeBoard 
            error1={error1}
            error2={error2}
            userHr={userHr} handleUserHrChange={(e)=> {handleTimeChange(e, setUserHr)}}
            userMin={userMin} handleUserMinChange={(e)=> {handleTimeChange(e, setUserMin)}}
            userSec={userSec} handleUserSecChange={(e)=> {handleTimeChange(e, setUserSec)}}
            totalHr={totalHr} handleTotalHrChange={(e)=> {handleTimeChange(e, setTotalHr)}}
            totalMin={totalMin} handleTotalMinChange={(e)=> {handleTimeChange(e, setTotalMin)}}
            totalSec={totalSec} handleTotalSecChange={(e)=> {handleTimeChange(e, setTotalSec)}}
            computeTotalTime={computeTotalTime}
          />
        </div> : 
        <div className="flex flex-col w-full  md:w-1/2 lg:w-5/12 px-4">
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
