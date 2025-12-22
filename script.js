// ============================================
// DATOS DE LOS PROYECTOS
// ============================================

const projectsData = {
    1: {
        title: "Residencia Moderna en Quito",
        category: "Diseño Residencial",
        year: "2023",
        location: "Quito, Ecuador",
        area: "380 m²",
        description: "Una residencia contemporánea ubicada en el sector norte de Quito, diseñada para una familia de 4 miembros. El proyecto incorpora principios de diseño bioclimático aprovechando la orientación solar y la ventilación natural para reducir consumo energético. Se utilizaron materiales locales sostenibles y se implementó un sistema de recolección de agua lluvia. El diseño contempla espacios abiertos que se adaptan a diferentes funciones, con énfasis en la conexión interior-exterior a través de amplios ventanales.",
        features: [
            "✓ Diseño bioclimático optimizado",
            "✓ Sistema de agua reciclada",
            "✓ Materiales sostenibles locales",
            "✓ Espacios multifuncionales",
            "✓ Iluminación natural maximizada",
            "✓ Área verde integrada"
        ],
        images: [
            "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop"
        ]
    },
    2: {
        title: "Centro Comercial",
        category: "Diseño Comercial",
        year: "2022",
        location: "Barcelona, España",
        area: "12,500 m²",
        description: "Un centro comercial innovador que redefinió la experiencia de compra en la ciudad. El diseño integra espacios comerciales, de entretenimiento y de ocio, creando un ecosistema urbano sostenible. La arquitectura permite una circulación natural y maximiza la experiencia del visitante.",
        features: [
            "✓ 4 niveles de comercio",
            "✓ Espacios verdes integrados",
            "✓ Techumbre con vidrio ecológico",
            "✓ Sistema de climatización eficiente",
            "✓ Accesibilidad total",
            "✓ Estacionamiento subterráneo"
        ],
        images: [
            "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1441986300352-7e3dee05a6c6?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1431976567832-87d3ced3f13f?w=800&h=600&fit=crop"
        ]
    },
    3: {
        title: "Oficinas Ecológicas",
        category: "Diseño Corporativo",
        year: "2023",
        location: "Valencia, España",
        area: "8,200 m²",
        description: "Un edificio corporativo que establece nuevos estándares en sostenibilidad ambiental. Con certificación LEED Gold, este proyecto demuestra que la eficiencia energética y el diseño elegante pueden coexistir. Los espacios de trabajo están diseñados para maximizar la productividad y el bienestar de los empleados.",
        features: [
            "✓ Certificación LEED Gold",
            "✓ Panel solar en azotea",
            "✓ Sistemas de recolección de agua",
            "✓ Zonas verdes internas",
            "✓ Espacios colaborativos modernos",
            "✓ Estacionamiento para bicicletas"
        ],
        images: [
            "https://images.unsplash.com/photo-1494145904049-0dca7b3c8d0f?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
        ]
    },
    4: {
        title: "Restaurante Boutique",
        category: "Diseño Gastronómico",
        year: "2022",
        location: "Sevilla, España",
        area: "350 m²",
        description: "Un espacio gastronómico que fusiona elementos industriales con calidez natural. El diseño inteligente permite múltiples configuraciones para diferentes servicios, desde íntimo hasta festivo. La conexión con el exterior a través de ventanales amplios convierte la experiencia culinaria en un ritual completo.",
        features: [
            "✓ Cocina abierta visible",
            "✓ Elementos de madera maciza",
            "✓ Iluminación variable",
            "✓ Acústica profesional",
            "✓ Barra de chef interactiva",
            "✓ Zona de bodega integrada"
        ],
        images: [
            "https://images.unsplash.com/photo-1585399363732-b8a5ebaa6e2f?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1537457866556-6b4f65ba0275?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop"
        ]
    },
    5: {
        title: "Complejo Residencial",
        category: "Urbanismo",
        year: "2021",
        location: "Málaga, España",
        area: "45,000 m²",
        description: "Un desarrollo urbanístico integral que reimagina la vida en comunidad. El proyecto incluye viviendas de diversos tipos, espacios verdes amplios, y áreas comerciales, creando un barrio autosuficiente y sostenible. La circulación está pensada para peatones y ciclistas.",
        features: [
            "✓ 250 viviendas variadas",
            "✓ 8 hectáreas de áreas verdes",
            "✓ Ciclovía completa",
            "✓ Centro comercial integrado",
            "✓ Equipamientos educativos",
            "✓ Energías renovables compartidas"
        ],
        images: [
            "https://images.unsplash.com/photo-1512784124950-14f1b6f768c8?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1512706996645-f83c25cb79b9?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop"
        ]
    },
    6: {
        title: "Biblioteca Pública",
        category: "Equipamiento Público",
        year: "2023",
        location: "Bilbao, España",
        area: "5,800 m²",
        description: "Un centro de conocimiento que combina accesibilidad, inclusión y modernidad. La biblioteca está diseñada para todos, con espacios flexibles que se adaptan a diferentes necesidades y actividades. La arquitectura promueve el aprendizaje colaborativo y la exploración del conocimiento.",
        features: [
            "✓ 4 plantas funcionales",
            "✓ Acceso sin barreras",
            "✓ Sala de multimedia",
            "✓ Espacios de lectura variados",
            "✓ Zonas de estudio colaborativo",
            "✓ Auditorio integrado"
        ],
        images: [
            "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1507842217343-583f20270319?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1507842217343-583f20270319?w=800&h=600&fit=crop"
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
    
    // Animación de cambio
    const modalImage = document.getElementById('modalImage');
    modalImage.style.opacity = '0.5';
    
    setTimeout(() => {
        modalImage.src = project.images[currentImageIndex];
        modalImage.style.opacity = '1';
    }, 150);
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
    }
});

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
