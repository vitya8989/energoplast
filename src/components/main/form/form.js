const onlyRus = document.querySelectorAll('.only-rus-2307');
const maskPhone = document.querySelectorAll('.mask-phone-2307');
const onlyEng= document.querySelectorAll('.only-eng-2307');
const form2307 = document.querySelector('.form-2307__form');
const form2307Content = document.querySelector('.form-2307__content');
const form2307Thanks = document.querySelector('.form-2307__thanks');
const form2307ThanksBtn = document.querySelector('.form-2307__thanks_btn');
const form2307FormInput = document.querySelectorAll('.form-2307__form_input');

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
        }
    }
}

form2307ThanksBtn.onclick = function () {
    form2307.reset();
    form2307Content.classList.remove('hide');
    form2307Thanks.classList.add('hide');
}