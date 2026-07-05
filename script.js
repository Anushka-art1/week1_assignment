// Responsive Navbar

const menu = document.getElementById("menu");
const navLinks = document.getElementById("navLinks");

menu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Contact Form Validation

const form = document.getElementById("contactForm");
const error = document.getElementById("error");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const phonePattern = /^[0-9]{10}$/;

    if(name === ""){
        error.style.color = "red";
        error.innerHTML = "Please enter your name.";
        return;
    }

    if(!emailPattern.test(email)){
        error.style.color = "red";
        error.innerHTML = "Please enter a valid email.";
        return;
    }

    if(!phonePattern.test(phone)){
        error.style.color = "red";
        error.innerHTML = "Enter a valid 10-digit phone number.";
        return;
    }

    if(message.length < 10){
        error.style.color = "red";
        error.innerHTML = "Message should be at least 10 characters.";
        return;
    }

    error.style.color = "green";
    error.innerHTML = "Form submitted successfully!";

    form.reset();

});