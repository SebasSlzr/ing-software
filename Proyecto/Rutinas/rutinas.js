// rutinas.js
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
        event.preventDefault(); 
        
        const formData = new FormData(form);
        let datos = {};
        
        formData.forEach((value, key) => {
            datos[key] = value;
        });
        
        console.log("Datos del formulario:", datos);
        alert("Formulario enviado con éxito");
    });
});
