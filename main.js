console.log('mainjs linked')

// select the target element on the page
let target = document.querySelector('.main-container')

// create a ul
let list = document.createElement('ul')

// let customerPicture = document.createElement('img')
// customerPicture.innerHTML = customers[0].picture.medium
// customerPicture.appendChild(itemNameEl)

// // append the ul to the dom

target.appendChild(list)

for (let customer of customers) {
    // create a li
    let listItem = document.createElement('li')
    console.log(listItem)

    // create a p element

    let itemNameEl = document.createElement('p')

    itemNameEl.innerText = customers[0].name.first
    listItem.appendChild(itemNameEl)
    list.appendChild(listItem)
}

//     let customerPicture = document.createElement('img')
//     customerPicture.innerHTML = customers[0].picture.medium
//     listItem.appendChild(itemNameEl)
// 




// create and image element


// use the data from the object for the information in the element






// customer[0].picture.medium

//     "https://randomuser.me/api/portraits/med/men/0.jpg"

// customers[0].name.first, customer[0].name.last

// customers[0].email

// customers[0].location.street
// customers[0].location.city, customers[0].location.state,
//     customers[0].location.postcode

// customers[0].dob

// Customer since customers[0].registered