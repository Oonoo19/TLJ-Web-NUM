export default class Product extends HTMLElement {
    constructor(){
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
    }
    connectedCallback(){
        this._shadowRoot.innerHTML = `
        <style>
            :root{
                --color-green: #0D4433;
                --color-chocolate-brown: #7A4D4A;
                --color-light-beige: #F9F4E9;
                --color-beige: #CCBEA6;
                --color-golden: #D3A45F;
                --color-dark: #2E2F2E;
                --color-default-border: 0.5px;
                --color-white: #ffffff;
                --color-gray: #7f827f;
                --color-light-gray: #dadada;
            }
            .product {
                display: grid;
                grid-template-columns: repeat(5, 1fr);
                grid-template-rows: auto
                gap: 20px;
            }
            .product-box{
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                max-width: 250px;
                height: auto;
                margin: auto;
                text-align: center;
                position: relative;
                background-color: #ffffff;
                border-radius: 5%;
                cursor: pointer;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            .fav{
                width: 20px;
                position: absolute;
                top: 1rem;
                right: 1rem;
            }
            .product-box button {
                border: none;
                outline: 0;
                padding: 12px;
                color: white;
                background-color: var(--color-green);
                text-align: center;
                cursor: pointer;
                width: 100%;
                font-size: 18px;
                transition: ease-out 0.5s;
            }
            .product-box h2{
                margin: 0;
                padding-top: 2rem;
                color: var(--color-green);
            }
            .product-box button:hover {
                opacity: 0.7;
            }
            p.hidden-desc{
                display: none;
                width: 100%;
            }
            .product-box:hover .hidden-desc{
                display: block;
                position: absolute;
                left: 0px;
                top: 80px;
                text-align: center;
                color: #0D4433;
            }
            .product-box:hover img{
                opacity: 0.1;
            }
            .product-box img{
                transition: ease-in 0.3s;
            }
            </style>
            <div class="product-box">
                <h2>${this.getAttribute('name')}</h2>
                <svg class="fav" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/></svg>
                <img src="${this.getAttribute('image')}" alt="${this.getAttribute('name')}" style="height:150px ; width: 200px;">
                <p class="hidden-desc">${this.getAttribute('description')}</p>
                <p>Үнэ: ${this.getAttribute('price')}</p>
                <button class="add-to-cart">Add to Cart</button>
            </div>
        `;
        
        const addToCartButtons = this._shadowRoot.querySelectorAll('.add-to-cart'); 
        addToCartButtons.forEach(button => button.addEventListener('click', () => {
            const product = {
                name: this.getAttribute('name'),
                image: this.getAttribute('image'),
                description: this.getAttribute('description'),
                price: this.getAttribute('price'),
                num: 1,
            };
            const productJson = JSON.stringify(product);
            const event = new CustomEvent('add-to-cart', { detail: { product: productJson }});
            // const myCart = document.querySelector("cart-products");
            // console.log(myCart);
            // const newProduct = this.getAttribute('product');
            // myCart.addProduct(this.getAttribute('product'));
            this.dispatchEvent(event);
        }));  
    }
}
window.customElements.define('each-product', Product);