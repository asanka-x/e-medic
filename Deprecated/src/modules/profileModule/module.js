define(['Boiler', './settings', './addBaby/component', './addFamily/component', './addPregnant/component','./listProfiles/component'], function(Boiler, settings, AddBaby, AddFamily,AddPregnant,ListProfile) {

	var Module = function(globalContext) {

		var context = new Boiler.Context("profileModule", globalContext);
		context.addSettings(settings);

		var controller = new Boiler.UrlController($(".appcontent"));
		controller.addRoutes( {
			'add-baby' : new AddBaby(context),
			'add-family' : new AddFamily(context),
			'add-pregnant' : new AddPregnant(context),
			'profiles':new ListProfile(context)
		});
		controller.start();

	};

	return Module;

});
