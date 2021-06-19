// burger = document.querySelector('.burger')
// navi = document.querySelector('.naviagtion-b')
// leff = document.querySelector('.navigation-top-left')
// // teff = document.querySelector('.navigation-top-right')

// burger.addEventListener('click', () =>{
//     navi.classList.toggle('h-resp');
//     leff.classList.toggle('v-resp')
//     // teff.classList.toggle('v-resp')
// })

burger = document.querySelector('.burger')
navi = document.querySelector('.unddo')
leff = document.querySelector('.navigation-top-left')
// teff = document.querySelector('.navigation-top-right')

burger.addEventListener('click', () =>{
    navi.classList.toggle('v-resp');
    leff.classList.toggle('h-resp')
    // teff.classList.toggle('v-resp')
})