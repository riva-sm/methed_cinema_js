import slideMenu from "./menu.js";
import renderVideo from "./renderVideo.js";
/* создаём объект меню */
slideMenu({
  openBtn: ".header__burger-btn",
  menu: ".navigation",
  classActiveMenu: "navigation_active",
  closeTrigger: ".navigation__link, .navigation__close",
});

renderVideo();
