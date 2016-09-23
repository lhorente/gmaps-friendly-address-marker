function pinSymbol(text,border,opacity) {
	if (!size){
		var size = String(text.length);
		if (size > 60){
			size = 60;
		}
		if (size > 15){
			size = size * 0.8;
		}
	}
	if (!border){
		var border = 0;
	}
	if (!opacity){
		var opacity = 0.8;
	}
	return {
		path: 'M -0,0 C -2,-4 -2,-4 -2,-4 L -'+(size-1)+',-4 C -'+size+',-4 -'+size+',-5 -'+size+',-5 L -'+size+',-11 C -'+size+',-12 -'+(size-1)+',-12 -'+(size-1)+',-12 L '+(size-1)+',-12 C '+size+',-12 '+size+',-11 '+size+',-11 L '+size+',-5 C '+size+',-4 '+(size-1)+',-4 '+(size-1)+',-4 C 2,-4 2,-4 2,-4 C 0,0 0,0 0,0 z',
		fillColor: '#000',
		fillOpacity: opacity,
		strokeColor: '#222',
		strokeWeight: border,
		scale: 5
	};
}

var map;
var marker;
function createMarker(map,latLng,text){
	marker = new MarkerWithLabel({
		position: latLng,
		map: map,
		draggable: false,
		raiseOnDrag: true,
		labelContent: text,
		labelAnchor: new google.maps.Point(200, 50),
		labelClass: "pin-label",
		labelInBackground: false,
		icon: pinSymbol(text)
	});
}

function initMap(){
	var mapDiv = document.getElementById('mapa');
	var myLatLng = {lat:-25.425691,lng:-49.2675924};
	var map = new google.maps.Map(mapDiv, {
	  center: myLatLng,
	  zoom: 16
});
	
	var input = document.getElementById('endereco');
	map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
	var autocomplete = new google.maps.places.Autocomplete(input);
	autocomplete.bindTo('bounds', map);	
	
	autocomplete.addListener('place_changed', function() {
		marker.setVisible(false);
		var place = autocomplete.getPlace();
		if (!place.geometry) {
		  window.alert("Autocomplete's returned place contains no geometry");
		  return;
		}

		// If the place has a geometry, then present it on a map.
		if (place.geometry.viewport) {
		  map.fitBounds(place.geometry.viewport);
		} else {
		  map.setCenter(place.geometry.location);
		  map.setZoom(16);
		}
		var address = place.formatted_address;
		createMarker(map,place.geometry.location,address);
	});	
	
	var address = "Passeio Público, Curitiba"
	createMarker(map,myLatLng,address);
}

$(document).ready(function(){
	initMap();
});