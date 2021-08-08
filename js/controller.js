'use strict';

let gIsMenue = false;

function onChangeNav(el){
    if (document.querySelector('.nav-option.is-clicked')){
        let elUnclick = document.querySelector('.nav-option.is-clicked');
        elUnclick.classList.remove('is-clicked');
    }
    el.classList.add('is-clicked');
    return false;
}

function onChangeBtn(el){
    if (document.querySelector('.card-btn.is-clicked')){
        let elUnclick = document.querySelector('.card-btn.is-clicked');
        elUnclick.classList.remove('is-clicked');
    }
    el.classList.add('is-clicked');
    return false;
}

function onOpenMenu(btn){
    if (!gIsMenue){
        let elOptions = document.querySelector('.main-nav');
        elOptions.style.visibility = 'visible';
        gIsMenue = true;
        document.body.classList.toggle('menu-open');
    } else{
        let elOptions = document.querySelector('.main-nav');
        elOptions.style.visibility = 'hidden';
        document.body.classList.toggle('menu-open');
        gIsMenue = false;
    }
}
