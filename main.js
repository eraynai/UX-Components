//creating our variables and selecting our tags

const pixelsTag = document.querySelector('div.pixels');
const bodyTag = document.querySelector('body');
const progressTag = document.querySelector('div.progress');
const sections = document.querySelectorAll('section');
const navTag = document.querySelector('div.nav');
const pageTag = document.querySelector('div.page');
const headerTag = document.querySelector('header');
const nextTag = document.getElementById('next');
const previousTag = document.getElementById('prev');
const outputTag = document.querySelector('h2.Text2');
let slideNum = 0;
const states = [{
    copy: 'beautiful',
    backgroundColor: '#3e78ed',
    circle: '#3e783d'
  },
  {
    copy: 'Meow'
  },
  {
    copy: 'Furry'
  },
  {
    copy: 'Fluffy'
  }
];

//when we scroll the page, update the pixels tag to show how far we've scrolled

document.addEventListener('scroll', function () {
  const pixels = window.pageYOffset;

  pixelsTag.innerHTML = pixels;

})

//when we scroll the page, make a progress bar that keeps track of the distance

document.addEventListener('scroll', function () {
  const pixels = window.pageYOffset;
  const pageHeight = bodyTag.getBoundingClientRect().height;
  const totalScrollableDistance = pageHeight - window.innerHeight;
  const percentage = pixels / totalScrollableDistance;
  progressTag.style.width = '15px';
  progressTag.style.height = `${100 * percentage}%`;
})

//when we scroll down the page, see how far down the page we've scrolled, then for each section check whether we have passed it and if we have update the text in the header

document.addEventListener('scroll', function () {
  const pixels = window.pageYOffset;
  sections.forEach(section => {
    if (section.offsetTop - 100 <= pixels) {
      navTag.innerHTML = section.getAttribute('data-nav');
      pageTag.innerHTML = section.getAttribute('data-page');

      if (section.hasAttribute('data-is-dark')) {
        headerTag.classList.add('white');
        progressTag.classList.add('white');
      } else {
        headerTag.classList.remove('white');
        progressTag.classList.remove('white');
      }
    }
  })
})

//this function to increases the slide number

const next = function () {
  slideNum = slideNum + 1;

  if (slideNum > states.length - 1) {
    slideNum = 0;
  }

  updateSection();
}

//this function to decrease the slide number
const previous = function () {
  slideNum = slideNum - 1;
  console.log(slideNum);

  if (slideNum < 0) {
    slideNum = states.length - 1;
  }
  updateSection();
}

//This will update the sections content and style

const updateSection = function () {
  outputTag.innerHTML = states[slideNum].copy;
}

//on click of nextTag, run this 

nextTag.addEventListener("click", function () {
  next();

})

//on click of previousTag, run this
previousTag.addEventListener("click", function () {
  previous();
})