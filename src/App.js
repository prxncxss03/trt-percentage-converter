import { useState } from "react";

import { ThemeSwitcher } from "./components/darkMode/ThemeSwitcher";
import { TimeBoard } from "./components/time/TimeBoard";
import { ProgressBar } from "./components/result/ProgressBar";
import { TimeBoardName } from "./components/time/TimeBoardName";
import { RiArrowGoBackLine } from "react-icons/ri";
import { Footer } from "./components/footer/Footer";
import { Result1 } from "./components/result/Result1";
import { Home } from "./components/home/Home";
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

  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");

  

  const handleTimeChange = (e,state) => {
      let length = e.target.value.length;
      if (length < 3) {
          state(e.target.value);
          setError1("");
          setError2("");
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

  const handleChangePage = (page) => {
    setPage(page);
  }

  
  return (
    <div className="font-sans flex flex-col md:px-6 bg-gray-100 dark:bg-161614 dark:text-white  h-screen items-center ">
    <div className="absolute top-0 right-0 p-4">
      <ThemeSwitcher />
    </div>
    
      {
        page === 1 ? <Home handleChangePage1={()=> handleChangePage(2)} handleChangePage2 ={()=> handleChangePage(4)} ></Home>
        : page === 2 ? <div className="flex flex-col items-center  w-full mb-6 h-full justify-center">
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
        page === 3 ?
        <Result1 percentage={percentage} handleChangePage={handleChangePage}></Result1>
        : null
      }
      <Footer />
      
    </div>
  );
}

export default App;
