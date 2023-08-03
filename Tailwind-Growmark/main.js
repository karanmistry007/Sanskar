// slider js
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}



//carousel cards
const wrapper = document.querySelector(".wrapper");
const carousel1 = document.querySelector(".carousel");
const firstCardWidth = carousel1.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel1.children];

let isDragging = false,
  isAutoPlay = true,
  startX,
  startScrollLeft,
  timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel1.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens
  .slice(-cardPerView)
  .reverse()
  .forEach((card) => {
    carousel1.insertAdjacentHTML("afterbegin", card.outerHTML);
  });

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach((card) => {
  carousel1.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel1.classList.add("no-transition");
carousel1.scrollLeft = carousel1.offsetWidth;
carousel1.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    carousel1.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
  });
});

const dragStart = (e) => {
  isDragging = true;
  carousel1.classList.add("dragging");
  // Records the initial cursor and scroll position of the carousel
  startX = e.pageX;
  startScrollLeft = carousel1.scrollLeft;
};

const dragging = (e) => {
  if (!isDragging) return; // if isDragging is false return from here
  // Updates the scroll position of the carousel based on the cursor movement
  carousel1.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const dragStop = () => {
  isDragging = false;
  carousel1.classList.remove("dragging");
};

const infiniteScroll = () => {
  // If the carousel is at the beginning, scroll to the end
  if (carousel1.scrollLeft === 0) {
    carousel1.classList.add("no-transition");
    carousel1.scrollLeft = carousel1.scrollWidth - 2 * carousel1.offsetWidth;
    carousel1.classList.remove("no-transition");
  }
  // If the carousel is at the end, scroll to the beginning
  else if (
    Math.ceil(carousel1.scrollLeft) ===
    carousel1.scrollWidth - carousel1.offsetWidth
  ) {
    carousel1.classList.add("no-transition");
    carousel1.scrollLeft = carousel1.offsetWidth;
    carousel1.classList.remove("no-transition");
  }

  // Clear existing timeout & start autoplay if mouse is not hovering over carousel
  clearTimeout(timeoutId);
  if (!wrapper.matches(":hover")) autoPlay();
};

const autoPlay = () => {
  if (window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
  // Autoplay the carousel after every 2500 ms
  timeoutId = setTimeout(() => (carousel1.scrollLeft += firstCardWidth), 2500);
};
autoPlay();

carousel1.addEventListener("mousedown", dragStart);
carousel1.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel1.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);


//dropdown menu
function dropshow() {
  document.getElementById("drop-item").style.display = "flex";
  document.getElementById("drop-item").style.animation = "from-bottom 0.5s";
}
function drophide() {
  document.getElementById("drop-item").style.animation="from-bottom-rev 0.5s";
  setTimeout(() => {
    document.getElementById("drop-item").style.display = "none";
  }, 500);
  
  // setTimeout(()=>{document.getElementById("drop-item").style.display="none";},1000);
  // setTimeout(document.getElementById("drop-item").style.display="none", 1000);

}

function dropclick() {
  var x = document.getElementById("drop-item");
  if (x.style.display === "none") {
    x.style.display = "flex";
    x.style.animation="from-bottom 0.5s";
  } else {
    x.style.animation="from-bottom-rev 0.5s";
    setTimeout(() => {
      x.style.display = "none";
    }, 5000);
  }
}

//navbar toogle
function navToggle() {
  var x = document.getElementById("nav-toggle");
  if (x.style.display === "none") {
    x.style.display = "flex";
    x.style.animationName = "nav-toggle-1";
  } else {
    x.style.animationName = "nav-toggle-2";
    setTimeout(() => {
      x.style.display = "none";
    }, 500);
    
  }
}



// grids animation
const observerGrid = new IntersectionObserver((entriesGrid) => {
  entriesGrid.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.style.transform = "translate3d(0, 0, 0)";
      entry.target.style.opacity = 1;
    }
    // else{
    //   entry.target.style.transform="translate3d(-50px, 0, 0)";
    //   entry.target.style.opacity = 0;
    // }
  })
})

const grids = document.querySelectorAll(".grid-item");
grids.forEach((el) => observerGrid.observe(el));

