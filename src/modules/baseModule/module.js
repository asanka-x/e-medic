define(['Boiler', './dashboard/component', './language/component', './footer/component'], function(Boiler, DashBoardComponent, LanguageComponent, FooterComponent) {

    var Module = function(globalContext) {
        var context = new Boiler.Context(globalContext);

        //scoped DomController that will be effective only on $('#page-content')
        var controller = new Boiler.DomController($('#page-content'));
        //add routes with DOM node selector queries and relevant components
        controller.addRoutes({
            ".language" : new LanguageComponent(context),
            ".footer" : new FooterComponent(context)
        });
        controller.start();

        //the landing page should respond to the root URL, so let's use an URLController too
        var controller = new Boiler.UrlController($(".appcontent"));
        controller.addRoutes({
            "/" : new DashBoardComponent(context)
        });
        controller.start();
    };

    return Module;

});
