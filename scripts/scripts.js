'use strict';

let slides = document.getElementsByClassName("Containers");
let dots = document.getElementsByClassName("dots");
let current_position = 1;

/*
01 - Load the first image based on the current index, initially current position is 1 then show the first image, then hide the other images.
*/

function render() {
    for (let i = 0; i < slides.length; i++) {

        if((current_position - 1) == i) {
            slides[i].style.display = 'block';
            dots[i].classList.add('active');
        } else {
            slides[i].style.display = 'none';
            dots[i].classList.remove('active');
        }
        
    }
}

/*
02 - Change the current position by clicking prev and next, next means increment by one, prev mean decrement by one.
*/

function changeSlides(position) {
    if(position > 0 && slides.length > current_position)
        current_position += position;
    else if(position < 0 && current_position > 1)
        current_position += position;
   
    render();
}

/*
03 - By clicking the dots also change the current position and render.
*/

function currentSlide(position) {
    current_position = position;
    render();
}

render();
