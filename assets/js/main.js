let preloaderContainer = document.querySelector('.preloader-container');
window.onload = () => {
    setTimeout(() => {
        preloaderContainer.classList.add('d-none');
    }, 1000);
};

let toTopBtn = document.querySelector('.to-top');

window.onscroll = () => {
    if (document.documentElement.scrollTop > 200 || document.body.scrollTop > 200) {
        toTopBtn.classList.add('show-to-top');
    } else {
        toTopBtn.classList.remove('show-to-top');
    }
};


toTopBtn.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

});


function toggleElement(toggleBtn, elementToToggle, classToToggle, secondaryBtn = null) {

    let toggler = document.querySelector(toggleBtn);
    let element = document.querySelector(elementToToggle);

    toggler.addEventListener('click', () => {
        element.classList.toggle(classToToggle);
        if (secondaryBtn !== null) {
            toggler.classList.toggle(secondaryBtn);
        }
    });

}


toggleElement('.nav-toggle', '.nav-container', 'nav-content-open', 'nav-toggle-close');
toggleElement('.search-toggle', '.search-container', 'show-search-container');
toggleElement('.dropdown-toggle', '.dropdown', 'dropdown-active');