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

// Project Card Data
const data = [
  {
    project_img: './images/Project-1.svg',
    project_title: 'Tonic',
    project_info_title: 'CANOPY',
    counter_image: './images/Counter.svg',
    project_info_text: ['Back End Dev', '2015'],
    project_description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['html', 'css', 'javascript'],
    live_version: 'https://kdlamini.github.io/portfolio-website/',
    source_code: 'https://github.com/KDlamini/portfolio-website',
  },
  {
    project_img: './images/Project-2.svg',
    project_title: 'Multi-Post Stories',
    project_info_title: 'CANOPY',
    counter_image: './images/Counter.svg',
    project_info_text: ['Back End Dev', '2015'],
    project_description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['html', 'css', 'javascript'],
    live_version: 'https://kdlamini.github.io/portfolio-website/',
    source_code: 'https://github.com/KDlamini/portfolio-website',
  },
  {
    project_img: './images/Project-3.svg',
    project_title: 'Tonic',
    project_info_title: 'CANOPY',
    counter_image: './images/Counter.svg',
    project_info_text: ['Back End Dev', '2015'],
    project_description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['html', 'css', 'javascript'],
    live_version: 'https://kdlamini.github.io/portfolio-website/',
    source_code: 'https://github.com/KDlamini/portfolio-website',
  },
  {
    project_img: './images/Project-4.svg',
    project_title: 'Multi-Post Stories',
    project_info_title: 'CANOPY',
    counter_image: './images/Counter.svg',
    project_info_text: ['Back End Dev', '2015'],
    project_description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['html', 'css', 'javascript'],
    live_version: 'https://kdlamini.github.io/portfolio-website/',
    source_code: 'https://github.com/KDlamini/portfolio-website',
  },
];

// Populate Project Card using an array of project data objects
const portfolio = document.querySelector('.works');

data.forEach((project) => {
  const ul = document.createElement('ul');
  ul.className = 'project-card';
  portfolio.appendChild(ul);

  // First List Item
  let li = document.createElement('li');
  li.className = 'project-img-wrapper';
  li.innerHTML = `<img src=${project.project_img} alt=${project.project_title} class='Project-img'>`;
  ul.appendChild(li);

  // Second List Item
  li = document.createElement('li');
  li.className = 'project-content-block';
  ul.appendChild(li);

  const projectHeader = document.createElement('div');
  projectHeader.className = 'project-header';
  li.appendChild(projectHeader);

  const h1 = document.createElement('h1');
  h1.className = 'project-title';
  h1.innerHTML = project.project_title;
  projectHeader.appendChild(h1);

  const projectInfo = document.createElement('div');
  projectInfo.className = 'project-info';
  projectHeader.appendChild(projectInfo);

  const h2 = document.createElement('h2');
  h2.className = 'project-info-title';
  h2.innerHTML = project.project_info_title;
  projectInfo.appendChild(h2);

  project.project_info_text.forEach((infoText) => {
    const img = document.createElement('img');
    img.src = project.counter_image;
    img.alt = 'counter';
    projectInfo.appendChild(img);

    const p = document.createElement('p');
    p.className = 'project-info-item';
    p.innerHTML = infoText;
    projectInfo.appendChild(p);
  });

  const projectDescription = document.createElement('p');
  projectDescription.className = 'project-description';
  projectDescription.innerHTML = project.project_description;
  li.appendChild(projectDescription);

  // li child ul
  const tags = document.createElement('ul');
  tags.className = 'tags';
  li.appendChild(tags);

  project.tags.forEach((tagText) => {
    const tagItem = document.createElement('li');
    tagItem.className = 'tag-item';
    tagItem.textContent = tagText;
    tags.appendChild(tagItem);
  });

  // li last child
  const actionContainer = document.createElement('div');
  actionContainer.className = 'action-container';
  li.appendChild(actionContainer);

  const actionButton = document.createElement('button');
  actionButton.className = 'action-btn see-project';
  actionButton.type = 'button';
  actionButton.textContent = 'See project';
  actionContainer.appendChild(actionButton);
});

// Desktop and Mobile pop-up Toogle
const seeProjectBtn = Array.from(document.querySelectorAll('.see-project'));
const closeModalBtn = document.querySelector('.modal-close-button');
const modal = document.querySelector('.modal-container');
const body = document.querySelector('body');

seeProjectBtn.forEach((button) => {
  button.addEventListener('click', () => {
    modal.style.display = 'flex';
    body.style.overflow = 'hidden';
  });
});

closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  body.style.overflow = 'auto';
});