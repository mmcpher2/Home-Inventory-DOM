
// Parsing string from local storage back into objects
const HomeInventory = JSON.parse(localStorage.getItem("homeInventory"))

// Creating object to insert new HTML into current HTML
const inventoryElement = document.getElementsByClassName("inventory")[0]

// For-In loop to search for each Key in each HomeInventory Object
for (key in HomeInventory) {

    // Storing each Key in currentType object
    const currentType = HomeInventory[key]
    
    // For loop through currentType to pull each item
    for (let loopTracker = 0; loopTracker < currentType.length; loopTracker += 1) {

        // Storing each item in currentItem
        let currentItem = currentType[loopTracker]

        // Inserting HTML below into the Class("inventory") in the current HTML
        inventoryElement.innerHTML +=
        `<section class="${key}">
        
            <h2 class="${currentItem.name}">
            ${currentItem.name}            
            </h2>
        
            <div class="${currentItem.location}">
                Location: ${currentItem.location}
            </div>
        
            <div class="${currentItem.description}">
            ${currentItem.description}            
            </div>
        
        </section>`
        
    }
}