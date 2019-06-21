const humburger = document.querySelector(".humburger");
const navLinks = document.querySelector("#nav-Menu");
const links = document.querySelectorAll("#nav-Menu li");

humburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(links => {
    links.classList.toggle("fade");
  });
});
