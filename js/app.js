/* start nav (aside menu) */
let nav = document.getElementById('nav')
let open = document.getElementById('open-nav')
let close = document.getElementById('close-nav')
// open nav bar
open.addEventListener('click', function () {
    nav.classList.remove('-right-full');
})
// close nav bar
close.addEventListener('click', function () {
    nav.classList.add('-right-full');
})
/* end nav (aside menu) */


/* start light box section */
let lightbox = document.querySelector('.lightbox')
let lightboxBody = document.querySelector('.lightbox-body')
let images = document.querySelectorAll('#gallery')
images.forEach(function (image) {
    image.addEventListener('click', function (e) {
        lightbox.classList.remove('scale-0');
        lightbox.classList.add('scale-100');
        const fragment = document.createDocumentFragment();
        const img = document.createElement('img')
        img.src = image.src;
        img.classList.add('img-fluid');
        fragment.appendChild(img);
        lightboxBody.innerHTML = '';
        lightboxBody.appendChild(fragment);
    })
})
lightbox.addEventListener('click', (e) => {
    lightbox.classList.remove('scale-100');
    lightbox.classList.add('scale-0');
})
/* end light box section */

/* start footer year */
const year = document.querySelector('.year')
const getYear = new Date().getFullYear();
year.innerHTML = getYear;
/* end footer year */


/* start loader */
const loader = document.querySelector(".loader")
window.addEventListener('load', () => {
    // loader.classList.add('hidden');
    loader.style.display = 'none';
})
/* end loader */
