fetch("http://localhost:8088/food")
    .then(foods => foods.json())
    .then(parsedFoods => {        
        parsedFoods.forEach(myList(Linguine, 1))
            console.log(myList)
                        
           function myList(item, index) {
            // Print foods to DOM
            document.querySelector("#content-container").innerHTML += index + ":" + item + "<br>"

           }
           
            // HTML container
        //     let foodList = (list) => {
        //     return `
        //     <h2>Food List</h2>

        //     <div id="food-container">
        //         ${list}
        //     </div>
        //     `
        // }

    })     
    