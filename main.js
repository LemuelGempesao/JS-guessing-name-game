let guess=document.getElementById("guess");
let names=["Leroy", "Arvin", "Miko","Abegail"];

let begin=document.getElementById("submit");
let result=document.getElementById("result");



function performGuess(){
    
    let randm=names[Math.floor(Math.random()*names.length)];

    if (guess.value==randm){
        result.innerText=`Your guess is right (${randm}) You win`;


    }
    else if(guess.value==""){

        result.innerText="Please Enter a Name";
    }
    
    else{
        result.innerText=`The name is (${randm}) You lose`;
    }

    
}

begin.onclick = performGuess;

// Event listener for the Enter key
guess.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        performGuess();
    }
});

guess.onclick=()=>{

    result.innerText="";
    guess.value="";
    
}

console.log(window);
