import React from "react";
import s from "./Reason.module.css";

function Reason() {
  return (
    <div className={s.contener}>
      <div className={s.reason}>
        <div className={s.re}>
          <h2 className={s.reasonWork}>Причины сотрудничать с нами</h2>
          <p className={s.reasonWorkSmall}>
            Пока конкуренты говорят о том, что они лучшие - мы это доказываем
            делом.
          </p>
          <p className={s.reasonWorkSmaller}>
            Вы можете ознакомиться с информацией о нас и посмотреть наше
            портфолио
          </p>
          <div className={s.nameButton}>
          <a href="#portfolio">            
            <button className={s.ButtonPortfolio}>Портфолио</button>
            </a>
          </div>
        </div>
        <img className={s.goodprice} src={`${process.env.PUBLIC_URL}/goodprice.svg`} alt="good price" />
      </div>
      <div className={s.threeFacts}>
        <img
          className={s.first1}
          src={`${process.env.PUBLIC_URL}/intime.svg`}
          alt="intime"
        />
        <img
          className={s.first}
          src={`${process.env.PUBLIC_URL}/goodteam.svg`}
          alt="good team"
        />
        <img
          className={s.second}
          src={`${process.env.PUBLIC_URL}/staff.svg`}
          alt="staff"
        />
        </div>
        <div className={s.imgForSmall}>
        <img
          className={s.secondone}
          src={`${process.env.PUBLIC_URL}/goodpriceforSmall.svg`}
          alt="staff"
        />
            <img
          className={s.secondtwo}
          src={`${process.env.PUBLIC_URL}/intimeforSmall.svg`}
          alt="staff"
        />
            <img
          className={s.secondthree}
          src={`${process.env.PUBLIC_URL}/goodteamforSmall.svg`}
          alt="staff"
        />
            <img
          className={s.secondfour}
          src={`${process.env.PUBLIC_URL}/staffforSmall.svg`}
          alt="staff"
        />
      </div>
    </div>
  );
}

export default Reason;
