document.addEventListener("DOMContentLoaded", function() {
  let links = document.getElementsByClassName("animated__link");

  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("animationend", function() {
      links[i].classList.remove("active");
    });

    links[i].addEventListener("mouseover", function() {
      links[i].classList.add("active");
    });
  }
});
