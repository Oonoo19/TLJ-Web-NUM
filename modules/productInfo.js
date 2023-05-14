export default class ProductInfo extends HTMLElement {
    constructor() {
      super();
      this._shadowRoot = this.attachShadow({ mode: 'open' });
      this.category = 'all';
      this.cart = [];
      const storedData = localStorage.getItem('cartData');
      if(storedData){
          this.cartProducts = JSON.parse(storedData);
      }else{
          this.cartProducts = [];
      }
      //localStorage.removeItem('cartData');
    }
  
    async connectedCallback() {
      const products = await this.fetchProducts();
      this._products = products;
      this.render(products);
    }
  
    onCategoryChanged(oldValue, newValue) {
      if (oldValue !== newValue) {
        this.render(this.filterProducts(newValue));
      }
    }
  
    async fetchProducts() {
      const response = await fetch('https://api.jsonbin.io/v3/b/644e64d48e4aa6225e93bb07/latest', {
        headers: {
          'X-Master-Key': '$2b$10$P81udmXfTImTITJc3YqYMuE7HVJQwgy.EV7Cx87ID0AgvV7B9CZTy'
        }
      });
      const data = await response.json();
      return data.record;
    }
  
    filterProducts(category) {
      const products = this._products;
  
      if (category === 'all') {
        return products;
      }
  
      return products.filter(product => product.category === category);
    }
  
    render(products) {
        this._shadowRoot.innerHTML = `
        <style>
            .product-list{
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
              gap: 10px;
            }
            .category{
              justify-self: center;
              width: 250px;
              display: flex;
              flex-direction: column;
              align-items: center;
              list-style: none;
              background-color: #0D4433;
              margin: 0;
              padding: 0;
            }     
            .category button{
                border: none;
                background-color: var(--color-green);
                cursor: pointer;
                margin-top: 15px;
                color: var(--color-golden);
                text-transform: uppercase;
                font-size: var(--default-font-size);
                font-weight: var(--font-weight-normal);
            }
            .cat-title{
              color: var(--color-golden);
              text-transform: uppercase;
              font-size: 14px;
              margin-top: 25px;
              padding-bottom: 10px;
              font-weight: var(--font-weight-normal);
              border-bottom: 1px var(--color-golden) solid;
            }
        </style>
        <div class="product-list">
            <ul class = "category">
              <li class = "cat-title" >Бүтээгдэхүүн</li>
              <li><button id="all">Бүгд</button></li>
              <li><button id="bread">Талх</button></li>
              <li><button id="cake">Бялуу</button></li>
              <li><button id="salat_sandwitch">Салат/Сэндвич</button></li>
              <li><button id="beverage">Уух зүйл</button></li>
            </ul>
        ${products.map(product => `
          <each-product id="${product.id}" name="${product.name}" description="${product.description}" 
          image="${product.image}" price="${product.price}" product="${JSON.stringify(product)}"></each-product>
          `).join('')}
        </div>
        `;
        const categoryButtons = this._shadowRoot.querySelectorAll('.category');
        const eachProducts = this._shadowRoot.querySelectorAll('each-product');
        console.log(eachProducts);
        eachProducts.forEach(product => product.addEventListener('add-to-cart', (event) =>{
            const thisProduct = this.cartProducts.find((each) => each.id == event.target.id);
            if(thisProduct){
              thisProduct.num = parseInt(thisProduct.num) + 1;
              console.log(this.cartProducts);
            }else{
              this.cartProducts.push(JSON.parse(event.detail.product));
            }
            const cartProductsJson = JSON.stringify(this.cartProducts);
            console.log(this.cartProducts);
            localStorage.setItem('cartData', cartProductsJson);
        }));
    
        categoryButtons.forEach(button => button.addEventListener('click', (event) => {
            const category = event.target.id;
            window.history.pushState({ category }, category, `?category=${category}`);
            this.onCategoryChanged(this.category, event.target.id);
        }));
        
    
        
    }
}
window.customElements.define('product-list', ProductInfo);