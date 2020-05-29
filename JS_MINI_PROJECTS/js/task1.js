var d = new Date();//date object
function getname(){

    let n = document.getElementById("name").value;//name variable
    let op1 = document.getElementById("op1");//output1
    let hour = d.getHours();//hours from date

    document.getElementById("ip1").style.display = "none";//disable input of name

    //condition for greetings
    if( hour >= 5 && hour <= 12 )//morning
    {
        op1.innerHTML = "<h3>Good Morning " + n + "!<br>Have a nice day!</h3>";
    }
    else if( hour > 12 && hour < 17 )//noon
    {
        op1.innerHTML = "<h3>Good Afternoon " + n + "!<br>Keep on Keeping on</h3>";
    }
    else if ( hour >= 17 && hour <= 22 )//evening
    {
        op1.innerHTML = "<h3>Good Evening " + n + "!</h3>";
    }
    else if ( hour > 22 && hour < 5 )//night
    {
            op1.innerHTML = "Good Night " + n + "!<br>You should get some sleep...zzZZ";
    }

    //condition for days

}