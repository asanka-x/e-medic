define([], function() {

	var ViewModel = function(moduleContext) {

		var self = this;

		var source = ["Affogato", "Americano", "Bicerin", "Breve", "Café Bombón", "Café au lait", "Caffé Corretto", "Café Crema", "Caffé Latte"];
		// Create a jqxListBox
		$("#jqxlistbox").jqxListBox({
			source : source,
			width : '100%',
			height : '200px',
			theme: 'summer',
			touchMode:'true'
		});
		// disable the sixth item.
		$("#jqxlistbox").jqxListBox('disableAt', 5);
		// bind to 'select' event.
		$('#jqxlistbox').bind('select', function(event) {
			var args = event.args;
			var item = $('#jqxlistbox').jqxListBox('getItem', args.index);
			$("#eventlog").html('Selected: ' + item.label);
		});

		$("#button").jqxButton();
		$("#button").click(function() {
			var item = $('#jqxlistbox').jqxListBox('getSelectedItem');
			if (item != null) {
				alert(item.label);
			}
		});

		$("#jqxButton1").jqxLinkButton({
			width : '30%',
			height : '40',
			theme: 'summer'
		});
		$("#jqxButton2").jqxLinkButton({
			width : '30%',
			height : '40'
		});
		$("#jqxButton3").jqxLinkButton({
			width : '30%',
			height : '40'
		});
		$("#jqxButton4").jqxLinkButton({
			width : '30%',
			height : '40'
		});
		$("#jqxButton5").jqxLinkButton({
			width : '30%',
			height : '40'
		});
		$("#jqxButton6").jqxLinkButton({
			width : '30%',
			height : '40'
		});

	}
	return ViewModel;
});
