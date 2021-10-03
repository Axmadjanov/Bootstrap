// Tepa Search qismi
const searchlar = document.querySelector(".searchlar");
const some = document.querySelector(".some");
const some2 = document.querySelector(".some2");
const backpart = document.querySelector(".backpart");
searchlar.addEventListener("click", function () {
  some2.classList.remove("hidden");
  some.classList.add("hidden");
});
// Kirish
const bar = document.querySelector(".bar");
const chekka = document.querySelector(".chekka");
bar.addEventListener("click", () => {
  chekka.classList.remove("hidden");
});

const person = document.querySelectorAll(".people");
const left = document.querySelector(".left");
person.forEach((people) => {
  people.addEventListener("click", function () {
    asosiy.classList.remove("hidden");
    left.classList.add("hidden");
    bar.classList.add("hidden");
    some.classList.add("hidden");
  });
});

const backpart2 = document.querySelector(".backpart2");
backpart2.addEventListener("click", () => {
  asosiy.classList.add("hidden");
  left.classList.remove("hidden");
  some.classList.remove("hidden");
  bar.classList.remove("hidden");
});

backpart.addEventListener("click", () => {
  some2.classList.add("hidden");
  some.classList.remove("hidden");
});
// Yozish qismi

const btn2 = document.getElementById("btn2");
const main = document.querySelector(".main");
const chating = document.querySelector(".chating");
const asosiy = document.querySelector(".asosiy");

btn2.addEventListener("click", () => {
  main.classList.remove("hidden");
});

const typewriter = document.getElementById("typewriter");
const plane2 = document.querySelector(".plane2");
const paga = document.querySelector(".paga");

const mikrofon = document.querySelector(".mikrofon");

// Emijilar chiqishi
const emoji = document.querySelector(".emoji");
const emojilar = document.querySelector(".emojilar");
emoji.addEventListener("click", function () {
  emojilar.classList.remove("hidden");
});
plane2.addEventListener("click", () => {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const time = hour + ":" + minute;
  // time.classList.add("time");

  const msg = document.createElement("div");
  msg.classList.add("xabar");
  msg.textContent = typewriter.value + "   " + time;
  typewriter.value = "";
  chating.append(msg);
});

typewriter.addEventListener("keypress", function () {
  emojilar.classList.add("hidden");
  mikrofon.classList.add("hidden");
  plane2.classList.remove("hidden");
  paga.classList.add("hidden");
});

// Yozish qismi

typewriter.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const time = hour + ":" + minute;
    // const vaqt = document.createElement("div");
    // vaqt.innerText = time;
    const msg = document.createElement("div");
    msg.classList.add("xabar");
    msg.textContent = typewriter.value + time;
    typewriter.value = "";
    chating.append(msg);
  }
});

// const masters = document.getElementById("masters");
// const main2 = document.querySelector(".main2");

// masters.addEventListener("click", function () {
//   main2.classList.remove("hidden");
// });

// const button = document.getElementById("button");
// const ikkinchi = document.querySelector(".ikkinchi");

// button.addEventListener("click", () => {
//   ikkinchi.classList.remove("hidden");
// });
