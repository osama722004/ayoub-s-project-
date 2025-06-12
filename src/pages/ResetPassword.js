export default function renderRestPassword() {
  return `<div class="reset-container">
    <div class="reset-box">
      <h2>Reset Your Password</h2>
      <p>Please enter your new password below.</p>

      <form onsubmit="${handleResetPassword(event)}">
        <div class="input-group">
          <label for="newPassword">New Password</label>
          <div class="password-wrapper">
            <input type="password" id="newPassword" required />
            <i class="fa-solid fa-eye toggle-password" onclick="${togglePassword('newPassword', this)}"></i>
          </div>
        </div>

        <div class="input-group">
          <label for="confirmPassword">Confirm New Password</label>
          <div class="password-wrapper">
            <input type="password" id="confirmPassword" required />
            <i class="fa-solid fa-eye toggle-password" onclick="${togglePassword('confirmPassword', this)}"></i>
          </div>
        </div>

        <div id="password-error" class="error-message" style="display: none;">
          <i class="fas fa-exclamation-circle"></i> Passwords do not match.
        </div>

        <div id="reset-success" class="success-message" style="display: none;">
          <i class="fas fa-check-circle"></i> Password has been reset successfully.
        </div>

        <div id="reset-fail" class="error-message" style="display: none;">
          <i class="fas fa-exclamation-circle"></i> Failed to reset password.
        </div>

        <button type="submit" class="reset-btn">
          <span class="btn-text">Reset Password</span>
          <span class="btn-loader"></span>
        </button>
      </form>
    </div>
  </div>
  `;
}

 function togglePassword(fieldId, icon) {
      const field = document.getElementById(fieldId);
      if (field.type === "password") {
        field.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
      } else {
        field.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
      }
    }

    function getQueryParam(param) {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(param);
    }

    async function handleResetPassword(event) {
      event.preventDefault();
      const newPassword = document.getElementById("newPassword").value;
      const confirmPassword = document.getElementById("confirmPassword").value;
      const token = getQueryParam("token");

      const errorDiv = document.getElementById("password-error");
      const successDiv = document.getElementById("reset-success");
      const failDiv = document.getElementById("reset-fail");
      const btn = document.querySelector(".reset-btn");
      const btnText = btn.querySelector(".btn-text");
      const btnLoader = btn.querySelector(".btn-loader");

      errorDiv.style.display = "none";
      successDiv.style.display = "none";
      failDiv.style.display = "none";

      if (newPassword !== confirmPassword) {
        errorDiv.style.display = "block";
        return;
      }

      btnText.textContent = "Resetting...";
      btn.disabled = true;
      btnLoader.classList.add("loading");

      try {
        const response = await fetch("https://your-api-url.com/api/auth/reset-password", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ token, password: newPassword })
        });

        const data = await response.json();

        if (response.ok) {
          successDiv.style.display = "block";
          setTimeout(() => {
            window.location.href = "/login";
          }, 2000);
        } else {
          failDiv.textContent = data.error || "Failed to reset password.";
          failDiv.style.display = "block";
        }

      } catch (err) {
        failDiv.textContent = "Something went wrong. Try again.";
        failDiv.style.display = "block";
      }

      btnText.textContent = "Reset Password";
      btn.disabled = false;
      btnLoader.classList.remove("loading");
    }