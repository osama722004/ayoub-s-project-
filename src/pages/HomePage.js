export default function renderHomePage() {
  return `
       

  <!-- Hero Section -->
   <section class="hero">
    <div class="hero-contentt">
      <div class="hero-image">
        <img src="/src/Assets/hero Section.jpg" alt="">
      </div>

      <div class="hero-text">
        <h1>Shop Smarter, Live Better.</h1>
        <p>Find everything you need, with deals you can’t resist, all at your fingertips.</p>
        <button class="hero-btn">Shop Now</button>
      </div>
    </div>

   </section>

 
  <section class="product-grid">
    <div class="product-item">
        <img src="/src/Assets/IMG-20250210-WA0012.jpg" alt="Suit Fashion">
    </div>
    <div class="product-item">
        <img src="/src/Assets/grid.jpg" alt="Hat and Coat">
    </div>
    <div class="product-item">
      <img src="/src/Assets/7e109e7ec6efef1d92535bb5099a551c.jpg" alt="classic">
  </div>
</section>

  <section class="about-us" id="about">
  <h2>About Us</h2>
  <div class="about-content">
    <div class="about-box">
      <h3>Our Mission</h3>
      <p>
        To create a shopping platform that’s reliable, convenient, 
        and tailored to meet your needs. We’re here to bring you 
        quality products and an effortless shopping experience.
      </p>
    </div>

    <div class="about-image">
      <img src="/src/Assets/IMG-20250210-WA0018.jpg" alt="About Us Image">
    </div>

    <div class="about-box">
      <h3>Why Choose Us?</h3>
      <p>
        From a wide range of products to fast delivery and exceptional 
        customer support, we are your trusted partner in online shopping.
      </p>
    </div>
  </div>
</section>

<section class="categories" id="categories">
  <h2>Categories</h2>
  <div class="category-grid">
    <!-- Men Category -->
    <div class="category-item">
      <div class="image-box">
        <img src="/src/Assets/IMG-20250210-WA0018.jpg" alt="Men Category" />
      </div>
      <h3>Men</h3>
      <button>Shop Now</button>
    </div>

    <!-- Women Category -->
    <div class="category-item">
      <div class="image-box">
        <img src="/src/Assets/IMG-20250210-WA0016.jpg" alt="Women Category" />
      </div>
      <h3>Women</h3>
      <button>Shop Now</button>
    </div>
  </div>
</section>

  <!-- Contact Us Section -->
  <section class="contact-us" id="contact">
    <h2>Contact Us</h2>
    <form class="contact-form">
      <label for="name">Name</label>
      <input type="text" id="name" name="name" placeholder="Enter your name" required />

      <label for="phone">Phone Number</label>
      <input type="tel" id="phone" name="phone" placeholder="Enter phone number" required />

      <label for="email">Email Address</label>
      <input type="email" id="email" name="email" placeholder="Email Address" required />

      <label for="message">Message</label>
      <textarea id="message" name="message" placeholder="Message" rows="5" required></textarea>

      <button type="submit">Submit</button>
    </form>
  </section>



  <!-- Optional JavaScript -->

  
  
  
  `;
}