/* Slider */

var firstSlide = document.querySelector('.black-white-slide');
var secondSlide = document.querySelector('.multi-block-slide');
var thirdSlide = document.querySelector('.discount-slide')
var sliderButtons = document.querySelectorAll('.carousel-btns button');

sliderButtons[0].addEventListener('click', showFirstSlide);
sliderButtons[0].addEventListener('click', sizeSelector);

sliderButtons[1].addEventListener('click', showSecondSlide);
sliderButtons[1].addEventListener('click', sizeSelector);

sliderButtons[2].addEventListener('click', showThirdSlide);
sliderButtons[2].addEventListener('click', sizeSelector);


function showFirstSlide() {
	firstSlide.classList.add('showing');
	secondSlide.classList.remove('showing');
	thirdSlide.classList.remove('showing');
}

function showSecondSlide() {
	secondSlide.classList.add('showing');
	firstSlide.classList.remove('showing');
	thirdSlide.classList.remove('showing');
}

function showThirdSlide() {
	thirdSlide.classList.add('showing');
	secondSlide.classList.remove('showing');
	firstSlide.classList.remove('showing');
}

function sizeSelector() {
	for (var i = 0; i < sliderButtons.length; i++) {
		sliderButtons[i].classList.remove('button-active-state');
		sliderButtons[i].classList.remove('another-active-state');
		sliderButtons[i].classList.remove('another-bg');
	}
	this.classList.toggle('button-active-state');
	if (this.classList.contains('another')) {
		this.classList.toggle('another-active-state');
		for (var i = 0; i < sliderButtons.length; i++) {
			sliderButtons[i].classList.add('another-bg');
		}
	}
}

document.onkeydown = function(e) {
	if (e.keyCode == 49) {
		showFirstSlide();
	} else if (e.keyCode == 50) {
		showSecondSlide();
	} else if (e.keyCode == 51) {
		showThirdSlide();
	} 
}