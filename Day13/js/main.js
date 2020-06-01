/*----------------------------------task1------------------------------------------*/

 function showTime(){
    let t = new Date();
    let hour = t.getHours();
    let minute = t.getMinutes();
    let sec = t.getSeconds();
    let meridium = "AM";
    minute = checkTime(minute);
    sec = checkTime(sec);
    if(hour > 12){
        meridium = "PM";
        hour-=12;
    }
    document.getElementById("op1").innerHTML = hour+ ":" + minute + ":" + sec + " "+ meridium;
    let tIncrement = setTimeout(showTime, 100);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }




