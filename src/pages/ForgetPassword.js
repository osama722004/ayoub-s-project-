export default function renderForgetPaasword() {
  return `<!-- Forgot Password Popup -->
  <div class="forgot-password-overlay forgot-password-dark">
    <div class="forgot-password-content">
      <div class="forgot-password-header">
        <h2>Reset Password</h2>
        <button class="forgot-password-close" onclick="${closeForgotPasswordPopup()}">
          <i class="fas fa-times"></i>
        </button>
      </div>

      <form onsubmit="${handleForgotPasswordSubmit(event)}">
        <div class="forgot-password-body">
          <p>Enter your email to reset your password</p>
          <div id="reset-general-error" class="forgot-password-error" style="display: none;">
            <i class="fas fa-exclamation-circle"></i>
            <span>Unexpected error occurred</span>
          </div>
          <div class="forgot-password-input-group">
            <i class="far fa-envelope forgot-password-input-icon"></i>
            <input
              type="email"
              class="forgot-password-input"
              id="forgot-password-email"
              placeholder="Email Address"
              required
            />
          </div>
          <span id="reset-email-error" class="forgot-password-input-error" style="display: none;">
            Invalid email address
          </span>
        </div>

        <div class="forgot-password-footer">
          <button type="submit" class="forgot-password-submit" id="forgot-password-submit-btn">
            Send Verification Code
          </button>
        </div>
      </form>

      <div class="forgot-password-notes">
        <h3>Important Notes:</h3>
        <ul>
          <li>A notification will be sent to your email when the password is changed.</li>
          <li>You will receive a confirmation email once the password is updated.</li>
          <li>If the issue persists, please contact support.</li>
        </ul>
      </div>
    </div>
  </div>

  
  
  `;
}

function closeForgotPasswordPopup() {
      document.querySelector('.forgot-password-overlay').style.display = 'none';
    }

    // Handle form submission
    async function handleForgotPasswordSubmit(e) {
      e.preventDefault();
      const email = document.getElementById('forgot-password-email').value;
      const generalError = document.getElementById('reset-general-error');
      const emailError = document.getElementById('reset-email-error');
      const submitButton = document.getElementById('forgot-password-submit-btn');
      
      generalError.style.display = 'none';
      emailError.style.display = 'none';

      // Validate email format
      if (!email.includes("@")) {
        emailError.textContent = "Please enter a valid email address";
        emailError.style.display = "block";
        return;
      }

      submitButton.disabled = true;
      submitButton.textContent = 'Sending...';

      try {
        // Call the API for password reset
        const response = await fetch('https://your-api-url.com/reset-password', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });

        const data = await response.json();

        if (response.ok) {
          alert(`A verification code has been sent to: ${email}`);
          closeForgotPasswordPopup();
        } else {
          throw new Error(data.message || 'An error occurred');
        }
      } catch (error) {
        generalError.style.display = 'block';
        submitButton.disabled = false;
        submitButton.textContent = 'Send Verification Code';
        console.error('Error:', error);
      }
    }