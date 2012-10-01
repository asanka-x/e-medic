define([], function() {

	var ViewModel = function(moduleContext) {

		var self = this;
		var map1, latlng1, options1;
		this.initialize = function() {
			latlng1 = new google.maps.LatLng(40.716948, -74.003563);
			options1 = {
				zoom : 14,
				center : latlng1,
				mapTypeId : google.maps.MapTypeId.ROADMAP
			};
			map1 = new google.maps.Map(document.getElementById("map1"), options1);
		};

	};

	return ViewModel;
});
