"use strict";

let currentValueArr = [];

function funcTest() {
    let elementsstring = currentValueArr.join('');
    let elements = elementsstring.split(/(\D+)/).filter(Boolean);
    converttoNum(elements);
    let result = 0;
    let operator = '+';
    for (let i = 0; i < elements.length; i++) {
        if (elements[i] === '*') {
            let prev = parseFloat(elements[i - 1]);
            let next = parseFloat(elements[i + 1]);
            elements.splice(i - 1, 3, prev * next);
            i--; 
        } else if (elements[i] === '/') {
            let prev = parseFloat(elements[i - 1]);
            let next = parseFloat(elements[i + 1]);
            elements.splice(i - 1, 3, prev / next);
            i--;
        }
    }

    result = parseFloat(elements[0]);
    for (let i = 1; i < elements.length; i += 2) {
        let operator = elements[i];
        let operand = parseFloat(elements[i + 1]);
        if (operator === '+') {
            result += operand;
        } else if (operator === '-') {
            result -= operand;
        }
    }

    document.getElementById("calculate").value = result;
}

function onClick1(x) {
    currentValueArr.push(x);
    document.getElementById("calculate").value = currentValueArr.join('');
}

function converttoNum(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (['+', '-', '*', '/'].includes(arr[i])) {
            continue;
        } else {
            arr[i] = Number(arr[i]);
        }
    }
}

function ClearLast() {
    currentValueArr.pop();
    let array2 = currentValueArr.join('');
    document.getElementById("calculate").value = array2;
}

function ClearAll() {
    currentValueArr.splice(0, currentValueArr.length);
    document.getElementById("calculate").value = currentValueArr.join('');
}

function Calculator() {
    document.getElementById("result").value = "Result: " + Math.floor(Math.random() * 1000);
}

// Huina
let count = 0;
function Change() {
    if (count == 0) {
        document.getElementById("v3").style.display = "none";
        document.getElementById("v2").style.display = "flex";
        document.getElementById("v1").style.display = "none";
        count = 1;
        document.body.style.animation = "none";
        document.body.style.background = "aliceblue";
    }
    else if (count == 1) {
        document.getElementById("v3").style.display = "none";
        document.getElementById("v2").style.display = "none";
        document.getElementById("v1").style.display = "flex";
        count = 2;
        document.body.style.animation = "none";
        document.body.style.background = "aliceblue";
    }
    else {
        document.getElementById("v3").style.display = "flex";
        document.getElementById("v2").style.display = "none";
        document.getElementById("v1").style.display = "none";
        count = 0;
        document.body.style.animation = "";
        document.body.style.background = "";
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
    document.getElementById("resultv3").value = "Result:";
    document.getElementById("calculate").value = currentValueArr.join('');
});

function Bsod() {
    document.getElementById("resultold").style.color = "red";
    document.getElementById("resultold").value = "Result: Critical Error";
    setTimeout(Bsod1, 2500);
}

/* let currentValue = 0;
let currentValueArr = [];
let currentValueDecoy = [];
function onClick1(x) {
    let lastElement = currentValueArr[currentValueArr.length - 1];
    if (typeof x === 'number') {
    currentValue = (currentValue * 10) + x;
    } else {
        currentValueArr.push(currentValue);
        currentValue = 0;
    } 
    
   if ((x === "+" || x === "-" || x === "*" || x === "/") && (lastElement === "+" || lastElement === "-" || lastElement === "*" || lastElement === "/")) {
        currentValueArr[currentValueArr.length - 1] = x;
   } else if ((x === "+" || x === "-" || x === "*" || x === "/") && (currentValueArr.length === 0)) {
    
   } else {
        currentValueArr.push(x);
   }

    currentValueDecoy = currentValueArr;
    let array2 = currentValueDecoy.join('');
    document.getElementById("calculate").value = array2 + "|" + x + "|" + currentValue;
}

function calculateRes() {
    let result = 0;
    let operator = '+';

    for (let i = 0; i < currentValueArr.length; i++) {
        if (typeof currentValueArr[i] === 'number') {
            if (operator === '+') {
                result += currentValueArr[i];
            } else if (operator === '-') {
                result -= currentValueArr[i];
            } else if (operator === '*') {
                result *= currentValueArr[i];
            }
            else if (operator === '/') {
                result /= currentValueArr[i];
            }
        } else if (typeof currentValueArr[i] === 'string' && (currentValueArr[i] === '+' || currentValueArr[i] === '-' || currentValueArr[i] === '*' || currentValueArr[i] === '/')) {
            operator = currentValueArr[i];
        }
    }
    document.getElementById("calculate").value = result;
    currentValueDecoy.splice(0, currentValueArr.length);
    currentValueArr.splice(0, currentValueArr.length);
}

function converttoNum(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (['+', '-', '*', '/'].includes(arr[i])) {
            continue;
        } else {
            arr[i] = Number(arr[i]);
        }
    }
}

function ClearLast() {
    currentValue = 0;
    currentValueDecoy.pop();
    currentValueArr.pop();
    let array2 = currentValueDecoy.join('');
    document.getElementById("calculate").value = array2 + "|"
}

function ClearAll() {
    currentValue = 0;
    currentValueDecoy.splice(0, currentValueDecoy.length);
    currentValueArr.splice(0, currentValueArr.length);
    document.getElementById("calculate").value = currentValueDecoy.join('');
} */