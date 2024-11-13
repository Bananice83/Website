// Ambil data dari script JSON
const data = JSON.parse(document.getElementById("productData").textContent);

// Ambil elemen kontainer
const productsContainer = document.getElementById("products");

// Looping melalui setiap produk untuk membuat kartu produk
data.colorpages.forEach((product) => {
  const productCard = `
      <div class="col-6 col-md-4 col-lg-3" >
        <div class="card text-center" data-category="${product.category}">
          <img
            src="../assets/img/Bundle Cover/${product.image}"
            class="card-img-top"
            alt="${product.title}"
          />
          <div class="card-body">
            <p class="category">${product.category}</p>
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">Rp.${product.harga.toLocaleString("id-ID")}</p>
            <a href="${
              product.link
            }" class="btn btn-product" target="_blank">Beli untuk Si Kecil</a>
          </div>
        </div>
      </div>
    `;
  // Tambahkan kartu produk ke dalam kontainer
  productsContainer.innerHTML += productCard;
});

const searchInput = document.getElementById("searchInput");
const itemsProduct = document.querySelectorAll(".row-product .col-6");

searchInput.addEventListener("input", (e) => filterData(e.target.value));

function filterData(search) {
  itemsProduct.forEach((item) => {
    const categoryData = item
      .querySelector(".card")
      .dataset.category.toLowerCase();
    const titleText = item.querySelector(".card-title").innerText.toLowerCase();

    // Cek apakah kata pencarian ada di data-category atau di title
    if (
      categoryData.includes(search.toLowerCase()) ||
      titleText.includes(search.toLowerCase())
    ) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

// category
const filterSelect = document.getElementById("categoryFilter");
const filterCards = document.querySelectorAll("#products .card");

const filterCategory = () => {
  const selectedCategory = filterSelect.value;

  filterCards.forEach((card) => {
    // Get categories from the data-category attribute and convert it to an array
    const cardCategories = card.dataset.category
      .split(",")
      .map((cat) => cat.trim());

    // Check if the selected category matches any of the card's categories
    if (
      selectedCategory === "all" ||
      cardCategories.includes(selectedCategory)
    ) {
      card.parentElement.style.display = ""; // Show the card's column
    } else {
      card.parentElement.style.display = "none"; // Hide the card's column
    }
  });
};

// Add the change event listener to the select element
filterSelect.addEventListener("change", filterCategory);
