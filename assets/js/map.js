var map;
var myPosition;
function initialize() {
    var mapCanvas = document.getElementById('map');
    var mapOptions = {
      center: new google.maps.LatLng(48.8618,2.3490),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      streetViewControl: false
    }
	map =  new google.maps.Map(mapCanvas, mapOptions);
	navigator.geolocation.getCurrentPosition(function (position){
		myPosition = position.coords;
		map.set('center', new google.maps.LatLng(position.coords.latitude,position.coords.longitude));
		var image = 'images/marker.png';
		var testMarker = new google.maps.Marker({
			position: {lat: myPosition.latitude, lng: myPosition.longitude},
			map: map,
			icon: image
		});
	});
}

google.maps.event.addDomListener(window, 'load', initialize);



