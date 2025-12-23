// ============================================
// DATOS DE LOS PROYECTOS
// ============================================

const projectsData = {
    1: {
        title: "CERVECERÍA Cumbayá",
        category: "Concepto Raumplan",
        year: "2025",
        location: "Cumbayá, Ecuador",
        area: "Proyecto Académico",
        description: "El programa a realizar es una cervecería el cual se desarrolla partir del concepto Raumplan, en los cuales se utilizan tres principios: diferencia de alturas, planta espacial y revestimiento.\n\nEl concepto de Raumplan que tiene Loos es que cada espacio que se necesita en la construccion debe tener una altura particular es decir que si es un espacio en el cual va estar muy concurrido por muchas personas, la altura debe tener una dimension bastante considerable, y si no habra muchas personas la dimension disminuye. En el caso del proyecto las areas administrativas son de menor dimension que el restaurante.",
        features: [
            "✓ Diferencia de alturas (Raumplan)",
            "✓ Planta espacial articulada",
            "✓ Revestimiento diferenciado por zonas",
            "✓ Área administrativa compacta",
            "✓ Restaurante con doble altura",
            "✓ Circulación funcional optimizada"
        ],
        images: [
            "Fotos/Proyecto 01/PARTE 1_00001.jpg",
            "Fotos/Proyecto 01/PARTE 1_00002.jpg",
            "Fotos/Proyecto 01/PARTE 1_00003.jpg",
            "Fotos/Proyecto 01/PARTE 1_00004.jpg"
        ]
    },
    2: {
        title: "VIVIENDA MULTIFAMILIAR Iñaquito",
        category: "Composición Urbana",
        year: "2025",
        location: "Iñaquito, Ecuador",
        area: "Proyecto Académico",
        description: "El programa a realizar es una vivienda multifamiliar, nace desde composición de planos, masas, tomando como guias directrices del contexto: ejes de edificaciones aledañas, ejes en alturas, ejes visuales, ejes de hitos.\n\nESTRATEGIAS DE DISEÑO:\nAsoleamiento - Directrices de contexto con ejes de edificaciones, ejes en alturas.",
        features: [
            "✓ Análisis de directrices contextuales",
            "✓ Ejes de edificaciones aledañas",
            "✓ Ejes en alturas definidos",
            "✓ Ejes visuales estratégicos",
            "✓ Optimización de asoleamiento",
            "✓ Integración urbana coherente"
        ],
        images: [
            "Fotos/Proyecto 02/PARTE 2_00001.jpg",
            "Fotos/Proyecto 02/PARTE 2_00002.jpg",
            "Fotos/Proyecto 02/PARTE 2_00003.jpg",
            "Fotos/Proyecto 02/PARTE 2_00004.jpg"
        ]
    },
    3: {
        title: "VIVIENDA UNIFAMILIAR-RAUMPLAN Mindo",
        category: "Transformación Espacial",
        year: "2025",
        location: "Mindo, Ecuador",
        area: "Proyecto Académico",
        description: "El programa a realizar es una vivienda unifamiliar donde se utiliza el concepto Raumplan el cual consiste en la transformacion de la Casa Pitaya. La exploración espacial se la busca en movimientos en corte, como la escalera que es una articuladora espacial, ya que con este medio se puede aproximar a un Raumplan por el juego de alturas que conlleva y esta relación de espacios.",
        features: [
            "✓ Concepto Raumplan aplicado",
            "✓ Transformación de Casa Pitaya",
            "✓ Escalera como articulador espacial",
            "✓ Juego de alturas estratégico",
            "✓ Movimientos en corte definidos",
            "✓ Relación espacial jerarquizada"
        ],
        images: [
            "Fotos/Proyecto 03/PARTE 3_00001.jpg",
            "Fotos/Proyecto 03/PARTE 3_00002.jpg",
            "Fotos/Proyecto 03/PARTE 3_00003.jpg"
        ]
    },
    4: {
        title: "CENTRO DE SALUD MATERNO INFANTIL Nayón",
        category: "Equipamiento de Salud",
        year: "2025",
        location: "Nayón, Ecuador",
        area: "Proyecto Académico",
        description: "Partiendo del vacío estructurante se plantea un concepto para este proyecto el cual es tensión entre masas. El proyecto que se propone es un centro de salud materno infantil esto luego de una análisis en que necesidades comprende en este radio de manzana.",
        features: [
            "✓ Concepto de tensión entre masas",
            "✓ Vacío estructurante central",
            "✓ Análisis de necesidades comunitarias",
            "✓ Funciones materno-infantiles integradas",
            "✓ Espacios terapéuticos bien definidos",
            "✓ Circulación clara y accesible"
        ],
        images: [
            "Fotos/Proyecto 04/PARTE 4_00001.jpg",
            "Fotos/Proyecto 04/PARTE 4_00002.jpg",
            "Fotos/Proyecto 04/PARTE 4_00003.jpg"
        ]
    },
    5: {
        title: "VIVIENDA UNIFAMILIAR - PLANTA LIBRE Mindo",
        category: "Concepto Le Corbusier",
        year: "2025",
        location: "Mindo, Ecuador",
        area: "Proyecto Académico",
        description: "El programa a realizar es una vivienda unifamiliar donde se utiliza el concepto de Planta Libre. Casa Pitaya resulta a una transformación a PLAN LIBRE porque se incluye el uso de fachada libre, una circulación en diagonal a 45 grados y también una independización de sistemas.",
        features: [
            "✓ Planta libre (Le Corbusier)",
            "✓ Fachada libre independiente",
            "✓ Circulación diagonal a 45°",
            "✓ Sistemas estructurales independientes",
            "✓ Flexibilidad espacial interior",
            "✓ Transformación de Casa Pitaya"
        ],
        images: [
            "Fotos/Proyecto 05/PARTE 5pdf_00001.jpg",
            "Fotos/Proyecto 05/PARTE 5pdf_00002.jpg",
            "Fotos/Proyecto 05/PARTE 5pdf_00003.jpg"
        ]
    }
};

