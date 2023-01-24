const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const navHeader = document.querySelector(".nav-header");

navHeader.addEventListener("click", () => {});

navToggle.addEventListener("click", () => {
  //   links.style.display = "block";
  links.classList.toggle("show-links");
});
