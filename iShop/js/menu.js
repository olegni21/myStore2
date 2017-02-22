/* Mobile Menu */

var menuBtn = document.querySelector('.mobile-menu');
menuBtn.addEventListener("click", showMenu);
	
function showMenu() {
	var menu = document.querySelector('.menu');
	menu.classList.toggle('show-menu');
	this.classList.toggle('close');
	this.classList.toggle('mobile-menu-bg');
}

/* Polyfill For Remove */

if (!Element.prototype.remove) {
    Element.prototype.remove = function remove() {
      if (this.parentNode) {
        this.parentNode.removeChild(this);
      }
    };
}