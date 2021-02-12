const mainproducts=document.getElementById("products");
console.log("bsd");



let cart={};

if(localStorage.getItem("cart") != null) {
  cart = JSON.parse(localStorage.getItem("cart"));
}

function showProducts(index){
    const carddiv=document.createElement('div');
    carddiv.className="card col-4";

    const image=document.createElement('img');
   image.setAttribute('src',productsarray[index].image);
   //image.innerText=productsarray[index].image;
    image.className="card-image-top";

    const cardbodydiv=document.createElement('div');
    cardbodydiv.className="card-body";
    
    const title=document.createElement('h5');
    title.innerHTML=productsarray[index].name;
    title.className="card-title";

    const details=document.createElement('div');
    details.innerText=productsarray[index].detail;
    details.className="card-text"
        
    const price=document.createElement('h6');
    price.innerText=productsarray[index].price;


    const cartbtn=document.createElement('button');
    cartbtn.innerText="Add to Cart";
    cartbtn.className="btn btn-primary";
    cartbtn.addEventListener("click",function(){
        const productId=productsarray[index].id;
        if(cart.hasOwnProperty(productId)){

        cart[productId]+=1;}
        else{
            cart[productId]=1;
        }
        console.log(cart);
        saveCart();
        refreshallproducts();
    })

    const openbtn=document.createElement('button');
    openbtn.innerText="Open>";
    openbtn.className="btn btn-primary";

    const cartdetails=document.createElement("span");
    if(cart.hasOwnProperty(productsarray[index].id)){
    cartdetails.innerText=" "+cart[productsarray[index].id]+" in Cart";
    }

    cardbodydiv.appendChild(title);
    cardbodydiv.appendChild(details);
    cardbodydiv.appendChild(price);
    cardbodydiv.appendChild(openbtn);
    cardbodydiv.appendChild(cartbtn);
   cardbodydiv.appendChild(cartdetails);
   

    carddiv.append(image);
    carddiv.append(cardbodydiv);
    mainproducts.append(carddiv);
    
}


function saveCart() {
    localStorage.setItem("cart",JSON.stringify(cart))
}

function refreshallproducts(){
    mainproducts.innerHTML="";
    for(let i=0;i<productsarray.length;i++){
    showProducts(i);
}
};

refreshallproducts();
console.log(localStorage.getItem("cart") );