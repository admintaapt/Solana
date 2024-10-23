// API Key de Pexels
const API_KEY = 'PBQ3tOSKUj1qc6knIuno9aWBUz8G8kin0hDQP58JTAXtHnz0ngyIXJcu';
const NUM_IMAGENES = 4;
const galeria = document.getElementById('galeria');
let currentSlide = 0;
const apiKey = 'PBQ3tOSKUj1qc6knIuno9aWBUz8G8kin0hDQP58JTAXtHnz0ngyIXJcu';  // Reemplaza con tu clave API de Pexels
const landingData = JSON.parse(localStorage.getItem('landingData') || '{}');
fetch('./landingData.json')  // Ajusta la ruta según la plantilla seleccionada
document.addEventListener('DOMContentLoaded', () => {
    animarBloquesTexto();
    // ... (llamadas a otras funciones como cargarGaleria, cargarHeroImage)
});

const carousel = document.querySelector('.testimonial-carousel');
let isScrolling = false;

function autoScroll() {
    if (!isScrolling) {
        carousel.scrollBy({ left: 300, behavior: 'smooth' });
    }
}

setInterval(autoScroll, 3000);

carousel.addEventListener('mouseover', () => isScrolling = true);
carousel.addEventListener('mouseleave', () => isScrolling = false);

// Función para verificar si un elemento está en el viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom > 0
    );
}

// Función para manejar la animación de los bloques de texto
function animarBloquesTexto() {
    const bloques = document.querySelectorAll('.bloque-texto');
    bloques.forEach((bloque, index) => {
        if (isElementInViewport(bloque)) {
            if (!bloque.classList.contains('bloque-visible')) {
                bloque.classList.add('bloque-visible');
                // Añadir un retraso escalonado
                bloque.style.transitionDelay = `${index * 0.2}s`;
            }
        } else {
            if (bloque.classList.contains('bloque-visible')) {
                bloque.classList.remove('bloque-visible');
                // Resetear el delay
                bloque.style.transitionDelay = '0s';
            }
        }
    });
}
// Función para manejar la animación de los bloques
function animarBloques() {
    const bloques = document.querySelectorAll('.bloque-animado');
    bloques.forEach((bloque, index) => {
        if (isElementInViewport(bloque)) {
            if (!bloque.classList.contains('bloque-visible')) {
                bloque.classList.add('bloque-visible');
                bloque.style.transitionDelay = `${index * 0.2}s`;
            }
        } else {
            if (bloque.classList.contains('bloque-visible')) {
                bloque.classList.remove('bloque-visible');
                bloque.style.transitionDelay = '0s';
            }
        }
    });
}

// Evento de scroll
window.addEventListener('scroll', animarBloques);
const businessModel = landingData.businessModel || 'cryptocurrency+fintech+investment';


