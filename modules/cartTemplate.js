class CartTemplate extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      const template = `
        <style>
          /* CSS styles from the template */
          :root{
            --color-beige: #CCBEA6;
          }
          .calculate-products {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr;
            border-bottom: 1px var(--color-beige) solid;
            color: var(--color-green);
          }
          .calculate-products h3 {
            color: var(--color-green);
          }
          .quantity {
            color: var(--color-green);
            border: 1px;
          }
          .name p {
            font-size: 12px;
          }
          h3 {
            font-size: 14px;
          }
        </style>
        <div class="calculate-products">
          <h3 class="name"><slot name="title"></slot></h3>
          <p class="quantity"><slot name="quantity"></slot></p>
          <p><slot name="price"></slot></p>
        </div>
      `;
  
      this.shadowRoot.innerHTML = template;
    }
  }
  
  customElements.define('cart-template', CartTemplate);
  