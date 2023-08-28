import style from "./style/style.module.scss";

type PropsContactInput = {
  cryptoCall_Img: string;
};

const ContactInput: React.FC<PropsContactInput> = ({ cryptoCall_Img }) => {
  return (
    <div className={style.contact_mainInfo}>
      <div className={style.contact_blockInput}>
        <input type="email" placeholder="Type your email..." />
        <textarea placeholder="Type your message here..." />
        <button>Contact</button>
      </div>

      <div className={style.contact_blockImg}>
        <img src={cryptoCall_Img} alt="contactImg" />
      </div>
    </div>
  );
};

export default ContactInput;
