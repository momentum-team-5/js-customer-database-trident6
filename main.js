console.log('mainjs linked')

// select the target element on the page
let target = document.querySelector('.main-container')

// create a ul
let list = document.createElement('ul')

// // append the ul to the dom

target.appendChild(list)

for (let customer of customers) {
    // create a li
    let listItem = document.createElement('li')
    console.log(listItem)

    // create an image element

    let customerPicture = document.createElement('img')
    customerPicture.classList.add('customerPicture')
    customerPicture.src = customer.picture.medium
    listItem.appendChild(customerPicture)

    // create a p element for name

    let itemNameEl = document.createElement('p')
    fullName = `${customer.name.first} ${customer.name.last}`
    itemNameEl.innerText = fullName
    itemNameEl.classList.add('customer-name')
    listItem.appendChild(itemNameEl)
    list.appendChild(listItem)



}






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