const dialogo = [
    { 
        pregunta: "¿En qué puedo ayudarte?", 
        opciones: [
            { texto: "¿Qué es TuGym?", respuesta: "TuGym es una plataforma que ayuda a gestionar rutinas de ejercicio y alimentación." },
            { texto: "¿Cómo puedo registrar mis rutinas?", respuesta: "Puedes registrar tus rutinas en la pestaña 'Rutinas' dentro de la plataforma." },
            { texto: "¿Hay entrenadores en la plataforma?", respuesta: "Sí, los entrenadores pueden crear y gestionar rutinas personalizadas para los usuarios." }
        ]
    },
    { 
        pregunta: "¿Te gustaría conocer más sobre TuGym?", 
        opciones: [
            { texto: "Sí", respuesta: "¡Genial! Puedes visitar la sección 'Acerca De' para más detalles." },
            { texto: "No", respuesta: "No hay problema, si tienes más preguntas, estaré aquí." }
        ]
    }
];

let paso = 0;

function mostrarPregunta() {
    let pregunta = document.getElementById("pregunta");
    let opcionesDiv = document.getElementById("opciones");

    pregunta.innerText = dialogo[paso].pregunta;
    opcionesDiv.innerHTML = "";

    dialogo[paso].opciones.forEach((opcion) => {
        let btn = document.createElement("button");
        btn.innerText = opcion.texto;
        btn.onclick = function() {
            mostrarRespuesta(opcion.respuesta);
        };
        opcionesDiv.appendChild(btn);
    });

    // Agregar opción de volver si no estamos en la primera pregunta
    if (paso > 0) {
        let btnVolver = document.createElement("button");
        btnVolver.innerText = "⬅ Volver";
        btnVolver.onclick = function() {
            paso--; // Retrocede una pregunta
            mostrarPregunta();
        };
        opcionesDiv.appendChild(btnVolver);
    }
}

function mostrarRespuesta(respuesta) {
    let chat = document.getElementById("chat-box");
    let opcionesDiv = document.getElementById("opciones");

    let respuestaParrafo = document.createElement("p");
    respuestaParrafo.innerText = respuesta;
    chat.appendChild(respuestaParrafo);

    opcionesDiv.innerHTML = ""; // Limpiar botones después de responder

    paso++; // Pasar a la siguiente pregunta si hay más
    if (paso < dialogo.length) {
        setTimeout(mostrarPregunta, 1000);
    } else {
        // Agregar botón para volver al inicio si terminó el flujo
        let btnReiniciar = document.createElement("button");
        btnReiniciar.innerText = "🔄 Volver al inicio";
        btnReiniciar.onclick = function() {
            paso = 0; // Reinicia el flujo de preguntas
            document.getElementById("chat-box").innerHTML = `
                <p id="pregunta"></p>
                <div id="opciones"></div>
            `;
            mostrarPregunta();
        };
        opcionesDiv.appendChild(btnReiniciar);
    }
}

// Iniciar chat
mostrarPregunta();
