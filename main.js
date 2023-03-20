let tday = document.querySelector(".day .t");
let thour = document.querySelector(".hours .t");
let tmiunte = document.querySelector(".Minutes .t");
let tseconde = document.querySelector(".Seconds .t");

// set time
let date = new Date("3/29/2023").getTime();

let counter = setInterval(() => {
  let datenow = new Date().getTime();
  let datedif = date - datenow;
  let days = Math.floor(datedif / (1000 * 60 * 60 * 24));
  let houers = Math.floor((datedif % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let Minutes = Math.floor((datedif % (1000 * 60 * 60)) / (1000 * 60));
  let Seconds = Math.floor((datedif % (1000 * 60)) / 1000);
  if (datedif === "0") {
    setTimeout(counter);
  }
  tseconde.innerHTML = `${
    String(Seconds).length === 1 ? "0" + Seconds : Seconds
  }`;
  tmiunte.innerHTML = Minutes;
  thour.innerHTML = houers;
  tday.innerHTML = `${String(days).length === 1 ? "0" + days : days}`;
}, 1000);
