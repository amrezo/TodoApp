// Clear the input field.
function clearInput() {
	document.getElementById("todofield").value = "";
}

//Array to store the to-do items.
var items = [];

//Function used to add inputed to-do items into the array created above.
function addToItemArray() {
	items.push(document.getElementById("todofield").value);
}

// Function used to save input value to array and add to the list underneath on pressing ENTER 
var inputField = document.getElementById("todofield");
	inputField.onkeyup = function(e) {
		if((e.keyCode == 13) && (inputField.value != "")) {
			addToItemArray(); // Add inut value to array
			addToList(); // Add input value to list underneath
			inputField.value = ""; // Reset input field
	}
}

// Add inputed todo-items into generated list items underneath
// and add on-click event listeners to these to-do list items.
function addToList() {
	var list = document.getElementById("todolist");
	var item = document.createElement("li");
	item.className = "item-unselected"; //Assign class "item-unselected" to newly created list item
	item.innerHTML = inputField.value + "<i class='fa fa-trash' aria-hidden='true' onclick='deleteItem()'></i>";
	list.appendChild(item);
	item.addEventListener("click", replaceClassForItem); // Add 'click' event listener and run replaceClassForItem when item clicked.
}


// Replace the class name from selected item to unselected item 
// and vice-versa to trigger CSS strikethrough effect (marked as done)
function replaceClassForItem() {
	//Check to see if the item's class is unselected
	if (this.className == "item-unselected") {
		this.classList.remove("item-unselected"); //Remove the item-unselected class
		this.classList.add("item-selected");      // Add the items selected class

	//Check to see if the item is already selected
	} else if (this.className == "item-selected") {
		this.classList.remove("item-selected"); //Remove the item-selected class
		this.classList.add("item-unselected");  // Add item-unselected class
	}
}

// Function to delete item from list when delete icon is clicked
function deleteItem() {
	var listItems = document.getElementsByTagName("li");
	for (var i = 0; i < listItems.length; i++) {
  		listItems[i].onclick = function() {
  			this.parentNode.removeChild(this);
  		}
  	}
}

// Function to clear the unordered list
function clearList() {
	var list = document.getElementById("todolist")
	list.innerHTML = "";
}

