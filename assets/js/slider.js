








let experienceSwiper = new Swiper(".experience-slider", {
    slidesPerView: 3,
    spaceBetween: 16,
    loop: true,
    breakpoints: {
        '1020': {
            slidesPerView: 3,
            spaceBetween: 16,
        },
        '767': {
            slidesPerView: 2,
            spaceBetween: 12,
        },
        '640': {
            slidesPerGroup: 1,
            slidesPerView: 2,
            spaceBetween: 12,
        },
        '320': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 12,

        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".experience-pagination",
        clickable: true,
    },
});


let possibilitiesSwiper = new Swiper(".possibilities-slider", {
    slidesPerView: 2,
    spaceBetween: 16,
    loop: true,
    breakpoints: {
        '1020': {
            slidesPerView: 2,
            spaceBetween: 16,
        },
        '767': {
            slidesPerView: 2,
            spaceBetween: 12,
        },
        '640': {
            slidesPerGroup: 1,
            slidesPerView: 2,
            spaceBetween: 12,
        },
        '320': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 12,

        },
    },
    pagination: {
        el: ".possibilities-pag",
        clickable: true,
    },
});



let gammaSwiper = new Swiper(".gamma-content-slider", {
    slidesPerView: 2,
    spaceBetween: 16,
    loop: true,
    breakpoints: {
        '1020': {
            slidesPerView: 2,
            spaceBetween: 16,
        },
        '767': {
            slidesPerView: 2,
            spaceBetween: 12,
        },
        '640': {
            slidesPerGroup: 1,
            slidesPerView: 2,
            spaceBetween: 12,
        },
        '320': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 12,

        },
    },
    pagination: {
        el: ".gamma-pag",
        clickable: true,
    },
});

let presentSwiper = new Swiper(".present-slider", {
    slidesPerView: 2,
    spaceBetween: 16,
    loop: true,
    breakpoints: {
        '1020': {
            slidesPerView: 2,
            spaceBetween: 16,
        },
        '767': {
            slidesPerView: 2,
            spaceBetween: 12,
        },
        '640': {
            slidesPerGroup: 1,
            slidesPerView: 2,
            spaceBetween: 12,
        },
        '320': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 12,

        },
    },
    pagination: {
        el: ".present-pagination",
        clickable: true,
    },
});



















