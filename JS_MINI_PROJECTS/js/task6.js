window.onload = setInterval(
    function displayTime(){
    let time = new Date();
    let hr = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let date = time.getDate();
    let month = time.getMonth();
    let day = time.getDay();
    let meridium = "AM"
    let month_names = ["JAN","FEB","MAR","APR","MAY","JUNE","JULY","AUG","SEP","OCT","NOV","DEC"];
    let day_names = ["MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"];
    if(hr > 12){
        meridium = "PM";
           hr-=12;
       }
    hr = hr < 10 ? "0" + hr : hr;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    
    document.getElementById("op1").innerHTML = 
    `TODAY is ${day_names[day]} ${date} ${month_names[month]}<br> TIME : ${hr}&#58;${min}&#58;${sec} ${meridium}`;
}
,1000);