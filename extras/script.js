document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navMenu = document.querySelector('nav ul');
  
  mobileMenuBtn.addEventListener('click', function() {
      navMenu.classList.toggle('show');
  });
  
  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
      link.addEventListener('click', function() {
          navMenu.classList.remove('show');
      });
  });
  
  // Product data
  const products = [
      {
          name: 'Green Pad',
          price: '₹40/-',
          sku: 'SK-40120',
          packing: '3 pcs/pack, 120 packs/carton',
          category: 'pads',
          image: 'assets/product1.png'
      },
      {
          name: 'Sponge',
          price: '₹280/-',
          sku: 'SK-28180',
          packing: '1 pc/pack, 180 packs/carton',
          category: 'sponges',
          image: 'assets/product2.png'
      },
      {
          name: 'Heavy Duty (20g, 430 Grade)',
          price: '₹28/-',
          sku: 'SK-28200',
          packing: '1 pc/pack, 200 packs/carton',
          category: 'pads',
          image: 'assets/product3.png'
      },
      {
          name: 'Scrub Pad',
          price: '₹29/-',
          sku: 'SK-29180',
          packing: '2 pcs/pack, 180 packs/carton',
          category: 'pads',
          image: 'assets/product4.png'
      },
      {
          name: 'Metallic Pad',
          price: '₹39/-',
          sku: 'SK-39180',
          packing: '1 pc/pack, 180 packs/carton',
          category: 'pads',
          image: 'assets/product5.png'
      },
      {
          name: 'Heavy Duty (10g, 430 Grade)',
          price: '₹18/-',
          sku: 'SK-20200',
          packing: '1 pc/pack, 200 packs/carton',
          category: 'pads',
          image: 'assets/product6.png'
      },
      {
          name: 'Cellulose Wips (4 colours)',
          price: '₹299/-',
          sku: 'SK-299120',
          packing: '4 packs/pack, 120 packs/carton',
          category: 'cloths',
          image: 'assets/product7.png'
      },
      {
          name: 'Floor Cloth',
          price: '₹79/-',
          sku: 'SK-7960',
          packing: '2 packs/pack, 60 packs/carton',
          category: 'cloths',
          image: 'assets/product8.png'
      },
      {
          name: 'Loofah (4 colours)',
          price: '₹99/-',
          sku: 'SK-9960',
          packing: '1 pc/pack, 60 packs/carton',
          category: 'sponges',
          image: 'assets/product9.png'
      },
      {
          name: 'Handle Loofah',
          price: '₹189/-',
          sku: 'SK-18960',
          packing: '1 pc/pack, 60 packs/carton',
          category: 'sponges',
          image: 'assets/product10.png'
      },
      {
          name: 'Dish Cloth',
          price: '₹72/-',
          sku: 'SK-7254',
          packing: '6 pcs/pack, 54 dozen/carton',
          category: 'cloths',
          image: 'assets/product11.png'
      },
      {
          name: 'Tile Brush',
          price: '₹39/-',
          sku: 'SK-39120',
          packing: '1 pc/pack, 120 packs/carton',
          category: 'pads',
          image: 'assets/product12.png'
      }
  ];
  
  // Display products
  const productGrid = document.querySelector('.product-grid');
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  function displayProducts(filter = 'all') {
      productGrid.innerHTML = '';
      
      const filteredProducts = filter === 'all' 
          ? products 
          : products.filter(product => product.category === filter);
      
      filteredProducts.forEach(product => {
          const productCard = document.createElement('div');
          productCard.className = 'product-card';
          productCard.innerHTML = `
              <div class="product-image">
                  <img src="${product.image}" alt="${product.name}">
              </div>
              <div class="product-info">
                  <h3>${product.name}</h3>
                  <div class="product-price">${product.price}</div>
                  <div class="product-sku">${product.sku}</div>
                  <div class="product-packing">${product.packing}</div>
              </div>
          `;
          productGrid.appendChild(productCard);
      });
  }
  
  // Filter products
  filterButtons.forEach(button => {
      button.addEventListener('click', function() {
          // Remove active class from all buttons
          filterButtons.forEach(btn => btn.classList.remove('active'));
          // Add active class to clicked button
          this.classList.add('active');
          // Filter products
          displayProducts(this.dataset.filter);
      });
  });
  
  // Initialize with all products
  displayProducts();
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          if (targetId === '#') return;
          
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 80,
                  behavior: 'smooth'
              });
          }
      });
  });
  
  // Form submission (non-functional for static site)
  const contactForm = document.getElementById('form');
  if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
          e.preventDefault();
          alert('Thank you for your message! This is a static demo, so your message wasn\'t actually sent.');
          this.reset();
      });
  }
});