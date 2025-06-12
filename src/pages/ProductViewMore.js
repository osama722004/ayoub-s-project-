export default function renderProductViewMore() {
  return `<div class="container">
    <!-- Header -->
    <header class="header">
      <img src="secondPromotex.png" alt="Promotex Logo" class="logo">
    </header>

    <!-- Main Content -->
    <main class="product-page">
      <div class="image-section">
        <img src="IMG-20250210-WA0001.jpg" alt="Winter Haven Coat">
      </div>

      <div class="info-section">
        <h2>Winter Haven <span class="price">500.00 EGP</span></h2>

        <div class="details">
          <h3>Product Details:</h3>
          <p><strong>Department:</strong> Women's Winterwear</p>
          <p><strong>Seller Store:</strong> Luxe Coats Store</p>
          <p><strong>Manufacturer:</strong> Double-Breasted Button Closure</p>

          <div class="colors">
            <div class="color" style="background: #bca996;"></div>
            <div class="color" style="background: #8b4d4d;"></div>
            <div class="color" style="background: #000;"></div>
            <div class="color" style="background: #999dbf;"></div>
          </div>

          <div class="sizes">
            <button>S</button>
            <button>M</button>
            <button>L</button>
            <button>XL</button>
            <button>XXL</button>
          </div>

          <div class="actions">
            <button class="buy">Buy Now</button>
            <button class="cart">Add to cart <i class="fas fa-cart-shopping"></i></button>
          </div>
        </div>

        
      </div>
    </main>
<div class="about">
          <h3>About The Product :</h3>
          <p><strong>Brand:</strong> Winter Luxe</p>
          <p><strong>Material:</strong> Premium Wool Blend (80% Wool, 20% Polyester)</p>
          <p><strong>Closure Type:</strong> Double-Breasted Button Closure</p>
          <p><strong>Care Instructions:</strong><br>
            - Dry Clean Only<br>
            - Avoid Prolonged Sunlight Exposure<br>
            - Store in a Cool, Dry Place
          </p>
        </div>
    <button class="back"><i class="fas fa-arrow-left"></i></button>
  </div>`;
}