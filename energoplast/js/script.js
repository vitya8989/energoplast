const header2307 = document.querySelector('.header-2307');
if (header2307.classList.contains('this--transparent')) {
    window.addEventListener('scroll', function () {
        if (pageYOffset > 10) {
            header2307.classList.remove('this--transparent');
        } else {
            header2307.classList.add('this--transparent');
        }
    })
}

const header2307BurgerBtn = document.querySelector('.header-2307__burger_btn');
const header2307MobMenu = document.querySelector('.header-2307__mob_menu');
const header2307MobMenuClose = document.querySelector('.header-2307__mob_menu_close');

header2307BurgerBtn.onclick = function () {
    header2307MobMenu.classList.add('open');
    if (window.innerWidth < 640) {
        lockPadding();
    }
}
header2307MobMenuClose.onclick = function () {
    header2307MobMenu.classList.remove('open');
    if (window.innerWidth < 640) {
        unlockPadding();
    }
}

const mediaQuery1023 = window.matchMedia('(max-width: 1023.9px)');
const header2307mobMenu = document.querySelector('.header-2307__mob_menu');
const header2307Nav = document.querySelector('.header-2307__nav');
const header2307Tel = document.querySelector('.header-2307__tel');
const header2307Search = document.querySelector('.header-2307__search');
const header2307Right = document.querySelector('.header-2307__right');
const header2307row = document.querySelector('.header-2307__row');
const header2307Content = document.querySelector('.header-2307__content');

function headerTabletChange1023(e) {
    if (e.matches) {
        header2307mobMenu.append(header2307Tel);
        header2307mobMenu.append(header2307Search);
        header2307mobMenu.append(header2307Nav);
    } else {
        header2307row.insertBefore(header2307Nav, header2307Right);
        header2307Right.append(header2307Tel);
        header2307Content.append(header2307Search);
    }
}
mediaQuery1023.addListener(headerTabletChange1023);
headerTabletChange1023(mediaQuery1023);

const header2307SearchBtn = document.querySelector('.header-2307__search_btn');

header2307SearchBtn.onclick = function () {
    header2307Search.classList.toggle('show');
    header2307SearchBtn.classList.toggle('active');
    if (header2307Search.classList.contains('show')) {
        header2307.style.paddingBottom = '100px';
    } else {
        header2307.style.paddingBottom = '0';
    }
}
const callbackBtn2307 = document.querySelectorAll('.callback_btn-2307');
const form2307popup = document.querySelector('.form-2307__popup_form');
const form2307popupAsk = document.querySelector('.header-2307__callback-popup_ask');
const form2307popupAnswer = document.querySelector('.header-2307__callback-popup_answer');
const form2307popupClose = document.querySelectorAll('.header-2307__callback-popup_close');
const callbackPopup2307 = document.querySelector('.header-2307__callback-popup');

const body2307 = document.body;
const wrapper2307 = document.querySelector('.wrapper-2307');
let scrollBarWidth = window.innerWidth - wrapper2307.offsetWidth + "px";

function lockPadding() {
    body2307.classList.add('scroll-lock');
    wrapper2307.style.paddingRight = scrollBarWidth;
    header2307.style.paddingRight = scrollBarWidth;

}
function unlockPadding() {
    body2307.classList.remove('scroll-lock');
    wrapper2307.style.paddingRight = "0";
    header2307.style.paddingRight = "0";
}

for (let i = 0; i < callbackBtn2307.length; i++) {
    callbackBtn2307[i].onclick = function () {
        callbackPopup2307.classList.add('show-popup');
        lockPadding();
    }
}

form2307popup.onsubmit = function (e) {
    e.preventDefault();
    if (validate_form(form2307popup)) {
        form2307popupAnswer.style.height = form2307popupAsk.clientHeight + 'px';
        form2307popupAsk.classList.add('hide');
        form2307popupAnswer.classList.remove('hide');
    }
}

for (let i = 0; i < form2307popupClose.length; i++) {
    form2307popupClose[i].onclick = function () {
        callbackPopup2307.classList.remove('show-popup');
        form2307popup.reset();
        for (let i = 0; i < form2307FormInput.length; i++) {
            if (form2307FormInput[i].classList.contains('error')) {
                form2307FormInput[i].classList.remove('error');
                form2307FormInput[i].style.color = '#FDFDFD';
            }
        }
        for (let i = 0; i < form2307formTel.length; i++) {
            form2307formTel[i].style.color = 'rgba(242, 242, 242, 0.5)';
        }
        setTimeout(function () {
            form2307popupAsk.classList.remove('hide');
            form2307popupAnswer.classList.add('hide');
        }, 400);
        unlockPadding();
    }
}

