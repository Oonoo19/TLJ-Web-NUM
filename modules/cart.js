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
        .left-container{
            flex-direction: column;
            flex: 1.5;
            margin: 10px;
        }
        .right-container{
            flex-direction: column;
            flex: 1;
            margin: 10px;
        }
        .cart-header:nth-child(1){
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
        }
        .cart-box{
            /*grid-template-columns: repeat(auto-fit,minmax(200px,1fr)) */
            display: flex;
            flex-direction: row;
            align-items: center;
            background-color: #ffffff;
            margin: 0px;
            border-bottom:1px solid #CCBEA6;
        }
        .left{
            flex: 0.5;
            flex-direction: column;
        }
        .right{
            flex: 2;
        }
        .cart-btn:nth-child(2){
            width: 120px;
            height: 25px;
            border-color: var(--color-white);
            background-color: var(--color-white);
            cursor: pointer;
            color: var(--color-green);
        }
        .cart-btn:nth-child(1){
            min-width: 100%;
            height: 40px;
            background-color:var(--color-green);
            color: #fff1ee;
            cursor: pointer;
            border-color: var(--color-green);
        }
        #product-quantity1{
            border: 1px solid var(--color-green);
            max-width: 80px;
            padding: 2px;
            text-align: center;
            font-size: 18px;
        }
        #product-quantity2{
            border: 1px solid var(--color-green);
            max-width: 80px;
            padding: 2px;
            text-align: center;
            font-size: 18px;
        }
        /* Show spin box arrows of number input field */
     /* Show spin box arrows of number input field */
        input[type=number]::-webkit-outer-spin-button,
        input[type=number]::-webkit-inner-spin-button {
            opacity: 1;
            color: var(--color-green);
        }
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
        /* Firefox */
        input[type=number] {
            -moz-appearance: textfield;
            appearance: textfield;
            color: var(--color-green);
        }
        .right h4{
            padding: 0px 0px 10px 0px;
            border-bottom: 1px solid #CCBEA6;
        }
        .price{
            font-size: 0.8rem;
            color: var(--color-green);
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
        .cart-info h4{
            margin: 0px;
            padding-bottom: 10px;
            color: #0D4433;
        }
        .product-price{
            color: #0D4433;
        }
        .calculate_sec .count{
            border: 1px solid var(--color-beige);
            border-radius: 25%;
            padding: 2px 2px ;
            text-align: center;
            color: var(--color-beige);
        }
        #form{
            display: inline;
            flex-direction: row;
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
                    <form action="add-to-cart.php" method="post" class="form">
                        <input type="number" id="product-quantity1" name="product-quantity" min="1" max="10" value="${product.num}">
                        <label for="product-quantity1"><span class="price">Үнэ</span>${product.price}</label>
                    </form>
                </div> 
                <button class="remove" id="${product.id}">remove</button>
            </div>`).join('')}
        `;
        this.calculateTotalAmount(cart);
        const removeButtons = document.querySelectorAll('.remove');
        removeButtons.forEach(button => button.addEventListener('click', (event) => {
            const id = event.target.id;
            const removedProduct = button.parentNode;
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
        })
    }
    calculateTotalAmount(cart){
        const totalAmountContainer = document.querySelector('.cal-out');
        const totalAmountDOM = totalAmountContainer.querySelector('.total');
        const totalAmount = cart
            .map((product) => parseInt(product.price))
            .reduce((accumulator, price) => {
                return accumulator + price;
            }, 0);
        totalAmountDOM.innerHTML = `<p>${totalAmount}</p>`;
    }
    removeProduct(id){
        console.log(id);
        const myArray = JSON.parse(localStorage.getItem('cartData'));
        const filteredArray = myArray.filter(product => product.id !== id);
        localStorage.setItem('cartData', JSON.stringify(filteredArray));
        this.calculateTotalAmount(filteredArray);
    }
    removeAll(){
        localStorage.removeItem('cartData');
    }

}
window.customElements.define('cart-products', Cart);