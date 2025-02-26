document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registerForm");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); 

        const name = document.getElementById("name-register").value.trim();
        const lastname = document.getElementById("lastname-register").value.trim();
        const email = document.getElementById("email-register").value.trim();
        const phone = document.getElementById("cell-register").value.trim();
        const password = document.getElementById("password-register").value.trim();

        if (!name || !lastname || !email || !phone || !password) {
            return alert("Por favor, completa todos los campos.");
        }

        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/.test(email)) {
            return alert("Ingresa un correo válido que termine en .com.");
        }

        if (password.length < 6) {
            return alert("La contraseña debe tener al menos 6 caracteres.");
        }

        
        window.location.href = "../CalculadoraCalorias/calculadora.html";
    });
});
