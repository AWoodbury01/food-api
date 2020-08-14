function printRestaurant (restaurantName){
    return `
    `<p>${restaurantName}</p>``
}

fetch('http://localhost:3000/restaurants')
.then(r => r.json())
.then(restaurants => {
    restaurants.forEach(element => {
        // If statement matching user search to restaurant name            
        document.
        querySelector("#content-container").
        innerHTML += 
    })})