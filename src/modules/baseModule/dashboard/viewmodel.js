define([], function () {

    var ViewModel = function (moduleContext) {

        var self = this;
        
		this.renderComponents=function(){
			$("#myButton").jqxButton({ width: '120px', height: '35px', theme: 'darkblue'});
		};
    };
    
    return ViewModel;
});
