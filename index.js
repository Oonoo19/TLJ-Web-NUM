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



