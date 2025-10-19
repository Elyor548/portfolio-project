import React, { useState } from "react";
import s from "./Navbar.module.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
// }

// function Navbar() {
  return (
    <div className={s.contener}>
      <header className={s.header}>
        {/* бургер для телефона */}
        <div className={s.navForPhone}>
          {!isOpen && (

          <button className={s.burger} onClick={toggleMenu}>
             ☰
            </button>
          )

          }

          {isOpen && (
            <div className={s.mobileMenu}>
              <button className={s.closeBtn} onClick={toggleMenu}>X</button>
              <ul> 
                <li className={s.firstLi}><a href="#">Главная</a></li>
                <li><a href="#reason">Почему именно мы?</a></li>
                <li><a href="#footer">Контакты</a></li>
                <li><a href="#portfolio">Портфолио</a></li>
                <li><a href="#bidform">Остановить заявку</a></li>
              </ul>
            </div>
          )}
        </div>
        <div className={s.img}>
          <img className={s.logo} src={`${process.env.PUBLIC_URL}/logo.svg`} />
        </div>
        <div className={s.navbut}>
          <div className={s.navigate}>
            <li>
              <a href="#nav">Главная</a>
            </li>
            <li>
              <a href="#reason">Почему именно мы?</a>
            </li>
            <li>
              <a href="#footer">Контакты</a>
            </li>
          </div>
          <div className={s.button}>
            <a href="#bidform">
            <button className={s.buttonname}>Заказать</button>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
