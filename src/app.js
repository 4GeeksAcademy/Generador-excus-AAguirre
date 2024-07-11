/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#bot").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuses();
  });
  console.log("Hello");
};
let generateExcuses = () => {
  let who = ["She", "He", "The dog", "Barbie"];
  let action = ["run", "sleep", "eat", "cry", "swin"];
  let what = ["the book", "the pizza", "career"];
  let when = [
    "before the class",
    "when I was wake up",
    "while I was exercising",
    "during my breakfast",
    "while I was praying"
  ];

  let whoIndx = Math.floor(Math.random() * who.length);
  let actionIndx = Math.floor(Math.random() * action.length);
  let whatIndx = Math.floor(Math.random() * what.length);
  let whenIndx = Math.floor(Math.random() * when.length);

  return (
    who[whoIndx] +
    " " +
    action[actionIndx] +
    " " +
    what[whatIndx] +
    " " +
    when[whenIndx]
  );
};
