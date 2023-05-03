import html from './utility.js'
export default class Cart extends HTMLElement {
    constructor(cart){
        super();
        const storedData = localStorage.getItem('cartData');
        if(storedData){
            this.cart = JSON.parse(storedData);
        }else{
            this.cart = [];
        }
        console.log(this.cart);
    }
    connectedCallback() {
        this.render(this.cart);
    }

    render(cart) {
        this.innerHTML = `
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