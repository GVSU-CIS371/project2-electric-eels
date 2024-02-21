import { Product, products } from "./data";

function generateProductHTML(product: Product): string {
    return `<div class="store-item">
              <img src="${product.image}" alt="${product.name}" />
              <p>${product.name}</p>
              <p>${product.description}</p>
              <span>${product.rating}/5</span><span>$${product.price}</span><span>stock ${product.stock}</span>
            </div>`;
}

function renderProducts(prods: Product[]): void {
    // your code
}

function getByCategory(category: string): void {
    // your code
}

function getByRating(minRating: number): void {
    // your code
}

export { renderProducts, getByCategory, getByRating };