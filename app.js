let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;
let highest = 0;
let max = 0;

let btns = ["yellow", "pink", "green", "purple"];

let h2 = document.querySelector("h2");


function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 200);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 200);
}


//Game start
function levelUp() {
    userSeq = [];
    level++;
    highest++;

    h2.innerText = `Level ${level}`;

    let randId = Math.floor(Math.random() * 4);
    let randColor = btns[randId];
    let randbtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);

    btnFlash(randbtn);
}

document.addEventListener("keypress", function () {
    if (started == false) {
        //console.log("Game Started");
        started = true;

        levelUp();
    }
});

function checkAns(idx) {
    //  console.log("curr level", level);
    if (userSeq[idx] == gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 200);
        }
    }
    else {
        maxC();
        h2.innerHTML = `Game Over ! <br> <b>Your Score is : ${level}</b> <br>Highest Score ${max} <br> Press Any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "#7fffd4";
        }, 150)
        reset();
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}
let allbtn = document.querySelectorAll(".btn");
for (btn of allbtn) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
    highest = 0;
}
function maxC() {
    if (max < highest) {
        max = highest;
    }
}