let minus = document.querySelector("#minus");
let plus = document.querySelector("#plus");
let number = document.querySelector("#number");
let num = 0;

function Minus(){
    num = num - 1;
    number.innerHTML = num; 
}

function Plus(){
    num = num + 1;
    number.innerHTML = num;
}

minus.onclick = Minus;
plus.onclick = Plus;