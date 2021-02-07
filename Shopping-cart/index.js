
let cart = {};
if(localStorage.getItem("cart") != null) {
    cart = JSON.parse(localStorage.getItem("cart"));
}

const productContainer = document.getElementById("products-container");

function showProducts(index) {
    const cardDiv = document.createElement("div");
    cardDiv.className = "card col-4";

    const img = document.createElement("img");
    img.className = "card-img-top";
    img.setAttribute("src", "images/laptop.jpeg")

    const cardBodyDiv = document.createElement("div");
    cardBodyDiv.className = "card-body";

    const productHeading = document.createElement("h5");
    productHeading.className = "card-title";
    productHeading.innerText = products[index].name;

    const productDetails = document.createElement("p");
    productDetails.className = "card-text";
    productDetails.innerText = products[index].price;

    const addToCartBtn = document.createElement("button");
    addToCartBtn.className = "btn btn-primary";
    addToCartBtn.innerText = "Add to Cart";
    addToCartBtn.addEventListener("click", function () {
        const productId = products[index].id;
        if(cart.hasOwnProperty(productId)) {
            cart[productId] += 1;
        } else {
            cart[productId] = 1;
        }
        
        saveCart();
        refreshAllProducts();
        console.log(1)
    }) 

    const cartDetails = document.createElement("span");
    if(cart.hasOwnProperty(products[index].id)){
        cartDetails.innerText = cart[products[index].id] + " in Cart";
    }

    cardBodyDiv.appendChild(productHeading);
    cardBodyDiv.appendChild(productDetails);
    cardBodyDiv.appendChild(addToCartBtn);
    cardBodyDiv.appendChild(cartDetails);

    cardDiv.append(img);
    cardDiv.append(cardBodyDiv);

    productContainer.append(cardDiv);
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function refreshAllProducts() {
    productContainer.innerHTML = ""
    for(let i = 0; i < products.length; i++) {
        showProducts(i);
        
    }
}
refreshAllProducts()
