const screen = document.querySelector(".screen");
screen.innerHTML = ""

const addValue = (value) => (screen.innerHTML += value);

const calculate = () => (screen.innerHTML = new Function("return " + screen.innerHTML)());

const clearAll = () => (screen.innerHTML = "");

const backspace = () => (screen.innerHTML = screen.innerHTML.slice(0,-1))
