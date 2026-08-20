// Diccionario de textos para traducción
const translations = {
  es: {
    home: "Inicio",
    projects: "Proyectos",
    about: "Sobre Mí",
    aboutText: "Hola, soy iSniPerDev, un desarrollador autodidacta con 5 años de experiencia en Unreal Engine. Me especializo en Blueprints y mecánicas de juego, y siempre busco maneras de mejorar y optimizar los sistemas. Me encanta trabajar en proyectos creativos y encontrar soluciones eficientes a cualquier desafío en Unreal Engine. Si necesitas ayuda con tu juego o tienes una idea en mente, envíame un mensaje y veremos cómo hacerla realidad.",
    contact: "Contacto",
    contactText: "No dudes en contactarme. Intentaré responderte lo antes posible. También estoy en redes sociales, si me necesitas ahí:",
    contactBtnText: "Envíame un correo",
    project1descriptionlite: "Dream Hills: Pearable Teaser es un juego de terror desarrollado en un mes para la Illojam 2024.",
    project1descriptionText1: "Dream Hills: Pearable Teaser es un juego de terror desarrollado en un mes para la Illojam 2024. En este proyecto, participé como Game Designer, programador y Level Designer, encargándome de la estructura jugable, el diseño de niveles y la implementación de mecánicas clave.El juego sumerge a los jugadores en una atmósfera inquietante, combinando exploración de habitaciónes, acertijos algo complejos y una narrativa basada en el Streamer IlloJuan. El juego quedo en el TOP 3 entre 35 que se presentaron.",
    project2descriptionlite: "Advanced Base Interact System es un sistema de interacción base para Unreal Engine 5.X.",
    project2descriptionText1: "A",
  },

  en: {
    home: "Home",
    projects: "Projects",
    about: "About Me",
    aboutText: "Hi, I'm iSniPerDev, a self-taught developer with 5 years of experience in Unreal Engine. I specialize in Blueprints and game mechanics, and I'm always looking for ways to improve and optimize systems. I love working on creative projects and finding efficient solutions to any challenge in Unreal Engine. If you need help with your game or have an idea in mind, send me a message and we'll see how to make it a reality.",
    contact: "Contact",
    contactText: "Don't hesitate to contact me. I'll try to get back to you as soon as possible. I'm also on social media if you need me:",
    contactBtnText: "Send me an email",
    project1descriptionlite: "Dream Hills: Pearable Teaser is a horror game developed in one month for Illojam 2024.",
    project1descriptionText1: "Dream Hills: Pearable Teaser is a horror game developed in one month for Illojam 2024. In this project, I participated as Game Designer, programmer and Level Designer, in charge of the gameplay structure, level design and the implementation of key mechanics. The game immerses players in a disturbing atmosphere, combining room exploration, somewhat complex puzzles and a narrative based on the Streamer IlloJuan. The game was in the TOP 3 out of 35 that were presented.",
    project2descriptionlite: "Advanced Base Interact System is a base interaction system for Unreal Engine 5.X.",
    project2descriptionText1: "A",
  }
};

let currentLang = 'en';

// Función para traducir la página
function translatePage() {
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });
}

// Alternar modo oscuro/normal mediante el switch

const toggleDarkCheckbox = document.getElementById('toggleDark');
const modeIcon = document.getElementById('modeIcon').querySelector('i'); // Seleccionamos el icono dentro del span
const navLinks = document.querySelectorAll('.nav-links li a'); // Seleccionamos todos los enlaces dentro de nav-links
const logoLink = document.querySelector('.logo a'); // Seleccionamos el enlace del logo
const header = document.querySelector('header'); // Seleccionamos el header

function switchmode() {
  document.body.classList.toggle('dark', toggleDarkCheckbox.checked);
  header.classList.toggle('dark', toggleDarkCheckbox.checked);
  navLinks.forEach(link => {
    link.classList.toggle('dark', toggleDarkCheckbox.checked);
  });
  // Aplicamos la clase 'dark' al enlace del logo
  logoLink.classList.toggle('dark', toggleDarkCheckbox.checked);
  // Cambiamos las clases de FontAwesome para reflejar el estado
  if (toggleDarkCheckbox.checked) {
    modeIcon.classList.replace('fa-sun', 'fa-moon'); // Modo oscuro: mostrar luna
  } else {
    modeIcon.classList.replace('fa-moon', 'fa-sun'); // Modo claro: mostrar sol
  }
}

toggleDarkCheckbox.addEventListener('change', () => {
  switchmode()
});

// Alternar idioma mediante el desplegable
const langSelect = document.getElementById('langSelect');
langSelect.addEventListener('change', () => {
  currentLang = langSelect.value;
  translatePage();
});


document.addEventListener('DOMContentLoaded', () => {
  // Forzar el modo oscuro al cargar la página
  toggleDarkCheckbox.checked = true; // Asegurarse de que el checkbox esté marcado
  switchmode(); // Llamar a la función para aplicar el modo oscuro
  translatePage(); // Inicializar traducción

  // Selecciona todos los videos dentro de las tarjetas de proyecto
  const projectVideos = document.querySelectorAll('.project-card video');

  projectVideos.forEach(video => {
    // Reproducir el video al hacer hover
    video.parentElement.parentElement.addEventListener('mouseenter', () => {
      video.currentTime = 0; // Reinicia el video al principio
      video.play(); // Reproduce el video
    });

    // Detener el video al salir del hover
    video.parentElement.parentElement.addEventListener('mouseleave', () => {
      video.pause(); // Pausa el video
      video.currentTime = 0; // Reinicia el video al principio
    });
  });
});
