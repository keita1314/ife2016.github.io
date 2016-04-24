(function(window, undefined) {
	'use strict';

	function PuzzleImage() {

	}

	// set Target

	PuzzleImage.prototype.setTarget = function(id) {
		this.target = document.querySelector(id);
		this.target.innerHTML = '';
	}

	// set Image
	// @param {string || string []} image 's URL or image 's URL array


	PuzzleImage.prototype.setImage = function(image, option) {
		if (typeof image === 'string') {
			this.setImage([image]);
			return;
		}
		var that = this;
		switch (image.length) {
			case 1:
				var div = document.createElement('div')
				div.className = 'one-item';
				div.style.backgroundImage = "url(" + image[0] + ")";
				this.target.appendChild(div);
				break;
			case 2:
				image.forEach(function(item, index) {
					var div = document.createElement('div')
					div.className = 'two-item-' + (index + 1);
					div.style.backgroundImage = "url(" + item + ")";
					that.target.appendChild(div);
				});
				break;
			case 3:
				image.forEach(function(item, index) {
					var div = document.createElement('div')
					div.className = 'three-item-' + (index + 1);
					div.style.backgroundImage = "url(" + item + ")";
					that.target.appendChild(div);
				});
				break;
			case 4:
				image.forEach(function(item, index) {
					var div = document.createElement('div')
					div.className = 'four-item-' + (index + 1);
					div.style.backgroundImage = "url(" + item + ")";
					that.target.appendChild(div);
				});
			case 5:
				image.forEach(function(item, index) {
					var div = document.createElement('div')
					div.className = 'five-item-' + (index + 1);
					div.style.backgroundImage = "url(" + item + ")";
					that.target.appendChild(div);
				});
				break;
			case 6:
				image.forEach(function(item, index) {
					var div = document.createElement('div')
					div.className = 'six-item-' + (index + 1);
					div.style.backgroundImage = "url(" + item + ")";
					that.target.appendChild(div);
				});
				break;
			default:
				break;
		}

	}

	if (typeof window.PuzzleImage !== undefined) {
		// statement
		window.PuzzleImage = new PuzzleImage();
	}

})(window, undefined);
var url = "http://desk.fd.zol-img.com.cn/t_s1280x800c5/g5/M00/0E/09/ChMkJ1cPXpyIYk5tAAJP8Uw9NPoAAP4-gALFPUAAlAJ260.jpg";