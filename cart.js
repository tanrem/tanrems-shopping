

const cartItemsContainer = document.getElementById("cart-items");
const totalPriceEl = document.getElementById("total");


function renderCart(){
  if (typeof products === "undefined") {
  cartItemsContainer.innerHTML = "<p>خطا در بارگذاری محصولات</p>";
  return;
}

  const cart=getCart();
cartItemsContainer.innerHTML="";
totalPriceEl.textContent="";

if (cart.length === 0) {
  cartItemsContainer.innerHTML = "<p>سبد خرید خالی است</p>";
  updateCartCount();
  return;
} 

 let total = 0;

  cart.forEach(item=> {
  const product = products.find(p =>p.id === item.id );
    if (!product) return;
    
    total += product.price*item.qty;

    cartItemsContainer.innerHTML +=`
    <div class="cart-item">
    <img src="images/products/${product.image}"  alt="${product.name}">
    <h4>${product.name}</h4>
    <p>تعداد:${item.qty}</p>
    <p>قیمت واحد:${product.price.toLocaleString()}تومان</p>
    <p>قیمت کل: ${(product.price * item.qty).toLocaleString()} تومان</p>
    
    <button class="remove-btn" data-id=${item.id}>حذف یکی</button>
    </div>
    
    `;
  });

  totalPriceEl.textContent = "مجموع: " + total.toLocaleString() + " تومان";
  updateCartCount();
  } 

  document.addEventListener("click", e=>{
    if(!e.target.classList.contains("remove-btn"))return;

      let id=Number(e.target.dataset.id);
      let cart=getCart();
      let item = cart.find(p => p.id === id);
      if(!item) return;

         if(item.qty >1){
          item.qty--;
         }else{
          cart=cart.filter(p=>p.id!==id);
         }

   saveCart(cart);
  renderCart();
});

renderCart();