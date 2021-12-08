
const gameContainer = document.getElementById("game");
const divGame = document.querySelector("div");
const fakeId = document.querySelectorAll("#fCards");
const tScore = document.querySelector("#score");
const theDiv = document.querySelector(".wonDiv");

const sImg = document.createElement("img");
sImg.src = "jay-laws-start-game-button-png-no-glitch.jpg"
sImg.id = "startImg";
gameContainer.appendChild(sImg);


sImg.addEventListener("click", function(e){

  gameContainer.removeChild(sImg);
});




const counter = document.querySelector(".timer");

function countdown(){
  setInterval(function(){
    if(timeLeft <= 0 ){
      clearInterval(timeLeft = 0);
    }
    counter.innerHTML = timeLeft;
    timeLeft--;
  }, 1000);
}


const COLORS = [
"red",
"blue",
"green",
"orange",
"purple",
"tRed",
"tBlue",
"tGreen",
"tOrange",
"tPurple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more


/*function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}*/







const cRed = document.querySelector(".red");
const redImg = document.createElement("img");
redImg.id = "redId";
redImg.classList.add("lakers");
redImg.src = "8b6faa54ca5c5657cb5319001de14265.jpg";
cRed.appendChild(redImg);

const cGreen = document.querySelector(".green");
const greenImg = document.createElement("img");
greenImg.id = "greenId";
greenImg.classList.add("portland");
greenImg.src = "9dedae079f891e4913ac85f5d181e15e.jpg";
cGreen.appendChild(greenImg);

const cPurple = document.querySelector(".purple");
const purpleImg = document.createElement("img");
purpleImg.id = "purpleId";
purpleImg.classList.add("okc");
purpleImg.src = "Oklahoma_City_Thunder2.jpg";
cPurple.appendChild(purpleImg);

const cBlue = document.querySelector(".blue");
const blueImg = document.createElement("img");
blueImg.id = "blueId";
blueImg.classList.add("gsw");
blueImg.src = "531bf3c54422daf61bfa0b9725ef0410.jpg";
cBlue.appendChild(blueImg);

const cOrange = document.querySelector(".orange");
const orangeImg = document.createElement("img");
orangeImg.id = "orangeId";
orangeImg.classList.add("suns");
orangeImg.src = "phoenix_suns_logo.jpg";
cOrange.appendChild(orangeImg);

const tRed = document.querySelector(".tRed");
const tRedImg = document.createElement("img");
tRedImg.id = "tRedId";
tRedImg.classList.add("lakers");
tRedImg.src = "8b6faa54ca5c5657cb5319001de14265.jpg";
tRed.appendChild(tRedImg);

const tGreen = document.querySelector(".tGreen");
const tGreenImg = document.createElement("img");
tGreenImg.id = "tGreenId";
tGreenImg.classList.add("portland");
tGreenImg.src = "9dedae079f891e4913ac85f5d181e15e.jpg";
tGreen.appendChild(tGreenImg);

const tPurple = document.querySelector(".tPurple");
const tPurpleImg = document.createElement("img");
tPurpleImg.id = "tPurpleId";
tPurpleImg.classList.add("okc");
tPurpleImg.src = "Oklahoma_City_Thunder2.jpg";
tPurple.appendChild(tPurpleImg);

const tBlue = document.querySelector(".tBlue");
const tBlueImg = document.createElement("img");
tBlueImg.id = "tBlueId";
tBlueImg.classList.add("gsw");
tBlueImg.src = "531bf3c54422daf61bfa0b9725ef0410.jpg";
tBlue.appendChild(tBlueImg);

const tOrange = document.querySelector(".tOrange");
const tOrangeImg = document.createElement("img");
tOrangeImg.id = "tOrangeId";
tOrangeImg.classList.add("suns");
tOrangeImg.src = "phoenix_suns_logo.jpg";
tOrange.appendChild(tOrangeImg);


/**/



const bBlueImg = document.createElement("img");
bBlueImg.id = "bBlueId";
bBlueImg.src = "New-NBA-Logo-1.jpg";
bBlueImg.classList.add("imgClass");
cBlue.appendChild(bBlueImg);


const bPurpleImg = document.createElement("img");
bPurpleImg.id = "bPurpleId";
bPurpleImg.src = "New-NBA-Logo-1.jpg";
bPurpleImg.classList.add("imgClass");
cPurple.appendChild(bPurpleImg);


const bRedImg = document.createElement("img");
bRedImg.id = "bRedId";
bRedImg.src = "New-NBA-Logo-1.jpg";
bRedImg.classList.add("imgClass");
cRed.appendChild(bRedImg);


const bGreenImg = document.createElement("img");
bGreenImg.id = "bGreenId";
bGreenImg.src = "New-NBA-Logo-1.jpg";
bGreenImg.classList.add("imgClass");
cGreen.appendChild(bGreenImg);


const bOrangeImg = document.createElement("img");
bOrangeImg.id = "bOrangeId";
bOrangeImg.src = "New-NBA-Logo-1.jpg";
bOrangeImg.classList.add("imgClass");
cOrange.appendChild(bOrangeImg);


const bbBlueImg = document.createElement("img");
bbBlueImg.id = "bbBlueId";
bbBlueImg.src = "New-NBA-Logo-1.jpg";
bbBlueImg.classList.add("imgClass");
tBlue.appendChild(bbBlueImg);


const bbPurpleImg = document.createElement("img");
bbPurpleImg.id = "bbPurpleId";
bbPurpleImg.src = "New-NBA-Logo-1.jpg";
bbPurpleImg.classList.add("imgClass");
tPurple.appendChild(bbPurpleImg);


const bbRedImg = document.createElement("img");
bbRedImg.id = "bbRedId";
bbRedImg.src = "New-NBA-Logo-1.jpg";
bbRedImg.classList.add("imgClass");
tRed.appendChild(bbRedImg);


const bbGreenImg = document.createElement("img");
bbGreenImg.id = "bbGreenId";
bbGreenImg.src = "New-NBA-Logo-1.jpg";
bbGreenImg.classList.add("imgClass");
tGreen.appendChild(bbGreenImg);


const bbOrangeImg = document.createElement("img");
bbOrangeImg.id = "bbOrangeId";
bbOrangeImg.src = "New-NBA-Logo-1.jpg";
bbOrangeImg.classList.add("imgClass");
tOrange.appendChild(bbOrangeImg);



const allCards = document.querySelectorAll("#cards");
const toFlip = document.querySelector(".imgClass")
const gameId = document.querySelector("#game");


let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard(){
 if(lockBoard) return;
 if (this === firstCard) return;
 this.classList.add("flip");

 if(!hasFlippedCard){
  hasFlippedCard = true;
  firstCard = this;
}else{
  hasFlippedCard = false;
  secondCard = this;

  checkForMatch();
}
}
var number = 0;
function checkForMatch(){

  if(firstCard.dataset.framework === secondCard.dataset.framework){
   number++
   setInterval(tScore.innerHTML = number, 100);
   disableCards();
 }else{
  unflipCards();
}
if(number == 5){
  var wonH = document.createElement("h2");
  wonH.innerText = "YOU WON!!";
  theDiv.appendChild(wonH);
}
}


function disableCards(){
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  resetBoard();
}

function unflipCards(){
  lockBoard = true;
  setTimeout(function(){
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    resetBoard();}, 500);
}

function resetBoard(){
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function cardShuffle(){
 allCards.forEach(allCards => {
  let randomPos = Math.floor(Math.random() * 11);
  allCards.style.order = randomPos;
});
})();

for(i = 0; i < allCards.length; i++){
  allCards[i].addEventListener("click", flipCard);
}

/*function won(number){
  if(number == 5){
console.log(`you won`);
  }
}*/

document.addEventListener('DOMContentLoaded', () => {
  const timeLeftDisplay = document.querySelector('#time-left');
  const startBtn = document.querySelector('#start-button');
  let timeLeft =20;

  function countDown(){
    setInterval(function(){
      if(timeLeft <= 0 || number == 5){
        clearInterval(timeLeft =0);
      }
      timeLeftDisplay.innerHTML = timeLeft;
      timeLeft-=1;

      if(timeLeft == 0 && number < 5){
        var loseH = document.createElement("h2");
        loseH.innerText = "YOU LOSE!!";
        theDiv.appendChild(loseH);
      }


    }, 1000)

    
  }


  sImg.addEventListener("click", function(e){
    countDown();
    gameContainer.removeChild(sImg);
  });
})





