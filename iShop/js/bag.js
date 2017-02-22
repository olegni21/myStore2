/* Remove Item */

var removeBtn = document.querySelectorAll('.item-decription a');
for (var i = 0; i < removeBtn.length; i++) {
	removeBtn[i].addEventListener("click", function() {
		this.parentNode.parentNode.remove();
	});
}

/* Clear Button */

var clearBtn = document.querySelector('.clear-btn');
clearBtn.addEventListener("click", clearAll);

function clearAll() {
	if ((document.querySelector('.info')) != "null") {
		var bagContent = document.querySelectorAll('.bag-items-row');
		document.querySelector('.mail-bag > ul li:nth-child(3)').remove();
		for (var i = 0; i < bagContent.length; i++) {
			bagContent[i].remove();
		}
		var bagContainer = document.querySelector('.bag-items');
		var info = document.createElement('p');
		info.innerHTML = "Your shopping bag is empty. Use catalog to add new items.";
		info.classList.add("info");
		bagContainer.appendChild(info);
	} return;
}

/* Buy Button */

var buyBtn = document.querySelector('.bag-btn');
buyBtn.addEventListener("click", buy);

function buy() {
	document.querySelector('.mail-bag > ul li:nth-child(3)').remove();
	var bagContent = document.querySelectorAll('.bag-items-row');
	for (var i = 0; i < bagContent.length; i++) {
		bagContent[i].remove();
	}
	var bagConteiner = document.querySelector('.bag-items');
	var info = document.createElement('p');
	info.innerHTML = "Thank you for your purchase.";
	info.classList.add("info");
	bagConteiner.appendChild(info);
}

/* Create new element */

if (localStorage.quantity) {
	var bagItem = document.querySelector('.bag-item');
	var newBagItem = bagItem.cloneNode(true);

	newBagItem.children[0].lastElementChild.innerHTML = localStorage.productPrice;
	newBagItem.children[0].children[0].children[0].src = localStorage.productImage;
	newBagItem.children[1].children[0].innerHTML = localStorage.productTitle;
	newBagItem.children[1].children[1].innerHTML = localStorage.productColor;
	newBagItem.children[1].children[2].innerHTML = localStorage.productSize;
	newBagItem.children[1].children[3].innerHTML = localStorage.quantity;

	var newItemRow = document.createElement('div');
	newItemRow.className = "bag-items-row";
	newItemRow.appendChild(newBagItem);

	var lastItemRow = document.querySelector('.bag-items-row:nth-child(2)');
	lastItemRow.after(newItemRow);
} 




