document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("signup-form");
    const result = document.getElementById("result");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      // Collect form values
      const firstName = document.getElementById("first-name").value;
      const surname = document.getElementById("surname").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const mobile = document.getElementById("mobile").value;
      const city = document.getElementById("city").value;
      const zip = document.getElementById("zip").value;
      const checkMe = document.getElementById("check-me").checked ? "Yes" : "No";
      // Display form values
      result.innerHTML = `
        <h3>Form Submitted Successfully!</h3>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>SurName:</strong> ${surname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Password:</strong> ${"*".repeat(password.length)}</p>
        <p><strong>Mobile Number:</strong> ${mobile}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Zip Code:</strong> ${zip}</p>
        <p><strong>Check me out:</strong> ${checkMe}</p>
        `;
        result.style.display = "block";
      location.href = "login.html";
        
        // Clear form fields
        form.reset();
      });
  });
  // window.location.href = "login.html";
  document.getElementById("sign-in-btn").window.location.href = "login.html";


