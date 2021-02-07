const cartContainer = document.getElementById("cart-container");

let cart = {}

if(localStorage.getItem("cart") != null) {
    cart = JSON.parse(localStorage.getItem("cart"));
}
cartContainer.innerHTML = "";
for(key in cart) {
   let productName, productPrice;
   for(let i=0; i < products.length; i++){
     if(products[i].id === parseInt(key)){  
        productName = products[i].name;
        productPrice = products[i].price;
        cartContainer.innerHTML += "Name: " + productName;
        cartContainer.innerHTML += "Price: " + productPrice;
        cartContainer.innerHTML += "<br/> ";
        console.log(productPrice);
        console.log(productName);
    }
  }
}