// Obtener datos del localStorage
if (landingData) {
    console.log(landingData);
    // Reemplazar los placeholders con los datos reales
    document.querySelectorAll('#company-name-placeholder').forEach(el => el.textContent = landingData.companyName);
    document.querySelectorAll('#business-model-placeholder').forEach(el => el.textContent = landingData.businessModel);

    // Actualizar el logo en el header y el footer
    if (landingData.logo) {
        document.getElementById('logo-header').src = landingData.logo;
        document.getElementById('logo-footer').src = landingData.logo;
    }
    document.getElementById('main-title').textContent = landingData.mainTitle;
    document.getElementById('main-paragraph').textContent = landingData.mainParagraph;

    document.getElementById('testimonial-1').textContent = landingData.testimonials[0];
    document.getElementById('testimonial-2').textContent = landingData.testimonials[2];
    document.getElementById('testimonial-3').textContent = landingData.testimonials[4];

    // Ejemplo al aplicar contenido al HTML en el frontend
    document.getElementById('titulo-1').textContent = landingData.titulo1.replace(/[*"]/g, '').replace(/['"]/g, '');
    document.getElementById('subtitulo-1').textContent = landingData.subtitulo1.replace(/[*"]/g, '').replace(/['"]/g, '');

    document.getElementById('titulo-2').textContent = landingData.titulo2.replace(/[*"]/g, '').replace(/['"]/g, '');
    document.getElementById('subtitulo-2').textContent = landingData.subtitulo2.replace(/[*"]/g, '').replace(/['"]/g, '');

    document.getElementById('titulo-3').textContent = landingData.titulo3.replace(/[*"]/g, '').replace(/['"]/g, '');
    document.getElementById('subtitulo-3').textContent = landingData.subtitulo3.replace(/[*"]/g, '').replace(/['"]/g, '');

    document.getElementById('titulo-4').textContent = landingData.titulo4.replace(/[*"]/g, '').replace(/['"]/g, '');
    document.getElementById('subtitulo-4').textContent = landingData.subtitulo4.replace(/[*"]/g, '').replace(/['"]/g, '');

    // Aplicar los enlaces a los botones
    if (landingData['button-1-link']) {
        document.getElementById('button-1').onclick = () => { window.location.href = landingData['button-1-link']; };
    }
    if (landingData['button-2-link']) {
        document.getElementById('button-2').onclick = () => { window.location.href = landingData['button-2-link']; };
    }
    if (landingData['button-1-text']) {
        document.getElementById('button-1').textContent = landingData['button-1-text'];
    }
    if (landingData['button-2-text']) {
        document.getElementById('button-2').textContent = landingData['button-2-text'];
    }
    // Aplicar los enlaces a los botones
    if (landingData['button-3-link']) {
        document.getElementById('button-3').onclick = () => { window.location.href = landingData['button-3-link']; };
    }
    if (landingData['button-4-link']) {
        document.getElementById('button-4').onclick = () => { window.location.href = landingData['button-4-link']; };
    }
    if (landingData['button-3-text']) {
        document.getElementById('button-3').textContent = landingData['button-3-text'];
    }
    if (landingData['button-4-text']) {
        document.getElementById('button-4').textContent = landingData['button-4-text'];
    }
    // Aplicar los enlaces a los botones
    if (landingData['button-5-link']) {
        document.getElementById('button-5').onclick = () => { window.location.href = landingData['button-5-link']; };
    }
    if (landingData['button-6-link']) {
        document.getElementById('button-6').onclick = () => { window.location.href = landingData['button-6-link']; };
    }
    if (landingData['button-5-text']) {
        document.getElementById('button-5').textContent = landingData['button-5-text'];
    }
    if (landingData['button-6-text']) {
        document.getElementById('button-6').textContent = landingData['button-6-text'];
    }
}

// Cargar una imagen para la Hero Section
fetch(`https://api.pexels.com/v1/search?query=${encodeURIComponent(businessModel)}&per_page=1`, {
    headers: {
        Authorization: apiKey
    }
})
    .then(response => response.json())
    .then(data => {
        if (data.photos.length > 0) {
            const heroSection = document.querySelector('.hero');
            heroSection.style.backgroundImage = `url(${data.photos[0].src.large})`; // Cambia la imagen de fondo
        }
    })
    .catch(error => console.error('Error fetching hero image:', error));

// Este método cambiará el fondo de la sección "hero"
function handleMainImageChange(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const imageUrl = e.target.result;
            // Cambiar la imagen de fondo de la sección "hero"
            document.querySelector('.hero').style.backgroundImage = `url(${imageUrl})`;
        };
        reader.readAsDataURL(file); // Leer la imagen como URL
    }
}

// Llamamos a la función al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    animarBloques();
    cargarHeroImage();
    // ... otras funciones
});
// ... código existente ...

// Función para el Efecto de Zoom al Hacer Scroll
function efectoZoomImagen() {
    const imagen = document.getElementById('imagen-zoom');
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;

    // Obtener la posición superior de la imagen respecto al documento
    const imagenOffsetTop = imagen.parentElement.offsetTop;

    // Calcular el porcentaje de scroll dentro de la sección de la imagen
    const start = imagenOffsetTop;
    const end = imagenOffsetTop + viewportHeight;
    const percent = (scrollY - start) / (end - start);

    // Limitar el porcentaje entre 0 y 1
    const clampedPercent = Math.min(Math.max(percent, 0), 1);

    // Calcular la escala basada en el porcentaje
    const scale = 1 + clampedPercent * 0.5; // Ajusta 0.5 para cambiar la intensidad del zoom

    // Aplicar la transformación
    imagen.style.transform = `translate(-50%, -50%) scale(${scale})`;
}

