

$(document).ready(function () {
    $('.open-menu').on('click', function () {
        $(this).toggleClass('close-menu');
        if ($(this).hasClass('close-menu')) {
            $('.menu-content').addClass('transition-menu');
            $('body').addClass('body_fix');
        } else {
            $('body').removeClass('body_fix');
            $('.menu-content').removeClass('transition-menu');
        }
    });
    $('.nav-menu a').on('click', function () {
        $('body').removeClass('body_fix');
        $('.menu-content').removeClass('transition-menu');
        $('.open-menu').removeClass('close-menu');
    })
});


function initSplide() {
    let direction = window.innerWidth < 1020 ? "ltr" : "ttb";

    const splide = new Splide(".splide", {
        type: "loop",
        direction: direction,
        height: direction === "ttb" ? "332" : "",
        focus: "center",
        wheel: false,
        speed: 1200,
        perPage: 1,
        gap: "20px",
        pagination: true,
        start:1,

        breakpoints: {
            1020: {
                direction: "horizontal",
                height: "",
                perPage: 2,
                start:1,

            },
            927: {
                direction: "horizontal",
                perPage: 2,
            },
            750: {
                direction: "horizontal",
                perPage: 1.5,

            },

            320: {
                direction: "horizontal",
                perPage: 1,
            },
            0: {
                direction: "horizontal",
                perPage: 1,
            },
        },


    });

    splide.mount();

    let interval = setInterval(() => {
        if (direction === "ttb") {
            splide.go(">");
        }
    }, 3500);


}

initSplide();


$(function () {
    let Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
        let links = this.el.find('.link');
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    };

    Accordion.prototype.dropdown = function (e) {
        let $el = e.data.el;
        $this = $(this),
            $next = $this.next();
        $next.slideToggle();
        if (!e.data.multiple) {

            $el.find('.submenu').not($next).slideUp();
        }
        if (!$this.hasClass('open')) {
            $('.link').each(function () {
                $(this).removeClass('open')
            })
            $this.addClass('open')
        } else {
            $this.removeClass('open')
        }
    }
    let accordion = new Accordion($('#accordion'), false);
});


$('.menu-scroll a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
        let $target = $(this.hash);
        $target = $target.length && $target
            || $('[name=' + this.hash.slice(1) +']');
        if ($target.length) {
            let targetOffset = $target.offset().top-130;
            $('html,body')
                .animate({scrollTop: targetOffset}, 1000);
            return false;
        }
    }
});




$(document).ready(function () {

    $('.micro-invest-click').on('click', function () {
        const catalog = $(this).data('catalog');
        // убираем active у всех кнопок
        $('.micro-invest-click').removeClass('active');

        // добавляем active текущей
        $(this).addClass('active');

        // скрываем все блоки
        $('.micro-invest-tabs').removeClass('active');

        // показываем нужный
        $('.micro-invest-tabs[data-catalog="' + catalog + '"]').addClass('active');
    });

});






$(document).ready(function () {

    $('.advantages-invest-click').on('click', function () {
        const advantages = $(this).data('advant');
        // убираем active у всех кнопок
        $('.advantages-invest-click').removeClass('active');
        // добавляем active текущей
        $(this).addClass('active');
        // скрываем все блоки
        $('.advantages-block').removeClass('active');
        // показываем нужный
        $('.advantages-block[data-advant="' + advantages + '"]').addClass('active');
    });

});



$(document).ready(function () {

    $('.compare-click').on('click', function () {
        const compare = $(this).data('photo');
        // убираем active у всех кнопок
        $('.compare-click').removeClass('active');
        // добавляем active текущей
        $(this).addClass('active');
        // скрываем все блоки
        $('.compare-pic').removeClass('active');
        // показываем нужный
        $('.compare-pic[data-photo="' + compare + '"]').addClass('active');
    });

});






document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".review-card-boxes");

    // первый активен
    boxes[0].classList.add("active");

    boxes.forEach((box) => {
        const small = box.querySelector(".small-card");

        small.addEventListener("click", () => {

            // если уже активен — не дёргаем
            if (box.classList.contains("active")) return;

            // убираем active у всех
            boxes.forEach(b => b.classList.remove("active"));

            // ставим текущему
            box.classList.add("active");
        });
    });
});










const container = document.getElementById('sliderContainer');
const divider   = document.getElementById('divider');
const panelBefore = document.getElementById('panelBefore');

let isDragging = false;

function setPosition(x) {
    const rect = container.getBoundingClientRect();
    let pct = (x - rect.left) / rect.width * 100;
    pct = Math.max(0, Math.min(100, pct)); // <-- было 5 и 95, теперь 0 и 100

    divider.style.left = pct + '%';
    panelBefore.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
}

// Mouse
container.addEventListener('mousedown', (e) => {
    isDragging = true;
    setPosition(e.clientX);
    e.preventDefault();
});

window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    setPosition(e.clientX);
});

window.addEventListener('mouseup', () => { isDragging = false; });

// Touch
container.addEventListener('touchstart', (e) => {
    isDragging = true;
    setPosition(e.touches[0].clientX);
    e.preventDefault();
}, { passive: false });

window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    setPosition(e.touches[0].clientX);
}, { passive: false });

window.addEventListener('touchend', () => { isDragging = false; });
