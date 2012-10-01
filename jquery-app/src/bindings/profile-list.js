$(document).ready(function() {
	$.getJSON('src/bindings/dummyServer/test.json', function(data) {
		var items = [];

		$.each(data, function(key, val) {
			items.push('<li id="' + key + '">' + val + '</li>');
		});

		$('<ul />', {
			'class' : 'my-new-list',
			html : items.join('')
		}).appendTo('#list-content');
		
		$('.my-new-list').listview();
	});
});
