var randomNum1 = Math.floor(Math.random()*6)+1;
var imgSrc = "/images/dice"+randomNum1+".png";
document.querySelectorAll("img")[0].setAttribute("src",imgSrc);

var randomNum2 = Math.floor(Math.random()*6)+1;
var imgSrc2 = "/images/dice"+randomNum2+".png";
document.querySelectorAll("img")[1].setAttribute("src",imgSrc2);

if(randomNum2>randomNum1){
    document.querySelector("h1").innerHTML = "Player 2 Won &#x1F389"
}
else if(randomNum1>randomNum2){
    document.querySelector("h1").innerHTML = "Player 1 Won &#x1F389"

}else{
    document.querySelector("h1").innerHTML = "Draw"
}