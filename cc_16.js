// task 2
function fetchProductsThen() {
    fetch('https://www.course-api.com/javascript-store-products')
.then(response => {
    if (!response.ok) {
        throw new Error('Error fetching products'); // error cause
    }
    return response.json(); // converting data to a response or effect
    })
    .then((products) => {
        products.forEach((product) => console.log(product.fields.name)); // logging products by name
    })
    .catch((error) => {
        console.error('Error fetching products:', error); // catching error of products
    });
}

// task 3
async function fetchProductsAsync() {
    try {
      const response = await fetch('https://www.course-api.com/javascript-store-products'); // fetching API data
      const products = await response.json(); // converting data to a response or effect
      displayProducts(products); // calling function
    } catch (error) {
          handleError(error); // catching error of products
        }
}

// task 4 
function displayProducts(products) {
    const container = document.getElementById('product-container');
    container.innerHTML = ''; // Clear previous content
  
    products.slice(0, 5).forEach((product) => {
      const { name, price, image } = product.fields; // product fields
  
      const productCards = document.createElement('div'); // Creating the product Cards
      productCards.setAttribute('class','product-card');
  
      const productName = document.createElement('h2'); // creating product name
      productName.setAttribute('class', 'product-name');
      productName.textContent = product.fields.name;
  
      const productPrice = document.createElement('p'); // creating product price
      productPrice.setAttribute('class', 'product-price' );
      productPrice.textContent = `$${(price/100).toFixed(2)}`;
  
      const productImage = document.createElement('img'); // creating product image
      productImage.src = image[0].url;
      productImage.alt = name;
  
      productCards.appendChild(productName); // appending product name
      productCards.appendChild(productPrice); // appending product price
      productCards.appendChild(productImage); // // appending product image

      container.appendChild(productCards); // appending product cards to container
    });
  }