export default class Cart extends HTMLElement {
    constructor(cart){
        super();
        const storedData = localStorage.getItem('cartData');
        if(storedData){
            this.cart = JSON.parse(storedData);
        }else{
            this.cart = [];
        }
    }
    connectedCallback() {
        this.render(this.cart);
    }

    render(cart) {
        this.innerHTML = `
        <style>
        .cart-box{
            /*grid-template-columns: repeat(auto-fit,minmax(200px,1fr)) */
            display: flex;
            flex-direction: row;
            align-items: center;
            background-color: #ffffff;
            margin: 0px;
            padding: 10px 0;
            border-bottom:1px solid #CCBEA6;
        }
        .left{
            flex: 0.5;
            flex-direction: column;
        }
        .right{
            flex: 2;
        }
        .detail{
            margin-right: 20px;
            display: grid;
            grid-template-columns: 2fr 1fr 1fr;
            align-items: center;
            justify-content: center;
        }
        .cart-btn:nth-child(2){
            display: flex;
            width: 120px;
            height: 25px;
            border-color: var(--color-green);
            background-color: var(--color-green);
            cursor: pointer;
            color: var(--color-white);
            justify-content: space-around;
            align-items: center;
        }
        .cart-btn:nth-child(1){
            min-width: 100%;
            height: 40px;
            background-color:var(--color-green);
            color: #fff1ee;
            cursor: pointer;
            border-color: var(--color-green);
        }
        .product-quantity1{
            border: 1px solid var(--color-green);
            max-width: 80px;
            padding: 2px;
            text-align: center;
            font-size: 18px;
        }
        .price-text{
            color: var(--color-green);
        }
        input{
            color: var(--color-green);
        }
        .right h4{
            margin: 0 20px 0 0;
            padding: 10px;
            border-bottom: 1px solid #CCBEA6;
        }
        .price{
            font-size: 0.8rem;
            color: var(--color-green);
            justify-self: end;
        }
        .cart-info{
            display: flex;
            flex-direction: column;
            background-color: #ffffff;
            padding:10px 10px;
            margin-bottom: 20px;
        }
        .cal_out{
            flex-direction: column;
        }
        .calculate_sec{
            display: flex;
            align-items: center;
            flex-direction: row;
            border-bottom: 1px solid #CCBEA6;
        }
        .total p{
            margin:10px 0px 0px 0px;
            text-align: end;
            color: #0D4433;
        }
        .calculate_sec p {
            flex: 1;
            font-size: 0.8rem;
            color: #0D4433;
        }
        h4{
            margin: 0px;
            padding-bottom: 10px;
            color: var(--color-green);
        }
        .product-price{
            color: #0D4433;
        }
        .remove{
            background-color: var(--color-green);
            border: none;
            width: 100px;
            color: var(--color-white);
            padding: 5px 0;
            justify-self: end;
        }
        .calculate_sec .count{
            border: 1px solid var(--color-beige);
            border-radius: 25%;
            padding: 2px 2px ;
            text-align: center;
            color: var(--color-beige);
        }
        @media only screen and (max-width: 575px){
            section{
                width: 90%;
                display: flex;
                flex-direction: column;
            }
            .right-container{
                display: flex; 
            }
        }
        </style>
            ${cart.map(product => `
            <div class="cart-box">
                <div class="left">
                    <img src="${product.image}" alt="" width="100%" height="100%">
                </div>
                <div class="right">
                    <h4>${product.name}</h4>
                    <div class="detail">
                        <input type="number" id="${product.id}" class="product-quantity1" name="product-quantity" min="1" max="10" value="${product.num}">
                        <label class="price-text" for="${product.id}"><span class="price">Үнэ </span>${parseInt(product.num) * parseInt(product.price)}</label>
                        <button class="remove" id="${product.id}">Устгах</button>
                    </div>
                </div> 
            </div>`).join('')}
        `;
        const inputElement = document.querySelectorAll(".product-quantity1");
        inputElement.forEach(product => product.addEventListener("change", (event) => {
            let value = event.target.value;
            const changedCart = this.cart.find((each) => each.id == event.target.id);
            changedCart.num = value;
            console.log(changedCart.num);
            localStorage.setItem('cartData', JSON.stringify(this.cart));
            this.calculateTotalAmount(this.cart);
            this.render(this.cart);
        }));

        this.calculateTotalAmount(cart);
        const removeButtons = document.querySelectorAll('.remove');
        removeButtons.forEach(button => button.addEventListener('click', (event) => {
            const id = event.target.id;
            const removedProduct = button.parentNode.parentNode.parentNode;
            this.removeProduct(id);
            removedProduct.remove();
        }));
        const removeAllButton = document.querySelector('.remove-all-btn');
        removeAllButton.addEventListener('click', (event) => {
            this.removeAll();
            const children = document.querySelectorAll('.cart-box');
            console.log(children);
            children.forEach((child) => {
                child.remove();
            });
            this.calculateTotalAmount([]);
        });
    }
    calculateTotalAmount(cart){
        const totalAmountContainer = document.querySelector('.cal-out');
        const multipliedCart = cart.map((product) => (parseInt(product.price) * parseInt(product.num)));
        console.log(multipliedCart);
        const totalAmount = multipliedCart
            .reduce((accumulator, price) => {
                return accumulator + price;
            }, 0);
        totalAmountContainer.innerHTML = `
        ${cart.map(product => `
        <cart-template>
            <h3 slot="title">${product.name}</h3>
            <p slot="quantity">${product.num}</p>
            <p slot="price">${parseInt(product.num) * parseInt(product.price)}</p>
        </cart-template>`).join('')}
        `;
        totalAmountContainer.insertAdjacentHTML("beforeend", `
        <div class="total"><p>${totalAmount}</p></div>
        `);
    }
    removeProduct(id){
        console.log(id);
        const myArray = JSON.parse(localStorage.getItem('cartData'));
        const filteredArray = myArray.filter(product => product.id !== id);
        localStorage.setItem('cartData', JSON.stringify(filteredArray));
        this.calculateTotalAmount(filteredArray);
        this.cart = filteredArray;
    }
    removeAll(){
        localStorage.removeItem('cartData');
    }

}
window.customElements.define('cart-products', Cart);