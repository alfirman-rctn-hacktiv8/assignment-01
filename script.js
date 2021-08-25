const screen = document.querySelector(".screen");
screen.innerHTML = "";

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

  const parseValue = parseInt(value);
  const lastScreenValue = parseInt(screen.innerHTML[length - 1]);

  const isNumber = !isNaN(parseValue);
  const isTwiceOperator = !isNumber === isNaN(lastScreenValue);

  // screen sedang kosong value pertama harus angka
  // screen tidak kosong operator tidak boleh diinput 2x
  if ( isNumber || (screen.innerHTML && !isTwiceOperator))
    return true;

  return false;
};
