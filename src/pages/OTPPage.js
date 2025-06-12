export default function renderNotOTPPage() {
  return ` <div class="otp-overlay otp-dark">
    <div class="otp-content">
      <div class="otp-header">
        <h2>Enter Verification Code</h2>
        <!-- <button class="otp-close" onclick="closeOtpPopup()">
          <i class="fas fa-times"></i>
        </button> -->
      </div>

      <form onsubmit="${handleOtpSubmit(event)}">
        <div class="otp-body">
          <p>We have sent a verification code to your email. Please enter it below:</p>

          <div id="otp-general-error" class="otp-error" style="display: none;">
            <i class="fas fa-exclamation-circle"></i>
            <span>Unexpected error occurred</span>
          </div>

          <div class="otp-inputs">
            <input type="text" class="otp-input" maxlength="1" />
            <input type="text" class="otp-input" maxlength="1" />
            <input type="text" class="otp-input" maxlength="1" />
            <input type="text" class="otp-input" maxlength="1" />
            <input type="text" class="otp-input" maxlength="1" />
            <input type="text" class="otp-input" maxlength="1" />
          </div>

          <span id="otp-error" class="otp-input-error" style="display: none;">
            Invalid OTP code
          </span>

          <div class="otp-timer" id="otp-timer">
            Time remaining: <span id="countdown">10:00</span>
          </div>
        </div>

        <div class="otp-footer">
          <button type="submit" class="otp-submit" id="otp-submit-btn">
            Verify OTP
          </button>
        </div>
      </form>

      <div class="otp-notes">
        <h3>Important Notes:</h3>
        <ul>
          <li>If you didn't receive the code, click the "Resend OTP" button.</li>
          <li>The OTP expires in 10 minutes.</li>
        </ul>
      </div>
    </div>
  </div>
  `;
}
function closeOtpPopup() {
      document.querySelector('.otp-overlay').style.display = 'none';
    }

    // Focus movement between OTP inputs
    const inputs = document.querySelectorAll(".otp-input");
    inputs.forEach((input, index) => {
      input.addEventListener("input", (e) => {
        const value = e.target.value;
        if (value && index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
      });

      input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace" && !input.value && index > 0) {
          inputs[index - 1].focus();
        }
      });
    });

    async function handleOtpSubmit(e) {
      e.preventDefault();
      const otpCode = Array.from(document.querySelectorAll(".otp-input")).map(input => input.value).join("");
      const generalError = document.getElementById('otp-general-error');
      const otpError = document.getElementById('otp-error');
      const submitButton = document.getElementById('otp-submit-btn');

      generalError.style.display = 'none';
      otpError.style.display = 'none';

      if (!/^\d{6}$/.test(otpCode)) {
        otpError.textContent = "OTP should be 6 digits";
        otpError.style.display = "block";
        return;
      }

      submitButton.disabled = true;
      submitButton.textContent = 'Verifying...';

      try {
        const response = await fetch('https://your-api-url.com/verify-otp', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ otp: otpCode })
        });

        const data = await response.json();

        if (response.ok) {
          alert("OTP verified successfully!");
          window.location.href = '/reset-password';
        } else {
          throw new Error(data.message || 'Invalid OTP');
        }
      } catch (error) {
        generalError.style.display = 'block';
        submitButton.disabled = false;
        submitButton.textContent = 'Verify OTP';
        console.error('Error:', error);
      }
    }

    // Countdown Timer
    let timeLeft = 600;
    const countdownElement = document.getElementById('countdown');

    function updateCountdown() {
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      countdownElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        countdownElement.textContent = "Expired";
        document.getElementById('otp-submit-btn').disabled = true;
        countdownElement.style.color = "red";
      } else {
        timeLeft--;
      }
    }

    const timerInterval = setInterval(updateCountdown, 1000);
    updateCountdown();