$(document).ready(function() {
  // slick caroussel
  $('.courses-category-slider').slick({
    centerMode: true,
    centerPadding: '50px',
    slidesToShow: 2,
    autoplaySpeed: 4000,
    dots: true,
    customPaging : function(slider, i) {
        return '<span class="slider-dot"></span>';
    },
    rtl:  true,
    // autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: false,
          slidesToShow: 1
        }
      }
    ]
  });
});