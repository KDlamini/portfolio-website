const menuButton = document.querySelector('.menu-btn');
const menuList = document.querySelector('.menu-items');
const menuItems = Array.from(document.querySelectorAll('.menu-item'));
const menuIcon = document.querySelector('.menu-icon');

menuButton.addEventListener('click', () => {
  menuList.classList.toggle('active');
  menuButton.classList.toggle('active');
  menuIcon.src = './image/close-btn.svg';
});

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    menuList.classList.remove('active');
    menuIcon.src = './images/Union.png';
  });
});