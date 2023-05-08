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
          <each-product class="${product.id}" name="${product.name}" description="${product.description}" 
          image="${product.image}" price="${product.price}" product="${product}"></each-product>
          <button class="remove" id="${product.id}">remove</button>
          `).join('')}
        </ul>
        `;
        const removeButtons = document.querySelectorAll('.remove');
        removeButtons.forEach(button => button.addEventListener('click', (event) => {
            const id = event.target.id;
            this.removeProduct(id);
        }));
    }
    removeProduct(id){
        console.log(id);
        const myArray = JSON.parse(localStorage.getItem('cartData'));
        const filteredArray = myArray.filter(product => product.id !== id);
        localStorage.setItem('cartData', JSON.stringify(filteredArray));
        const removedProduct = document.querySelector('.JSON.stringify(id)');
        console.log(removedProduct);
    }

}
window.customElements.define('cart-products', Cart);