class Header extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.template = document.createElement('template');
    }
    connectedCallback() {
        this.template.innerHTML = `
        <header>
        <div class = "header-container-outer">
            <div class = "header-container">
                <div class = "search">
                    <svg width="23px" height="23px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>

                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

                    <g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15C11.381 15 12.6296 14.4415 13.5355 13.5355C14.4415 12.6296 15 11.381 15 10C15 7.23858 12.7614 5 10 5ZM3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 11.5719 16.481 13.0239 15.6063 14.1921L20.7071 19.2929C21.0976 19.6834 21.0976 20.3166 20.7071 20.7071C20.3166 21.0976 19.6834 21.0976 19.2929 20.7071L14.1921 15.6063C13.0239 16.481 11.5719 17 10 17C6.13401 17 3 13.866 3 10Z" fill="#0D4433"/> </g>

                    </svg>
                    <input type="text" placeholder="Search..">
                </div>
                <a href="index.html" class="menu-logo">
                    <slot name="logo"><img src="../images/tlj_logo 2.webp" alt="Tous les Jours logo" class="logo" width="100%" height="100%"></slot>
                </a>
                <nav class="round-menu">
                    
                    <a href="favorites.html" aria-label="See your favorite products">
                    <svg width="27px" height="27px" viewBox="-3.6 -3.6 31.20 31.20" fill="none" xmlns="http://www.w3.org/2000/svg">

                    <g id="SVGRepo_bgCarrier" stroke-width="0">

                    <rect x="-3.6" y="-3.6" width="31.20" height="31.20" rx="15.6" fill="#F9F4E9" strokewidth="0"/>

                    </g>

                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

                    <g id="SVGRepo_iconCarrier"> <path d="M4.3314 12.0474L12 20L19.6686 12.0474C20.5211 11.1633 21 9.96429 21 8.71405C21 6.11055 18.9648 4 16.4543 4C15.2487 4 14.0925 4.49666 13.24 5.38071L12 6.66667L10.76 5.38071C9.90749 4.49666 8.75128 4 7.54569 4C5.03517 4 3 6.11055 3 8.71405C3 9.96429 3.47892 11.1633 4.3314 12.0474Z" stroke="#0D4433" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </g>

                    </svg>
                    </a>
                    <a href="cart.html" aria-label="See products from cart">
                    <img alt="cart" width="27" height="27" src="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KDTwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIFRyYW5zZm9ybWVkIGJ5OiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9Ii0zLjYgLTMuNiAzMS4yMCAzMS4yMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KDTxnIGlkPSJTVkdSZXBvX2JnQ2FycmllciIgc3Ryb2tlLXdpZHRoPSIwIj4KDTxyZWN0IHg9Ii0zLjYiIHk9Ii0zLjYiIHdpZHRoPSIzMS4yMCIgaGVpZ2h0PSIzMS4yMCIgcng9IjE1LjYiIGZpbGw9IiNGOUY0RTkiIHN0cm9rZXdpZHRoPSIwIi8+Cg08L2c+Cg08ZyBpZD0iU1ZHUmVwb190cmFjZXJDYXJyaWVyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KDTxnIGlkPSJTVkdSZXBvX2ljb25DYXJyaWVyIj4gPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNC4zOTk5IDMuMkMxNC44NDE3IDIuODY4NjMgMTUuNDY4NSAyLjk1ODE3IDE1Ljc5OTkgMy40TDE4LjQ5OTkgN0gxOC41MDMxQzIwLjM0MTcgNyAyMS43NDc4IDguNjM4OSAyMS40NjgyIDEwLjQ1NjJMMjAuMzkxMyAxNy40NTYyQzIwLjE2NjEgMTguOTE5NyAxOC45MDY5IDIwIDE3LjQyNjEgMjBINi41NzM2NkM1LjA5Mjk1IDIwIDMuODMzNyAxOC45MTk3IDMuNjA4NTUgMTcuNDU2MkwyLjUzMTYyIDEwLjQ1NjJDMi4yNTIwNCA4LjYzODg5IDMuNjU4MDggNyA1LjQ5Njc0IDdINS40OTk5TDguMTk5OSAzLjRDOC41MzEyNyAyLjk1ODE3IDkuMTU4MDggMi44Njg2MyA5LjU5OTkgMy4yQzEwLjA0MTcgMy41MzEzNyAxMC4xMzEzIDQuMTU4MTcgOS43OTk5IDQuNkw3Ljk5OTkgN0gxNS45OTk5TDE0LjE5OTkgNC42QzEzLjg2ODUgNC4xNTgxNyAxMy45NTgxIDMuNTMxMzcgMTQuMzk5OSAzLjJaTTUuOTg4MjUgOUM1Ljk5NTUxIDkuMDAwMDggNi4wMDI3NyA5LjAwMDA4IDYuMDEwMDIgOUgxNy45ODk4SDE4LjAxMTZIMTguNTAzMUMxOS4xMTYgOSAxOS41ODQ2IDkuNTQ2MyAxOS40OTE0IDEwLjE1MjFMMTguNDE0NSAxNy4xNTIxQzE4LjMzOTUgMTcuNjM5OSAxNy45MTk3IDE4IDE3LjQyNjEgMThINi41NzM2NkM2LjA4MDA5IDE4IDUuNjYwMzQgMTcuNjM5OSA1LjU4NTI5IDE3LjE1MjFMNC41MDgzNyAxMC4xNTIxQzQuNDE1MTcgOS41NDYzIDQuODgzODUgOSA1LjQ5Njc0IDlINS45ODgyNVoiIGZpbGw9IiMwRDQ0MzMiLz4gPC9nPgoNPC9zdmc+">
                    </a>
                    <a href="login.html" aria-label="Login page">
                    <img alt="profile-svgrepo-com" width="27" height="27" src="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KDTwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIFRyYW5zZm9ybWVkIGJ5OiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9Ii0yLjQgLTIuNCAyOC44MCAyOC44MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KDTxnIGlkPSJTVkdSZXBvX2JnQ2FycmllciIgc3Ryb2tlLXdpZHRoPSIwIj4KDTxyZWN0IHg9Ii0yLjQiIHk9Ii0yLjQiIHdpZHRoPSIyOC44MCIgaGVpZ2h0PSIyOC44MCIgcng9IjE0LjQiIGZpbGw9IiNGOUY0RTkiIHN0cm9rZXdpZHRoPSIwIi8+Cg08L2c+Cg08ZyBpZD0iU1ZHUmVwb190cmFjZXJDYXJyaWVyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KDTxnIGlkPSJTVkdSZXBvX2ljb25DYXJyaWVyIj4gPHBhdGggZD0iTTEyLjE2MDEgMTAuODdDMTIuMDYwMSAxMC44NiAxMS45NDAxIDEwLjg2IDExLjgzMDEgMTAuODdDOS40NTAwNiAxMC43OSA3LjU2MDA2IDguODQgNy41NjAwNiA2LjQ0QzcuNTYwMDYgMy45OSA5LjU0MDA2IDIgMTIuMDAwMSAyQzE0LjQ1MDEgMiAxNi40NDAxIDMuOTkgMTYuNDQwMSA2LjQ0QzE2LjQzMDEgOC44NCAxNC41NDAxIDEwLjc5IDEyLjE2MDEgMTAuODdaIiBzdHJva2U9IiMwRDQ0MzMiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4gPHBhdGggZD0iTTcuMTU5OTcgMTQuNTZDNC43Mzk5NyAxNi4xOCA0LjczOTk3IDE4LjgyIDcuMTU5OTcgMjAuNDNDOS45MDk5NyAyMi4yNyAxNC40MiAyMi4yNyAxNy4xNyAyMC40M0MxOS41OSAxOC44MSAxOS41OSAxNi4xNyAxNy4xNyAxNC41NkMxNC40MyAxMi43MyA5LjkxOTk3IDEyLjczIDcuMTU5OTcgMTQuNTZaIiBzdHJva2U9IiMwRDQ0MzMiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4gPC9nPgoNPC9zdmc+">
                    </a>
                </nav>
                
            </div>
        </div>
            
        <div class="submenu-container">
            <nav class="submenu">
            <a href="introduction.html">Танилцуулга</a>
            <a href="product.html">Бүтээгдэхүүн</a>
            <a href="news.html">Мэдээ</a>
            <a href="branches.html">Салбарын мэдээлэл</a>
            </nav>
        </div>
        
    </header>
    
            `
    window.addEventListener("scroll", () => {
        const header = this.querySelector('.header-container');
        const submenu = this.querySelector('.submenu');
        if (window.scrollY > 70) {
            header.classList.add("smaller");
            submenu.classList.add("hidden");
        } else {
            header.classList.remove("smaller");
            submenu.classList.remove("hidden");
        }
        });
    }
    connectedCallback() {
        const instance = this.template.content.cloneNode(true);
        this.shadowRoot.appendChild(instance);
    }
}
customElements.define('main-header', Header);
export default Header;