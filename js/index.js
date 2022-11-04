$(document).ready(function () {
  let x = 0;

  $(".offers .content .options .details:last-child").addClass("purple-text");
  $(".offers .content .options .details:last-child").addClass("gradient");

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
                'images/slides/logo-image.png-2', 
                'images/slides/logo-image.png-3', 
                'images/slides/logo-image.png-4'
              ];

var click = 0;

function changeSlide() {
  console.log("slide have been changed");
}