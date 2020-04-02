const animatedTags = document.querySelectorAll('div.content');


//fade out on load

animatedTags.forEach(tag => {
  tag.style.opacity = 0;
})

const fadeIn = function () {
  //look at the tag and make a determination with the getBoundingClientRec if it's in the window

  let delay = 0.25;

  animatedTags.forEach(tag => {
    const tagTop = tag.getBoundingClientRect().top;
    const tagBottom = tag.getBoundingClientRect().bottom;

    if (tagTop < window.innerHeight && tagBottom > 0) {
      tag.style.animation = `fadein 1s ${delay}s both`;
      delay += 0.25;
    } else {
      tag.style.opacity = 0;
      tag.style.animation = "";
    }
  })

}

//on load, run fade in

fadeIn();

//on scroll, run fade in

document.addEventListener('scroll', function () {
  fadeIn();
})

//on browser resize, run fade in
window.addEventListener('resize', function () {
  fadeIn();
})