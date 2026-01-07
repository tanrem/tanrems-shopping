const params = new URLSearchParams(window.location.search);
const productId = Number(params.get("id"));


const product = products.find(p => p.id === productId);
const container = document.getElementById("product-detail");

if (!product) {
  container.innerHTML = "<p>محصول پیدا نشد</p>";
} else {
  container.innerHTML = `
   <div class="product-detail-box">
     <div class="product-images">
       ${product.images.map(img=> `
        <img src="images/products/${img}" alt="${product.name}">
     `).join("")}
     </div>
     <div class="product-info">
       <h2>${product.name}</h2>
    <p>${product.description || ""}</p>
    <p>قیمت${product.price.toLocaleString()} تومان</p>

    <button class ="add-to-cart" data-id="${product.id}">
      افزودن به سبد خرید
    </button>
      </div>
   </div>
  `;
  };
  /*const addBtn = document.getElementById("add-to-car");
  if(addBtn){
    addBtn.addEventListener("click", function() { 
      addToCart(product.id);
  });
}*/
updateCartCount();
