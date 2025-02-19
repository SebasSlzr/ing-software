window.addEventListener('load', function() {
    if (performance.now() > 2000) {
        console.warn('La página tardó más de 2 segundos en cargar.');
    }
});
