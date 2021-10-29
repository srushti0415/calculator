function myfunction(number) {
    let a = document.getElementById("ans");
    a.innerHTML=a.innerHTML+number;
}

function calculate() {
    let a = document.getElementById("ans");
    a.innerHTML = eval(a.innerHTML);
}

function cancel() {
    let a = document.getElementById("ans");
    a.innerHTML=null;
}
function back() {
    let a = document.getElementById("ans");
    a.innerHTML = a.innerHTML.slice (0,-1);
}