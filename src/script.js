document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('header');
  let lastScrollTop = 0;

  window.addEventListener('scroll', () => {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > lastScrollTop) {
      // Scrolling down
      header.classList.add('header--hidden');
    } else {
      // Scrolling up
      header.classList.remove('header--hidden');
    }

    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
  });
});

const toggler = document.getElementById('toggler');
const mobileHeader = document.getElementById('mobile__header');

toggler.addEventListener('click', () => {
  mobileHeader.style.display = 'flex'
  toggler.style.display = 'none'
});

const closeButton = document.getElementById('close__icon');
closeButton.addEventListener('click', () => {
  mobileHeader.style.display = 'none';
  toggler.style.display = 'block';
});

// Al tocar un elemento del menú, se oculta el menú y se muestra el botón de menú
const mobileItems = document.querySelectorAll('.mobile__header--item');

mobileItems.forEach(item => {
  item.addEventListener('click', () => {
    mobileHeader.style.display = 'none';
    toggler.style.display = 'block';
  });
});

// Selección de los contenedores
const items = document.querySelectorAll('.container__services--item');
const imagenEditorial = document.getElementById('imagenEditorial');
const imagenService = document.querySelector('.imagen__service');
const imagenMultimedia = document.getElementById('imagenMultimedia');

// Botones de cierre
const closeButtons = document.querySelectorAll('.back__button');

// Función para mostrar la imagen correspondiente
function showImage(index) {
  if (index === 0) {
    imagenEditorial.style.display = 'flex';
  } else if (index === 1) {
    imagenService.style.display = 'flex';
  } else if (index === 2) {
    imagenMultimedia.style.display = 'flex';
  }
}

// Agregamos el evento click a los ítems
items.forEach((item, index) => {
  item.addEventListener('click', () => {
    showImage(index);
  });
});

// Agregamos funcionalidad al botón de cierre
closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    imagenEditorial.style.display = 'none';
    imagenService.style.display = 'none';
    imagenMultimedia.style.display = 'none';
  });
});


const buttons = document.querySelectorAll('.container__button--contact');
const popups = {
  telegram: './src/img/Telegram__container.png',
  discord: './src/img/Discord__container.png',
  gmail: './src/img/Container__gmail.png',
};


const popup = document.createElement('div');
popup.classList.add('contact__popup');
popup.innerHTML = '<img src="" alt="Popup Image">';
document.body.appendChild(popup);


buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.stopPropagation();
    const rect = button.getBoundingClientRect();

    const iconName = button.querySelector('img').src.split('/').pop().split('.')[0].toLowerCase();
    const popupImg = popup.querySelector('img');
    popupImg.src = popups[iconName] || '';

    if (popupImg.src) {
      popup.style.top = `${rect.top + window.scrollY - popup.offsetHeight - 10}px`;
      popup.style.left = `${rect.left + rect.width / 2 - popup.offsetWidth / 2}px`;

      popup.classList.add('contact__popup--visible');
    }
  });
});


document.addEventListener('click', () => {
  popup.classList.remove('contact__popup--visible');
});
