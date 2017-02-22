/* Add To Bag Counter */

var addToBagButton = document.querySelector('.product-btn');
addToBagButton.addEventListener("click", addToBag);

var price = 0;
var itemCounter = 0;

function addToBag() {
	itemCounter += 1;
	price += +((Math.random() * (1500 - 300) + 300));
	var bag = document.getElementById('header-bag');
	if (bag.nextElementSibling == null) {
		var priceLi = document.createElement('li');
		priceLi.innerHTML = "$" + price.toFixed(2) + " (" + itemCounter + ")";
		bag.insertAdjacentElement("AfterEnd", priceLi);
	} else {
		document.querySelector('.mail-bag > ul li:nth-child(3)').remove();
		var priceLi = document.createElement('li');
		priceLi.innerHTML = "$" + price.toFixed(2) + " (" + itemCounter + ")";
		bag.insertAdjacentElement("AfterEnd", priceLi);
	}
}

/* Size */

var size = document.querySelectorAll('.size-box p');
for (var i = 0; i < size.length; i++) {
	size[i].addEventListener("click", sizeSelector);
}

function sizeSelector() {
	for (var i = 0; i < size.length; i++) {
		size[i].classList.remove('active-color-size');
	}
	this.classList.toggle('active-color-size');
}

/* Color */

var color = document.querySelectorAll('.color-box p');
for (var i = 0; i < color.length; i++) {
	color[i].addEventListener("click", colorSelector);
}

function colorSelector() {
	for (var i = 0; i < color.length; i++) {
		color[i].classList.remove('active-color-size');
	}
	this.classList.toggle('active-color-size');
}

/* Thumbnail */

var thumbnail = document.querySelectorAll('.small-item-img .hover-wrap');
for (var i = 0; i < thumbnail.length; i++) {
	thumbnail[i].addEventListener("click", thumbnailSelector);
}

function thumbnailSelector() {
	for (var i = 0; i < thumbnail.length; i++) {
		thumbnail[i].children[1].classList.remove('active-thumbnail');
	}
	this.children[1].classList.toggle('active-thumbnail');
	var fullImage = document.querySelector('.big-item-img img');
	var newFullImage = document.createElement('img');
	newFullImage.src = "img/item/" + this.children[0].src.substr(-12, 5) + "_big.jpg";
	fullImage.replaceWith(newFullImage);
}

/* Buy Button, save data to local Storage */

addToBagButton.addEventListener("click", addDataToStorage);

var quantity = 0;

function addDataToStorage() {
	localStorage.productTitle = document.querySelector('.product-description > h1').innerHTML;
	localStorage.productPrice = document.querySelector('.desktop-price').innerHTML;
	localStorage.productImage = document.querySelector('.big-item-img > img').src;
	localStorage.productSize = "Size: " + itemSelection(size);
	localStorage.productColor = "Color: " + itemSelection(color);
	quantity += 1;
	localStorage.quantity = "Quantity: " + quantity;

	function itemSelection(elem) {
		for (var i = 0; i < elem.length; i++) {
			if (elem[i].classList.contains('active-color-size')) {
				return elem[i].innerHTML;
			}
		}
	}
}