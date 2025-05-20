document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", async (event) => {
        event.preventDefault(); 

        const email = document.getElementById("email-register").value.trim();
        const password = document.getElementById("password-register").value.trim();

        if (!email || !password) {
            return Swal.fire({
                icon: 'warning',
                title: 'Campos incompletos',
                text: 'Por favor, completa todos los campos.'
            });
        }

        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/.test(email)) {
            return Swal.fire({
                icon: 'error',
                title: 'Correo inválido',
                text: 'Ingresa un correo válido que termine en .com.'
            });
        }

        try {
            const response = await fetch('http://localhost:3366/api/v1/user/login', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });

            const result = await response.json();

            if (response.ok && result.status === 0) {
                Swal.fire({
                    icon: 'success',
                    title: 'Inicio de sesión exitoso',
                    text: 'Bienvenido de nuevo!',
                    confirmButtonColor: 'darkred'
                }).then(() => {
                    window.location.href = "../Rutinas/rutinas.html";
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error al iniciar sesión',
                    text: result.message || 'Credenciales incorrectas'
                });
            }

        } catch (error) {
            console.error("Error al iniciar sesión:", error);
            Swal.fire({
                icon: 'error',
                title: 'Error de red',
                text: 'No se pudo conectar con el servidor.'
            });
        }
    });
});
