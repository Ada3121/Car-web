(function ($) {
    "use strict";
    
    // loader
    var loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 1);
    };
    loader();
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 90) {
            $('.nav-bar').addClass('nav-sticky');
            $('.carousel, .page-header').css("margin-top", "73px");
        } else {
            $('.nav-bar').removeClass('nav-sticky');
            $('.carousel, .page-header').css("margin-top", "0");
        }
    });
    
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });

    
    // Main carousel
    $(".carousel .owl-carousel").owlCarousel({
        autoplay: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        smartSpeed: 300,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ]
    });

    
    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        center: true,
        autoplay: true,
        smartSpeed: 2000,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
    
    // Related post carousel
    $(".related-slider").owlCarousel({
        autoplay: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            }
        }
    });
    
})(jQuery);
document.addEventListener("DOMContentLoaded", function() {
    const counterElement = document.getElementById("counter");
    const targetNumber = 2;
    const animationDuration = 3000; // in milliseconds
    const frameDuration = 1000 / 60; // 60 frames per second

    const totalFrames = Math.ceil(animationDuration / frameDuration);
    const increment = targetNumber / totalFrames;

    let currentNumber = 0;
    let frame = 0;

    const updateCounter = () => {
        if (currentNumber < targetNumber) {
            currentNumber += increment;
            counterElement.textContent = Math.floor(currentNumber);
        } else {
            counterElement.textContent = targetNumber;
            clearInterval(counterInterval);
        }
    };

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Start counting animation
                counterInterval = setInterval(() => {
                    updateCounter();
                    frame++;

                    if (frame === totalFrames) {
                        clearInterval(counterInterval);
                    }
                }, frameDuration);

                // Stop observing once animation starts
                counterObserver.unobserve(counterElement);
            }
        });
    });

    // Observe the counter element
    counterObserver.observe(counterElement);
});
document.addEventListener("DOMContentLoaded", function() {
    const counterElement = document.getElementById("counter3");
    const targetNumber = 501;
    const animationDuration = 3000; // in milliseconds
    const frameDuration = 1000 / 60; // 60 frames per second

    const totalFrames = Math.ceil(animationDuration / frameDuration);
    const increment = targetNumber / totalFrames;

    let currentNumber = 0;
    let frame = 0;

    const updateCounter = () => {
        if (currentNumber < targetNumber) {
            currentNumber += increment;
            counterElement.textContent = Math.floor(currentNumber);
        } else {
            counterElement.textContent = targetNumber;
            clearInterval(counterInterval);
        }
    };

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Start counting animation
                counterInterval = setInterval(() => {
                    updateCounter();
                    frame++;

                    if (frame === totalFrames) {
                        clearInterval(counterInterval);
                    }
                }, frameDuration);

                // Stop observing once animation starts
                counterObserver.unobserve(counterElement);
            }
        });
    });

    // Observe the counter element
    counterObserver.observe(counterElement);
});
document.addEventListener("DOMContentLoaded", function() {
    const counterElement = document.getElementById("counter1");
    const targetNumber = 200;
    const animationDuration = 3000; // in milliseconds
    const frameDuration = 1000 / 60; // 60 frames per second

    const totalFrames = Math.ceil(animationDuration / frameDuration);
    const increment = targetNumber / totalFrames;

    let currentNumber = 0;
    let frame = 0;

    const updateCounter = () => {
        if (currentNumber < targetNumber) {
            currentNumber += increment;
            counterElement.textContent = Math.floor(currentNumber);
        } else {
            counterElement.textContent = targetNumber;
            clearInterval(counterInterval);
        }
    };

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Start counting animation
                counterInterval = setInterval(() => {
                    updateCounter();
                    frame++;

                    if (frame === totalFrames) {
                        clearInterval(counterInterval);
                    }
                }, frameDuration);

                // Stop observing once animation starts
                counterObserver.unobserve(counterElement);
            }
        });
    });

    // Observe the counter element
    counterObserver.observe(counterElement);
});
document.addEventListener("DOMContentLoaded", function() {
    const counterElement = document.getElementById("counter2");
    const targetNumber = 500;
    const animationDuration = 3000; // in milliseconds
    const frameDuration = 1000 / 60; // 60 frames per second

    const totalFrames = Math.ceil(animationDuration / frameDuration);
    const increment = targetNumber / totalFrames;

    let currentNumber = 0;
    let frame = 0;

    const updateCounter = () => {
        if (currentNumber < targetNumber) {
            currentNumber += increment;
            counterElement.textContent = Math.floor(currentNumber);
        } else {
            counterElement.textContent = targetNumber;
            clearInterval(counterInterval);
        }
    };

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Start counting animation
                counterInterval = setInterval(() => {
                    updateCounter();
                    frame++;

                    if (frame === totalFrames) {
                        clearInterval(counterInterval);
                    }
                }, frameDuration);

                // Stop observing once animation starts
                counterObserver.unobserve(counterElement);
            }
        });
    });

    // Observe the counter element
    counterObserver.observe(counterElement);
});