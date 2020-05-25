let slides = document.querySelector(".slide");
let fade = document.querySelector("#fade-in");

slides.addEventListener("click", function(e){
  fade.classList.toggle("show");
  e.preventDefault();
  var linkUrl = slides.getAttribute('href');
  setTimeout(function(url) { window.location = url; }, 500, linkUrl);
});
