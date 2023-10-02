import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import cryptoCall_Img from "../../assets/img/cryptoCall_Img.png";
import ContactFirstLine from "./ContactFirstLine";
import ContactInput from "./ContactInput";

import style from "./style/style.module.scss";

const Contact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [isEmailSend, setIsEmailSend] = useState<boolean>(false);

  const form = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    let time = setTimeout(() => {
      setIsEmailSend(false);
    }, 1500);

    return () => clearTimeout(time);
  }, [isEmailSend, setIsEmailSend]);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.current) {
      const t = await emailjs
        .sendForm("service_rg8iexm", "template_tsilts6", form.current, "yt_ZtCKUVwnho7XeA")
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      await setIsEmailSend(true);
      await setName("");
      await setEmail("");
      await setText("");
      return t;
    }
  };

  function onChangeName(e: React.FormEvent<HTMLInputElement>) {
    setName(e.currentTarget.value);
  }
  function onChangeEmail(e: React.FormEvent<HTMLInputElement>) {
    setEmail(e.currentTarget.value);
  }
  function onChangeText(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setText(e.currentTarget.value);
  }

  return (
    <div id="Contact" className={style.contact_main}>
      <ContactFirstLine str="Contact with us" />
      <ContactInput
        isEmailSend={isEmailSend}
        sendEmail={sendEmail}
        form={form}
        name={name}
        email={email}
        text={text}
        onChangeName={onChangeName}
        onChangeEmail={onChangeEmail}
        onChangeText={onChangeText}
        cryptoCall_Img={cryptoCall_Img}
      />
    </div>
  );
};

export default Contact;
