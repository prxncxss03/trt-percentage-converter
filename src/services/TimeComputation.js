export const computeTotalTime = ({
    totalSec, totalHr, totalMin
    , userSec, userHr, userMin
    , setError1, setError2, setPage, setPercentage, error1, error2,
    
}) => {
    
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