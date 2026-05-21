
function addToCart(product){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product Added to Cart");
}

function loadCart(){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let output = "";
    cart.forEach((item,index)=>{
        output += `<p>${item} <button onclick="removeItem(${index})">Remove</button></p>`;
    });
    document.getElementById("cartItems").innerHTML = output;
}

function removeItem(index){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index,1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}