var fname = "VISHAL";

// function close(){
//     alert("qwqw");
//     document.getElementById("overlay").style.display= "none";
//     document.getElementById("overlay").style.position = "initital";
// }

/*----------------------------------------task1------------------------------------ */

(function () {
    document.getElementById("op1").innerHTML = fname;
  })();
/*------------------------------task2--------------------------------------------------- */
  function sqrOfno(){
      var num1 = document.getElementById("num1").value;
      if(num1!= 0 || num1 != NULL){
        
          (function(){
              
              let sqr = parseInt(num1)*parseInt(num1);
            document.getElementById("op2").innerHTML = 
            "<h3>The square of " + num1 +" is : "+sqr+ "</h3>";
          })();
      }
  }

  /*------------------------------task 3--------------------------------------------------- */
  
    function funcall(){
        var a = document.getElementById("num2").value;
        var b = document.getElementById("num3").value;
        var c = document.getElementById("num4").value;
        if(a==""){a=undefined;}
        if(b==""){b=undefined;}
        if(c==""){c=undefined;}
        add3(a,b,c);
    }
    
    function add3(a=0,b=0,c=0){
      
      let sum = 0;
      sum=parseInt(a)+parseInt(b)+parseInt(c);
      document.getElementById("op3").innerHTML = 
      "SUM : " + sum;
  }