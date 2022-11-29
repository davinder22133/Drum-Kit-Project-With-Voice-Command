       // var message = document.querySelector('#message');
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition; // speechRecongiton for firefox and webkitSpe for chrom
        
        // speechrecog provide to recognize voice form normal mic
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;

var grammar = '#JSGF V1.0;' // for grammer

var recognition = new SpeechRecognition(); // object 
var speechRecognitionList = new SpeechGrammarList(); // for grammer list
       
speechRecognitionList.addFromString(grammar, 1); 
recognition.grammars = speechRecognitionList;
recognition.lang = 'en-US';
recognition.interimResults = false; // this is false because we dont  want interm  result we just want final result

        
            // this will be called when result arrived
        recognition.onresult = function(event) {
            
            var last = event.results.length - 1;
            var command = event.results[last][0].transcript;
            console.log("command is ",command);
            message.textContent = 'Voice Input: ' + command + '.';
            
            var a=command.toLowerCase();
            
            // let a=press w+anthing
            if(a.charAt(6)=='w'){
              //  document.querySelector('#chkSteve').checked = true;
                 var audio= new Audio("sounds/tom-1.mp3"); // creating a variable that stores audio object
             
                btn_animation("w");
                audio.play();
            }
            else if (a.charAt(6)=='a'){
            var audio= new Audio("sounds/tom-2.mp3"); // creating a variable that stores audio object
             //console.log(audio);
            audio.play();
             btn_animation("a");
            }
            else if (a.charAt(6)=='s'){
            var audio= new Audio("sounds/tom-3.mp3"); // creating a variable that stores audio object
             //console.log(audio);
            audio.play();
             btn_animation("s");
            }
            else if (a.charAt(6)=='d'){
            var audio= new Audio("sounds/tom-4.mp3"); // creatingvariable that stores audio object
             //console.log(audio);
            audio.play();
             btn_animation("d");
            }  
            
            
             else if (a.charAt(6)=='j'){
            var audio= new Audio("sounds/tom-5.mp3"); // creatingvariable that stores audio object
             //console.log(audio);
            audio.play();
             btn_animation("j");
            }  
            
            
             else if (a.charAt(6)=='k'){
            var audio= new Audio("sounds/tom-6.mp3"); // creatingvariable that stores audio object
             //console.log(audio);
            audio.play();
             btn_animation("k");
            }  
            
            
             else if (a.charAt(6)=='l'){
            var audio= new Audio("sounds/tom-6.mp3"); // creatingvariable that stores audio object
             //console.log(audio);
            audio.play();
             btn_animation("l");
            }  
            
        };
        
        
        // this function will be called when sppech recognition will be finished
        

        recognition.onspeechend = function() {
            recognition.stop();
        };

        
        // this will be called when any error occured
        recognition.onerror = function(event) {
            message.textContent = 'Error occurred in recognition: ' + event.error;
        }        

        document.querySelector('#btnGiveCommand').addEventListener('click', function(){
            message.textContent =null;
            recognition.start();

        });









//----------------------------------------------------



function btn_animation(currentkey){
   var curr_button= document.querySelector("."+currentkey);
    console.log("curr_button is ",curr_button);
        
    curr_button.classList.add("pressed");
    
   
    // for goes back to orignal state 
    
    setTimeout(function(){ curr_button.classList.remove("pressed");},100);
               
               
}





    // USING ANANOMYS FUNCTION

for(var i=0;i<document.querySelectorAll(".drum").length;i++){ // but it will also give another button rather than only w,a,s,d etc buttons

    
   
    
   
document.querySelectorAll("button")[i].addEventListener("click",function(){
    
    console.log("this is ",this);
   //  this.style.color="white"; //changing button color
    
    
    var inner_HTML=this.innerHTML;
   console.log(inner_HTML);
    
    switch(inner_HTML){
        case "w":
             var audio= new Audio("sounds/tom-1.mp3"); // creating a variable that stores audio object
             //console.log(audio);
             btn_animation("w");
             audio.play();
        break;
        
        case "a":
            var audio= new Audio("sounds/tom-2.mp3"); // creating a variable that stores audio object
             //console.log(audio);
            audio.play();
             btn_animation("a");
        break;
            
        
        case "s":
            var audio= new Audio("sounds/tom-3.mp3"); // creating a variable that stores audio object
             //console.log(audio);
            audio.play();
             btn_animation("s");
            
        break;
        
        case "d":
            var audio= new Audio("sounds/tom-4.mp3"); // creating a variable that stores audio object
             //console.log(audio);
            audio.play();
             btn_animation("d");
        break;
            
        case "j":
            var audio= new Audio("sounds/snare.mp3"); // creating a variable that stores audio object
             //console.log(audio);
            audio.play();
             btn_animation("j");
        break;
            
        case "k":
            var audio= new Audio("sounds/crash.mp3"); // creating a variable that stores audio object
             //console.log(audio);
            audio.play();
             btn_animation("k");
            
        break;
        
        case "l":
            var audio= new Audio("sounds/kick-bass.mp3"); // creating a variable that stores audio object
             //console.log(audio);
            audio.play();
             btn_animation("l");
            
        break;
    }
    
});
}



// FOR KEYS 
document.addEventListener("keypress",function(event){
   
    
    console.log("event is ",event); // this prints which has happen
   // alert("key is pressed");
    
    console.log(event.key);
    var a=event.key;
    
     switch(a){
        case "w":
             var audio= new Audio("sounds/tom-1.mp3"); // creating a variable that storses audio object
             //console.log(audio);
             audio.play();
             btn_animation("w");
        break;
        
        case "a":
            var audio= new Audio("sounds/tom-2.mp3"); // creating a variable that stores audio object
             //console.log(audio);
            audio.play();
             btn_animation("a");
        break;
            
        
        case "s":
            var audio= new Audio("sounds/tom-3.mp3"); // creating a variable that stores audio object
             //console.log(audio);
            audio.play();
             btn_animation("s");
        break;
        
        case "d":
            var audio= new Audio("sounds/tom-4.mp3"); // creating a variable that stores audio object
             //console.log(audio);
            audio.play();
             btn_animation("d");
        break;
            
        case "j":
            var audio= new Audio("sounds/snare.mp3"); // creating a variable that stores audio object
             //console.log(audio);
            audio.play();
             btn_animation("j");
        break;
            
        case "k":
            var audio= new Audio("sounds/crash.mp3"); // creating a variable that stores audio object
             //console.log(audio);
            audio.play();
             btn_animation("k");
        break;
        
        case "l":
            var audio= new Audio("sounds/kick-bass.mp3"); // creating a variable that stores audio object
             //console.log(audio);
            audio.play();
             btn_animation("l");
        break;}
    
});







