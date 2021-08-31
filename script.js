const menuButton = document.querySelector('.menu-btn');
const menuList = document.querySelector('.menu-items');
const menuItems = Array.from(document.querySelectorAll('.menu-item'));
const menuIcon = document.querySelector('.menu-icon');
const contentBody = document.querySelector('.content-body');
const logo = document.querySelector('.logo-wrapper');

const filterStyle = () => {
  contentBody.style.filter = 'none';
  logo.style.filter = 'none';
};

const toggleMenu = () => {
  menuList.classList.toggle('active');
  menuButton.classList.toggle('active');
};

menuButton.addEventListener('click', () => {
  toggleMenu();

  if (menuButton.classList.contains('active')) {
    menuIcon.src = './images/Close-button.svg';
    contentBody.style.filter = 'blur(7px)';
    logo.style.filter = 'blur(7px)';
  } else {
    filterStyle();
    window.location.reload();
  }
});

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    toggleMenu();
    menuList.classList.remove('active');
    filterStyle();
    menuIcon.src = './images/Union.png';
  });
});

window.addEventListener('resize', () => {
  if (contentBody.clientWidth >= 992 && menuButton.classList.contains('active')) {
    window.location.reload();
  }
});

// Desktop and Mobile pop-up
const seeProjectBtn = document.querySelector('.see-project');
const closeModalBtn = document.querySelector('.modal-close-button');
const modal = document.querySelector('.modal-container');
const body = document.querySelector('body');

seeProjectBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
  body.style.overflow = 'hidden';
});

closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  body.style.overflow = 'auto';
});