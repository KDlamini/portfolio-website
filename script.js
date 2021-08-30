const menuButton = document.querySelector('.menu-btn');
const menuList = document.querySelector('.menu-items');
const menuItems = Array.from(document.querySelectorAll('.menu-item'));
const menuIcon = document.querySelector('.menu-icon');
const contentBody = document.querySelector('.content-body');
const mediaQuery = window.matchMedia('(min-width: 992px)')

menuButton.addEventListener('click', () => {
  menuList.classList.toggle('active');
  menuButton.classList.toggle('active');

  if (menuButton.classList.contains('active')) {
    menuIcon.src = './images/Enable.svg';
    contentBody.style.filter =  'blur(7px)';
  } else {
    location.reload();
    contentBody.style.filter =  'none';
  }
});

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    menuList.classList.remove('active');
    menuButton.classList.toggle('active');
    menuIcon.src = './images/Union.png';
    contentBody.style.filter =  'none';
  });
});