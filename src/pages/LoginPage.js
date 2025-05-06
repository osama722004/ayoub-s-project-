export default function renderLoginPage() {
  return `
    <div class="login-container">
      <h2>Login</h2>
      <form id="login-form">
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" required placeholder="Enter your email">
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" required placeholder="Enter your password">
        </div>
        <button type="submit">Login</button>
      </form>
      <p id="login-error" class="error-message"></p>
      <a href="#" data-nav="register">Register</a>
    </div>
  `;
}