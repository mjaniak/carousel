'use strict';

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel', {
  // options
});

(function(){ 
	
  	window.initMap = function() {
		
		var uluru = {lat: -25.363, lng: 131.044};
		
		var map = new google.maps.Map(document.getElementById('map'), {
			zoom: 4,
			center: uluru
		});
		
		var marker = new google.maps.Marker({ 
			position: uluru,
			map: map
		}); 
	}	
	 
})();  