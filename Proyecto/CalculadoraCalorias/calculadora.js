function calcularCalorias() {
    let edad = document.getElementById("edad").value;
    let sexo = document.getElementById("sexo").value;
    let altura = document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;
    let actividad = document.getElementById("actividad").value;

    if (!edad || !altura || !peso) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    let bmr;

    if (sexo === "masculino") {
        bmr = 10 * peso + 6.25 * altura - 5 * edad + 5;
    } else {
        bmr = 10 * peso + 6.25 * altura - 5 * edad - 161;
    }

    let caloriasDiarias = bmr * actividad;

    document.getElementById("resultado").innerHTML = `Tu gasto calórico diario es aproximadamente: <b>${Math.round(caloriasDiarias)} calorías</b>`;
}

document.addEventListener("DOMContentLoaded", () => {
    Swal.fire({
        title: "Calcula tu gasto calórico diario",
        icon: "info",
        confirmButtonColor: "darkred"
    });
});
