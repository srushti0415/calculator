function onclickbtn(a) {
    let b = document.getElementById("value");
    b.innerHTML=b.innerHTML+a;
}
function cancle() {
    let b = document.getElementById("value");
    b.innerHTML=null;
}

function back() {
    let b = document.getElementById("value");
    b.innerHTML= b.innerHTML.slice(0, -1);
}

function calculate() {
    let b = document.getElementById("value");
    b.innerHTML=eval(b.innerHTML);
}