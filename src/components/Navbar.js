export default function renderNavbar(user) {
  return `
    

  
         <div class="logo">
      <img src="/src/Assets/secondPromotex.png" alt="logo"width="100px" height="100px" />
    </div>
    
      <ul>
        <li><a href="#hero">Home</a></li>
        <li><a href="#categories">Categories</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact Us</a></li>
         <li id="auth-links">
        ${
          user
            ? `<span>Welcome, ${user.name}</span> <a href="#" data-nav="logout">Logout</a>`
            : `<a href="#" data-nav="login">Login</a>`
        }
      </li>
      </ul>
    
    <div class="header-right">
      <a href="#" class="cart-icon"><i class="fas fa-shopping-cart"></i></a>
      <!-- <button class="shop-now-btn"><a href="#categories">Shop Now</a></button> -->
      <a href="login.html"><i class="fa-solid fa-circle-user  profile-icon"></i></a>
    </div>
        
  `;
}