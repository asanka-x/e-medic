define(['Boiler', './settings', './addBaby/component', './addFamily/component', './addPregnant/component'], function(Boiler, settings, AddBaby, AddFamily,AddPregnant) {

	var Module = function(globalContext) {

		var context = new Boiler.Context("profileModule", globalContext);
		context.addSettings(settings);

		var controller = new Boiler.UrlController($(".appcontent"));
		controller.addRoutes( {
			'add-baby' : new AddBaby(context),
			'add-family' : new AddFamily(context),
			'add-pregnant' : new AddPregnant(context)
		});
		controller.start();

	};

	return Module;

});
