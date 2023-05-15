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
            .product-box{
                max-width: 250px;
                margin: auto;
                text-align: center;
                position: relative;
                background-color: var(--color-white);
                cursor: pointer;
            }
            .fav{
                width: 30px;
                position: absolute;
                top: 10px;
                right: 10px;
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
                font-size: var(--default-button-font-size);
                transition: ease-out 0.5s;
            }
            .product-box h2{
                padding-top: 2rem;
                margin: 0 10px;
                color: var(--color-green);
                font-weight: var(--font-weight-normal);
                font-size: var(--menu-font-size);
                text-transform: uppercase;
                border-top: 1px var(--color-beige) solid;
            }
            .product-box button:hover {
                opacity: 0.7;
            }
            p.hidden-desc{
                display: none;
                width: 90%;
            }
            .product-box:hover .hidden-desc{
                display: block;
                position: absolute;
                top: 40px;
                left: 50%;
                transform: translate(-50%, 0);
                text-align: center;
                color: var(--color-green);
                font-size: var(--default-font-size);
                font-weight: var(--font-weight-normal);
            }
            .product-box:hover img{
                opacity: 0.1;
            }
            .product-box img{
                transition: ease-in 0.3s;
            }
            </style>
            <div class="product-box">
                <svg class = "fav"  viewBox="-4.8 -4.8 33.60 33.60" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-4.8" y="-4.8" width="33.60" height="33.60" rx="16.8" fill="#ffffff" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4.45067 13.9082L11.4033 20.4395C11.6428 20.6644 11.7625 20.7769 11.9037 20.8046C11.9673 20.8171 12.0327 20.8171 12.0963 20.8046C12.2375 20.7769 12.3572 20.6644 12.5967 20.4395L19.5493 13.9082C21.5055 12.0706 21.743 9.0466 20.0978 6.92607L19.7885 6.52734C17.8203 3.99058 13.8696 4.41601 12.4867 7.31365C12.2913 7.72296 11.7087 7.72296 11.5133 7.31365C10.1304 4.41601 6.17972 3.99058 4.21154 6.52735L3.90219 6.92607C2.25695 9.0466 2.4945 12.0706 4.45067 13.9082Z" stroke="#0D4433" stroke-width="2"></path> </g></svg>
                <img src="${this.getAttribute('image')}" alt="${this.getAttribute('name')}" style="height:150px ; width: 200px;">
                <p class="hidden-desc">${this.getAttribute('description')}</p>
                <h2>${this.getAttribute('name')}</h2>
                <p>Үнэ: ${this.getAttribute('price')}</p>
                <button class="add-to-cart">Add to Cart</button>
            </div>
        `;
        
        const addToCartButtons = this._shadowRoot.querySelectorAll('.add-to-cart'); 
        addToCartButtons.forEach(button => button.addEventListener('click', () => {
            const product = {
                id: this.getAttribute('id'),
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