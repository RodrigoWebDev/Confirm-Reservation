let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let number = document.getElementById("number");
let value = 0;
number.innerHTML = value;

plus.onclick = function() {
    value += 1;
    number.innerHTML = value;
}

minus.onclick = function() {
    if (value > 0) {
        value -= 1;
        number.innerHTML = value;
    }
    else{
        value = 0;
    }
}

