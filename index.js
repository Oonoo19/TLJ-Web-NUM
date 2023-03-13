class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <header>
      <a href="index.html">
          <img src="../images/tlj_logo.webp" alt="Tous les Jours logo" class="logo" width="201" height="28">
      </a>
      <ul class="menu">
          <li>
              <a href="introduction.html">Танилцуулга</a>
          </li>
          <li>
              <a href="product.html">Бүтээгдэхүүн</a>
          </li>
      </ul>
      <ul class="round-menu">
          <li><a href="#" aria-label="Search for products"><img src="" alt="" class="round-menu"></a></li>
          <li><a href="avorites.html" aria-label="See your favorite products"><img src="" alt="" class="round-menu"></a></li>
          <li><a href="cart.html" aria-label="See products from cart"><img src="" alt="" class="round-menu"></a></li>
          <li><a href="login.html" aria-label="Login page"><img src="" alt="" class="round-menu"></a></li>
      </ul>
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