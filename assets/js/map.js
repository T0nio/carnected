var map;
var myPosition;
var markers = [];
var newMarkers = [];
var markerIcone = "";
var image = 'images/markers/marker.png';
markerIcone = image;

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
		run();
		map.set('center', new google.maps.LatLng(position.coords.latitude,position.coords.longitude));
	});
}

google.maps.event.addDomListener(window, 'load', initialize);

function run(){
	newMarkers = [
		{lat: myPosition.latitude, lng: myPosition.longitude},
		{lat: myPosition.latitude+0.004, lng: myPosition.longitude-0.004},
		{lat: myPosition.latitude-0.002, lng: myPosition.longitude+0.004},

	];
	drop();

	for(var category in categories){
		addTrigger(category);
	}
}

function addTrigger(category){
	$("#category-"+category).click(function(){
		clearMarkers();
		getMarkers(category);
		drop();
	});
}

function getMarkers(category){
	markerIcone = categories[category].marker;
	for (var i in categories[category].places){
		place = categories[category].places[i];
		newMarkers.push(place);
	}
}

function drop() {
  clearMarkers();
  for (var i = 0; i < newMarkers.length; i++) {
    addMarkerWithTimeout(newMarkers[i], i);
  }
  newMarkers = [];
}

function addMarkerWithTimeout(place, timeout) {
  window.setTimeout(function() {
    m = new google.maps.Marker({
      position: {"lat": place.lat, "lng": place.lng},
      map: map,
	  icon: {
        url: markerIcone,
        scale: 8.5,
      },
    });
    markers.push(m);

  }, timeout);
}

function clearMarkers() {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
}

