/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

//scroll to top button
var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//slider automatically function
var slideIndex = 0;
showSlides();
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex - 1].style.display = " block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 3000);
}

//slider manually function
var slide_index = 0;
slidesDisplay(slide_index);
function nextSlide(n) {
  slidesDisplay((slide_index += n));
}
function currentSlide(n) {
  slidesDisplay((slide_index = n));
}
function slidesDisplay(n) {
  var i;
  var slidesarr = document.getElementsByClassName("mySlides");
  var dotsarr = document.getElementsByClassName("dot");

  if (n > slidesarr.length) {
    slide_index = 1;
  }
  if (n < 1) {
    slide_index = slidesarr.length;
  }

  for (i = 0; i < slidesarr.length; i++) {
    slidesarr[i].style.display = "none";
  }
  for (i = 0; i < dotsarr.length; i++) {
    dotsarr[i].className = dotsarr[i].className.replace("active", "");
  }
  slidesarr[slide_index - 1].style.display = " block";
  dotsarr[slide_index - 1].className += " active";
}

//fade animation function
// when the element apears in the viewport
function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.remove("hidden");
      change.target.classList.add("visible");
      change.target.classList.add("animate__fadeInUp");
    }
  });
}

// list of options
let options = {
  threshold: [0.2],
};

// instantiate a new Intersection Observer
let observer = new IntersectionObserver(onEntry, options);

// list of paragraphs
let elements = document.querySelectorAll(".animate__animated");

// loop through all elements
// pass each element to observe method
for (let elm of elements) {
  observer.observe(elm);
}

//smooth scrolling function
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// menu tabcontent  hide and display

function menuContent(evt, menuName) {
  // Declare all variables
  var i, tabdiv, tablinks;

  tabdiv = document.getElementsByClassName("tabdiv");
  for (i = 0; i < tabdiv.length; i++) {
    tabdiv[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
  }

  document.getElementById(menuName).style.display = "block";
  evt.currentTarget.className += " active";
}
