"use strict";

let myRequest = new Request("data/intro.json");

fetch(myRequest)
    .then(res =>  res.json())
    .then(obj => console.log(obj)) 
    .catch(err => console.error(err));