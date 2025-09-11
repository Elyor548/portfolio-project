import React from "react";
import s from './Navbar.module.css'

function Navbar() {
    return (
        <div className={s.contener}>
            <header className={s.header}>
                <div className={s.img}>
            <img className={s.logo} src='./logo.svg' />
                </div>
            <div className={s.navbut}>
            <div className={s.navigate}>
                <li><a href="#">Главная</a></li>
                <li><a href="#">Почему именно мы?</a></li>
                <li><a href="#">Контакты</a></li>
            </div>
            <div className={s.button}>
                <button className={s.buttonname}>
                    Заказать
                </button>
            </div>
            </div>
            
            </header>
        </div>
    )
}

export default Navbar;