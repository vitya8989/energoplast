new Swiper('.company_slider-2307__slider', {
    speed: 700,
    slidesPerView: 'auto',
    spaceBetween: 10,
    pagination: {
        el: '.company_slider-2307__pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.company_slider-2307__btn-next',
        prevEl: '.company_slider-2307__btn-prev'
    },
    breakpoints: {
        960: {
            spaceBetween: 20,
        }
    }
});



