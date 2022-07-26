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

