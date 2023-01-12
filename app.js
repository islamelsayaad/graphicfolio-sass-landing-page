const navBarItems = document.querySelectorAll(".navbar__list-items a");

navBarItems.forEach((item, _, arr) => {
  item.addEventListener("click", (e) => {
    arr.forEach((item) => item.classList.remove("navbar__item--active"));
    item.classList.add("navbar__item--active");
  });
});

const navBar = document.querySelector(".navbar");
const servicesSection = document.querySelector(".services__section");
const footerSection = document.querySelector(".footer");

window.addEventListener("scroll", () => {
  const servicesSectionRect = servicesSection.getBoundingClientRect();
  const footerSectionRect = footerSection.getBoundingClientRect();

  if (servicesSectionRect.top - 500 <= 0 || window.innerWidth < 970) {
    navBar.style.opacity = 1;
    navBar.style.visibility = "visible";
  } else {
    navBar.style.opacity = 0;
    navBar.style.visibility = "hidden";
  }
});

console.log(window.innerWidth);
