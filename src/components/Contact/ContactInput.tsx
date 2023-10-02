import style from "./style/style.module.scss";

type PropsContactInput = {
  cryptoCall_Img: string;
  name: string;
  email: string;
  text: string;
  onChangeText: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeEmail: (e: React.FormEvent<HTMLInputElement>) => void;
  onChangeName: (e: any) => void;
  form: any; 
  sendEmail: (e: React.FormEvent<HTMLFormElement>) => void;
  isEmailSend: boolean;
};

const ContactInput: React.FC<PropsContactInput> = ({
  cryptoCall_Img,
  name,
  email,
  text,
  onChangeText,
  onChangeEmail,
  onChangeName,
  form,
  sendEmail,
  isEmailSend,
}) => {
  return (
    <div className={style.contact_mainInfo}>
      <form ref={form} onSubmit={sendEmail} className={style.contact_blockInput}>
        <input
          name="user_name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={onChangeName}
        />
        <input
          name="user_email"
          type="email"
          placeholder="Type your email..."
          value={email}
          onChange={onChangeEmail}
        />
        <textarea
          name="user_text"
          onChange={onChangeText}
          placeholder="Type your message here..."
          value={text}
        />
        <button className={isEmailSend !== true ? style.button_contact : style.button_contactSend}>
          {isEmailSend !== true ? "Contact" : 'Email send 😀'}
        </button>
      </form>

      <div className={style.contact_blockImg}>
        <img src={cryptoCall_Img} alt="contactImg" />
      </div>
    </div>
  );
};

export default ContactInput;
