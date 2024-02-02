document.addEventListener("DOMContentLoaded", function() {
    let navbar = document.querySelector(".navbar");
    let searchBox = document.querySelector(".search-box .bx-search");
    let navLinks = document.querySelector(".nav-links");
    let menuOpenBtn = document.querySelector(".navbar .bx-menu");
    let menuCloseBtn = document.querySelector(".nav-links .bx-x");
    let htmlcssArrow = document.querySelector(".htmlcss-arrow");
    let moreArrow = document.querySelector(".more-arrow");
    let jsArrow = document.querySelector(".js-arrow");
  
    if (searchBox) {
      searchBox.addEventListener("click", () => {
        navbar.classList.toggle("showInput");
        if (navbar.classList.contains("showInput")) {
          searchBox.classList.replace("bx-search", "bx-x");
        } else {
          searchBox.classList.replace("bx-x", "bx-search");
        }
      });
    }
  
    if (menuOpenBtn && menuCloseBtn) {
      menuOpenBtn.onclick = function() {
        navLinks.style.left = "0";
      };
  
      menuCloseBtn.onclick = function() {
        navLinks.style.left = "-100%";
      };
    }
  
    if (htmlcssArrow) {
      htmlcssArrow.onclick = function() {
        navLinks.classList.toggle("show1");
      };
    }
  
    if (moreArrow) {
      moreArrow.onclick = function() {
        navLinks.classList.toggle("show2");
      };
    }
  
    if (jsArrow) {
      jsArrow.onclick = function() {
        navLinks.classList.toggle("show3");
      };
    }
  });
  


  const counters = document.querySelectorAll(".counter");

  counters.forEach((counter) => {
    counter.innerText = "0";
    const updateCounter = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const increment = target / 200;
      if (count < target) {
        counter.innerText = `${Math.ceil(count + increment)}`;
        setTimeout(updateCounter, 1);
      } else counter.innerText = target;
    };
    updateCounter();
  });

  


const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));


$(".bxslider").bxSlider({
  minSlides: 8,
  maxSlides: 8,
  slideWidth: 170,
  slideMargin: 300,
  ticker: true,
  speed: 31000,
});