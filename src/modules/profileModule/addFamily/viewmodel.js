define([], function() {

	var ViewModel = function(moduleContext) {

		this.wifeName = ko.observable("");
		this.husbandName = ko.observable("");
		this.marriedAge = ko.observable("");
		this.education = ko.observable("");
		this.address = ko.observable("");
		this.occupation = ko.observable("");

		var self = this;
		this.renderComponents = function() {
			//$("#myButton").jqxButton({ width: '120px', height: '35px', theme: 'darkblue'});
			$("#dtiBirthDate").jqxDateTimeInput({ width : '162px', height : '25px', theme :'shinyblack'});
			
			$("#jqxscrollbar").jqxScrollBar({ width: 250, theme:'shinyblack', height: 18 });
			$("#jqxverticalscrollbar").jqxScrollBar({ width: 18, height: 250,theme :'shinyblack', vertical: true });
			
			$("#jqxYesRadioButton").jqxRadioButton({ width: 120,theme :'shinyblack', height: 25 });
            $("#jqxNoRadioButton").jqxRadioButton({ width: 120, height: 25,theme :'shinyblack' });
            // bind to change event.
            $("#jqxYesRadioButton").bind('change', function (event) {
                var checked = event.args.checked;
                //alert('jqxYesRadioButton checked: ' + checked);
            });
            $("#jqxNoRadioButton").bind('change', function (event) {
                var checked = event.args.checked;
                //alert('jqxNoRadioButton checked: ' + checked);
            });
            
            $("#dtiRagisterDate").jqxDateTimeInput({ width : '162px', height : '25px', theme :'shinyblack'});
			//$("#jqxverticalscrollbar").bind('valuechanged', function (event) {
            //  $('#VerticalDiv').html('Vertical (' + parseInt(event.currentValue) + ')');
            //});
			// init buttons.
			//$("#getDateButton").jqxButton();
			//$("#setDateButton").jqxButton();
			// set new date.
			//$("#setDateButton").click(function() {
			//	var date = new Date();
			//	date.setFullYear(2012, 5, 6);
			//	$('#jqxdatetimeinput').jqxDateTimeInput('setDate', date);
			//});
			// get date.
			//$("#getDateButton").click(function() {
			//	var date = $('#jqxdatetimeinput').jqxDateTimeInput('getDate');
			//	alert(date);
			//});
		};

	};

	return ViewModel;
});
