class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
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
                <img src="../images/tlj_logo 2.webp" alt="Tous les Jours logo" class="logo" width="100%" height="100%">
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
    }
  }
  
  //Footer
  
class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = 
        `
        <footer>
        <div class="footer-container">
        <div class="footer-column-container">
        <div class="footer-column">
            <nav class="social-media">
                <a href="#" aria-label="Search for products">
                    <svg fill="#ffffff" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25px" height="25px" viewBox="0 0 512 512" xml:space="preserve">

                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                    
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                    
                    <g id="SVGRepo_iconCarrier"> <g id="7935ec95c421cee6d86eb22ecd11b7e3"> <path style="display: inline;" d="M283.122,122.174c0,5.24,0,22.319,0,46.583h83.424l-9.045,74.367h-74.379 c0,114.688,0,268.375,0,268.375h-98.726c0,0,0-151.653,0-268.375h-51.443v-74.367h51.443c0-29.492,0-50.463,0-56.302 c0-27.82-2.096-41.02,9.725-62.578C205.948,28.32,239.308-0.174,297.007,0.512c57.713,0.711,82.04,6.263,82.04,6.263 l-12.501,79.257c0,0-36.853-9.731-54.942-6.263C293.539,83.238,283.122,94.366,283.122,122.174z"> </path> </g> </g>
                    
                    </svg>
                </a>
                <a href="#" aria-label="Search for products">
                    <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                    
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                    
                    <g id="SVGRepo_iconCarrier"> <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M17.6361 7H17.6477" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </g>
                    
                    </svg>
                </a>
                <a href="#" aria-label="Search for products">
                    <svg fill="#ffffff" width="25px" height="25px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">

                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                    
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                    
                    <g id="SVGRepo_iconCarrier"> <path d="M1920 311.856c-70.701 33.769-146.598 56.47-226.221 66.86 81.317-52.517 143.774-135.529 173.252-234.691-76.236 48.678-160.716 84.028-250.391 103.002-71.718-82.56-174.268-134.06-287.435-134.06-217.75 0-394.165 189.966-394.165 424.206 0 33.318 3.614 65.619 10.165 96.678C617.9 616.119 327.304 447.385 133.045 190.67c-33.77 62.57-53.309 135.53-53.309 213.233 0 147.162 91.031 276.818 196.744 353.054-64.602-2.26-157.101-21.46-157.101-53.309v5.648c0 205.327 114.41 376.658 294.55 415.849-32.978 9.487-78.38 14.795-114.409 14.795-25.412 0-55.454-2.71-79.624-7.793 50.26 168.509 193.13 291.163 365.478 294.777-134.852 113.506-306.07 181.383-490.616 181.383-31.85 0-64.038-2.033-94.758-5.873 174.494 120.17 381.176 190.532 603.67 190.532 724.97 0 1121.055-646.136 1121.055-1206.55 0-18.41-.452-36.932-1.356-55.116 77.026-59.746 143.887-134.4 196.631-219.444" fill-rule="evenodd"/> </g>
                    
                    </svg>
                </a>
            </nav>
            <ul class="address">
                <li>
                    <img alt="earth-9-svgrepo-com" width="15" height="15" src="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KDTwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIFRyYW5zZm9ybWVkIGJ5OiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyBoZWlnaHQ9IjgwMHB4IiB3aWR0aD0iODAwcHgiIHZlcnNpb249IjEuMSIgaWQ9Il94MzJfIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgZmlsbD0iI2ZmZmZmZiI+Cg08ZyBpZD0iU1ZHUmVwb19iZ0NhcnJpZXIiIHN0cm9rZS13aWR0aD0iMCIvPgoNPGcgaWQ9IlNWR1JlcG9fdHJhY2VyQ2FycmllciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cg08ZyBpZD0iU1ZHUmVwb19pY29uQ2FycmllciI+IDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+IC5zdDB7ZmlsbDojZmZmZmZmO30gPC9zdHlsZT4gPGc+IDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00OTYuMTIzLDE2Ny4xMmMtNC40NTctMTIuMDY0LTkuODI1LTIzLjczLTE1Ljk5Mi0zNC44NjRjLTExLjY3NC0yMS4wODgtMjYuMjEtNDAuMzczLTQzLjEzLTU3LjI2MSBjLTAuNDEzLTAuNDEzLTAuNzU0LTAuNzYyLTEuMTY3LTEuMTc1aC0wLjAyOGMtMC40OC0wLjQ3Ni0wLjkzNy0wLjkzNi0xLjQ0NS0xLjQwNGwtMC4wMzUtMC4wMjQgYy0xLjQ0OS0xLjQ0NS0yLjk0OC0yLjg4MS00LjQ1Ny00LjIyM0MzODQuMjUsMjUuODU5LDMyMy4wNjksMC4wMDIsMjU1Ljk5OCwwLjAwMmMtMzguOTQ4LDAtNzUuOTEyLDguNzIyLTEwOC45NzIsMjQuMzAyIGMtMi4yNywxLjA3MS00LjUzMiwyLjE3NC02Ljc1NCwzLjMxYy0yNC4yNSwxMi4zMDktNDYuMjc3LDI4LjM1Ni02NS4yODEsNDcuMzgxYy0yNy43OTMsMjcuNzYxLTQ5LjIxNCw2MS45NTEtNjEuOTI0LDEwMC4xMSBjLTAuNjM5LDEuOTIxLTEuMjcsMy44NzMtMS44NjEsNS44MTdsLTAuMDc2LDAuMjE1Yy0wLjQwNSwxLjMxNy0wLjc5MywyLjY4Mi0xLjE3NCw0LjAzMmMtMC45NDQsMy4yMy0xLjgwNiw2LjQ2LTIuNTkyLDkuNzU0IGMtMC4zMSwxLjEzNS0wLjU2MywyLjI3OC0wLjgxOCwzLjQzN0MyLjI2MiwyMTYuODgyLDAsMjM2LjE4MywwLDI1NmMwLDcwLjYyNywyOC42ODIsMTM0LjczLDc0Ljk5MSwxODEuMDA3IGMyNi4wNiwyNi4wNDgsNTcuNzUsNDYuNTMxLDkzLjA3NSw1OS40ODNjMS4wOTksMC40MDUsMi4yMjIsMC44MSwzLjM2LDEuMTgyYzYuNzUsMi4zODEsMTMuNjU1LDQuNDY4LDIwLjY1OSw2LjI3IGMxLjIyMiwwLjMxLDIuNDY4LDAuNjE5LDMuNzE4LDAuODg5YzE5LjMxNCw0LjY5LDM5LjQ4OCw3LjE2Niw2MC4xOTQsNy4xNjZjNzAuNjM0LDAsMTM0LjcyNS0yOC42NzQsMTgxLjAwMy03NC45OTEgYzguNDkyLTguNDY4LDE2LjM2LTE3LjUyNCwyMy41NTktMjcuMTI3QzQ5Mi44MzQsMzY3LjA1NSw1MTIsMzEzLjcwNiw1MTIsMjU2QzUxMiwyMjQuNzcxLDUwNi4zODUsMTk0LjgxOCw0OTYuMTIzLDE2Ny4xMnogTTk0Ljc4OSw0MTcuMjIxQzUzLjUxMiwzNzUuODk3LDI4LjAxNSwzMTksMjguMDE1LDI1NmMwLTExLjY0MywwLjg3LTIzLjA1NiwyLjU1Mi0zNC4yMDYgYzcuNzY2LDUuNDI5LDIxLjkzMiwxMy4wMjQsMjIuMTExLDEzLjA2NGMwLjUzMSwwLjE2NywxLjE0MiwwLjI1NCwxLjg4MSwwLjI1NGMxLjE0NywwLDIuNTI0LTAuMjA2LDMuOTQ4LTAuNDM2IGMxLjUwNC0wLjIyMiwzLjAzNi0wLjQ0NCw0LjI1NC0wLjQ0NGMwLjM4MSwwLDAuNzQyLDAuMDE2LDEuMDI4LDAuMDcxYzAuNTI3LDAuMjM4LDEuMzkzLDIuMjM4LDEuODQ5LDMuMzEgYzAuOTQ1LDIuMTU5LDEuOTEzLDQuMzk2LDMuOTA1LDUuMzczYzEuODQ5LDAuOTM2LDUuODQ5LDEuNDIxLDExLjcxLDIuMDQ3YzEuOTQxLDAuMjE1LDMuOTI1LDAuNDUzLDQuOTQ0LDAuNjE5IGMwLjM4MSwwLjY5OCwwLjg0NSwyLjQwNSwxLjE1MSwzLjU5NmMwLjg5MywzLjM0OSwxLjc3OCw2Ljc3LDQuMzI5LDguMjk0YzIuMTE2LDEuMjk0LDkuMDE2LDcuODU3LDEyLjg2NiwxMS43MjIgYzAuNTA4LDAuNDkyLDEuMTQ2LDAuNzQ2LDEuODA5LDAuNzQ2YzAuNDI1LDAsMC44ODktMC4xMDMsMS4yNy0wLjM1N2MwLjMwNi0wLjE3NSw3LjAyNy00LjExMSw5LjM3My01LjU3OSBjMC40ODgsMC4xNTgsMS4zNTMsMC43MDYsMi4xMzksMS4zODFjMC4xMjMsMy42OSwwLjU5MSwxNS44OTcsMC42MTQsMTguMzY1Yy0wLjQzMiwxLjUzMi01LjU1NSw2Ljg1Ni0xMS4yMDYsMTEuNjM0IGMtMC41NTksMC40NjgtMC45LDEuMTI3LTAuOTIsMS44MzNjLTAuMDI0LDAuNjk4LTAuNjM2LDE2LjgxNywwLDIzLjI5NGMwLjY2Niw2LjU2MywxMS40MzYsMTkuMzg5LDE0LjMzMywyMi43MjIgYzEuMjI2LDMuMzI2LDQuNTY3LDEyLjE3NSw1Ljg0MiwxNC4wNzJjMS4yNzMsMS45MTIsMTQuMTksMTEuNjAzLDIyLjQ5NSwxNy43Mzh2MzguMTljMCw0LjI3OCwxLjY3MSw3LjA3MSwzLjAwNCw5LjM0MSBjMC44MTgsMS4zNDksMS40NTIsMi40MTMsMS40NTIsMy4zODF2MjYuNzQ2YzAsMy40NzcsMS4wMTIsNi4zMjYsMi40MTYsOC43MzhDMTMzLjkxMSw0NTAuMywxMTIuODY4LDQzNS4yNjksOTQuNzg5LDQxNy4yMjF6IE00NTMuNDEzLDE2MS43NTVjLTQuNDY0LTMuMTc0LTExLjQ2NS00LjQ1Mi0xMS40NjUtNC40NTJsLTUuMDk5LTAuNjUxYy0yLjU0NC01LjA4OC0xLjI3LTE2LjU0Ny0xMC4xODItMTQuMDA4IGMtOC45MjEsMi41NTUtMzguMjE0LDcuNjQyLTQ0LjU4Myw4LjkyYy02LjM2MSwxLjI3LTE0LjAwOCwxMS40NTItMTkuMDk5LDE5LjA5NmMtNS4wOTksNy42NDItMTkuMTA2LDMxLjg0OC0yMS42NTQsMzUuNjY2IGMtMi41NDQsMy44MTctMy44MjIsMjguMDI0LTMuODIyLDM0LjM4MWMwLDYuMzgxLDI4LjAyOCwzMy4xMjcsMzYuOTM2LDM0LjM5NmM4LjkxNywxLjI3LDMzLjExLTUuMDk1LDM5LjQ4NC02LjM2NSBjNi4zNjktMS4yODYsMTAuMTg2LDcuNjM1LDE1LjI4Miw3LjYzNWM1LjA5NSwwLDExLjQ2NCwyLjU0Nyw2LjM2OCwxMC4yMDZjLTUuMDk1LDcuNjE5LTUuMDk1LDExLjQ0NCwwLDE2LjU0IGM1LjA5Niw1LjEwMywxNS4yODIsMjQuMjA2LDguOTEzLDM5LjQ5MmMtNi4zNjksMTUuMjc3LTEuMjY1LDIyLjkxMiwyLjU1MiwyOS4yODVjMC43MywxLjIyMiwxLjUsMi45MiwyLjMxOCw0LjkyIGMtOS4xNzgsMTQuNjM1LTE5Ljk3NiwyOC4xOS0zMi4xNTEsNDAuNDA0Yy00MS4zMjEsNDEuMjYyLTk4LjIxOCw2Ni43NjItMTYxLjIxMyw2Ni43NjJjLTIxLjA0NCwwLTQxLjM4OS0yLjg2Ni02MC43MjYtOC4xNjcgYzAuMDgtMC4zMTgsMC4xNTUtMC42NzQsMC4yMS0xLjA0YzAuMzIxLTIuMzg4LTAuNjY2LTQuMTY2LTEuNjg2LTUuNDJjMS40MjktMC42ODMsMi41NzItMS43NzgsMy4zODUtMy4yMzkgYzEuMjMtMi4yMzgsMS40MzItNC45ODQsMS4yMy03LjE1MWwxLjIzOCwwLjAyNGMzLjEwNywwLDYuNjc5LTAuMjg2LDkuNDI4LTIuMjQ2YzQuNTA0LTMuMjA2LDQuNTg4LTkuOTg0LDMuNzQyLTE0LjY5IGMwLjMyOSwwLjE0MywwLjY2NiwwLjMwMSwwLjk3MiwwLjM5NmMwLjM1LDAuMTQzLDAuNzM1LDAuMTc1LDEuMTIzLDAuMTc1YzQuMDc2LDAsOC41ODQtNy4zMjYsOS43OTgtMTIuMTc1IGMwLjQ2NC0xLjc3OCwyLjE2Ny01LjcxNCwzLjgzLTkuNTQ4YzMuODkzLTkuMDQsNi4yMzQtMTQuNzIyLDUuNzgyLTE3LjU0N2MwLjA2Ny0xLjc3OCw3LjA1Mi03LjM0MiwxMy4yNjEtOC41ODggYzcuMzY2LTEuNDY4LDkuOTg4LTQuMTc0LDEyLjc2Ni0xMy4yM2MyLjY1MS04LjU5NSwzLjk1My0yMi45MTIsMy4yNjYtMjkuMDMyYy0wLjIwMi0yLjAwNyw0LjE0Mi04LjExOSw3LjA1NS0xMi4xNjYgYzQuNzM1LTYuNjgyLDcuNjE5LTEwLjk1Miw3LjYxOS0xNC4yODZjMC03LjY5OC02LjQ3NS0xMi44ODktMTEuMzQxLTE2LjEzNGMtNC44MzctMy4yMy0xMy4zMjEtMy45NzYtMTguOTUyLTQuNDQ1IGMtMS41NzUtMC4xMzUtMi45NTMtMC4yNTQtMy41OTItMC4zODhjLTAuNTgzLTAuMTItMS42MDMtMS4yMy0yLjQxNy0yLjA4OGMtMS43NTQtMS44ODktNC4xNTgtNC40Ni03Ljk4LTQuOTQ0IGMtMC40MzItMC4wNTYtMC44ODUtMC4wNzItMS4zMTctMC4wNzJjLTIuNDI4LDAtNC41ODQsMC43NjItNi42OTgsMS41Yy0xLjg4NSwwLjY4My0zLjY3MSwxLjMzNC01LjQ0OCwxLjMzNCBjLTAuNTQ0LDAtMS4wNDgtMC4wNjMtMS41NTYtMC4xOTFjLTAuOTQ0LTAuMTk4LTEuMzA2LTAuNDYtMS4zNzgtMC40NmMwLjAyLTAuNDI4LDAuODM4LTEuODY1LDIuODQ1LTMuMTk5IGMxLjk0MS0xLjI5MywzLjc3OC00LjE1LDEuNjYzLTEwLjYyN2MtMS41MDMtNC42NjYtNC4yODUtOS4wNzktNS4zOTYtMTAuNzNjLTQtNi4wMDctMTEuMjktNi4wMDctMTMuNjgzLTYuMDA3IGMtMi4xOTEsMC00LjMzMywwLjIxNC02LjUyOCwwLjQwNGwtMC40NzYsMC4wMTZjLTIuMjE5LDAtMy41MTYtMS45NTItNi4wNC02LjA3OWMtMS40MjktMi4zNDItMy4wMzUtNC45NjEtNS4yNjYtNy42NTkgYy00Ljg0OS01LjgxLTExLjYxOC02LjU4LTE3LjYzMS02LjU4Yy0wLjc5NCwwLTEuNTU2LDAtMi4yOTgsMC4wMzJjLTAuNjM0LDAtMS4yNSwwLjAxNi0xLjgyOSwwLjAxNiBjLTAuODE0LDAtMS41NTYtMC4wMTYtMi4xOTgtMC4xMDNjLTIuMjEtMC4yNzgtNS41LTEuOTYtOC40MDEtMy40NTJjLTMuMTgyLTEuNjM1LTYuMTktMy4xOTEtOC43MzgtMy41NDhsLTAuNjM1LTAuMDQ3IGMtMy42NDMsMC03Ljc2Niw0LjIzLTEzLjY1MSwxMC42NDNjLTEuNDYsMS41ODctMy4zNDEsMy42NDItNC4zMzcsNC41MDdjLTAuMTk4LTAuMjMtMC40NTctMC41MjMtMC42NTUtMC43NzggYy0xLjA3MS0xLjM2NS0yLjUyNy0zLjE1OC01LjEwMy00LjAzMWMtMC41NTYtMC4xODMtMS4xMTktMC4yODYtMS42NzgtMC4yODZjLTIuMDEyLDAtMy41MTIsMS4xNTktNC44MTgsMi4xNTggYy0xLjE2MywwLjg3My0yLjE1OSwxLjYxMi0zLjM2MiwxLjYxMmMtMC43MDYsMC0xLjUyNC0wLjI0Ni0yLjQ2OC0wLjc1NGMtMy41MTItMS45Mi0yLjM0Ni05LjI3OC0xLjQyNS0xNS4xODMgYzAuNDM2LTIuNzE0LDAuODQ1LTUuMjcsMC44NDUtNy40MjFjMC00Ljg4OC0yLjg4OS01LjQyLTQuMTAzLTUuNDJjLTEuMTc0LDAtMi4zMjEsMC40MDYtMy42NDYsMC45MjkgYy0xLjUsMC41NC0zLjIzNSwxLjE4Mi01LjA0NCwxLjE4MmMtMC44MTQsMC0xLjU3Ni0wLjEzNS0yLjMxNC0wLjM4OGMtMS40NTItMC40NzYtMi4wOTUtMC45ODQtMi4xOTQtMS4yODYgYy0wLjM1Ny0wLjk3NywxLjUyOC0zLjg1LDIuOS01Ljk2OGMwLjYzNi0wLjk2OSwxLjMwMi0xLjk4NSwxLjkzNy0zLjAyNGMyLjY1NS00LjQyLDQuMDMyLTcuNjgyLDIuNjIzLTEwLjE1MSBjLTAuODctMS40OTItMi40NjUtMi4yNy00Ljc2Mi0yLjI3Yy0wLjg4NSwwLTEuODgsMC4xMDMtMy4wNTUsMC4zMzNjLTAuODY2LDAuMTU4LTEuNjgzLDAuMjM4LTIuNDk3LDAuMjM4IGMtMS4wOTQsMC0xLjkzNi0wLjE1MS0yLjY3NC0wLjI3OGMtMC42OS0wLjExLTEuMjIyLTAuMjE0LTEuNjg2LTAuMjE0Yy0zLjUxMiwwLTMuOTQ0LDMuNDkxLTQuMTI3LDVjLTAuNjU1LDUuMzAxLTMuODM4LDgtOS40MTcsOCBjLTAuNDEzLDAtMC44MDktMC4wMjQtMS4yNDYtMC4wNDhjLTUuOTM3LTAuMzgxLTguNDY0LTQuNTk1LTguNDY0LTE0LjAxNmMwLTQuMDk1LDAuNjQzLTUuMTc0LDIuNTQ4LTguMzg4IGMwLjk0NC0xLjU0OCwyLjExOC0zLjUwOCwzLjU0My02LjM4MWMzLjE1NS02LjI5NCw1LjY1NS03LjQ2OCw4LjgzNy04LjkzNmMwLjk0LTAuNDQ1LDEuOTEyLTAuODk2LDIuOTA5LTEuNDY5IGMwLjc2Mi0wLjQ2LDEuMzk3LTAuNjU4LDEuODUzLTAuNjU4YzAuMzM3LDAsMC42ODcsMC4xMzUsMS4zMDIsMC4zNDFjMC44NDUsMC4zMTcsMS45ODQsMC43MjIsMy40OTIsMC43MjIgYzAuNDMyLDAsMC44ODgtMC4wMTUsMS4zOTYtMC4wODdjNC42ODctMC44MDEsNS42NzktMy41NDgsNi41NDgtNS45NjhjMC4xMDgtMC4yNTQsMC4yMDItMC41MjQsMC4zMzgtMC44NjUgYzAuMjUsMC4wODcsMC41MDQsMC4xNSwwLjc2MiwwLjE5OGMyLjA2NCwwLjU5NSw1LjUwNCwxLjU1NiwxMS4wNTUsMS41NTZjMS44MzMsMCwzLjE1OSwwLjAyMyw0LjEyNywwLjA4IGMtMC42OSwzLjQ5Mi0wLjY2NiwxMC4yMjIsNi4yMzQsMTguMDg3YzIuMjcsMi41NzEsNC4yNjIsMy43NjksNi4yOTQsMy43NjljNi41MjgsMCw3LjA4LTExLDcuMDgtMjMuMjM4IGMwLTcuMzk2LDIuODA1LTkuNDIsMTEuMTA3LTE1LjM0OWwwLjU0LTAuMzk3YzQuNTA4LTMuMTk4LDcuMTg3LTcsOS43NzgtMTAuNjc0YzIuODA2LTMuOTYsNS40NDgtNy43MDcsMTAuNDItMTAuODAyIGM0LjY2Ni0yLjk0NCwxMS45NDgtNi4xNzUsMTguOTgtOS4zMzRjOC4xMjMtMy42MTEsMTUuNzg2LTcuMDMxLDE5LjM4NS05LjkwNGM0LjEyNy0zLjMxNywzLjMwOS04LjUwOCwyLjY0My0xMi43MjIgYy0wLjg2Ni01LjQxNC0wLjYxMS02LjUzMiwxLjU1Ni03LjE3NmMzLjU2OC0xLjAwOCw3LjM4OS0xLjYwMiwxMS40NC0yLjIzOGM1LjgwMi0wLjkxMywxMS44MTgtMS44NTcsMTcuOTg4LTQuMTgyIGM2LjQwNS0yLjM4OCw3Ljg4OS01LjgwOSw4LjAxNi04LjI3OGMwLjIzNC00LjE3NC0zLjM2Ni03LjUxNi02LjUxNi05LjA5NWMtMS4zNzgtMC42OTEtMS41MzYtNC4wNzItMS42MzUtNy4wNzIgYy0wLjE1MS0zLjgzMy0wLjMwMS03Ljc3Ny0yLjc3OC0xMC4yMjJjLTEuMzk3LTEuNDI4LTMuMTg2LTIuMTQzLTUuMjUtMi4xNDNjLTIuNjk4LDAtNS42LDEuMTktOC45NjEsMi42MTEgYy0yLjIyMiwwLjkxMi00LjcxNCwxLjkyOC03LjM2NCwyLjY5Yy0wLjI4NiwwLjA4LTAuNTM2LDAuMTM1LTAuNzM4LDAuMTM1Yy0wLjk5NiwwLTEuNzA3LTIuMDcxLTIuNTkyLTQuOTc2IGMtMS4zNjEtNC4yOTQtMy4zNjktMTAuNzIyLTEwLjQyNC0xMC43MjJjLTAuNzksMC0xLjY1OSwwLjA3Mi0yLjU3MiwwLjI1NGMtOC45OTIsMS44MDEtMTEuMTA3LDExLjQ0NC0xMi42MzEsMTguNDkxIGMtMC41NCwyLjUzMi0xLjM3Nyw2LjM3My0yLjExOSw2Ljg4MWMtNS4yOTgsMC03LjAwNCwzLjM4MS04LjY2Miw2LjY2NmMtMS4wNDgsMi4wOTYtMi4yMzgsNC40NjEtNC41Niw2Ljc3OCBjLTEuNDI1LDEuNDI5LTIuNDEzLDEuODE4LTIuNjk4LDEuODVjLTAuNDMyLTAuNDA1LTEuMDkyLTMuNTA4LDEuNjgyLTkuMDQ4YzEuMTc0LTIuMzI1LDIuNDk2LTUuNzE0LDAuODY2LTguNDg0IGMtMS45MTMtMy4yMzgtNi40NC0zLjQ1Mi0xMS42NjctMy42NDJjLTIuMDg3LTAuMTAzLTQuMjU0LTAuMTgzLTYuNDItMC40NmMtNC4xMzEtMC41MTYtNS4yMTgtMS41NjQtNS4yNy0xLjc4NiBjMC0wLjEwMywwLjA1Mi0wLjgxOCwxLjE3NS0yLjE5OGMzNC4wNTUtMjAuMjQ2LDczLjgzNi0zMS44ODgsMTE2LjM4LTMxLjg4OGM1MS41ODYsMCw5OS4wODIsMTcuMTAzLDEzNy4yOTIsNDUuOTY4IGMtMC41OTUsMi4zODktMi41MjcsNS44NjUtNC4yMDIsOC43OTRjLTIuNTQzLDQuNDY4LTEuMjY5LDcuMDE2LTEuMjY5LDcuMDE2czEyLjEwMy0xLjkxMywxNC42NDMtMy4xODIgYzAuODk2LTAuNDQ0LDEuNzA2LTEuNzYyLDIuMzAyLTMuMzU3YzEuMjk3LDEuMDk1LDIuNTY3LDIuMTk4LDMuODA5LDMuMzU3Yy0zLjAyOCwyLjc0NS02LjI4MSw1LjYyNi03LjM4MSw2LjM3MiBjLTEuOTA1LDEuMjYyLTguMjc0LDMuMTgyLTEwLjgyNSw0LjQ0NGMtMi41NDgsMS4yNzgsNy42MzgsNS43MzksNy42MzgsNy42NDNjMCwxLjkxMywwLDEwLjgyNi0zLjgyMSwxMS40NTIgYy0zLjgxNywwLjY0My0yMS42NDMsMC42NDMtMjEuNjQzLDAuNjQzcy01LjczOCwyMC4zNzQtNC40NjQsMjIuMjg2YzEuMjc0LDEuOTIsOS41NTIsNi4zODEsMTQuNjUsNS43NDYgYzUuMDkyLTAuNjU4LDE2LjU1OS02LjM2NSwxNi41NTktNi4zNjVsNS4wODgtMTEuNDZsMTAuMTg2LTEwLjg1YzAsMCw3LjY0MywzLjE4MiwxMC4xOTQsMC42NDMgYzIuNTQ0LTIuNTQsNy42NDItNS4wNzksNy42NDItNS4wNzlzNS4wOTYsOS41MzksOC4yNzgsMTAuODE4bDAuNjE1LDAuMjc4bDAuMDE2LDAuMDM5YzMuNjc5LDUuMDY0LDcuMTE1LDEwLjI3OCwxMC4zMTgsMTUuNjU5IGwwLjAzMiwwLjA0djAuMDI0bDAuMDQ3LDAuMTEyYzAuMTc1LDAuMzczLDAuMzU4LDAuNzA2LDAuNTg4LDAuOTIxYzUuMjE4LDguODQxLDkuODg1LDE4LjAzMSwxMy45MDQsMjcuNTQ3IEM0NjIuMDg4LDE2Ny4yNTUsNDU3LjI3NCwxNjQuNTAxLDQ1My40MTMsMTYxLjc1NXoiLz4gPC9nPiA8L2c+Cg08L3N2Zz4=">
                    <p class="address">
                        Монгол Улс, Улаанбаатар хот, ХУД, 18-р хороо, Их Монгол гудамж, Хүннү 2222 хороолол
                    </p>
                </li>
                <li>
                    <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                    
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                    
                    <g id="SVGRepo_iconCarrier"> <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <rect x="3" y="5" width="18" height="14" rx="2" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/> </g>
                    
                    </svg>
                    <p class="address">
                        info@tlj.mn
                    </p>
                </li>
                <li>
                    <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                    
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                    
                    <g id="SVGRepo_iconCarrier"> <path d="M14.5 6.5C15.2372 6.64382 15.9689 6.96892 16.5 7.5C17.0311 8.03108 17.3562 8.76284 17.5 9.5M15 3C16.5315 3.17014 17.9097 3.91107 19 5C20.0903 6.08893 20.8279 7.46869 21 9M20.9995 16.4767V19.1864C21.0037 20.2223 20.0723 21.0873 19.0265 20.9929C10.0001 21 3.00006 13.935 3.00713 4.96919C2.91294 3.92895 3.77364 3.00106 4.80817 3.00009H7.52331C7.96253 2.99577 8.38835 3.151 8.72138 3.43684C9.66819 4.24949 10.2772 7.00777 10.0429 8.10428C9.85994 8.96036 8.99696 9.55929 8.41026 10.1448C9.69864 12.4062 11.5747 14.2785 13.8405 15.5644C14.4272 14.9788 15.0274 14.1176 15.8851 13.935C16.9855 13.7008 19.7615 14.3106 20.5709 15.264C20.858 15.6021 21.0105 16.0337 20.9995 16.4767Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </g>
                    
                    </svg>
                    <p class="address">(976) 7575-7510</p>
                </li>
            </ul>
        </div>
        <div class="footer-column">
            <ul class="sitemap">
                <li><a href="introduction.html" aria-label="See our bakery's introduction">Танилцуулга</a></li>
                <li><a href="product.html" aria-label="See all the products">Бүтээгдэхүүн</a></li>
                <li><a href="cart.html" aria-label="See products from cart">Сагс</a></li>
                <li><a href="profile.html" aria-label="See your profile">Хэрэглэгчийн нүүр хуудас</a></li>
                <li><a href="news.html" aria-label="News page">Мэдээ</a></li>
            </ul>
        </div>
        <div class="footer-column">
            <ul class="additional-menu">
                <li><a href="qa.html" aria-label="Common questions and answers">Түгээмэл асуулт хариулт</a></li>
                <li><a href="feedback.html" aria-label="Give your feedback">Санал хүсэлт</a></li>
                <li><a href="humanres.html" aria-label="Send your cv, check out our human resource">Хүний нөөц</a></li>
                <li><a href="branches.html" aria-label="All of our branches' information">Салбарын мэдээлэл</a></li>
            </ul>
        </div>
        </div>
        <p class="copy-right">©2023 - Артизан ХХК. БҮХ ЭРХ ХУУЛИАР ХАМГААЛАГДСАН</p>
        <p class="copy-right">Вэб сайтыг: МУИС</p>
        </div>
    </footer>
        `
      
    }
}
  
