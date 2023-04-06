function openMenu () {
  const closeIcon = document.querySelector('.close-icon');
  const burgerIcon = document.querySelector('.burger-menu');
  const mobMenu = document.querySelector('.mobile-menu');

  burgerIcon.addEventListener('click', () => {
    mobMenu.classList.add('active')
  })

  closeIcon.addEventListener('click', () => {
    mobMenu.classList.remove('active')
  })


}

openMenu()