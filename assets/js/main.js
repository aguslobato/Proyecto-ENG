var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      "@0.75": {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      "@1.00": {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      "@1.50": {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });



  function toggleDropdown(e) {
    e.preventDefault();
    const menu = e.target.closest('.dropdown').querySelector('.dropdown-menu');
    menu.classList.toggle('show');
  }

  // Cierra si se hace clic fuera
  document.addEventListener('click', function (e) {
    const dropdowns = document.querySelectorAll('.dropdown-menu');
    dropdowns.forEach(menu => {
      if (!menu.contains(e.target) && !menu.previousElementSibling.contains(e.target)) {
        menu.classList.remove('show');
      }
    });
  });



  function toggleAccordion() {
    const content = document.getElementById("accordionContent");
    content.classList.toggle("show");
  }