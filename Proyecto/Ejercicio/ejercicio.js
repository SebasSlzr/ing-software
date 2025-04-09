document.addEventListener("DOMContentLoaded", async () => {
    const listaEjercicios = document.getElementById("lista-ejercicios");

    try {
        const response = await fetch("http://localhost:3366/api/v1/exercises");
        const ejercicios = await response.json();

        if (!ejercicios.data || ejercicios.data.length === 0) {
            listaEjercicios.innerHTML = "<p>No hay ejercicios disponibles.</p>";
            return;
        }

        const categorias = {};
        ejercicios.data.forEach(ejercicio => {
            if (!categorias[ejercicio.category_id]) {
                categorias[ejercicio.category_id] = [];
            }
            categorias[ejercicio.category_id].push(ejercicio);
        });

        Object.keys(categorias).forEach(categoryId => {
            const categoriaNombre = obtenerNombreCategoria(categoryId);
            const categoriaTitulo = document.createElement("h2");
            categoriaTitulo.textContent = categoriaNombre;
            listaEjercicios.appendChild(categoriaTitulo);
        
            const ul = document.createElement("ul");
            categorias[categoryId].forEach(ejercicio => {
                const item = document.createElement("li");
              
                const gifHTML = ejercicio.media_url
                  ? `<div class="gif-container"><img src="${ejercicio.media_url}" alt="${ejercicio.name}" class="gif-ejercicio"></div>`
                  : "";
              
                item.innerHTML = `
                  <span><strong>${ejercicio.name}</strong></span> - ${ejercicio.description}
                  (Sets: ${ejercicio.sets}, Reps: ${ejercicio.repetitions})<br>
                  ${gifHTML}
                `;
                
                ul.appendChild(item);
              });
                  
        
            listaEjercicios.appendChild(ul);
        });
        

    } catch (error) {
        console.error("Error al obtener los ejercicios:", error);
        listaEjercicios.innerHTML = "<p>Error al cargar los ejercicios.</p>";
    }
});

function obtenerNombreCategoria(categoryId) {
    const categorias = {
        1: "Pierna",
        2: "Pecho",
        3: "Espalda",
        4: "Brazos",
        5: "Hombros",
        6: "Abdomen"
    };
    return categorias[categoryId] || "Categoría Desconocida";
}

document.addEventListener("DOMContentLoaded", () => {
    Swal.fire({
        title: "Tus Rutinas",
        text: "Consulta tus ejercicios favoritos.",
        icon: "info",
        confirmButtonColor: "darkred"
    });
});
