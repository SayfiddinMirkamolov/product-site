//dark light
let modeBtn = document.getElementById("light-dark");

modeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

window.addEventListener("scroll", function () {
  toggleBacktop();
});

window.addEventListener("scroll", function () {
  toggleBacktop();
});
// baktop
let backtop = document.getElementById("backtop");

function toggleBacktop() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backtop.classList.add("backtop-show");
  } else {
    backtop.classList.remove("backtop-show");
  }
}

// navbar shrink

window.addEventListener("scroll", function () {
  shrink();
});

let navbar = document.querySelector('header');

function shrink() {
  if (scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
		navbar.classList.remove("navbar-shrink");
	}
}

