var SimpleListModel = function(items) {
    this.items = ko.observableArray(items);
    this.itemToAdd = ko.observable("");
    this.addItem = function() {
        if (this.itemToAdd() != "") {
            this.items.push(this.itemToAdd()); // Adds the item. Writing to the "items" observableArray causes any associated UI to update.
            this.itemToAdd(""); // Clears the text box, because it's bound to the "itemToAdd" observable
        }
    }.bind(this);  // Ensure that "this" is always this view model
    
    this.itemToRemove = ko.observable("");
    
    this.removeItem = function(ob){
    	while (ob.selectedIndex != -1)
    	{
        	if (ob.selectedIndex != 0) 
        		ob.options[ob.selectedIndex]=null;
        		
        	ob.options[ob.selectedIndex].selected = false;
    	}
    }
};
 
ko.applyBindings(new SimpleListModel(["item1", "item2"]));​