// Añadir el evento de scroll
window.addEventListener('scroll', () => {
    animarBloques();
    efectoZoomImagen();
});

// Llamar a las funciones al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    animarBloques();
    efectoZoomImagen();
    cargarHeroImage();
});

// ... resto del código existente ...

// Evento de scroll
window.addEventListener('scroll', animarBloquesTexto);
// Llamamos a la función al cargar la página


// Llamamos a la función al cargar la página
animarBloquesTexto();
// Elementos del modal
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-image');
const captionText = document.getElementById('caption');
const closeModal = document.getElementById('close-modal');

// Función para cargar imágenes de la galería y añadir eventos de clic
function cargarGaleria() {
    fetch(`https://api.pexels.com/v1/curated?per_page=${NUM_IMAGENES}`, {
        headers: {
            Authorization: API_KEY
        }
    })
        .then(response => response.json())
        .then(data => {
            data.photos.forEach((photo, index) => {
                const img = document.createElement('img');
                img.id = `pexels-thumb${index + 1}`; // Asigna un ID único
                img.src = photo.src.portrait;
                img.alt = photo.photographer;
                img.style.cursor = 'pointer';
                img.addEventListener('click', () => {
                    abrirModal(photo);
                });
                galeria.appendChild(img);
            });
        })
        .catch(error => console.error('Error al cargar las imágenes:', error));
    fetch(`https://api.pexels.com/v1/search?query=${encodeURIComponent(businessModel)}&per_page=5`, {
        headers: {
            Authorization: apiKey
        }
    })
        .then(response => response.json())
        .then(data => {
            const thumbnails = ['pexels-thumb1', 'pexels-thumb2', 'pexels-thumb3', 'pexels-thumb4', 'pexels-thumb5'];
            totalImages = thumbnails.length;  // Aquí asignamos el número de imágenes

            data.photos.forEach((photo, index) => {
                const thumbElement = document.getElementById(thumbnails[index]);
                thumbElement.src = photo.src.small;  // Miniatura pequeña
                thumbElement.alt = photo.alt;
                thumbElement.dataset.largeSrc = photo.src.large;  // Imagen grande

                // Aquí actualizas el comportamiento al hacer clic en la miniatura
                thumbElement.addEventListener('click', function () {
                    // Asegúrate de pasar el src correcto de la imagen grande
                    updateMainImage(index, photo.src.large);
                });
            });

            // Inicializar la primera miniatura como activa y establecer la imagen principal
            setActiveThumbnail(0, data.photos[0].src.large); // Establecer la primera imagen en grande
        })
        .catch(error => console.error('Error fetching thumbnails:', error));

}

// Función para actualizar las imágenes de la galería
function actualizarImagenGaleria(imageId, newImageUrl) {
    const imgElement = document.getElementById(imageId);
    if (imgElement) {
        imgElement.src = newImageUrl;
    } else {
        console.error(`No se encontró el elemento con ID ${imageId}`);
    }
}



function abrirModal(photo) {
    modal.style.display = 'block';
    modalImg.src = photo.src.large2x;
    captionText.innerText = photo.photographer;

    // Desactivar el scroll del body
    document.body.style.overflow = 'hidden';
}

// Evento para cerrar el modal
function cerrarModal() {
    modal.style.display = 'none';

    // Reactivar el scroll del body
    document.body.style.overflow = 'auto';
}

closeModal.addEventListener('click', cerrarModal);

// Cerramos el modal si el usuario hace clic fuera de la imagen
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        cerrarModal();
    }
});

// Resto del código permanece igual...

// Función para cargar imagen del Hero Section
function cargarHeroImage() {
    fetch(`https://api.pexels.com/v1/search?query=empresa&per_page=1`, {
        headers: {
            Authorization: API_KEY
        }
    })
        .then(response => response.json())
        .then(data => {
            const photo = data.photos[0];
            heroSection.style.backgroundImage = `url(${photo.src.large2x})`;
        })
        .catch(error => console.error('Error al cargar la imagen del Hero:', error));
}

// Llamar a las funciones
cargarHeroImage();
cargarGaleria();

// ... (resto del código para animar bloques de texto)
