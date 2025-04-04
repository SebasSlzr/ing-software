document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registerForm");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const first_name = document.getElementById("name-register").value.trim();
        const last_name = document.getElementById("lastname-register").value.trim();
        const username = document.getElementById("username-register").value.trim();
        const email = document.getElementById("email-register").value.trim();
        const phone = document.getElementById("cell-register").value.trim();
        const password = document.getElementById("password-register").value.trim();

        if (!first_name || !last_name || !username || !email || !phone || !password) {
            Swal.fire("Error", "Completa todos los campos.", "error");
            return;
        }

        try {
            const response = await fetch("http://localhost:3366/api/v1/user/create", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ first_name, last_name, username, email, phone, password }),
            });

            if (response.ok) {
                Swal.fire("¡Registro exitoso!", "Ahora puedes iniciar sesión.", "success")
                    .then(() => { window.location.href = "../Login/inicioSesion.html"; });
            } else {
                Swal.fire("Error", "No se pudo registrar el usuario.", "error");
            }
        } catch (error) {
            Swal.fire("Error", "Error de conexión con el servidor.", "error");
        }
    });
});
