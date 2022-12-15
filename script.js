let randomNumber ;
let inputs = document.getElementsByName("contact");
let firstInput = document.querySelector("#difficulty1");
let secondInput = document.querySelector("#difficulty2");
let thirthInput = document.querySelector("#difficulty3");
let inputNumber = document.querySelector(".inputNumber");
let btn = document.querySelector(".submit");
let number;
let chances;
let div_1 = document.querySelector("#first");
let div_2 = document.querySelector("#second");
let btn_1 = document.querySelector(".btn_1");
let h3 = document.querySelector("h3");
let h5 = document.querySelector("h5");
let h4 = document.querySelector("h4");
let div = document.querySelector(".div");
let audio = document.querySelectorAll("audio");
function gameOver(){
    document.getElementById("first").style.display = "none";
    document.getElementById("second").style.display = "block";
}
function restart(){
    location.reload();
}  
window.onload = audio[2].play();

// document.addEventListener('DOMContentLoaded',()=>{
//     audio[2].play();
//     // console.log("text");
// });

function testValue(){
        if(inputs[0].checked){
            document.querySelector(".desc").innerHTML = "Enter a number btw 1 and 10 You have 3 chances to guess the right number" ;
            number = Math.floor(Math.random()*11).toString();
            chances = 3;
            document.getElementById("div").style.display="block";
        }else if(inputs[1].checked){
            document.querySelector(".desc").innerHTML = "Enter a number btw 1 and 100 You have 5 chances to guess the right number" ;
            number = Math.floor(Math.random()*101).toString();
            chances = 5;
            document.getElementById("div").style.display="block";
        }else if(inputs[2].checked){
            document.querySelector(".desc").innerHTML = "Enter a number btw 1 and 1000 You have 10 chances to guess the right number" ;
            number = Math.floor(Math.random()*1001).toString();
            chances = 10;
            document.getElementById("div").style.display="block";
        }
};
 
inputs.forEach((input,indice) => {
    inputs[indice].addEventListener("click",()=>{
        testValue(); 
        console.log(number , chances);    
        return number,chances;
    })
});
let i=1;
do{
    btn.addEventListener("click",()=>{   
        if(inputNumber.value == number){
            gameOver();
            h3.innerText = "Next Step"
            h5.innerText = "Go Next Level Or Die"
            audio[0].play();
        }else if(i < chances){
            if(inputNumber.value< number){
                h4.innerText = "saisissez un nombre plus grands";
            }else if(inputNumber.value> number){
                h4.innerText = "saisissez un nombre plus petit";
            }
            
        }else if( i == chances ) {
            gameOver();
            h3.innerText = "Game Over !!"
            h3.style.color = "red";
            h5.innerText = "You Die!!!"
            audio[1].play();
        }
    i++ 
    });
    console.log(i) 
}while(i<chances);

btn_1.addEventListener("click",()=>{
    restart();
});
















 







































































