// windows on scroll runs functions
window.onscroll = function () {
  scrollFunction();
  activeColor();
};

// for navbar color and size
function scrollFunction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    console.log(document.body.scrollTop);
    console.log(document.documentElement.scrollTop);
    document.getElementById("header").style.backgroundColor = "#2b3044";
    document.getElementById("header").style.position = "fixed";
    document.getElementById("header").style.animationName = "nav-animation";
    document.querySelector(".logo").querySelector("img").style.maxHeight = "60px";
    // document.getElementById("logo").style.backgroundColor = "red"
  } else {
    document.getElementById("header").style.backgroundColor = "transparent";
    document.getElementById("header").style.position = "absolute";
    document.getElementById("header").style.animationName = "ease-in-out";
    document.querySelector(".logo").querySelector("img").style.maxHeight = "initial";
    // document.getElementById("logo").style.backgroundColor = "red"
  }
}

// for active area color
function activeColor() {
  var home = document.getElementById("home-btn");
  var services = document.getElementById("services-btn");
  var about = document.getElementById("about-btn");
  var testimonials = document.getElementById("testimonials-btn");
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    home.classList.remove("text-white");
    services.classList.add("text-white");
    about.classList.add("text-white");
    testimonials.classList.add("text-white");
  }
  if (
    document.body.scrollTop > 600 ||
    document.documentElement.scrollTop > 600
  ) {
    home.classList.add("text-white");
    services.classList.remove("text-white");
    about.classList.add("text-white");
    testimonials.classList.add("text-white");
  }
  if (
    document.body.scrollTop > 1900 ||
    document.documentElement.scrollTop > 1900
  ) {
    home.classList.add("text-white");
    services.classList.add("text-white");
    about.classList.remove("text-white");
    testimonials.classList.add("text-white");
  }
  if (
    document.body.scrollTop > 3400 ||
    document.documentElement.scrollTop > 3400
  ) {
    home.classList.add("text-white");
    services.classList.add("text-white");
    about.classList.add("text-white");
    testimonials.classList.remove("text-white");
  }
}

// for display tables
function table1() {
  document.getElementById("btn-1").classList.add("orange");
  document.getElementById("btn-2").classList.remove("orange");
  document.getElementById("btn-3").classList.remove("orange");

  document.getElementById("table1").style.display = "inline-table";
  document.getElementById("table2").style.display = "none";
  document.getElementById("table3").style.display = "none";
}
function table2() {
  document.getElementById("btn-1").classList.remove("orange");
  document.getElementById("btn-2").classList.add("orange");
  document.getElementById("btn-3").classList.remove("orange");

  document.getElementById("table1").style.display = "none";
  document.getElementById("table2").style.display = "inline-table";
  document.getElementById("table3").style.display = "none";
}
function table3() {
  document.getElementById("btn-1").classList.remove("orange");
  document.getElementById("btn-2").classList.remove("orange");
  document.getElementById("btn-3").classList.add("orange");

  document.getElementById("table1").style.display = "none";
  document.getElementById("table2").style.display = "none";
  document.getElementById("table3").style.display = "inline-table";
}

// for burger color
const burger = document.getElementById("burger-cont");
const btn1 = document.getElementById("line-1");
const btn2 = document.getElementById("line-2");
const btn3 = document.getElementById("line-3");

let index = 0;

const colors = ["#ff511a", "white"];
// const l1 =["l1-a1","l1-a2"];
// const l2 =["l2-a1","l2-a2"];
// const l3 =["l3-a1","l3-a2"];

//btn1
const a1 = ["225deg", "360deg"];
const p = ["absolute", "initial"];
const top1 = ["8%", "initial"];
//btn2
const tra1 = ["250%", "0%"];
const op = ["0", "1"];
//btn3
const a2 = ["135deg", "360deg"];

burger.addEventListener("click", function onClick() {
  btn1.style.backgroundColor = colors[index];
  btn1.style.rotate = a1[index];
  btn1.style.position = p[index];

  btn1.style.top = top1[index];

  btn2.style.backgroundColor = colors[index];
  btn2.style.translate = tra1[index];
  btn2.style.opacity = op[index];

  btn3.style.backgroundColor = colors[index];

  btn3.style.rotate = a2[index];
  btn3.style.position = p[index];

  btn3.style.top = top1[index];

  index = index >= colors.length - 1 ? 0 : index + 1;
});