// ============================================
// VARIABLES GLOBALES
// ============================================

let currentProject = null;
let currentImageIndex = 0;

// ============================================
// FUNCIONES PRINCIPALES
// ============================================

// Función para abrir el modal de proyecto
function openProjectModal(projectId) {
    currentProject = parseInt(projectId);
    currentImageIndex = 0;
    const project = projectsData[currentProject];
    
    if (!project) return;
    
    // Actualizar contenido del modal
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalCategory').textContent = project.category;
    document.getElementById('modalYear').textContent = project.year;
    document.getElementById('modalLocation').textContent = project.location;
    document.getElementById('modalArea').textContent = project.area;
    document.getElementById('modalDescription').textContent = project.description;
    document.getElementById('modalImage').src = project.images[0];
    
    // Actualizar características
    const featuresContainer = document.getElementById('modalFeatures');
    featuresContainer.innerHTML = project.features
        .map(feature => `<li class="flex items-center text-gray-700"><span class="text-rose-400 font-bold mr-3">•</span>${feature}</li>`)
        .join('');
    
    // Actualizar contador de imágenes
    document.getElementById('imageCounter').textContent = `1 / ${project.images.length}`;
    
    // Mostrar modal
    const modal = document.getElementById('projectModal');
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

// Función para cerrar el modal
function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
    currentProject = null;
}

// Función para cambiar imagen en el modal
function changeImage(direction) {
    if (!currentProject) return;
    
    const project = projectsData[currentProject];
    const imageCount = project.images.length;
    
    if (direction === 'next') {
        currentImageIndex = (currentImageIndex + 1) % imageCount;
    } else if (direction === 'prev') {
        currentImageIndex = (currentImageIndex - 1 + imageCount) % imageCount;
    }
    
    // Precargar la imagen antes de mostrar
    const newImageSrc = project.images[currentImageIndex];
    const modalImage = document.getElementById('modalImage');
    
    // Crear una imagen temporal para precargar
    const tempImg = new Image();
    tempImg.onload = function() {
        // Animación de cambio suave
        modalImage.style.opacity = '0.7';
        
        setTimeout(() => {
            modalImage.src = newImageSrc;
            modalImage.style.opacity = '1';
            
            // Actualizar contador
            document.getElementById('imageCounter').textContent = `${currentImageIndex + 1} / ${imageCount}`;
        }, 100);
    };
    
    tempImg.src = newImageSrc;
}

// Función para solicitar información de un proyecto
function requestProjectInfo() {
    if (!currentProject) return;
    
    const project = projectsData[currentProject];
    const message = `Hola, me gustaría solicitar más información sobre el proyecto: ${project.title}\n\nUbicación: ${project.location}\nCategoría: ${project.category}\nPeriodo: ${project.year}\nÁrea: ${project.area}\n\nAgradezco tu atención.`;
    
    // Cerrar el modal de proyecto
    closeProjectModal();
    
    // Rellenar el formulario de contacto
    document.getElementById('contactName').value = '';
    document.getElementById('contactEmail').value = '';
    document.getElementById('contactMessage').value = message;
    
    // Hacer scroll suave hacia la sección de contacto
    const contactSection = document.getElementById('contacto');
    setTimeout(() => {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        // Enfocar en el campo de email después del scroll
        setTimeout(() => {
            document.getElementById('contactEmail').focus();
        }, 800);
    }, 300);
}

