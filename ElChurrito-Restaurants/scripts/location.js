function initMap() {
	// get map from dom
	const mapInDom = document.getElementById("map");

	// set the lat and long of location -
	const ourLocation = { lat: 43.677909, lng: -79.30248 };

	// set map options
	const mapOptions = {
		zoom: 15,
		center: ourLocation,
	};

	// The Map
	const map = new google.maps.Map(mapInDom, mapOptions);

	// Set The Marker on the map
	new google.maps.Marker({
		position: ourLocation,
		map,
		animation: google.maps.Animation.DROP,
	});
}
