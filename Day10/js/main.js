function change1(){
    let a = document.getElementById("op1");
    let c1 = a.style.color;//previous color
    let b = document.getElementById("btn1").value;//new color

    a.style.color = b;//new color assigned
   
    document.getElementById("btn1").value = c1;//colors switched for toggle
    document.getElementById("btn1").innerHTML = c1;//name of button changed
}

/*----------------------------------------task2 start------------------------------*/

function change2(){

    let a = document.getElementById("op2");
    let al = a.style.textAlign;//previous alignment
    let b = document.getElementById("btn2").value;//new alignment

    a.style.textAlign = b;//new alignment assigned

    document.getElementById("btn2").value = al;//alingment switched for toggle
    document.getElementById("btn2").innerHTML = al;//name of button changed
}

/*------------------------------------------task 3 start ------------------------------*/

function change3(){

    let ele = document.getElementById("op3");
    let c1 = ele.style.color;
    let c2 = ele.style.backgroundColor;
    let c3=c1;
    c1=c2;
    c2=c3;
    ele.style.color = c1;
    ele.style.backgroundColor = c2;

}

/*-------------------------------------task 4 start -----------------------------------*/

function change4(c){
    document.getElementById("op4").style.color = c;
}

/*------------------------------task 5 start---------------------------------------------------*/

function change5(c){
    document.getElementById("op5").style.fontSize = c +"em";
}

/*---------------------------------------task 7 start----------------------------- */

function change7(){
    let x = document.getElementsByTagName("p");
    let y = document.getElementById("section7");
    let y1 = y.getElementsByTagName("p");
    document.getElementById("op7").innerHTML =
     "Number of &lt;p&gt; tags in whole document is :" + x.length +
     "<br>Number of &lt;p&gt; tags in this perticular DIV is :" + y1.length+"<br>";
     

    let z = y.childNodes;
    
    for(let i = 0 ; i<z.length;i++){
        if(z[i].nodeName.toLowerCase() == 'p'){
            z[i].style.backgroundColor = "blue";
        }
    }
}

/*-------------------------------------task 8 start---------------------------------*/

function change8(){
    let parent = document.getElementById("ol1");
    let node = parent.childNodes;

    parent.removeChild(node[0]);
    parent.removeChild(node[1]);
    
}
/*--------------------------------------------task 10-----------------------------------*/

function change10(x){

    if(x==""){
        document.getElementById("op10").innerHTML = "INPUT CANT BE EMPTY";
    }
}

