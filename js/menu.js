const openMenu = (nav, active) => {
  nav.classList.add(active);
};

const closeMenu = (nav, active) => {
  nav.classList.remove(active);
};

const slideMenu = ({ openBtn, menu, classActiveMenu, closeTrigger }) => {
  /* достаем нужные нам свойства из объекта */
  const burgerBtn = document.querySelector(openBtn);
  const navigation = document.querySelector(menu);
  const navigationClose = document.querySelectorAll(closeTrigger);
  // открываем меню по клику на кнопку бургер
  burgerBtn.addEventListener("click", () => {
    openMenu(navigation, classActiveMenu);
  });
  // закрываем меню по клику на крестик или пункт меню
  navigationClose.forEach((item) => {
    item.addEventListener("click", () => {
      closeMenu(navigation, classActiveMenu);
    });
  });
};

export default slideMenu;