callbackPopup2307.onclick = function (e) {
    if (!e.target.closest('.header-2307__callback-popup_body')) {
        callbackPopup2307.classList.remove('show-popup');
        form2307popup.reset();
        for (let i = 0; i < form2307FormInput.length; i++) {
            if (form2307FormInput[i].classList.contains('error')) {
                form2307FormInput[i].classList.remove('error');
                form2307FormInput[i].style.color = '#FDFDFD';
            }
        }
        for (let i = 0; i < form2307formTel.length; i++) {
            form2307formTel[i].style.color = 'rgba(242, 242, 242, 0.5)';
        }
        setTimeout(function () {
            form2307popupAsk.classList.remove('hide');
            form2307popupAnswer.classList.add('hide');
        }, 400);
        unlockPadding();
    }
}

;
const projectSlider2307 = new Swiper('.project_slider-2307__slider', {
    speed: 700,
    slidesPerView: 1,
    pagination: {
        el: '.project_slider-2307__pagination',
        clickable: true,
    },
    autoHeight: true,
    spaceBetween: 20,
});

window.addEventListener('load',() => {
    projectSlider2307.update();
});
const projectSlider2307Border = document.querySelectorAll('.project_slider-2307__border');
const projectSlider2307Top = document.querySelector('.project_slider-2307__top');

const mediaQuery959 = window.matchMedia('(max-width: 959.9px)');

function headerTabletChange959(e) {
    if (e.matches) {
        projectSlider2307.on('slideNextTransitionStart', function () {
            for (let i = 0; i < projectSlider2307Border.length; i++) {
                projectSlider2307Border[i].classList.remove('active');
            }
            projectSlider2307Border[projectSlider2307.activeIndex].classList.add('active');
            if (projectSlider2307.activeIndex === 1) {
                projectSlider2307Top.scrollLeft += 100;
            }
            if (projectSlider2307.activeIndex > 1) {
                projectSlider2307Top.scrollLeft += 173;
            }
        });
        projectSlider2307.on('slidePrevTransitionStart', function () {
            for (let i = 0; i < projectSlider2307Border.length; i++) {
                projectSlider2307Border[i].classList.remove('active');
            }
            projectSlider2307Border[projectSlider2307.activeIndex].classList.add('active');
            if (projectSlider2307.activeIndex === 5) {
                projectSlider2307Top.scrollLeft -= 100;
            }
            if (projectSlider2307.activeIndex < 5) {
                projectSlider2307Top.scrollLeft -= 173;
            }
        });
    } else {
        projectSlider2307.on('slideNextTransitionStart', function () {
            for (let i = 0; i < projectSlider2307Border.length; i++) {
                projectSlider2307Border[i].classList.remove('active');
            }
            projectSlider2307Border[projectSlider2307.activeIndex].classList.add('active');
            if (projectSlider2307.activeIndex === 1) {
                projectSlider2307Top.scrollLeft += 180;
            }
            if (projectSlider2307.activeIndex > 1) {
                projectSlider2307Top.scrollLeft += 248;
            }
        });
        projectSlider2307.on('slidePrevTransitionStart', function () {
            for (let i = 0; i < projectSlider2307Border.length; i++) {
                projectSlider2307Border[i].classList.remove('active');
            }
            projectSlider2307Border[projectSlider2307.activeIndex].classList.add('active');
            if (projectSlider2307.activeIndex === 5) {
                projectSlider2307Top.scrollLeft -= 180;
            }
            if (projectSlider2307.activeIndex < 5) {
                projectSlider2307Top.scrollLeft -= 248;
            }
        });
    }
}
mediaQuery959.addListener(headerTabletChange959);
headerTabletChange959(mediaQuery959);


const projectSlider2307Accordion = document.querySelectorAll('.project_slider-2307__slide_accordion');

for (let i = 0; i < projectSlider2307Accordion.length; i++) {
    projectSlider2307Accordion[i].onclick = function (e) {
        if (e.target.closest('.project_slider-2307__slide_accordion_head')) {
            for (let j = 0; j < projectSlider2307Accordion.length; j++) {
                if (projectSlider2307Accordion[j] !== this && projectSlider2307Accordion[j].classList.contains('open')) {
                    projectSlider2307Accordion[j].classList.remove('open');
                    projectSlider2307Accordion[j].querySelector('.project_slider-2307__slide_accordion_body').style.maxHeight = '0';
                }
            }
            if (!this.classList.contains('open')) {
                this.classList.add('open');
                this.querySelector('.project_slider-2307__slide_accordion_body').style.maxHeight = `${this.querySelector('.project_slider-2307__slide_accordion_body').scrollHeight}px`;
            } else {
                this.classList.remove('open');
                this.querySelector('.project_slider-2307__slide_accordion_body').style.maxHeight = '0';
            }
            setTimeout(function () {
                projectSlider2307.update();
            }, 100);
            setTimeout(function () {
                projectSlider2307.update();
            }, 400);
        }
    }
};
const onlyRus = document.querySelectorAll('.only-rus-2307');
const maskPhone = document.querySelectorAll('.mask-phone-2307');
const onlyEng= document.querySelectorAll('.only-eng-2307');
const form2307 = document.querySelector('.form-2307__form');
const form2307Content = document.querySelector('.form-2307__content');
const form2307Thanks = document.querySelector('.form-2307__thanks');
const form2307ThanksBtn = document.querySelector('.form-2307__thanks_btn');
const form2307FormInput = document.querySelectorAll('.form-2307__form_input');
const form2307formTel = document.querySelectorAll('.form-2307__form_tel');

