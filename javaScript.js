var randomNumber1=Math.floor(Math.random()*6)+1;
var location1="images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",location1);


var randomNumber2=Math.floor(Math.random()*6)+1;
var location2="images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",location2);



if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent="Player1 win the match";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").textContent="Player2 win the match";
}
else{
    document.querySelector("h1").textContent="Match Draws";
}

