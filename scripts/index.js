// Store cart items in local storage with key: "items"
const url = ` https://grocery-masai.herokuapp.com/items`;

fetch(url)
.then(function(res){
    return res.json();
})
.then(function(res){
    console.log(res);
    display(res.data);
})

let arrItems =JSON.parse(localStorage.getItem("items"))||[]; 
let total_items = arrItems.length;
let item_div = document.querySelector("#item_count");
item_div.innerText=total_items;


function display(data){
    data.map(function(ele){

        var div = document.createElement("div");        

        let itemImage = document.createElement("img");
        itemImage.src=ele.image;

        let itemName = document.createElement("h2");
        itemName.innerText=ele.name;

        let itemPrice = document.createElement("h2")
        itemPrice.innerText= ele.price;

        let addBtn = document.createElement("button");
        addBtn.innerText="Add to Cart";
        addBtn.id="add_to_cart";
        addBtn.addEventListener("click",function(){
            saveToCart(ele);
        })        

        div.append(itemImage,itemName,itemPrice,addBtn);
        document.querySelector("#items").append(div);
    })
}

// let arrItems =JSON.parse(localStorage.getItem("items"))||[]; 

function saveToCart(ele){      
    arrItems.push(ele);
    localStorage.setItem("items",JSON.stringify(arrItems));
    let total_items = arrItems.length;
    let item_div = document.querySelector("#item_count");
    item_div.innerText=total_items;
}


