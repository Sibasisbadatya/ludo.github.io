


function result() {
    var through1 = Math.floor(Math.random() * 6 + 1);
    var through2 = Math.floor(Math.random() * 6 + 1);
    document.querySelector(".dice1").setAttribute("src", `Alea_${through1}.png`);
    document.querySelector(".dice2").setAttribute("src", `Alea_${through2}.png`);
    if(through1>through2){
        document.querySelector(".finalscore").innerHTML="Player 1 won";
    }
    else if(through1<through2){
        document.querySelector(".finalscore").innerHTML="Player 2 won";
    }
    else{
        document.querySelector(".finalscore").innerHTML="Match draw";
    }
};

// console.log(dice);