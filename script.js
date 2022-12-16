$(document).ready(function() {
  // courses caroussel
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
    autoplay: true,
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


  // reviews caroussel
  $('.student-reviews-slider').slick({
    centerMode: true,
    centerPadding: '50px',
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    rtl:  true,
    dots: false,
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
  })
});




// on scroll make nave bar fixed
var my_nav = document.querySelector('.desknavbar')
window.addEventListener('scroll', () => {
  if (document.body.scrollTop >= 400 || document.documentElement.scrollTop >= 400) {
    my_nav.classList.add('scrolled')
  } else {
    my_nav.classList.remove('scrolled')
  }
})

// footer copywrite
let actualYear = new Date().getFullYear();
let siteName = window.location.origin;

document.querySelector('.copywrite-footer-actual-year').textContent = actualYear;
document.querySelector('.copywrite-footer-sitename').textContent = siteName;

// home page video popup
const videoPopup = document.querySelector('.video-popup-container')
const videoContainer = document.querySelector('#elmas-video')
const playButton = document.querySelector('.video-section-play-icon');


playButton.addEventListener('click', () => {
  videoPopup.classList.add('show')
})

videoPopup.addEventListener('mouseup', (e) => {
  if(e.target == videoPopup){
    videoPopup.classList.remove('show')
  }
})