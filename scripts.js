let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initialize the game

// use the value stored in the nextPlayer variable to indicate who the next player is
document.getElementById("next-lbl").innerText=nextPlayer

//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{for(let i=0;i<9;i++){
    let id= `c${i+1}`;
    let newBtn=document.createElement('button')
    document.getElementById(id).appendChild(newBtn);
    newBtn.innerText="O";
    newBtn.style.width="100%"
    newBtn.style.height="100%"
  }
  
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
   
}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
function btnArr(){
let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{  if(btns[i].id!="close-modal"&&btns[i].id!="play-again"&&btns[i].id!="reset"){
    btns[i].addEventListener('click', (event) => { takeCell(event)});}
}
}
btnArr()

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    
  event.target.innerText=nextPlayer;
        event.target.disabled="true";
        if(nextPlayer==='X'){
         nextPlayer="O";
         
         } else {nextPlayer="X";
        }
        document.getElementById("next-lbl").innerText=nextPlayer;

    
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */

    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )

    // Check if the game is over
    if (isGameOver(isGameOver(isGameOver())))
    {document.getElementById('game-over-lbl').innerText="Game Over";
    document.getElementById("overlay").style.display = "block";
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}
document.getElementById("close-modal").addEventListener("click", function() {
    document.getElementById("overlay").style.display = "none";
})

function newGame() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("gameboard").innerHTML=`<tr>
            <td id='c1'></td>
            <td id='c2'></td>
            <td id='c3'></td>
        </tr>
        <tr>
            <td id='c4'></td>
            <td id='c5'></td>
            <td id='c6'></td>
        </tr>
        <tr>
            <td id='c7'></td>
            <td id='c8'></td>
            <td id='c9'></td>
        </tr>`

createGameBoard();
btnArr();
document.getElementById('game-over-lbl').innerText="";
}

document.getElementById("play-again").addEventListener("click", newGame)
document.getElementById("reset").addEventListener("click", newGame)

function isGameOver()
{
  let arr=[];
  for(let i=0;i<9;i++){
    let id= `c${i+1}`;
    arr.push(document.getElementById(id).firstChild)
}
    let condition=true;
    for(e of arr){
        if(!e.disabled){
            condition=false;
        }
    }
    // This function returns true if all the buttons are disabled and false otherwise 
   return condition;
}

