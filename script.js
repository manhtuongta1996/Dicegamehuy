// document.querySelector(".play").onclick = function(){
//     var randomNumber1 = Math.floor(Math.random() * 6 + 1);
//     var sourceRandomNumber1 = "images/dice" + randomNumber1 + ".png";
//     document.querySelector(".img1").setAttribute("src", sourceRandomNumber1);

//     var randomNumber2 = Math.floor(Math.random() * 6 + 1);
//     var sourceRandomNumber2 = "images/dice" + randomNumber2 + ".png";
//     document.querySelector(".img2").setAttribute("src", sourceRandomNumber2);

//     if (randomNumber1 > randomNumber2) {
//         document.querySelector("h1").innerHTML = "🥊 Player 1 wins";
//     } else if (randomNumber1 < randomNumber2) {
//         document.querySelector("h1").innerHTML = "Player 2 wins 🥊";
//     } else {
//         document.querySelector("h1").innerHTML = " 🤦 Drawwww!!!";
//     }
// }
function play(str){

    var randomNumber1 = Math.floor(Math.random() * 6 + 1);
    var sourceRandomNumber1 = "images/dice" + randomNumber1 + ".png";
    document.querySelector(".img1").setAttribute("src", sourceRandomNumber1);

    var randomNumber2 = Math.floor(Math.random() * 6 + 1);
    var sourceRandomNumber2 = "images/dice" + randomNumber2 + ".png";
    document.querySelector(".img2").setAttribute("src", sourceRandomNumber2);
    
    var randomNumber3 = Math.floor(Math.random() * 6 + 1);
    var sourceRandomNumber3 = "images/dice" + randomNumber3 + ".png";
    document.querySelector(".img3").setAttribute("src", sourceRandomNumber3);

    var total = randomNumber1 + randomNumber2 + randomNumber3;
    document.querySelector('#game-result').innerHTML = total;
    if(str === "xiu"){
        document.querySelector('#player-selection').innerHTML = "Xỉu"
        if(total <= 10){
            document.querySelector("h1").innerHTML = "Bạn đã thắng"
        } else {
            document.querySelector("h1").innerHTML = "Bạn đã thua"
        }
    } else{
        document.querySelector('#player-selection').innerHTML = "Tài"
        if(total > 10){
            document.querySelector("h1").innerHTML = "Bạn đã thắng"
        } else {
            document.querySelector("h1").innerHTML = "Bạn đã thua"
        }
    }
}