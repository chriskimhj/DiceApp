let randomNum1 = Math.floor(Math.random()*6)+1;   // 1-6
let randomDiceImg = "dice" + randomNum1 + ".png"  // dice1.png - dice6.png
let randomImgSrc = "images/" + randomDiceImg;     // images/dice1.png - images/dice6.png
let img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", randomImgSrc);

let randomNum2 = Math.floor(Math.random()*6)+1;   // 1-6
let randomDiceImg2 = "dice" + randomNum2 + ".png"  // dice1.png - dice6.png
let randomImgSrc2 = "images/" + randomDiceImg2;     // images/dice1.png - images/dice6.png
let img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src", randomImgSrc2);

if(randomNum1 > randomNum2) {
  document.querySelector("h1").innerHTML = "🏆 Player 1 Wins!"
}
else if(randomNum2 > randomNum1){
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🏆"
}
else{
  document.querySelector("h1").innerHTML = "Draw!"
}
