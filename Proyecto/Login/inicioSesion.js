document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita la recarga de la página

        const email = document.getElementById("email-register").value.trim();
        const password = document.getElementById("password-register").value.trim();

        if (!email || !password) {
            return alert("Por favor, completa todos los campos.");
        }

        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/.test(email)) {
            return alert("Ingresa un correo válido que termine en .com.");
        }

        window.location.href = "../CalculadoraCalorias/calculadora.html";
    });
});
