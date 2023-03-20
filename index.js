class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <header>
      <a href="index.html" class="menu-logo">
          <img src="../images/tlj_logo.webp" alt="Tous les Jours logo" class="logo" width="201" height="28">
      </a>
      <nav class="menu">
        <a href="introduction.html">Танилцуулга</a>
        <a href="product.html">Бүтээгдэхүүн</a>
      </nav>
      <nav class="round-menu">
        <a href="#" aria-label="Search for products">
        <svg width="25px" height="25px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg">

        <g id="SVGRepo_bgCarrier" stroke-width="0">
        
        <rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="14.4" fill="#ffffff" strokewidth="0"/>
        
        </g>
        
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
        
        <g id="SVGRepo_iconCarrier"> <path d="M10.77 18.3C9.2807 18.3 7.82485 17.8584 6.58655 17.031C5.34825 16.2036 4.38311 15.0275 3.81318 13.6516C3.24325 12.2757 3.09413 10.7616 3.38468 9.30096C3.67523 7.84029 4.39239 6.49857 5.44548 5.44548C6.49857 4.39239 7.84029 3.67523 9.30096 3.38468C10.7616 3.09413 12.2757 3.24325 13.6516 3.81318C15.0275 4.38311 16.2036 5.34825 17.031 6.58655C17.8584 7.82485 18.3 9.2807 18.3 10.77C18.3 11.7588 18.1052 12.738 17.7268 13.6516C17.3484 14.5652 16.7937 15.3953 16.0945 16.0945C15.3953 16.7937 14.5652 17.3484 13.6516 17.7268C12.738 18.1052 11.7588 18.3 10.77 18.3ZM10.77 4.74999C9.58331 4.74999 8.42327 5.10189 7.43657 5.76118C6.44988 6.42046 5.68084 7.35754 5.22672 8.45389C4.77259 9.55025 4.65377 10.7566 4.88528 11.9205C5.11679 13.0844 5.68824 14.1535 6.52735 14.9926C7.36647 15.8317 8.43556 16.4032 9.59945 16.6347C10.7633 16.8662 11.9697 16.7474 13.0661 16.2933C14.1624 15.8391 15.0995 15.0701 15.7588 14.0834C16.4181 13.0967 16.77 11.9367 16.77 10.75C16.77 9.15869 16.1379 7.63257 15.0126 6.50735C13.8874 5.38213 12.3613 4.74999 10.77 4.74999Z" fill="#7A4D4A"/> <path d="M20 20.75C19.9015 20.7504 19.8038 20.7312 19.7128 20.6934C19.6218 20.6557 19.5392 20.6001 19.47 20.53L15.34 16.4C15.2075 16.2578 15.1354 16.0697 15.1388 15.8754C15.1422 15.6811 15.221 15.4958 15.3584 15.3583C15.4958 15.2209 15.6812 15.1422 15.8755 15.1388C16.0698 15.1354 16.2578 15.2075 16.4 15.34L20.53 19.47C20.6704 19.6106 20.7493 19.8012 20.7493 20C20.7493 20.1987 20.6704 20.3893 20.53 20.53C20.4608 20.6001 20.3782 20.6557 20.2872 20.6934C20.1962 20.7312 20.0985 20.7504 20 20.75Z" fill="#7A4D4A"/> </g>
        
        </svg>
        </a>
        <a href="favorites.html" aria-label="See your favorite products">
        <img alt="heart-svgrepo-com" width="25" height="25" src="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KDTwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIFRyYW5zZm9ybWVkIGJ5OiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9Ii0xOS4yIC0xOS4yIDIzMC40MCAyMzAuNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgZmlsbD0ibm9uZSI+Cg08ZyBpZD0iU1ZHUmVwb19iZ0NhcnJpZXIiIHN0cm9rZS13aWR0aD0iMCI+Cg08cmVjdCB4PSItMTkuMiIgeT0iLTE5LjIiIHdpZHRoPSIyMzAuNDAiIGhlaWdodD0iMjMwLjQwIiByeD0iMTE1LjIiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZXdpZHRoPSIwIi8+Cg08L2c+Cg08ZyBpZD0iU1ZHUmVwb190cmFjZXJDYXJyaWVyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KDTxnIGlkPSJTVkdSZXBvX2ljb25DYXJyaWVyIj4KDTxwYXRoIGQ9Ik02MC43MzIgMjkuN0M0MS4xMDcgMjkuNyAyMiAzOS43IDIyIDY3LjQxYzAgMjcuMjkgNDUuMjc0IDY3LjI5IDc0IDk0Ljg5IDI4Ljc0NC0yNy42IDc0LTY3LjYgNzQtOTQuODkgMC0yNy43MS0xOS4wOTItMzcuNzEtMzguNjk1LTM3LjcxQzExNiAyOS43IDEwNC4zMjUgNDEuNTc1IDk2IDU0LjA2NiA4Ny42MzggNDEuNTE2IDc2IDI5LjcgNjAuNzMyIDI5Ljd6IiBzdHlsZT0iY2xpcC1ydWxlOmV2ZW5vZGQ7ZGlzcGxheTppbmxpbmU7ZmlsbDpub25lO3N0cm9rZTojN0E0RDRBO3N0cm9rZS13aWR0aDoxMjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MjtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIvPgoNPC9nPgoNPC9zdmc+">
        </a>
        <a href="cart.html" aria-label="See products from cart">
        <svg width="25px" height="25px" viewBox="-3.2 -3.2 38.40 38.40" id="svg5" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" fill="#000000">

        <g id="SVGRepo_bgCarrier" stroke-width="0">
        
        <rect x="-3.2" y="-3.2" width="38.40" height="38.40" rx="19.2" fill="#ffffff" strokewidth="0"/>
        
        </g>
        
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
        
        <g id="SVGRepo_iconCarrier"> <defs id="defs2"/> <g id="layer1" transform="translate(36,-244)"> <path d="m -31.371094,255.00586 c -1.625564,0 -2.864805,1.51618 -2.589843,3.10351 l 2.27539,13.13477 c 0.27851,1.60776 1.701467,2.76172 3.314453,2.76172 h 16.767578 c 1.6146248,0 3.0129936,-1.16108 3.3105472,-2.74805 a 1.0001,1.0001 0 0 0 0.00195,-0.0137 l 2.2734375,-13.12109 v -0.002 c 0.2984384,-1.59859 -0.9594241,-3.11523 -2.5859375,-3.11523 z m 0,2 h 22.7675784 c 0.4158021,0 0.6977222,0.33936 0.6210937,0.74805 a 1.0001,1.0001 0 0 0 -0.00195,0.0137 l -2.2753911,13.12695 c -0.124292,0.65116 -0.680335,1.11133 -1.34375,1.11133 h -16.767578 c -0.666611,0 -1.23316,-0.46316 -1.34375,-1.10156 l -2.27539,-13.13672 c -0.07374,-0.42569 0.201707,-0.76172 0.61914,-0.76172 z" id="rect40272" style="color:#7A4D4A;fill:#7A4D4A;fill-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4.1;-inkscape-stroke:none"/> <path d="m -24.695312,246.07227 a 1,1 0 0 0 -0.556641,0.52734 l -4,9 a 1,1 0 0 0 0.507812,1.32031 1,1 0 0 0 1.320313,-0.50781 l 4,-9 a 1,1 0 0 0 -0.507813,-1.32031 1,1 0 0 0 -0.763671,-0.0195 z" id="path41727" style="color:#7A4D4A;fill:#7A4D4A;fill-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4.1;-inkscape-stroke:none"/> <path d="m -15.279297,246.07227 a 1,1 0 0 0 -0.763672,0.0195 1,1 0 0 0 -0.507812,1.32031 l 4,9 a 1,1 0 0 0 1.318359,0.50781 1,1 0 0 0 0.507813,-1.32031 l -4,-9 a 1,1 0 0 0 -0.554688,-0.52734 z" id="path41729" style="color:#7A4D4A;fill:#7A4D4A;fill-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4.1;-inkscape-stroke:none"/> <path d="m -20,259.00586 a 1,1 0 0 0 -1,1 v 8 a 1,1 0 0 0 1,1 1,1 0 0 0 1,-1 v -8 a 1,1 0 0 0 -1,-1 z" id="path43195" style="color:#7A4D4A;fill:#7A4D4A;fill-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4.1;-inkscape-stroke:none"/> <path d="m -24,259.00586 a 1,1 0 0 0 -1,1 v 8 a 1,1 0 0 0 1,1 1,1 0 0 0 1,-1 v -8 a 1,1 0 0 0 -1,-1 z" id="path43243" style="color:#7A4D4A;fill:#7A4D4A;fill-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4.1;-inkscape-stroke:none"/> <path d="m -16,259.00586 a 1,1 0 0 0 -1,1 v 8 a 1,1 0 0 0 1,1 1,1 0 0 0 1,-1 v -8 a 1,1 0 0 0 -1,-1 z" id="path43245" style="color:#7A4D4A;fill:#7A4D4A;fill-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4.1;-inkscape-stroke:none"/> </g> </g>
        
        </svg>
        </a>
        <a href="login.html" aria-label="Login page">
        <svg width="25px" height="25px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg">

        <g id="SVGRepo_bgCarrier" stroke-width="0">
        
        <rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="14.4" fill="#ffffff" strokewidth="0"/>
        
        </g>
        
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
        
        <g id="SVGRepo_iconCarrier"> <path d="M12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C9.45006 10.79 7.56006 8.84 7.56006 6.44C7.56006 3.99 9.54006 2 12.0001 2C14.4501 2 16.4401 3.99 16.4401 6.44C16.4301 8.84 14.5401 10.79 12.1601 10.87Z" stroke="#7A4D4A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M7.15997 14.56C4.73997 16.18 4.73997 18.82 7.15997 20.43C9.90997 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.91997 12.73 7.15997 14.56Z" stroke="#7A4D4A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </g>
        
        </svg>
        </a>
      </nav>
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
        <div class="footer-column1">
            <ul class="social-media">
                <li><img src="" alt=""></li>
                <li><img src="" alt=""></li>
                <li><img src="" alt=""></li>
            </ul>
            <ul class="address">
                <li>
                    <img src="" alt="" class="address-logo">
                    <p class="address"></p>
                </li>
                <li>
                    <img src="" alt="" class="address-logo">
                    <p class="address"></p>
                </li>
                <li>
                    <img src="" alt="" class="address-logo">
                    <p class="address"></p>
                </li>
            </ul>
        </div>
        <div class="footer-column2">
            <ul class="sitemap">
                <li><a href="introduction.html" aria-label="See our bakery's introduction">Танилцуулга</a></li>
                <li><a href="product.html" aria-label="See all the products">Бүтээгдэхүүн</a></li>
                <li><a href="cart.html" aria-label="See products from cart">Сагс</a></li>
                <li><a href="profile.html" aria-label="See your profile">Хэрэглэгчийн нүүр хуудас</a></li>
                <li><a href="news.html" aria-label="News page">Мэдээ</a></li>
            </ul>
        </div>
        <div class="footer-column3">
            <ul class="additional-menu">
                <li><a href="qa.html" aria-label="Common questions and answers">Түгээмэл асуулт хариулт</a></li>
                <li><a href="feedback.html" aria-label="Give your feedback">Санал хүсэлт</a></li>
                <li><a href="humanres.html" aria-label="Send your cv, check out our human resource">Хүний нөөц</a></li>
                <li><a href="branches.html" aria-label="All of our branches' information">Салбарын мэдээлэл</a></li>
            </ul>
        </div>
    </footer>
        `
      
    }
  }
  
  customElements.define('main-header', Header);
  customElements.define('main-footer', Footer);