const iconsNav = document.querySelectorAll('.icons-nav')
const navMenu = document.querySelector('#main-menu')
const tlo = document.querySelector('#tlo')

iconsNav.forEach(btn => {
    btn.addEventListener('click', () => {
        toggleMenu(navMenu)
    })
})

function toggleMenu(x) {
    if (x.classList.contains('active')) {
        x.classList.remove('active')
        tlo.style.display = 'none'


    } else {
        x.classList.add('active')
        tlo.style.display = 'block'

    }
}


const inputs = document.querySelectorAll('.required-input')
const requiredField = document.querySelectorAll('.required-field')
const form = document.querySelector('.form')

function requiredCheck(x) {
    if (inputs[x].value == '') {
        requiredField[x].innerHTML = 'This field is required'
        inputs[x].style.borderBottom = '1px solid #F67E7E'
        return false;

    } else {
        requiredField[x].innerHTML = ''
        inputs[x].style.borderBottom = '1px solid rgb(178, 178, 178)'
        return true;

    }
}
inputs.forEach((inp, index) => {
    inp.addEventListener('keyup', () => {
        requiredCheck(index);
    })
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    inputs.forEach((input, index) => {
        requiredCheck(index)
    });
});

// form.addEventListener('submit', (x) => {
//     x.preventDefault();
//     inputs.forEach((inp, x) => {
//         if (inp.value == '') {
//             requiredField[x].innerHTML = 'This field is required'
//             inputs[x].style.borderBottom = '1px solid #F67E7E'
//             return false;

//         } else {
//             requiredField[x].innerHTML = ''
//             inp.style.borderBottom = '1px solid rgb(178, 178, 178)'
//             return true;

//         }
//     })

// })



