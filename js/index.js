// Ambil data dari script JSON
const data = JSON.parse(document.getElementById("productData").textContent);

// Ambil elemen kontainer
const productsContainer = document.getElementById("products");

// Looping melalui setiap produk untuk membuat kartu produk
data.colorpages.forEach((product) => {
  const productCard = `
      <div class="col">
        <div class="card text-center">
          <img
            src="assets/img/satuan/${product.image}"
            class="card-img-top"
            alt="${product.title}"
          />
          <div class="card-body">
            <p class="category">${product.category}</p>
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">Rp.${product.harga.toLocaleString("id-ID")}</p>
            <a href="${
              product.link
            }" class="btn btn-product">Beli untuk Si Kecil</a>
          </div>
        </div>
      </div>
    `;
  // Tambahkan kartu produk ke dalam kontainer
  productsContainer.innerHTML += productCard;
});
