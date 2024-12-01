let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'DOG CHAIN',
        image: '../assets/images/s1.jpg',
        price: 450
    },
    {
        id: 2,
        name: 'DOG BELT',
        image: '../assets/images/s2.jpg',
        price: 400
    },
    {
        id: 3,
        name: 'CAT TIE',
        image: '../assets/images/s3.jpg',
        price: 300
    },
    {
        id: 4,
        name: 'CAT HOUSE',
        image: '../assets/images/s4.jpg',
        price: 950
    },
    {
        id: 5,
        name: 'CAT BELT',
        image: '../assets/images/s6.jpg',
        price: 300
    },
    {
        id: 6,
        name: 'RABBIT HOUSE',
        image: '../assets/images/s7.png',
        price: 1200
    },
    {
        id: 7,
        name: 'HAMSTER BED',
        image: '../assets/images/s8.png',
        price: 1200
    },
    {
        id: 8,
        name: 'RABBIT DRESS',
        image: '../assets/images/s9.png',
        price: 750
    },
    {
        id: 9,
        name: 'DOG HODDIE',
        image: '../assets/images/s16.jpg',
        price: 1500
    },
    {
        id: 10,
        name: 'BALL',
        image: '../assets/images/s19.png',
        price: 200
    },
    {
        id: 11,
        name: 'CAT BELL',
        image: '../assets/images/s20.jpg',
        price: 300
    },
    {
        id: 12,
        name: 'DOG BELT',
        image: '../assets/images/s18.jpg',
        price: 1500
    },
    {
        id: 13,
        name: 'PEDIGREE',
        image: '../assets/images/product-2.jpg',
        price: 1800
    },
    {
        id: 14,
        name: 'VITAPOOL',
        image: '../assets/images/product-3.jpg',
        price: 900
    },
    {
        id: 15,
        name: 'HIMALAYA DOG FOOD',
        image: '../assets/images/s10.png',
        price: 1000
    },
    {
        id: 16,
        name: 'SMARTHEART',
        image: '../assets/images/s11.png',
        price: 850
    },
    {
        id: 17,
        name: 'TUNAI',
        image: '../assets/images/s12.png',
        price: 1300
    },
    {
        id: 18,
        name: 'MEOW MIX',
        image: '../assets/images/s13.jpg',
        price: 1000
    },
    {
        id: 19,
        name: 'CAT BOWL',
        image: '../assets/images/s21.jpg',
        price: 499
    },
    {
        id: 20,
        name: 'TOY MOUSE',
        image: '../assets/images/s23.png',
        price: 899
    },
    {
        id: 21,
        name: 'DOG BOWL',
        image: '../assets/images/s22.jpg',
        price: 399
    },


];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}