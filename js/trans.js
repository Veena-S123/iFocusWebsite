 var slides = document.querySelectorAll(".swiper-slide");
    var initialDescription = slides[5].querySelector(".swiper-description");
    initialDescription.style.display = "block";
    var currentHoveredSlide = null; // Track the currently hovered slide
    var currentHoveredIndex = null; // Track the index of the currently hovered slide
    var backgroundURLs = [
    "img/Industries-images/Banking & Finance.jpg",
    "img/Industries-images/Ecommerce.jpg",
    "img/Industries-images/HEALTHCARE.jpg",
    "img/Industries-images/MANUFACTURING.jpg",
    "img/Industries-images/Media and entertainment.jpg",
    "img/Industries-images/Retail.jpg"
  ];
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3, // Display three slides at a time
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      loop: true, // Make the slides infinite
      on: {
        slideChangeTransitionStart: function () { 
          console.log([swiper.realIndex])
          var background = backgroundURLs[swiper.realIndex];
          document.querySelector(".swiper").style.background = `url('${background}') center/cover no-repeat`;
          console.log(background)
          // Hide all descriptions
          var descriptions = document.querySelectorAll(".swiper-description");
          descriptions.forEach(function (description) {
            description.style.display = "none";
          });
  
          if (currentHoveredSlide) {
            // If a slide is hovered, show its description
            var description = currentHoveredSlide.querySelector(".swiper-description");
            description.style.display = "block";
          } else {
            // If no slide is hovered, show the description for the left-most slide
            var leftMostSlide = swiper.slides[swiper.activeIndex - 1 < 0 ? slides.length - 1 : swiper.activeIndex - 1];
            var description = leftMostSlide.querySelector(".swiper-description");
            description.style.display = "block";
          }
        },
      },
    });
  
    slides.forEach(function (slide, index) {
      slide.addEventListener("mouseenter", function () {
        var nextIndex = (index ) % slides.length; // Calculate the index of the next slide
        var background = slides[nextIndex].getAttribute("data-background"); // Get the background of the next slide
        document.querySelector(".swiper").style.background = `url('${background}') center/cover no-repeat`;
        swiper.autoplay.stop(); // Stop autoplay on hover
  
        // Hide all descriptions
        var descriptions = document.querySelectorAll(".swiper-description");
        descriptions.forEach(function (description) {
          description.style.display = "none";
        });
  
        // Show the description for the hovered slide
        var description = slide.querySelector(".swiper-description");
        description.style.display = "block";
  
        // Track the currently hovered slide and index
        currentHoveredSlide = slide;
        currentHoveredIndex = index;
      });
  
      slide.addEventListener("mouseleave", function () {
        var background = backgroundURLs[swiper.realIndex];
        document.querySelector(".swiper").style.background = `url('${background}') center/cover no-repeat`;
        swiper.autoplay.start(); // Start autoplay on mouse leave
  
        // Show the description for the left-most slide
        var leftMostSlide = swiper.slides[swiper.activeIndex - 1 < 0 ? slides.length - 1 : swiper.activeIndex - 1];
        var description = leftMostSlide.querySelector(".swiper-description");
        description.style.display = "block";
  
        // Hide the description for the previously hovered slide
        if (currentHoveredSlide && currentHoveredSlide !== leftMostSlide) {
    var hoveredDescription = currentHoveredSlide.querySelector(".swiper-description");
    hoveredDescription.style.display = "none";
  }
  
        // Clear the currently hovered slide and index
        currentHoveredSlide = null;
        currentHoveredIndex = null;
      });
    });
  
    // Initially, show the description for the left-most slide
    document.addEventListener("DOMContentLoaded", function() {
      var leftMostSlide = swiper.slides[swiper.activeIndex - 1 < 0 ? slides.length - 1 : swiper.activeIndex - 1];
      var initialDescription = leftMostSlide.querySelector(".swiper-description");
      initialDescription.style.display = "block";
    });