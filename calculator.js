//variables
const display = document.getElementById("container2");
const btn = document.querySelectorAll(".num")
const opera = document.querySelectorAll(".op")
var a = ""
var a2 = ""
var op = ""


console.log(btn)
console.log(opera)

for(var i = 0; i < 11; i++){
    btn[i].setAttribute("onclick", "aj(this)")
}


for(var i = 0; i<4; i++){
    opera[i].setAttribute("onclick", "aj(this)")
}

function aj(A){
    var oldText = display.innerHTML;
    display.innerHTML = oldText+A.innerHTML
}

function calc(){
    var oldText = display.innerHTML;
    display.innerHTML= eval(oldText);
}

function change(){
    var oldText = display.innerHTML;
    display.innerHTML = eval(oldText*-1)
}

function perc(){
    var oldText = display.innerHTML;
    display.innerHTML = eval(oldText*.01)
}

function c(){
    a = ""
    a2 = ""
    op =""
    display.innerHTML = ""
}