//services animation
const observerSer = new IntersectionObserver((entriesSer) => {
  entriesSer.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.style.transform = "translate3d(0, 0, 0)";
      entry.target.style.opacity = 1;
    }
    // else{
    //   entry.target.style.transform="translate3d(0, 100px, 0)";
    //   entry.target.style.opacity = 0;
    // }
  })
})
//services
const services = document.querySelectorAll(".ser-item");
services.forEach((el) => observerSer.observe(el));

const serHead = document.querySelectorAll(".ser-head");
serHead.forEach((el) => observerSer.observe(el));

//project
const projectHead = document.querySelectorAll(".project-head");
projectHead.forEach((el) => observerSer.observe(el));

const projectMain = document.querySelectorAll(".project-main");
projectMain.forEach((el) => observerSer.observe(el));

//about 
const aboutText = document.querySelectorAll(".about-text");
aboutText.forEach((el) => observerSer.observe(el));

//quote
const item1 = document.querySelectorAll(".q-item-1");
item1.forEach((el) => observerSer.observe(el));

const item2 = document.querySelectorAll(".q-item-2");
item2.forEach((el) => observerSer.observe(el));

//team
const teamHead = document.querySelectorAll(".team-head");
teamHead.forEach((el) => observerSer.observe(el));

const teamItem = document.querySelectorAll(".team-item");
teamItem.forEach((el) => observerSer.observe(el));

//testimonial
const testiHead = document.querySelectorAll(".testi-head");
testiHead.forEach((el) => observerSer.observe(el));

const testiMain = document.querySelectorAll(".testi-main");
testiMain.forEach((el) => observerSer.observe(el));

// footer
const footer = document.querySelectorAll(".footer");
footer.forEach((el) => observerSer.observe(el));





//navbar positioning
// windows on scroll runs functions
window.onscroll = function () {
  scrollFunction();
};

// for navbar color and size
function scrollFunction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {

    document.getElementById("header").style.position = "fixed";
    document.getElementById("header").style.top = "0px";
    document.getElementById("header").style.animationName = "nav-animation";
  } else {
    document.getElementById("header").style.position = "initial";
    document.getElementById("header").style.animationName = "fade-1";
  }
}

// for embeded video
function modelDisplay(){
  model=document.getElementById("model");
  if (model.style.display === "none"){
    model.style.display="flex";
    model.style.animationName="from-top-2";
  }else{
    model.style.animationName="from-bottom-2";
    setTimeout(() => {
      model.style.display="none";
    }, 500);
    
  }
}

//for team animations

// function team1(){
//   x=document.querySelector(".team-icons-1").querySelectorAll(".team-icon");
//   x.forEach(element => {
//       element.style.display="flex";    
//     } );
//   }
// function team1R(){
//   x=document.querySelector(".team-icons-1").querySelectorAll(".team-icon");
//   x.forEach(element => {
//     setTimeout(() => {
//       element.style.display="none";
//     }, 800);  
//     } );
//   }


// function team2(){
//   x=document.querySelector(".team-icons-2").querySelectorAll(".team-icon");
//   x.forEach(element => {
//       element.style.display="flex";    
//     } );
//   }
// function team2R(){
//   x=document.querySelector(".team-icons-2").querySelectorAll(".team-icon");
//   x.forEach(element => {
//     setTimeout(() => {
//       element.style.display="none";
//     }, 1000);  
//     } );
//   }

// function team3(){
//   x=document.querySelector(".team-icons-3").querySelectorAll(".team-icon");
//   x.forEach(element => {
//       element.style.display="flex";    
//     } );
//   }
// function team3R(){
//   x=document.querySelector(".team-icons-3").querySelectorAll(".team-icon");
//   x.forEach(element => {
//     setTimeout(() => {
//       element.style.display="none";
//     }, 1000);  
//     } );
//   }

// function team4(){
//   x=document.querySelector(".team-icons-4").querySelectorAll(".team-icon");
//   x.forEach(element => {
//       element.style.display="flex";    
//     } );
//   }
// function team4R(){
//   x=document.querySelector(".team-icons-4").querySelectorAll(".team-icon");
//   x.forEach(element => {
//     setTimeout(() => {
//       element.style.display="none";
//     }, 1000);  
//     } );
//   }



