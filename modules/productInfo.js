 class ProductInfo {
    fetchInfo() {
        fetch('https://raw.githubusercontent.com/Oonoo19/TLJ-Web-NUM/main/data/product.json')
        .then(response => response.json())
        .then(data => {
            console.log("hey")
            const productContainer = document.querySelector('#product');
            console.log(productContainer);
            data.forEach(product => {
                console.log(product.name);
                const productElement = document.createElement('div');
                productElement.innerHTML = `
                    <img src=${product.image} alt="bread">
                    <h2>${product.name}</h2>
                    <p>${product.price}</p>
                    <p>${product.description}</p>
                `;
                productContainer.appendChild(productElement);
            });
        })
        .catch(error => console.error(error));
    }
}
class Product extends HTMLElement {
    constructor(){
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const productId = this.getAttribute('product-id');
        const category = "";
        const breadButton = this.getElementsByClassName('bread');
        const cakeButton = this.getElementsByClassName('cake');
        breadButton.addEventListener('click', () => {category = 'bread'});
        cakeButton.addEventListener('click', () => category = 'cake');
        fetch('https://raw.githubusercontent.com/Oonoo19/TLJ-Web-NUM/main/data/product.json')
        .then(response => response.json())
        .then(products => {
            products.forEach(product =>{
                console.log(product.id);
            });
            const product = products.find(p => p.id == productId);
            const template = document.createElement('template');
            template.innerHTML = `
            <style>
                .product {
                border: 1px solid #ccc;
                padding: 10px;
                }
                h3 {
                margin: 0;
                }
                p {
                margin: 0;
                }
                button {
                margin-top: 10px;
                }
            </style>
            <div class="product" data-id="${product.id}">
                <img src=${product.image} alt="bread">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
                <button class="add-to-cart">Add to Cart</button>
            </div>
            `;
            template.content.querySelector('.add-to-cart').addEventListener('click', () => {
                const event = new CustomEvent('add-to-cart', { detail: { id: product.id }});
                this.dispatchEvent(event);
            });
            shadow.appendChild(template.content.cloneNode(true));
        })
        .catch(error => console.error(error));
    }
}
customElements.define('product-item', Product);
export default Product;
