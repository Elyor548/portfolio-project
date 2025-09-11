import React from "react";
import s from "./Reason.module.css";

function Reason() {
    return (
        <div className={s.contener}>
            <div className={s.reason}>
                <div className={s.re}>
                <h2 className={s.reasonWork}>
                Причины сотрудничать с нами
                </h2>
                <p className={s.reasonWorkSmall}>Пока конкуренты говорят о том, что они лучшие - мы это доказываем делом.</p>
                <p className={s.reasonWorkSmaller}>Вы можете ознакомиться с информацией о нас и посмотреть наше портфолио</p>
                <div className={s.nameButton}>
                    <button className={s.ButtonPortfolio}>
                        Портфолио 
                    </button>
                </div>
                </div>
                <img src="goodprice.svg" alt="" />
            </div>
            <div className={s.threeFacts}>
                <img src="./intime.svg" alt="" />
                <img className={s.first} src="./goodteam.svg" alt="" />
                <img className={s.second} src="./staff.svg" alt="" />
            </div>
        </div>
    )
}

export default Reason