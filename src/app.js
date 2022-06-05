/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  document.querySelector("#dom").innerHTML = name;
};

let adj = [
  "awesome",
  "great",
  "big",
  "smart",
  "natural",
  "wild",
  "Fun",
  "beautiful",
  "intrepid",
  "bright",
  "dark",
  "loving",
  "chic"
];
let noun = [
  "horse",
  "name",
  "board",
  "facts",
  "true",
  "advice",
  "design",
  "girl",
  "boy",
  "disaster",
  "solutions",
  "management"
];
let extns = [".com", ".us", ".net", ".io", ".org", ".gov"];
let name = "";
for (let k = 0; k < extns.length; k++) {
  for (let i = 0; i < adj.length; i++) {
    for (let j = 0; j < noun.length; j++) {
      name += adj[i] + noun[j] + extns[k] + "<br>";
    }
  }
}
