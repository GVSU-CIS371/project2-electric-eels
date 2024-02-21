import { Product, products } from "./data";


//Generate HTML for a single product
function generateProductHTML(product: Product): string {
    return `<div class="store-item">
              <img src="${product.image}" alt="${product.name}" />
              <p>${product.name}</p>
              <p>${product.description}</p>
              <span>${product.rating}/5</span><span>$${product.price}</span><span>stock ${product.stock}</span>
            </div>`;
}

//Ensure that the products are rendered in <main id ="main-container"> within index.html
function renderProducts(prods: Product[]): void {
    for(let i = 0; i < prods.length; i++){
        let productHTML = generateProductHTML(prods[i]);
        let mainContainer = document.getElementById("main-container");
        if(mainContainer !== null){
            mainContainer.innerHTML += productHTML;
        }
    }
}

//Fetch all products of a given category and render the selected products into HTML
function getByCategory(category: string): void {
    let filterProducts = products.filter((prod) => prod.category === category);
    let mainContainer = document.getElementById("main-container");
    //if(mainContainer !== null){
        mainContainer.innerHTML = "";
    //}

    for(let i = 0; i < filterProducts.length; i++){
        let productHTML = generateProductHTML(filterProducts[i]);

        if(mainContainer !== null){
            mainContainer.innerHTML += productHTML;
        }
    }
}

//Fetch all products with a rating greater than minRating and render the selected products into HTML
function getByRating(minRating: number): void {
    let filterProducts = products.filter((prod) => prod.rating > minRating);
    let mainContainer = document.getElementById("main-container");
    //if(mainContainer !== null){
        mainContainer.innerHTML = "";
    //}

    for(let i = 0; i < filterProducts.length; i++){
        let productHTML = generateProductHTML(filterProducts[i]);

        if(mainContainer !== null){
            mainContainer.innerHTML += productHTML;
        }
    }
}

export { renderProducts, getByCategory, getByRating };