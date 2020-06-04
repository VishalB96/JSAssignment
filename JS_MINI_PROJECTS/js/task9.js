

function add(a,b){
    let x = arguments.length,i,sum=0;
      if(x < 2){
        alert("enter sufficient input");
            return 0;
      }
    
    
    for(i=0;i<x;i++){
          sum+=parseInt(arguments[i].value);
        }
    return parseInt(sum);
}

function sub(a,b){
    let x = arguments.length,i,sub=0;
    if(x<2){
        alert("Enter sufficient inputs");
        return 0;
    }
    for(i=0;i<x;i++){
        sub=arguments[i].value-sub;
    }
    return sub;
}

function mul(a,b){
    let x = arguments.length,i,mul=1;
    if(x<2){
        alert("Enter sufficient inputs");
        return 0;
    }
    for(i=0;i<x;i++){
        mul*=arguments[i].value;
    }
    return mul;
}

function divi(a,b){
    let x = arguments.length,i,div=1;
    if(x<2){
        alert("Enter sufficient inputs");
        return 0;
    }
    for(i=0;i<x;i++){
        div=arguments[i].value/div;
    }
    return div;
}

    function calculate(a){
        let x = document.getElementsByTagName("input");
        let op;
        if(a=="+"){
            op = add.apply(null,x);
        }
        if(a=="-"){
            op = sub.apply(null,x);
        }
        if(a=="*"){
            op = mul.apply(null,x);
        }
        if(a=="/"){
            op = divi.apply(null,x);
        }
        document.getElementById("answer").innerHTML = op;
        
            
    }

    