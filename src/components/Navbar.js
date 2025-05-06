export default function renderNavbar(user) {
  return `
    <div class="logo">Store Name</div>
    <ul>
      <li><a href="#" data-nav="home">Home</a></li>
      <li><a href="#" data-nav="products">Products</a></li>
      <li><a href="#" data-nav="cart">Cart (<span id="cart-count">0</span>)</a></li>
      <li id="auth-links">
        ${
          user
            ? `<span>Welcome, ${user.name}</span> <a href="#" data-nav="logout">Logout</a>`
            : `<a href="#" data-nav="login">Login</a>`
        }
      </li>
    </ul>
  `;
}