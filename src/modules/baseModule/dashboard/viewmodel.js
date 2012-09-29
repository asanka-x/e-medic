define([], function () {

    var ViewModel = function (moduleContext) {

        var self = this;
        
		this.renderComponents=function(){
			//$("#myButton").jqxButton({ width: '120px', height: '35px', theme: 'darkblue'});
			$('#list').jqxListMenu({ width: '100%', showHeader: true, showBackButton: true, showFilter: false });
		};
    };
    
    return ViewModel;
});
