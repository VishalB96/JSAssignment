var slideNumber = 1;
            displaySlide(slideNumber);

            function nextSlide(n){
                displaySlide(slideNumber+=n);
            }

            function displaySlide(n){
                let ele = document.getElementsByClassName("slide");
                let i;  
                if (n > ele.length) {  slideNumber = 1 }  
                if (n < 1) { slideNumber = ele.length }  
                for (i = 0; i < ele.length; i++) {  
                    ele[i].style.display = "none";  
                }  
                ele[slideNumber-1].style.display = "block"; 
                
                
    
    
            }