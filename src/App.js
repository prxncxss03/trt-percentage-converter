import { useState } from "react";

import { ThemeSwitcher } from "./components/darkMode/ThemeSwitcher";
import { TrtPercentage } from "./components/time/TrtPercentage";
import { Footer } from "./components/footer/Footer";
import { Result1 } from "./components/result/Result1";
import { Home } from "./components/home/Home";
import { PercentageTrt } from "./components/percentage/PercentageTrt";
import { Result2 } from "./components/result/Result2";

function App() {
  const [page, setPage] = useState(1);
  const [userHr, setUserHr] = useState("00");
  const [userMin, setUserMin] = useState("00");
  const [userSec, setUserSec] = useState("00");

  const [totalSec, setTotalSec] = useState("00");
  const [totalMin, setTotalMin] = useState("00");
  const [totalHr, setTotalHr] = useState("00");

  const [totalSec2, setTotalSec2] = useState("00");
  const [totalMin2, setTotalMin2] = useState("00");
  const [totalHr2, setTotalHr2] = useState("00");

  const [resultHr, setResultHr] = useState("00");
  const [resultMin, setResultMin] = useState("00");
  const [resultSec, setResultSec] = useState("00");

  const [percentage, setPercentage] = useState(0);
  const [percentageInput, setPercentageInput] = useState(0);


  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");
  const [error3, setError3] = useState("");
  const [error4, setError4] = useState("");

  

  const handleTimeChange = (e,state) => {
      let length = e.target.value.length;
      if (length < 3) {
          state(e.target.value);
          setError1("");
          setError2("");
          setError3("");
      } 
  };

  const handlePercentageChange = (e) => {
      let length = e.target.value.length;
      if (length < 4) {
          setPercentageInput(e.target.value);
          setError4("");
          setError3("");
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
    setPage(3);
    
    let percentage = (totalUserTime / TotalRT) * 100;
    let percentageRounded = Math.round(percentage * 100) / 100;
    setPercentage(percentageRounded);

}

  const computeRt = () => {
    //
    let percentage = (percentageInput/100);
    

    //get the total time of input and convert to seconds
    if (totalSec2 === "00" && totalMin2 === "00" && totalHr2 === "00"  ) {
      setError3("This field cannot be empty");
      return;
    }

    if (parseInt(totalMin2) > 60 || parseInt(totalSec2) > 60){
      setError3("Please enter a valid time");
      return;
    }

    if (percentageInput === "" || percentageInput === 0) {
      setError4("This field cannot be empty");
      return;
    }
    if (percentageInput > 100 || percentageInput < 0) {
      setError4("Please enter a valid percentage");
      return;
    }
    let totalSeconds = parseInt(totalHr2 ? totalHr2 : 0) * 3600 + parseInt(totalMin2 ? totalMin2 : 0) * 60 + parseInt(totalSec2 ? totalSec2 : 0);
    let totalUserTimeInSeconds = totalSeconds * percentage;
    
    //convert to hours, minutes and seconds

    let hours = parseInt( totalUserTimeInSeconds / 3600 );
    let minutes = parseInt( (totalUserTimeInSeconds - (hours * 3600)) / 60 );
    let seconds = Math.floor((totalUserTimeInSeconds - ((hours * 3600) + (minutes * 60))));
    let result = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds  < 10 ? "0" + seconds : seconds);
    setResultHr(hours);
    setResultMin(minutes);
    setResultSec(seconds);
    
    console.log(result);
    setPage(5);


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
          <TrtPercentage
            error1={error1}
            error2={error2}
            userHr={userHr} handleUserHrChange={(e)=> {handleTimeChange(e, setUserHr)}}
            userMin={userMin} handleUserMinChange={(e)=> {handleTimeChange(e, setUserMin)}}
            userSec={userSec} handleUserSecChange={(e)=> {handleTimeChange(e, setUserSec)}}
            totalHr={totalHr} handleTotalHrChange={(e)=> {handleTimeChange(e, setTotalHr)}}
            totalMin={totalMin} handleTotalMinChange={(e)=> {handleTimeChange(e, setTotalMin)}}
            totalSec={totalSec} handleTotalSecChange={(e)=> {handleTimeChange(e, setTotalSec)}}
            computeTotalTime={computeTotalTime}
            GoHomePage={()=>handleChangePage(1)}
            
          />
        </div> : 
        page === 3 ?
        <Result1 percentage={percentage} handleChangePage={()=>handleChangePage(2)} GoHomePage={()=>handleChangePage(1)}></Result1>
        : page === 4 ?
        <PercentageTrt 
        handlePercentageChange={(e)=> {handlePercentageChange(e)}}
        error3={error3}
        error4={error4}
        timeSEC={totalSec2} handleTimeSecChange={(e)=> {handleTimeChange(e, setTotalSec2)}}
        timeHR={totalHr2} handleTimeHrChange={(e)=> {handleTimeChange(e, setTotalHr2)}}
        timeMIN={totalMin2} handleTimeMinChange={(e)=> {handleTimeChange(e, setTotalMin2)}}
        handleComputeRt={computeRt}
        GoHomePage={()=>handleChangePage(1)} percentage={percentageInput}></PercentageTrt>
        :
        page === 5 ?
        <Result2 
        timeHR={resultHr} timeMIN={resultMin} timeSEC={resultSec}
        percentage={percentageInput} handleChangePage={()=>handleChangePage(4)} GoHomePage={()=>handleChangePage(1)}></Result2>
        : null
      }
      <Footer />
      
    </div>
  );
}

export default App;
