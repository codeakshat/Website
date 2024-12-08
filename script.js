// $("#Next").click(function(){
// 	$("#Slider").append($("#Slider img:first-of-type"));
// });

// $("#Prev").click(function(){
// 	$("#Slider").prepend($("#Slider img:last-of-type"));
// });

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
	const img = document.getElementsByClassName("carousel-slider")
	const sliders = document.querySelectorAll(".btn-sliders span");
	if (e > img.length) {
		indexValue = 1;
	}
	if (e < 1) {
		indexValue = img.length;
	}
	for (i = 0; i < img.length; i++) {
		img[i].style.display = "none";
	}

	for (i = 0; i < sliders.length; i++) {
		sliders[i].style.background = "blue";
	}

	img[indexValue - 1].style.display = "block";
	sliders[indexValue - 1].style.background = "white";
}
