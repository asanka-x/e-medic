define(['Boiler', './settings', './departments/component', './clickCounter/component','./sampleDataList/component'], function(Boiler, settings, DepartmentComponent, ClickCounterComponent,SampleDataList) {

	var Module = function(globalContext) {

		var context = new Boiler.Context(globalContext);
		context.addSettings(settings);

		var controller = new Boiler.UrlController($(".appcontent"));
		controller.addRoutes( {
			//'departments/:name:' : new DepartmentComponent(context),
			//'clickcounter' : new ClickCounterComponent(context),
			"dataList1": new SampleDataList(context)
		});
		controller.start();

		var controller = new Boiler.UrlController($(".appcontent"));
		controller.addRoutes({
			"/" : new LandingPageComponent()
		});
		controller.start();
	};

	return Module;

});
