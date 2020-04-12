//creating our variables and selecting our tags

const pixelsTag = document.querySelector("div.pixels");
const bodyTag = document.querySelector("body");
const progressTag = document.querySelector("div.progress");
const sections = document.querySelectorAll("section");
const navTag = document.querySelector("div.nav");
const pageTag = document.querySelector("div.page");
const headerTag = document.querySelector("header");
const nextTag = document.querySelector("#next");
const previousTag = document.querySelector("#prev");
const randomTag = document.querySelector("#rand");
const outputTag = document.querySelector("h2.Text2");
const sectionTag = document.querySelector("section.s0");
let slideNum = 0;
const states = [
  {
    copy: "Cats Choose Us, We Don't Own Them. -Kristen Cast",
    backgroundColor: "#3e78ed",
    circle: "#3e783d",
  },
  {
    copy: "In Ancient Times Cats Were Worshipped Like Gods. -Terry Pratchett",
    backgroundColor: "#a1fffe",
    circle: "#e34a47",
  },
  {
    copy: "Way Down Deep, We Are All Motivated By the Same Urges. -Jim Davis",
    backgroundColor: "#d3c7f3",
    circle: "#f7fe00",
  },
  {
    copy: "Time spent with Cats is Never Wasted. -Sigmund Freud",
    backgroundColor: "#faffb8",
    circle: "#b472e6",
  },
];
const circleTag = document.querySelector(".circleH");
const navCatlinks = document.querySelectorAll(".catNav a");

//Add eventlistener to navCatlinks

navCatlinks.forEach((elem) => elem.addEventListener("click", navCatlinksClick));

//function to call smoothscroll

function navCatlinksClick(event) {
  smoothScroll(event);
}

//smoothscrolling function

function smoothScroll(event) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute("href");
  document.querySelector(targetId).scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

//when we scroll the page, update the pixels tag to show how far we've scrolled

document.addEventListener("scroll", function () {
  const pixels = window.pageYOffset;

  pixelsTag.innerHTML = Math.floor(pixels);
});

//when we scroll the page, make a progress bar that keeps track of the distance

document.addEventListener("scroll", function () {
  const pixels = window.pageYOffset;
  const pageHeight = bodyTag.getBoundingClientRect().height;
  const totalScrollableDistance = pageHeight - window.innerHeight;
  const percentage = pixels / totalScrollableDistance;
  progressTag.style.width = "15px";
  progressTag.style.height = `${100 * percentage}%`;
});

//when we scroll down the page, see how far down the page we've scrolled, then for each section check whether we have passed it and if we have update the text in the header

document.addEventListener("scroll", function () {
  const pixels = window.pageYOffset;
  sections.forEach((section) => {
    if (section.offsetTop - 100 <= pixels) {
      navTag.innerHTML = section.getAttribute("data-nav");
      pageTag.innerHTML = section.getAttribute("data-page");

      if (section.hasAttribute("data-is-dark")) {
        headerTag.classList.add("white");
        progressTag.classList.add("white");
      } else {
        headerTag.classList.remove("white");
        progressTag.classList.remove("white");
      }
    }
  });
});

//this function to increases the slide number

const next = function () {
  slideNum = slideNum + 1;

  if (slideNum > states.length - 1) {
    slideNum = 0;
  }

  updateSection();
};

//this function to decrease the slide number
const previous = function () {
  slideNum = slideNum - 1;

  if (slideNum < 0) {
    slideNum = states.length - 1;
  }
  updateSection();
};

//pick a random slide
const random = function () {
  slideNum = Math.floor(Math.random() * states.length);

  updateSection();
};

//This will update the sections content and style

const updateSection = function () {
  outputTag.innerHTML = states[slideNum].copy;
  circleTag.style.backgroundColor = states[slideNum].circle;
  sectionTag.style.backgroundColor = states[slideNum].backgroundColor;
};

//on click of nextTag, run this

nextTag.addEventListener("click", function () {
  next();
});

//on click of previousTag, run this
previousTag.addEventListener("click", function () {
  previous();
});

//on click of randomTag, run this

randomTag.addEventListener("click", function () {
  random();
});
