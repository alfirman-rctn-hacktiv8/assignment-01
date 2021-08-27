const screen = document.querySelector(".screen");
screen.innerHTML = "";
let hasComma = false

const addValue = (value, validate) => {
  if (validate(value)) screen.innerHTML += value;
};

const calculate = () => {
  if (screen.innerHTML) screen.innerHTML = new Function("return " + screen.innerHTML)();
};

const clearAll = () => (screen.innerHTML = "");

const backspace = () => (screen.innerHTML = screen.innerHTML.slice(0, -1));

const validate = (value) => {
  const length = screen.innerHTML.length;

  operators = ["+","-","*","/"]

  const parseValue = parseInt(value);
  const lastScreenValue = parseInt(screen.innerHTML[length - 1]);

  const isNumber = !isNaN(parseValue);
  const isPrevNaN = !isNumber === isNaN(lastScreenValue);

  // screen sedang kosong value pertama harus angka
  // screen tidak kosong operator tidak boleh diinput 2x
  // koma tidak boleh 2x sebelum operator

  if ( isNumber || (screen.innerHTML && value === "." && !hasComma && !isPrevNaN) || (screen.innerHTML && !isPrevNaN && value !== '.' )){
    if(value==="." && !hasComma) hasComma = true
    if(operators.some((operator=>operator===value)) ) hasComma = false
    return true;
  }
  return false;
};
