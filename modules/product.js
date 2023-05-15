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
                --color-dark-mode-background: #272625;
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
                top: 220px;
                right: 10px;
                cursor: pointer;
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
                border: 1px var(--color-beige) solid;
            }
            @media (prefers-color-scheme: dark) {
                .product-box{
                    background-color: var(--color-dark);
                }
            }
            </style>
            <div class="product-box">
                <svg class="fav" fill="#D3A45F" width="24px" height="24px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.999 3.567c0.98 0 2.753 0.469 5.628 3.301l1.425 1.403 1.404-1.426c1.996-2.028 4.12-3.288 5.543-3.288 1.919 0 3.432 0.656 4.907 2.128 1.39 1.386 2.156 3.23 2.156 5.191 0.001 1.962-0.764 3.807-2.169 5.209-0.114 0.116-6.156 6.634-11.218 12.097-0.238 0.227-0.511 0.26-0.656 0.26-0.143 0-0.412-0.032-0.65-0.253-1.233-1.372-10.174-11.313-11.213-12.351-1.391-1.388-2.157-3.233-2.157-5.194s0.766-3.804 2.158-5.192c1.353-1.352 2.937-1.885 4.842-1.885zM8.999 1.567c-2.392 0-4.5 0.715-6.255 2.469-3.659 3.649-3.659 9.566 0 13.217 1.045 1.045 11.183 12.323 11.183 12.323 0.578 0.578 1.336 0.865 2.093 0.865s1.512-0.287 2.091-0.865c0 0 11.090-11.97 11.208-12.089 3.657-3.652 3.657-9.57 0-13.219-1.816-1.813-3.845-2.712-6.319-2.712-2.364 0-5 1.885-6.969 3.885-2.031-2-4.585-3.874-7.031-3.874v0z"></path> </g></svg>
                
                <img src="${this.getAttribute('image')}" alt="${this.getAttribute('name')}" style="height:150px ; width: 200px;">
                <p class="hidden-desc">${this.getAttribute('description')}</p>
                <h2>${this.getAttribute('name')}</h2>
                <p>Үнэ: ${this.getAttribute('price')}</p>
                <button class="add-to-cart">Add to Cart</button>
            </div>
        `;
        const favIcon = this._shadowRoot.querySelectorAll('.fav');
        favIcon.addEventListener('click', () => {

        })
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