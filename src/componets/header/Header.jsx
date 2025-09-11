import React from "react";
import s from "./Header.module.css";

function Header() {
  return (
    <div className={s.contener}>
        <div className={s.headerTwo}>
          <div className={s.ownTitle}>
            <h1 className={s.titleFirst}>РАЗРАБОТКА САЙТОВ</h1>
            <h2 className={s.titleSecond}>ДЛЯ ТВОЕГО БИЗНЕСА</h2>
            <div className={s.We}>
              <h3 className={s.WeStudy}>
                Мы - студия web-разработки, работаем уже более 3-х лет, готовы
                разработать для вас сайт в кротчайшие сроки.
              </h3>
            </div>
            <div className={s.quationButton}>
              <div className={s.buttonMore}>
                <button className={s.buttonName}>Подробнее </button>
              </div>
                <p className={s.quation}>Остались вопросы?</p>
            </div>
          </div>
          <img className={s.men} src="./men.svg" alt="" />
        </div>
      </div>
  );
}

export default Header;
