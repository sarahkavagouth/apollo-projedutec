let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }
    const offset = -slideIndex * 100;
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(slideIndex + 1);
}

function prevSlide() {
    showSlide(slideIndex - 1);
}

showSlide(slideIndex);



document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('.header');
  
    function checkHeaderColor() {
      const scrollPosition = window.scrollY || window.pageYOffset;
  
      if (scrollPosition >= 100) {
        header.classList.add('black-bg');
      } else {
        header.classList.remove('black-bg');
      }
    }
  
    window.addEventListener('scroll', checkHeaderColor);
    checkHeaderColor(); 
  });
  
