"use strict";

function Calculator() {
    document.getElementById("result").value = "Result: " + Math.floor(Math.random() * 1000);
}

// Huina
let count = false;
function Change() {
    if (count == false) {
        document.getElementById("new").style.display = "none";
        document.getElementById("old").style.display = "flex";
        count = true;
    }
    else {
        document.getElementById("old").style.display = "none";
        document.getElementById("new").style.display = "flex";
        count = false;
    }
}

setInterval(function() {
let currentDate = new Date();
let currentClock = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
document.getElementById("clock").innerHTML = currentClock;
}, 1000);

const test = {
name: "Kyrylo", 
prog: "JavaScript", 
time: 54,
fullInfo: function () {
    return `Subject name: ${this.name}, Programming language: ${this.prog}, How much learned in minutes: ${this.time}`;
}
};

function myFunction() {
document.getElementById("head").innerHTML = test.fullInfo();
document.getElementById("head").style.fontSize = "60px";
document.getElementById("para").innerHTML = "I began learn JS in " + date;
alert(5 + 6);
console.log(5 + 6);
}

function Bsod1() {
    var elements = document.body.getElementsByTagName("*");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
    }
    document.getElementById("bsod").style.display = "block";
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("result").value = "Result:";
    document.getElementById("resultold").value = "Result:";
});

function Bsod() {
    document.getElementById("resultold").style.color = "red";
    document.getElementById("resultold").value = "Result: Critical Error";
    setTimeout(Bsod1, 2500);
}
