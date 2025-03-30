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