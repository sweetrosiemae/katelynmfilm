// const cursor = document.querySelector('.cursor');

// document.addEventListener('mousemove', e => {
//     cursor.setAttribute('style', 'top: ' + (e.pageY - 10) + 'px; left: ' + (e.pageX -10) + "px;");
// })


//SCROLL IN PACKAGE

AOS.init();


//NAV BAR
const nav = document.querySelector('.nav');
const hamburgerIcon = document.querySelector('.fa-bars');

hamburgerIcon.addEventListener('click', function(event){
    displayNav(nav);
    if (event.target.tagName === 'I') {
        updateHamburger(event.target);
    }
})

function displayNav(e){
    e.classList.toggle('showHamMenu');
}

function updateHamburger(iconE){
    iconE.classList.toggle('fa-bars');
    iconE.classList.toggle('fa-window-close');
}


