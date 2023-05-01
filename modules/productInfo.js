export default class ProductInfo extends HTMLElement {
    constructor() {
      super();
      this._shadowRoot = this.attachShadow({ mode: 'open' });
      this.category = 'all';
      this.cart = [];
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
            
        </style>
        <ul class="product-list">
        ${products.map(product => `
          <each-product name="${product.name}" description="${product.description}" 
          image="${product.image}" price="${product.price}" product="${JSON.stringify(product)}"></each-product>
          `).join('')}
          </ul>
        `;
        const categoryButtons = document.querySelectorAll('.category');
    
        categoryButtons.forEach(button => button.addEventListener('click', (event) => {
            const category = event.target.id;
            window.history.pushState({ category }, category, `?category=${category}`);
            this.onCategoryChanged(this.category, event.target.id);
        }));
    
        
    }
}
window.customElements.define('product-list', ProductInfo);