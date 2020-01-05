'use strict';

// var elem = document.querySelector('.carousel');
// var flkty = new Flickity( elem, {
//   // options
//   cellAlign: 'left',
//   contain: true
// });

// external js: flickity.pkgd.js

var flkty = new Flickity('.carousel');

var progressBar = document.querySelector('.progress-bar');

flkty.on( 'scroll', function( progress ) {
	progress = Math.max( 0, Math.min( 1, progress ) );
	progressBar.style.width = progress * 100 + '%';
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


initMap();
