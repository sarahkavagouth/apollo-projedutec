document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".header");
  
    function checkHeaderColor() {
      const scrollPosition = window.scrollY || window.pageYOffset;
  
      if (scrollPosition >= 100) {
        header.classList.add("black-bg");
      } else {
        header.classList.remove("black-bg");
      }
    }
  
    window.addEventListener("scroll", checkHeaderColor);
    checkHeaderColor();
  });
  