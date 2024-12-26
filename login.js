document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email && password) {
        console.log(`Logged in with Email: ${email}`);
    } else {
        alert("Please fill out both fields.");
    }
   location.href = "post.html";
});




