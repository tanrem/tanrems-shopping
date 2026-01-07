 const productList = document.getElementById("product_list");

 function getCart(){
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart (cart){
  localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCartCount() {
    const cart=getCart();
  const cartCount = document.getElementById("cart-count");
  if (cartCount) {
    const totalItems=cart.reduce((sum,item)=>sum+item.qty,0);
    cartCount.textContent = totalItems;
  }
}

function addToCart(productId){
  let cart=getCart();
  let existing = cart.find(item => item.id === productId);
if(existing){
  existing.qty++;
}else{
  cart.push({id:productId,qty:1});
}
saveCart(cart);
updateCartCount();
}




  if (productList && typeof products !== "undefined") {
    productList.innerHTML = "";
    products.forEach(product => {
      productList.innerHTML += `
        <div class="product">
          <img src="images/products/${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <p>${product.price.toLocaleString()} تومان</p>
          <a href="product.html?id=${product.id}">مشاهده جزئیات</a>
          <button class="add-to-cart" data-id=${product.id}>افزودن به سبد خرید</button>
        </div>
      `;
    });
  }

  // ---------- دکمه افزودن به سبد ----------
  document.body.addEventListener("click",function(e){
    if (e.target.classList.contains("add-to-cart")) {
      const productId= Number(e.target.dataset.id);
      addToCart(productId);
    }
  });

      updateCartCount();





