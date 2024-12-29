


var indexValue = 1;
showImg(indexValue);

function btn_slide(e) {
	showImg(indexValue = e);
}

function side_slide(e) {
	showImg(indexValue += e);
}

function showImg(e) {
	var i;
	const img = document.getElementsByClassName("carousel-slider");
	const sliders = document.querySelectorAll(".btn-sliders span");

	if (e > img.length) {
		indexValue = 1;
	}
	if (e < 1) {
		indexValue = img.length;
	}

	for (i = 0; i < sliders.length; i++) {
		sliders[i].style.background = "blue";
	}

	// Update the translateX of the images container to show the current image
	const imagesContainer = document.querySelector(".images");
	imagesContainer.style.transform = "translateX(" + (-100 * (indexValue - 1)) + "%)";

	// Update the dot navigation
	sliders[indexValue - 1].style.background = "white";
}
