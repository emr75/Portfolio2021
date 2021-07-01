window.onload = function () {
	// This script will handle image preview modal

	// get DOM elements
	const preview = document.getElementById("preview_overlay");
	const previewImage = document.getElementById("preview");
	const closePreview = document.getElementById("closePreview");
	const previewContainer = document.getElementById("previewContainer");

	// open the clicked image
	const openImage = (imgName) => {
		// set image src
		previewImage.src = `./images/${imgName}`;

		// show preview
		preview.classList.replace("hidePreview", "showPreview");
	};

	// handle clicks on image
	const handleClick = (e) => {
		// construct image name from ID
		const imgName = e.target.id.split("img_")[1] + ".jpg";

		// open image
		openImage(imgName);
	};

	// add click listener to images
	document
		.querySelectorAll(".galary-img")
		.forEach((img) => (img.onclick = handleClick));

	// event listener for the close button
	closePreview.onclick = () => {
		// hide/remove preview window
		preview.classList.replace("showPreview", "hidePreview");
	};

	window.onclick = (event) => {
		// event listener for outside click of preview window
		if (event.target == previewContainer) {
			// hide/remove preview window
			preview.classList.replace("showPreview", "hidePreview");
		}
	};
};

