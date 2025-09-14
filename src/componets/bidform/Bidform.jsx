// import React from "react";
// import s from "./Bidform.module.css";

// function Bidform() {
//   return (
//     <div className={s.contener}>
//           <h2 className={s.titleColor}>Оставь заявку</h2>
          
//           <div className={s.gridcon}>
//           <div className={s.chiefInpur}>
//           <div className={s.kindInput}>
//             <div className={s.laberInput}>
//               <label className={s.firstLabel} for="user-name">
//                 Ваше ФИО
//               </label>
//               <input className={s.firstInput} type="text" />
//             </div>
//             <div className={s.laberInput}>
//               <label className={s.firstLabel} for="user-phone">
//                 Ваш номер телефона
//               </label>
//               <input className={s.firstInput} name="user-phone" type="tel" />
//             </div>
//             <div className={s.laberInput}>
//               <label className={s.firstLabel} for="user-phone">
//                 Ваш номер телефона
//               </label>
//               <input className={s.firstInput} name="user-phone" type="number" />
//             </div>
//           </div>
//           <div className={s.kindtwoInput}>
//             <div className={s.laberInput}>
//               <label className={s.firstLabel} for="userEmail">
//                 Ваш E-MAIL адрес
//               </label>
//               <input className={s.firstInput} type="email" />
//             </div>
//             <div className={s.laberInput}>
//               <label className={s.firstLabel} for="userEmail">
//                 Ваш комментарий ( по желанию )
//               </label>
//               <input className={s.firstInput} type="email" />
//             </div>
//           </div>
  
//           <div>
//           <img className={s.imgPhone} src={`${process.env.PUBLIC_URL}/iPhone 13 Pro.png`} alt="" viewBox="0 0 100 100" />
//           </div>
//           </div>
//           </div>

       

//       </div>
//   );
// }

// export default Bidform;



import React from "react";
import s from "./Bidform.module.css";

function Bidform() {
  return (
    <div className={s.contener}>
      <div className={s.wrapper}>
        <div>
          
        </div>

        <div className={s.gridcon}>
          <div className={s.chiefInpur}>
            <div className={s.kindInput}>
              <div className={s.laberInput}>
        <h2 className={s.titleColor}>Оставь заявку</h2>
                <label className={s.firstLabel} htmlFor="user-name">
                  Ваше ФИО
                </label>
                <input id="user-name" className={s.firstInput} type="text" />
              </div>

              <div className={s.laberInput}>
                <label className={s.firstLabel} htmlFor="user-phone">
                  Ваш номер телефона
                </label>
                <input id="user-phone" className={s.firstInput} type="tel" />
              </div>

              <div className={s.laberInput}>
                <label className={s.firstLabel} htmlFor="user-age">
                  Ваш возраст
                </label>
                <input id="user-age" className={s.firstInput} type="number" />
              </div>
            </div>

            <div className={s.kindtwoInput}>
              <div className={s.laberInput}>
                <label className={s.firstLabel} htmlFor="userEmail">
                  Ваш E-MAIL адрес
                </label>
                <input id="userEmail" className={s.firstInput} type="email" />
              </div>

              <div className={s.laberInput}>
                <label className={s.firstLabel} htmlFor="userComment">
                  Ваш комментарий (по желанию)
                </label>
                <textarea id="userComment" className={s.firstInput}></textarea>
              </div>

              <div className={s.buttonColor}>
                <button className={s.buttonName}>
                  Отправить
                </button>
              </div>
            </div>

              <img
                className={s.imgPhone}
                src={`${process.env.PUBLIC_URL}/mkfvkn.svg`}
                alt=""
              />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bidform;
