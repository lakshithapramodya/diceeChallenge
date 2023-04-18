var randomNum1 = Math.floor(Math.random() * 6) + 1;
var randomNum2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 = "dice" + randomNum1 + ".png";
var randomDiceImage2 = "dice" + randomNum2 + ".png";

var randomImageSource1 = "images/" + randomDiceImage1;
var randomImageSource2 = "images/" + randomDiceImage2;

var image1 = document.querySelectorAll("img")[0];

var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomImageSource1);
image2.setAttribute("src", randomImageSource2);

if (randomNum1 > randomNum2) {
  document.querySelector("h1").innerHTML = "🚩Player1 Wins";
}
else if (randomNum1 < randomNum2) {
  document.querySelector("h1").innerHTML = "Player2 Wins🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw";
}
