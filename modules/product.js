import html from './utility.js'
class Product extends HTMLElement {
    constructor(){
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
    }
    connectedCallback(){
        this._shadowRoot.innerHTML = `
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
            <ul class="product">
                <li>
                <h3>${this.getAttribute('name')}</h3>
                <img src="${this.getAttribute('image')}" alt="${this.getAttribute('name')}">
                <p>${this.getAttribute('description')}</p>
                <p>Price: ${this.getAttribute('price')}</p>
                <button class="add-to-cart" product-info="${this.getAttribute('product')}">Add to Cart</button>
                </li>
            </ul>
        `;
        
        const addToCartButtons = this._shadowRoot.querySelectorAll('.add-to-cart'); 
        addToCartButtons.forEach(button => button.addEventListener('click', () => {
            const event = new CustomEvent('add-to-cart', { detail: { info: button.getAttribute('product-info') }});
            const myCart = document.querySelector("cart-products");
            const newProduct = this.getAttribute('product');
            myCart.addProduct(this.getAttribute('product'));
        }));  
    }
}
window.customElements.define('each-product', Product);