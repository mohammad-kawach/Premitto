$(document).ready(function () {
  let x = 0;

  $(".offers .content .options .details:first-child").addClass("purple-text");
  $(".offers .content .options .details:first-child").addClass("gradient");

  $(".offers .content .options .details").hover(
    function () {
      x++;
      console.log(`${x}`);

      if (x == 0) {
        $(this).addClass("gradient");
        $(this).addClass("purple-text");
        // $(this).addClass("purple-text");
        $(".offers .content .options .details p").addClass("purple-text");
      } else if (x > 0) {
        $(".offers .content .options .details").removeClass("gradient");
        $(".offers .content .options .details").removeClass("purple-text");

        $(this).addClass("gradient");
        $(this).addClass("purple-text");
      }
    }
  );
});

// Slides
var firstImg    = document.getElementById('first-img');
var secondImg   = document.getElementById('second-img');
var thirdImg    = document.getElementById('third-img');
var fourthImg   = document.getElementById('fourth-img');

const slides = [
                'images/slides/logo-image.png', 
                'images/slides/logo-image-2.png', 
                'images/slides/logo-image-3.png', 
                'images/slides/logo-image-4.png'
              ];

// console.log(slides);

// counter for slides
let click = 0;

function changeSlide() {
  console.log("slide have been changed");
  // console.log(event.target);
  if (event.target.className.match(/\bleft\b/)) {
    if (click == 3) {
      click = 0;
    } else {
      click++;
    }
    console.log(`left : ${click}`);
  } else if (event.target.className.match(/\bright\b/)) {
    if (click == 0) {
      click = 3;
    } else {
      click--;
    }
    console.log(`right : ${click}`);
  }

  if (click == 0) {
    firstImg.src  = slides[0];
    secondImg.src = slides[1];
    thirdImg.src  = slides[2];
  } else if (click == 1) {
    firstImg.src  = slides[1];
    secondImg.src = slides[2];
    thirdImg.src  = slides[3];
  } else if (click == 2) {
    firstImg.src  = slides[2];
    secondImg.src = slides[3];
    thirdImg.src  = slides[0];
  } else if (click == 3) {
    firstImg.src  = slides[3];
    secondImg.src = slides[0];
    thirdImg.src  = slides[1];
  }
}