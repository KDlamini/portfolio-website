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
    filterStyle();
    menuIcon.src = './images/Union.png';
  });
});

window.addEventListener('resize', () => {
  if (contentBody.clientWidth >= 992 && menuList.classList.contains('active')) {
    window.location.reload();
  }
});