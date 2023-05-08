class Header extends HTMLElement {
    constructor(){
        super();
    }
    connectedCallback() {
        this.innerHTML =  `
        <header>
        <div class = "header-container-outer">
            <div class = "header-container">
                <div class = "hamburger">
                    <div class = "line"></div>
                    <div class = "line"></div>
                    <div class = "line"></div>
                </div>
                <div class = "search-container">
                    <div class = "search">
                        <svg viewBox="-4.8 -4.8 33.60 33.60" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-4.8" y="-4.8" width="33.60" height="33.60" rx="16.8" fill="#ffffff" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 15L21 21" stroke="#0D4433" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#0D4433" stroke-width="2"></path> </g></svg>
                        <input type="text" placeholder="Search..">
                    </div>
                </div>
                <a href="index.html" class="menu-logo">
                    <img class = "desktop-logo" src="../images/tlj_logo 2.webp" alt="Tous les Jours logo" class="logo" style="width: 100%; height: 100%;">
                    <img class = "mobile-logo" src="../images/tlj_logo.webp" alt="Tous les Jours logo" class="logo">
                </a>
                <nav class="round-menu">
                    <a href="favorites.html" aria-label="See your favorite products">
                    <svg viewBox="-4.8 -4.8 33.60 33.60" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-4.8" y="-4.8" width="33.60" height="33.60" rx="16.8" fill="#ffffff" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4.45067 13.9082L11.4033 20.4395C11.6428 20.6644 11.7625 20.7769 11.9037 20.8046C11.9673 20.8171 12.0327 20.8171 12.0963 20.8046C12.2375 20.7769 12.3572 20.6644 12.5967 20.4395L19.5493 13.9082C21.5055 12.0706 21.743 9.0466 20.0978 6.92607L19.7885 6.52734C17.8203 3.99058 13.8696 4.41601 12.4867 7.31365C12.2913 7.72296 11.7087 7.72296 11.5133 7.31365C10.1304 4.41601 6.17972 3.99058 4.21154 6.52735L3.90219 6.92607C2.25695 9.0466 2.4945 12.0706 4.45067 13.9082Z" stroke="#0D4433" stroke-width="2"></path> </g></svg>
                    </a>
                    <a href="cart.html" aria-label="See products from cart">
                    <img alt="shopping-cart-svgrepo-com" src="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KDTwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIFRyYW5zZm9ybWVkIGJ5OiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9Ii00LjggLTQuOCAzMy42MCAzMy42MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KDTxnIGlkPSJTVkdSZXBvX2JnQ2FycmllciIgc3Ryb2tlLXdpZHRoPSIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDApLCBzY2FsZSgxKSI+Cg08cmVjdCB4PSItNC44IiB5PSItNC44IiB3aWR0aD0iMzMuNjAiIGhlaWdodD0iMzMuNjAiIHJ4PSIxNi44IiBmaWxsPSIjZmZmZmZmIiBzdHJva2V3aWR0aD0iMCIvPgoNPC9nPgoNPGcgaWQ9IlNWR1JlcG9fdHJhY2VyQ2FycmllciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cg08ZyBpZD0iU1ZHUmVwb19pY29uQ2FycmllciI+IDxwYXRoIGQ9Ik01LjYwNDY0IDExLjQ0MTdDNS43OTI2OSAxMy4xMzQzIDUuODg2NzIgMTMuOTgwNSA2LjQ1NjI0IDE0LjQ5MDNDNy4wMjU3NiAxNSA3Ljg3NzIzIDE1IDkuNTgwMTcgMTVIOS43MDU4OEgxMy40NzA2SDE0LjgyN0MxNi4wMDAyIDE1IDE2LjU4NjcgMTUgMTcuMDYyNyAxNC43MTM0QzE3LjUzODcgMTQuNDI2OCAxNy44MTMyIDEzLjkwODQgMTguMzYyMSAxMi44NzE2TDIwLjgzMDMgOC4yMDk0N0MyMS4zNjEgNy4yMDcgMjAuNjM0MyA2IDE5LjUgNlY2SDkuNzA1ODhIOS40NjkwNkM3LjM4MzM2IDYgNi4zNDA1MSA2IDUuNzQ0MjcgNi42NjYxNkM1LjE0ODAzIDcuMzMyMzEgNS4yNjMyIDguMzY4NzggNS40OTM1MyAxMC40NDE3TDUuNjA0NjQgMTEuNDQxN1oiIHN0cm9rZT0iIzBENDQzMyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+IDxwYXRoIGQ9Ik0zIDNIMy41VjNDNC4xNjQyIDMgNC43MjIxOCAzLjQ5OTQyIDQuNzk1NTMgNC4xNTk1NUw1LjU1NTU4IDExIiBzdHJva2U9IiMwRDQ0MzMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+IDxwYXRoIGQ9Ik05IDE5LjVDOSAyMC4zMjg0IDguMzI4NDMgMjEgNy41IDIxQzYuNjcxNTcgMjEgNiAyMC4zMjg0IDYgMTkuNUM2IDE4LjY3MTYgNi42NzE1NyAxOCA3LjUgMThDOC4zMjg0MyAxOCA5IDE4LjY3MTYgOSAxOS41WiIgc3Ryb2tlPSIjMEQ0NDMzIiBzdHJva2Utd2lkdGg9IjIiLz4gPHBhdGggZD0iTTE4IDE5LjVDMTggMjAuMzI4NCAxNy4zMjg0IDIxIDE2LjUgMjFDMTUuNjcxNiAyMSAxNSAyMC4zMjg0IDE1IDE5LjVDMTUgMTguNjcxNiAxNS42NzE2IDE4IDE2LjUgMThDMTcuMzI4NCAxOCAxOCAxOC42NzE2IDE4IDE5LjVaIiBzdHJva2U9IiMwRDQ0MzMiIHN0cm9rZS13aWR0aD0iMiIvPiA8L2c+Cg08L3N2Zz4=">
                    </a>
                    <a href="login.html" aria-label="Login page">
                    <img alt="profile-round-1342-svgrepo-com" src="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KDTwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIFRyYW5zZm9ybWVkIGJ5OiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9Ii02IC02IDMyLjAwIDMyLjAwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGZpbGw9IiNmZmZmZmYiPgoNPGcgaWQ9IlNWR1JlcG9fYmdDYXJyaWVyIiBzdHJva2Utd2lkdGg9IjAiPgoNPHJlY3QgeD0iLTYiIHk9Ii02IiB3aWR0aD0iMzIuMDAiIGhlaWdodD0iMzIuMDAiIHJ4PSIxNiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tld2lkdGg9IjAiLz4KDTwvZz4KDTxnIGlkPSJTVkdSZXBvX3RyYWNlckNhcnJpZXIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgoNPGcgaWQ9IlNWR1JlcG9faWNvbkNhcnJpZXIiPiA8dGl0bGU+cHJvZmlsZV9yb3VuZCBbIzEzNDJdPC90aXRsZT4gPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+IDxkZWZzPiA8L2RlZnM+IDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiA8ZyBpZD0iRHJpYmJibGUtTGlnaHQtUHJldmlldyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE0MC4wMDAwMDAsIC0yMTU5LjAwMDAwMCkiIGZpbGw9IiMwRDQ0MzMiPiA8ZyBpZD0iaWNvbnMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU2LjAwMDAwMCwgMTYwLjAwMDAwMCkiPiA8cGF0aCBkPSJNMTAwLjU2MjU0OCwyMDE2Ljk5OTk4IEw4Ny40MzgxNzEzLDIwMTYuOTk5OTggQzg2LjczMTc4MDQsMjAxNi45OTk5OCA4Ni4yMTAxNTM1LDIwMTYuMzAyOTggODYuNDc2NTgxMywyMDE1LjY2MTk4IEM4Ny43MTI3NjU1LDIwMTIuNjk3OTggOTAuNjE2OTMwNiwyMDEwLjk5OTk4IDkzLjk5OTg0OTIsMjAxMC45OTk5OCBDOTcuMzgzNzg4NSwyMDEwLjk5OTk4IDEwMC4yODc5NTQsMjAxMi42OTc5OCAxMDEuNTI0MTM4LDIwMTUuNjYxOTggQzEwMS43OTA1NjYsMjAxNi4zMDI5OCAxMDEuMjY4OTM5LDIwMTYuOTk5OTggMTAwLjU2MjU0OCwyMDE2Ljk5OTk4IE04OS45MTY2NjQ1LDIwMDQuOTk5OTggQzg5LjkxNjY2NDUsMjAwMi43OTM5OCA5MS43NDg5OTM2LDIwMDAuOTk5OTggOTMuOTk5ODQ5MiwyMDAwLjk5OTk4IEM5Ni4yNTE3MjU2LDIwMDAuOTk5OTggOTguMDgzMDMzOSwyMDAyLjc5Mzk4IDk4LjA4MzAzMzksMjAwNC45OTk5OCBDOTguMDgzMDMzOSwyMDA3LjIwNTk4IDk2LjI1MTcyNTYsMjAwOC45OTk5OCA5My45OTk4NDkyLDIwMDguOTk5OTggQzkxLjc0ODk5MzYsMjAwOC45OTk5OCA4OS45MTY2NjQ1LDIwMDcuMjA1OTggODkuOTE2NjY0NSwyMDA0Ljk5OTk4IE0xMDMuOTU1Njc0LDIwMTYuNjM1OTggQzEwMy4yMTM1NTYsMjAxMy4yNzY5OCAxMDAuODkyMjY1LDIwMTAuNzk3OTggOTcuODM3MDIyLDIwMDkuNjcyOTggQzk5LjQ1NjAwNDgsMjAwOC4zOTU5OCAxMDAuNDAwMjQxLDIwMDYuMzMwOTggMTAwLjA1MzE3MSwyMDA0LjA2OTk4IEM5OS42NTA5NzY5LDIwMDEuNDQ2OTggOTcuNDIzNTk5NiwxOTk5LjM0Nzk4IDk0LjczNDgyMjQsMTk5OS4wNDE5OCBDOTEuMDIzMjA3NSwxOTk4LjYxODk4IDg3Ljg3NTA3MjEsMjAwMS40NDg5OCA4Ny44NzUwNzIxLDIwMDQuOTk5OTggQzg3Ljg3NTA3MjEsMjAwNi44ODk5OCA4OC43NjkyODk2LDIwMDguNTczOTggOTAuMTYzNjk3MSwyMDA5LjY3Mjk4IEM4Ny4xMDc0MzM0LDIwMTAuNzk3OTggODQuNzg3MTYzNiwyMDEzLjI3Njk4IDg0LjA0NDAyNCwyMDE2LjYzNTk4IEM4My43NzQ1MzM4LDIwMTcuODU2OTggODQuNzc4OTk3MywyMDE4Ljk5OTk4IDg2LjA1Mzk3MTcsMjAxOC45OTk5OCBMMTAxLjk0NTcyNywyMDE4Ljk5OTk4IEMxMDMuMjIxNzIyLDIwMTguOTk5OTggMTA0LjIyNjE4NSwyMDE3Ljg1Njk4IDEwMy45NTU2NzQsMjAxNi42MzU5OCIgaWQ9InByb2ZpbGVfcm91bmQtWyMxMzQyXSI+IDwvcGF0aD4gPC9nPiA8L2c+IDwvZz4gPC9nPgoNPC9zdmc+">
                    </a>
                </nav>
                </div>
            </div>
            
            <div class="submenu-container">
                <nav class="submenu">
                    <a href="introduction.html">Танилцуулга</a>
                    <div class = "line"></div>
                    <a href="product.html">Бүтээгдэхүүн</a>
                    <div class = "line"></div>
                    <a href="news.html">Мэдээ</a>
                    <div class = "line"></div>
                    <a href="branches.html">Салбарын мэдээлэл</a>
                    <div class = "line"></div>
                    <div class="mobile-nav-bar">
                        <a href="qa.html" aria-label="Common questions and answers">Түгээмэл асуулт хариулт</a>
                        <div class = "line"></div>
                        <a href="feedback.html" aria-label="Give your feedback">Санал хүсэлт</a>
                        <div class = "line"></div>
                        <a href="humanres.html" aria-label="Send your cv, check out our human resource">Хүний нөөц</a>
                        <div class = "line"></div>
                        <div class="mobile-nav-bar">
                    </div>
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
        })
        const header = document.querySelector('header');
        console.log(header);
        header.classList.add("active");
        const hamburger = document.querySelector('.hamburger');
        hamburger.onclick = function() {
            const header = document.querySelector('header');
            console.log(header);
            header.classList.toggle("active");
        }
    }
    
}
customElements.define('main-header', Header);
export default Header;