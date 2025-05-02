/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*==================== carrousel ====================*/
const swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    speed: 800,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoHeight: false, // Désactive l'ajustement automatique de la hauteur
});

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*==================== sticky navbar ==================== 1080*2340 */
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Gestion du bouton "Lire plus / Lire moins"
document.querySelectorAll('.toggle-content').forEach(button => {
    button.addEventListener('click', () => {
        const article = button.closest('.post');
        const fullContent = article.querySelector('.full-content');
        const excerpt = article.querySelector('.excerpt');

        if (fullContent.style.display === 'none') {
            fullContent.style.display = 'block';
            excerpt.style.display = 'none';
            button.textContent = 'Lire moins';
        } else {
            fullContent.style.display = 'none';
            excerpt.style.display = 'block';
            button.textContent = 'Lire plus';
        }
    });
});

// Mode sombre
const toggleDarkMode = document.createElement('button');
toggleDarkMode.textContent = 'Mode Sombre';
toggleDarkMode.style.position = 'fixed';
toggleDarkMode.style.bottom = '20px';
toggleDarkMode.style.left = '20px';
toggleDarkMode.style.padding = '10px';
toggleDarkMode.style.backgroundColor = '#333';
toggleDarkMode.style.color = '#fff';
toggleDarkMode.style.border = 'none';
toggleDarkMode.style.borderRadius = '5px';
toggleDarkMode.style.cursor = 'pointer';

document.body.appendChild(toggleDarkMode);

toggleDarkMode.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Ajout du style pour le mode sombre
const darkModeStyle = document.createElement('style');
darkModeStyle.textContent = `
  body.dark-mode {
    background-color: #121212;
    color: #ffffff;
  }
  body.dark-mode a {
    color:rgb(255, 255, 255);
  }
`;
document.head.appendChild(darkModeStyle);

// Bouton "Retour en haut"
const scrollTopButton = document.querySelector('.scroll-top');

// Afficher/Masquer le bouton en fonction du défilement
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // Affiche le bouton après 300px de défilement
        scrollTopButton.classList.add('show');
    } else {
        scrollTopButton.classList.remove('show');
    }
});









