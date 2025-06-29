document.addEventListener('DOMContentLoaded', () => {
    const galeriaImgs = document.querySelectorAll('.galeria-img');
    const lightbox = document.getElementById('lightbox');
    const imgExpandida = document.getElementById('img-expandida');
    const cerrarBtn = document.querySelector('.cerrar');
    const captionText = document.getElementById('caption');

    galeriaImgs.forEach(img => {
        img.addEventListener('click', () => {
            lightbox.classList.add('visible'); // Muestra el lightbox
            imgExpandida.src = img.src; // Carga la imagen clicada en el lightbox
            captionText.innerHTML = img.alt; // Muestra el texto alternativo como caption
            document.body.style.overflow = 'hidden'; // Evita el scroll del fondo
        });
    });

    // Cerrar el lightbox al hacer clic en la "x"
    cerrarBtn.addEventListener('click', () => {
        lightbox.classList.remove('visible');
        document.body.style.overflow = ''; // Habilita el scroll del fondo de nuevo
    });

    // Cerrar el lightbox al hacer clic fuera de la imagen (en la superposición)
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) { // Si el clic fue directamente en el fondo del lightbox
            lightbox.classList.remove('visible');
            document.body.style.overflow = '';
        }
    });

    // Cerrar el lightbox al presionar la tecla 'Escape'
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('visible')) {
            lightbox.classList.remove('visible');
            document.body.style.overflow = '';
        }
    });
});
