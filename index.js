"use strict";

const btn = document.getElementById("btn");

btn.addEventListener("click", handleBtnClick);

function handleBtnClick(evet) {
  for (let i = 0; i < 1000; i++) {}
}

setTimeout(() => {
  console.log("ok");
}, 1500);

function sum() {
  return 2 + 2;
}

console.log(sum());
