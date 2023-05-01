import html from './utility.js'
export default class Cart extends HTMLElement {
    constructor(){
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this.cart = [];
    }
    connectedCallback() {
        this.render(this.cart);
    }

    render(products) {
        this._shadowRoot.innerHTML = `
        <style>
            
        </style>
        <ul class="product-list">
        ${cart.map(product => `
          <each-product name="${product.name}" description="${product.description}" 
          image="${product.image}" price="${product.price}" product="${product}"></each-product>
          `).join('')}
          </ul>
        `;
    }
    addProduct(product){
        console.log("clicked");
        this.cart.push(product);
        this.render(this.cart);
    }

}
window.customElements.define('cart-products', Cart);