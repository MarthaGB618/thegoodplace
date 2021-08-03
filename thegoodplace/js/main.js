
// document.addEventListener('mousemove', onMouseMove);
var button = document.getElementById('button'),
    joke = document.getElementById('joke');

$('button').hover(function() {
    $(this).text("Can't touch this!");
    $(this).css('position','absolute').css('bottom', Math.random()*500 + 'px').css('left', Math.random()*600 + 'px').css('right', Math.random()*600 + 'px');
});

//Change the background color of Button 2 on mouseenter
button.addEventListener("mouseenter",
  function() {
    joke.style.color = "white";
  }, false
);


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
