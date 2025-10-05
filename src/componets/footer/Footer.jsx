import React from "react";
import s from "./Footer.module.css";

function Footer() {
  return (
    <footer className={s.contener}>
      <div>
        <h2 className={s.title}>Контакты</h2>
      </div>

      <div className={s.card}>
        <div className={s.cardOne}>
          <img
            className={s.imgFooter}
            src={`${process.env.PUBLIC_URL}/people.svg`}
            alt="staff"
          />
          <img
            className={s.imgFooter2}
            src={`${process.env.PUBLIC_URL}/people2.svg`}
            alt="staff"
          />
        </div>

        <div className={s.cardOne}>
          <img
            className={s.imgFooter}
            src={`${process.env.PUBLIC_URL}/be.svg`}
            alt="staff"
          />
          <img
            className={s.imgFooter3}
            src={`${process.env.PUBLIC_URL}/be2.svg`}
            alt="staff"
          />
        </div>

        <div className={s.cardOne}>
          <img
            className={s.imgFooter}
            src={`${process.env.PUBLIC_URL}/teleg.svg`}
            alt="staff"
          />

          <img
            className={s.imgFooter4}
            src={`${process.env.PUBLIC_URL}/teleg2.svg`}
            alt="staff"
          />
        </div>

        <div className={s.cardOne}>
          <img
            className={s.imgFooter}
            src={`${process.env.PUBLIC_URL}/weka.svg`}
            alt="staff"
          />
          <img
            className={s.imgFooter5}
            src={`${process.env.PUBLIC_URL}/weka2.svg`}
            alt="staff"
          />
        </div>

        <div className={s.cardOne}>
          <img
            className={s.imgFooter}
            src={`${process.env.PUBLIC_URL}/gmail.svg`}
            alt="staff"
          />
          <img
            className={s.imgFooter6}
            src={`${process.env.PUBLIC_URL}/gmail2.svg`}
            alt="staff"
          />
        </div>
      </div>

      <div className={s.end}>
        <h3 className={s.endFirst}>
        © 2019–2022, WEB Studio - webdevstudio23@gmail.com  
        </h3>
        <h4 className={s.endSecond}>
            Политика сайта и обработка персональных данных
        </h4>
      </div>
    </footer>
  );
}

export default Footer;
