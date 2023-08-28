import cryptoCall_Img from "../../assets/img/cryptoCall_Img.png";
import ContactFirstLine from "./ContactFirstLine";
import ContactInput from "./ContactInput";

import style from "./style/style.module.scss";

const Contact = () => {
  return (
    <div id="Contact" className={style.contact_main}>
      <ContactFirstLine str="Contact with us" />
      <ContactInput 
      cryptoCall_Img={cryptoCall_Img}
      />
    </div>
  );
};

export default Contact;
