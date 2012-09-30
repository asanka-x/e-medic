define([], function() {
	var ViewModel = function(moduleContext) {

		var self = this;

		//Implement the viewmodel here
		// Create Push Button.
		$("#jqxButton").jqxButton({
			width : '100%',
			height : '30'
		});

		// Create Disabled Button
		$("#jqxDisabledButton").jqxButton({
			disabled : true,
			width : '150',
			height : '25'
		});

		// Subscribe to Click events.
		$("#jqxButton").bind('click', function() {
			alert('Button Clicked');
		});

		// Create jqxPanel
		$("#jqxpanel").jqxPanel({
			width : '100%',
			height : '400'
		});

		$("#jqxdatetimeinput").jqxDateTimeInput({
			width : '250px',
			height : '25px'
		});
		// init buttons.
		//$("#getDateButton").jqxButton();
		//$("#setDateButton").jqxButton();
		// set new date.
		$("#setDateButton").click(function() {
			var date = new Date();
			date.setFullYear(2012, 5, 6);
			$('#jqxdatetimeinput').jqxDateTimeInput('setDate', date);
		});
		// get date.
		$("#getDateButton").click(function() {
			var date = $('#jqxdatetimeinput').jqxDateTimeInput('getDate');
			alert(date);
		});
	};
	return ViewModel;
});
