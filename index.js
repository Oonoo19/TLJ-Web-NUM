import Header from './modules/header.js';
import Footer from './modules/footer.js';
import Cart from './modules/cart.js';
import Product from './modules/product.js';
const myHeader = new Header;
const myFooter = new Footer;
const mediaQuery = window.matchMedia('(max-width: 575.98px)');
const desktopMediaQuery = window.matchMedia('(min-width: 576px)');
function handleMediaChange(e){
    if(e.matches){
        const searchButton = document.querySelector(".search");
        const roundMenuContainer = document.querySelector(".round-menu");
        const newSearchButton = searchButton.cloneNode(true);
        roundMenuContainer.appendChild(newSearchButton);
    }
}
function handleDesktopMediaChange(e){
    if(e.matches){
        const roundMenuContainer = document.querySelector('.round-menu');
        const searchButton = roundMenuContainer.querySelector('.search');
        roundMenuContainer.removeChild(searchButton);
    }
}
handleMediaChange(mediaQuery);
mediaQuery.addListener(handleMediaChange);
desktopMediaQuery.addListener(handleDesktopMediaChange);

// const cart = document.querySelector('cart-products');
//     console.log(cart);

// const productList = document.querySelector('product-list');
// productList.addEventListener('add-to-cart', (event) => {
//     const product = event.detail.info;
//     console.log(product);
//     const cart = document.querySelector('cart-products');
//     console.log(cart);
//     cart.addProduct(product);
// });

//myProduct.fetchInfo();

// class PopUpInfo extends HTMLElement{

// }
// <company-person bday="2000-01-01">

// </company-person>
// class CompanyPerson extends HTMLElement{
//     constructor(){
//         this.bday = this.getAttribute("bday");

//     }
//     method(){
//         this.bday="1999-01-01"
//         this.setAttribute("bday") = this.bday;
//     }

// }

// class Products extends HTMLElement{
//     constructor(){
//         this.products = [];

//     }
//     AddToCart(myProduct){
//         this.products.push(myProduct);
//         this.innerHTML=myProduct.Render();//AdjacentHtml, ...
//     }
//     Render(){
//         return;
//     }
// }

