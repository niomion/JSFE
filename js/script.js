"use strict";

function Bsod() {
    var elements = document.body.getElementsByTagName("*");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
    }
    document.getElementById("bsod").style.display = "block";
}

function MyFunc() {
    document.getElementById("result").style.color = "red";
    document.getElementById("result").value = "Result: Critical Error";
    setTimeout(Bsod, 2500);
}

// Huina

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