// ============================================
// EVENT LISTENERS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Botones de proyectos
    document.querySelectorAll('[data-project]').forEach(element => {
        element.addEventListener('click', function() {
            openProjectModal(this.getAttribute('data-project'));
        });
    });
    
    // Botones de cerrar modal
    document.getElementById('closeModal').addEventListener('click', closeProjectModal);
    document.getElementById('closeModalBtn').addEventListener('click', closeProjectModal);
    
    // Botón de solicitar información
    document.getElementById('requestInfoBtn').addEventListener('click', requestProjectInfo);
    
    // Botones de navegación de imágenes
    document.getElementById('nextImage').addEventListener('click', function(e) {
        e.stopPropagation();
        changeImage('next');
    });
    
    document.getElementById('prevImage').addEventListener('click', function(e) {
        e.stopPropagation();
        changeImage('prev');
    });
    
    // Cerrar modal con Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !document.getElementById('projectModal').classList.contains('hidden')) {
            closeProjectModal();
        }
    });
    
    // Cerrar modal clickeando fuera
    document.getElementById('projectModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeProjectModal();
        }
    });
    
    // Navegación móvil
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });
    
    // Cerrar menú móvil al clickear un link
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
        });
    });
    
    // Navegación smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Efecto de fade in al scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar elementos con animación
    document.querySelectorAll('.animate-fade-in, .animate-fade-in-delay, .animate-fade-in-delay-2').forEach(el => {
        observer.observe(el);
    });
    
    // Agregar transición suave a imágenes del modal
    const modalImage = document.getElementById('modalImage');
    if (modalImage) {
        modalImage.style.transition = 'opacity 0.3s ease';
        // Click en imagen para zoom
        modalImage.addEventListener('click', function(e) {
            e.stopPropagation();
            if (currentProject) {
                const project = projectsData[currentProject];
                openImageZoom(project.images[currentImageIndex]);
            }
        });
        // Cursor de zoom
        modalImage.style.cursor = 'zoom-in';
    }
    
    // Botones del modal de zoom
    const closeZoomBtn = document.getElementById('closeZoomModal');
    if (closeZoomBtn) {
        closeZoomBtn.addEventListener('click', closeImageZoom);
    }
    
    const zoomNextBtn = document.getElementById('zoomNextImage');
    if (zoomNextBtn) {
        zoomNextBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            changeZoomImage('next');
        });
    }
    
    const zoomPrevBtn = document.getElementById('zoomPrevImage');
    if (zoomPrevBtn) {
        zoomPrevBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            changeZoomImage('prev');
        });
    }
    
    // Cerrar zoom con Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !document.getElementById('imageZoomModal').classList.contains('hidden')) {
            closeImageZoom();
        }
    });
    
    // Cerrar zoom clickeando en la imagen o fuera
    document.getElementById('imageZoomModal').addEventListener('click', function(e) {
        if (e.target === this || e.target.id === 'zoomImage') {
            closeImageZoom();
        }
    });
});

// ============================================
// FUNCIONES DE ZOOM DE IMAGEN
// ============================================

// Función para abrir modal de zoom
function openImageZoom(imageSrc) {
    const zoomModal = document.getElementById('imageZoomModal');
    const zoomImage = document.getElementById('zoomImage');
    
    zoomImage.src = imageSrc;
    zoomModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    // Actualizar contador si es necesario
    if (currentProject) {
        const project = projectsData[currentProject];
        document.getElementById('zoomImageCounter').textContent = `${currentImageIndex + 1} / ${project.images.length}`;
    }
}

// Función para cerrar modal de zoom
function closeImageZoom() {
    const zoomModal = document.getElementById('imageZoomModal');
    zoomModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Función para cambiar imagen en zoom
function changeZoomImage(direction) {
    if (!currentProject) return;
    
    const project = projectsData[currentProject];
    const imageCount = project.images.length;
    
    if (direction === 'next') {
        currentImageIndex = (currentImageIndex + 1) % imageCount;
    } else if (direction === 'prev') {
        currentImageIndex = (currentImageIndex - 1 + imageCount) % imageCount;
    }
    
    // Cambiar imagen con transición
    const zoomImage = document.getElementById('zoomImage');
    const newImageSrc = project.images[currentImageIndex];
    
    zoomImage.style.opacity = '0.7';
    
    setTimeout(() => {
        zoomImage.src = newImageSrc;
        zoomImage.style.opacity = '1';
        
        // Actualizar contador
        document.getElementById('zoomImageCounter').textContent = `${currentImageIndex + 1} / ${imageCount}`;
    }, 150);
}

// ============================================
// FUNCIONES ADICIONALES
// ============================================

// Animar números en barras de progreso
function animateProgressBars() {
    const bars = document.querySelectorAll('.bg-rose-400');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.style.width;
                bar.style.width = '0';
                bar.style.transition = 'width 1s ease';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
                observer.unobserve(bar);
            }
        });
    });
    
    bars.forEach(bar => observer.observe(bar));
}

// Ejecutar cuando el DOM está listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', animateProgressBars);
} else {
    animateProgressBars();
}

// Agregar efecto de parallax ligero (opcional)
window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    parallaxElements.forEach(element => {
        element.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    });
});

// Función para validar formulario de contacto (básica)
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const message = document.getElementById('contactMessage').value;
    
    // Validación básica
    if (!name || !email || !message) {
        alert('Por favor, completa todos los campos.');
        return;
    }
    
    // Aquí puedes agregar lógica para enviar el formulario
    alert('¡Gracias por tu mensaje, ' + name + '! Me pondré en contacto pronto.');
    
    // Limpiar el formulario
    this.reset();
    this.reset();
});