for (let i = 0; i < form2307formTel.length; i++) {
    form2307formTel[i].addEventListener('input', function () {
        form2307formTel[i].style.color = '#FDFDFD';
    });
}
for (let i = 0; i < form2307formTel.length; i++) {
    form2307formTel[i].addEventListener('blur', function () {
        if (form2307formTel[i].value === '+_ (___) ___-__-__') {
            form2307formTel[i].style.color = 'rgba(242, 242, 242, 0.5)';
        }
    });
}

function setCursorPosition(pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
    else if (elem.createTextRange) {
        var range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select()
    }
}

function mask(event) {
    var matrix = this.defaultValue,
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    def.length >= val.length && (val = def);
    matrix = matrix.replace(/[_\d]/g, function (a) {
        return val.charAt(i++) || "_"
    });
    this.value = matrix;
    i = matrix.lastIndexOf(val.substr(-1));
    i < matrix.length && matrix != this.defaultValue ? i++ : i = matrix.indexOf("_");
    setCursorPosition(i, this)
}

for (let i = 0; i < maskPhone.length; i++) {
    maskPhone[i].addEventListener("input", mask, false);
}
for (let i = 0; i < onlyRus.length; i++) {
    onlyRus[i].addEventListener('keyup', function () {
        this.value = this.value.replace(/[^а-яёА-ЯЁ ]/g,"");
    });
}
for (let i = 0; i < onlyEng.length; i++) {
    onlyEng[i].addEventListener('keyup', function () {
        this.value = this.value.replace(/[а-яёА-ЯЁ]/g,"");
    });
}
function validate_form(form) {
    let valid = true;
    if (form.querySelector('.form-2307__form_tel').value.indexOf('_') !== -1) {
        valid = false;
        form.querySelector('.form-2307__form_tel').classList.add('error');
        form.querySelector('.form-2307__form_tel').style.color = '#FFE000';
    }
    if (form.querySelector('.form-2307__form_name').value === "") {
        valid = false;
        form.querySelector('.form-2307__form_name').classList.add('error');
    }
    return valid;
}

form2307.onsubmit = function (e) {
    e.preventDefault();
    if (validate_form(form2307)) {
        form2307Thanks.style.height = form2307Content.clientHeight + 'px';
        form2307Content.classList.add('hide');
        form2307Thanks.classList.remove('hide');
    }
}

for (let i = 0; i < form2307FormInput.length; i++) {
    form2307FormInput[i].onfocus = function () {
        if (form2307FormInput[i].classList.contains('error')) {
            form2307FormInput[i].classList.remove('error');
            form2307FormInput[i].style.color = '#FDFDFD';
        }
    }
}

form2307ThanksBtn.onclick = function () {
    form2307.reset();
    form2307Content.classList.remove('hide');
    form2307Thanks.classList.add('hide');
};
new Swiper('.special_slider-2307__slider', {
    speed: 700,
    slidesPerView: 1,
    pagination: {
        el: '.special_slider-2307__pagination',
        clickable: true,
    },
    autoplay: {
        delay: 6850,
    },
    loop: true,
});



;
const companySlider2307 = new Swiper('.company_slider-2307__slider', {
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



;
let map2307 = document.getElementById('map-2307');

if (map2307) {
    let scriptMap = document.createElement('script');
    scriptMap.src = 'https://api-maps.yandex.ru/2.1/?apikey=dd0f5e76-e8bb-42be-b558-f7af3b491cd2&lang=ru_RU';
    setTimeout(() => document.head.append(scriptMap), 0);
    scriptMap.onload = function () {
        ymaps.ready(init);
    };

    function init() {
        var myMap = new ymaps.Map("map-2307", {
            center: [59.972271, 30.481347],
            zoom: 14,
            controls: []
        });
        myMap.controls.add('zoomControl', {
            float: 'none',
            position: {
                top: '40px',
                right: '20px'
            }
        });
        var myPlacemark = new ymaps.Placemark([59.972271, 30.481347], {}, {
            iconLayout: 'default#image',
            iconImageHref: '../img/main/contacts/map_point.png',
            iconImageSize: [40, 40],
            iconImageOffset: [-25, -25]
        });
        myMap.geoObjects.add(myPlacemark);
    }
};
;

