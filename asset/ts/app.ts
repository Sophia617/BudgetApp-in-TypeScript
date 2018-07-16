document.addEventListener("DOMContentLoaded", function(event) {
    
    initialiseDOM();
    let appController = new Controller();
    
    // Variable from User Input Field
    let type, description, value;
    
    // When click Add button --> Add the Item to the ArrayList
    addBTN.addEventListener('click', function(){
        type = addType.value;
        description = descTXTBOX.value;
        value = parseFloat(valTXTBOX.value);
        appController.addItem(type, description, value);
    });
    
    // When Delete Button Clicked from --> Remove the Item from the List
    // Use Event Delegation to access deleteBTN that does not exist when page loaded (so cannot bind it to addEventListener)
    container.addEventListener('click', function(event){
        // Get DOM element ID for the item
        let idElement = event.target.parentNode.parentNode.parentNode.parentNode.id;
        appController.removeItem(idElement);
    });
});
