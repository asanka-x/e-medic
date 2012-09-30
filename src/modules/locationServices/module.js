define(['Boiler', './settings', './googleMaps/component'], function(Boiler, settings, GoogleMaps) {

	var Module = function(globalContext) {

		var context = new Boiler.Context("sampleModule1", globalContext);
		context.addSettings(settings);

		var controller = new Boiler.UrlController($(".appcontent"));
		controller.addRoutes( {
			'map' : new GoogleMaps(context)
		});
		controller.start();

	};

	return Module;

});
