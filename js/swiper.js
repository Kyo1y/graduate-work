
new Swiper('.swiper', {
    slidesPerView: 3,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el:".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: false,
        }
    },
    breakpoints: {
        375:{slidesPerView: 1},
        640:{slidesPerView:1},
        768:{slidesPerView:1},
        1024:{slidesPerView:2},
        1280:{slidesPerView:3},

    }
});

