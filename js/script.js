// init AOS
AOS.init();

$(document).ready(function() {
    // courses caroussel
    $('.courses-category-slider').slick({
        slidesToShow: 2,
        autoplaySpeed: 4000,
        dots: true,
        arrows: true,
        prevArrow: ".prev-button",
        nextArrow: ".next-button",
        customPaging: function(slider, i) {
            return '<span class="slider-dot"></span>';
        },
        rtl: true,
        autoplay: true,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
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
        // autoplay: true,
        autoplaySpeed: 4000,
        rtl: true,
        dots: false,
        arrows: true,
        prevArrow: ".prev-button-review",
        nextArrow: ".next-button-review",
        responsive: [{
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

    // active link
    $('.desknav-items a').each(function(index) {
        var currentLink = $(this).attr('href');
        var path = window.location.pathname;
        if (path.includes(currentLink)) {
            $(this).addClass('active-link')
        }
    })

    // newsletter
    $('.newsletter-form').submit(function(e) {
        e.preventDefault();
        var email = $('#newsletter-email');

        $.ajax({
            url: 'news-letter.php',
            method: 'POST',
            data: {
                email: email.val(),
            },
            success: function(data) {
                alert('شكرا على اهتمامكم')
                $('.newsletter-form')[0].reset();
                console.log(data)
            }
        })
    });




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
const elmasVideo = document.querySelector('#elmas-video')
const playButton = document.querySelector('.video-section-play-icon');

playButton.addEventListener('click', () => {
    videoPopup.classList.add('show')
    elmasVideo.play();
})

videoPopup.addEventListener('mouseup', (e) => {
    if (e.target == videoPopup) {
        videoPopup.classList.remove('show')
        elmasVideo.pause();
        elmasVideo.currentTime = 0;
    }
})