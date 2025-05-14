import {
  login,
  logout,
  isLoggedIn,
  getCurrentUser,
  register,
} from "./services/userService.js";
import renderHomePage from "./pages/HomePage.js";
import renderProductsPage from "./pages/ProductsPage.js";
import renderCartPage from "./pages/CartPage.js";
import renderLoginPage from "./pages/LoginPage.js";
import renderNotFoundPage from "./pages/NotFoundPage.js";
import { getState, setState, subscribe } from "./state/store.js";
import renderRegisterPage from "./pages/RegisterPage.js";
import renderNavbar from "./components/Navbar.js";

// Page renderers
const pages = {
  home: renderHomePage,
  products: renderProductsPage,
  cart: renderCartPage,
  login: renderLoginPage,
  register: renderRegisterPage,
};

// Initialize the application
export function initializeApp() {
  setupNavigation();
  loadCartFromStorage();
  loadUserFromStorage();
  renderPage(getState().currentPage);
  updateNavigation();

  // Subscribe to state changes if you want to auto-update UI
  subscribe(() => {
    renderPage(getState().currentPage);
    updateNavigation();
  });
}

// Navigation setup
function setupNavigation() {
  document.addEventListener("click", (e) => {
    const nav = e.target.closest("[data-nav]");
    if (nav) {
      e.preventDefault();
      const page = nav.dataset.nav;
      if (page === "logout") {
        handleLogout();
      } else {
        setState({ currentPage: page });
      }
    }
  });
}

// Load cart from localStorage
function loadCartFromStorage() {
  const savedCart = localStorage.getItem("cart");
  if (savedCart) {
    setState({ cart: JSON.parse(savedCart) });
  }
}

// Load user from localStorage
function loadUserFromStorage() {
  setState({ user: getCurrentUser() });
}

// Render layout
function renderLayout() {
  const user = getState().user;
  const currentPage = getState().currentPage;
  const header = document.querySelector("header");
  const footer = document.querySelector("footer");
  if (currentPage === "login" || currentPage === "register") {
    header.innerHTML = "";
    header.style.display = "none";
    if (footer) footer.style.display = "none";
  } else {
    header.innerHTML = `
    <nav>
      ${renderNavbar(user)}
    </nav>
  `;
    header.style.display = "";
    if (footer) footer.style.display = "";
  }
}

// Main page rendering dispatcher
function renderPage(page) {
  renderLayout(); // Always render Navbar first
  const mainContent = document.getElementById("main-content");
  const renderFn = pages[page] || renderNotFoundPage;
  mainContent.innerHTML = renderFn();
  if (page === "login") setupLoginForm();
  if (page === "register") setupRegisterForm();
}

// Setup login form
function setupLoginForm() {
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      try {
        const user = await login(email, password);
        setState({ user, currentPage: "home" });
      } catch (error) {
        const errorElement = document.getElementById("login-error");
        errorElement.textContent = error.message;
      }
    });
  }
}

// Setup register form
function setupRegisterForm() {
  const registerForm = document.getElementById("register-form");
  if (registerForm) {
    registerForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = document.getElementById("reg-email").value;
      const fullName = document.getElementById("reg-name").value;
      const phoneNumber = document.getElementById("reg-phone").value;
      const fullAddress = document.getElementById("reg-address").value;
      const password = document.getElementById("reg-password").value;
      const confirmPassword = document.getElementById(
        "reg-confirm-password"
      ).value;

      const errorElement = document.getElementById("register-error");
      errorElement.textContent = "";

      if (password !== confirmPassword) {
        errorElement.textContent = "Passwords do not match.";
        return;
      }

      try {
        const registerationData = await register({
          email,
          fullName,
          phoneNumber,
          password,
          confirmPassword,
          fullAddress,
        });
        console.log("Registration successful:", registerationData);
        
        setState({ currentPage: "login" });
      } catch (error) {
        errorElement.textContent = error.message;
      }
    });
  }
}

// Handle logout
function handleLogout() {
  logout();
  setState({ user: null, currentPage: "home" });
}

// Update navigation based on auth state
function updateNavigation() {
  renderLayout(); // Re-render Navbar on state change
}
