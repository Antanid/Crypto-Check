import cryptoCall_Img from "../../assets/img/cryptoCall_Img.png";

import style from "./style/style.module.scss";

const Contact = () => {
  return (
    <div id='Contact' className={style.contact_main}>
      <div className={style.contact_main_h2}>
        <h2>Contact with us</h2>
      </div>

      <div className={style.contact_mainInfo}>
        <div className={style.contact_blockInput}>
          <input type="email" placeholder="Type your email..." />
          <textarea placeholder="Type your message here..."/>
          <button>Contact</button>
        </div>

        <div className={style.contact_blockImg}>
          <img src={cryptoCall_Img} alt="contactImg" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