customElements.define('main-header', Header);
customElements.define('main-footer', Footer);

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



$(function(){
//the shrinkHeader variable is where you tell the scroll effect to start.
var shrinkHeader = 70;
    $(window).scroll(function() {
    var scroll = getCurrentScroll();
    console.log(scroll);
        if ( scroll >= shrinkHeader ) {
            $('.header-container').addClass('smaller');
            $('.submenu').addClass('hidden');
        }
        else {
            $('.header-container').removeClass('smaller');
            $('.submenu').removeClass('hidden');
        }
    });
function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
    }
});


var Products = { "bread" : [
    {"name" : "Whole corn bread", "description" : "Эрдэнэшишээр баялаг крем чийз шанзтай зөөлөн амтлаг талх", "price" : "3700"},
    {"name" : "Onion sausage focaccia", "description" : 
    "Зөөлхөн жажлууртай Focaccia-г мустард соус, шаржигнуурт сонгиноор бүрж амталсан салахын аргагүй амтат бүтээгдэхүүн",
    "price" : "3800"},
    {"name" : "Coffee kaya bread", "description" : "Кофены тансаг амтыг шингээж, өтгөрүүлсэн костард шанзаар арвижуулж бэлдсэн бүтээгдэхүүн",
    "price" : "4500"},
    {"name" : "Red bean bun bread", "description" : "Улаан буурцгийн бурмаар баяжуулсан чихэрлэг зөөлөн амтат талх",
    "price" : "3700"}
]
}