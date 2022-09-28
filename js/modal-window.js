  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
  };
  
  refs.openMenuBtn.addEventListener('click', onOpenModal);
  refs.closeMenuBtn.addEventListener('click', onCloseModal);

  
  function onOpenModal() {
    refs.menu.classList.add('is-open');
    window.addEventListener('keydown', onPressESC);
  }
  
  function onCloseModal() {
    refs.menu.classList.remove('is-open');
    window.removeEventListener('keydown', onPressESC);
  }
  
  function onPressESC(e) {
    if (e.keyCode === 27) {
      onCloseModal();
    }
  }
  