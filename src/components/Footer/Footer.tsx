import gitImg from '../../assets/img/footer_gitImg.png'

import style from "./style/style.module.scss";

const Footer = () => {
  return (
    <footer className={style.footer_block}>
      <div>
        <h2 >Antanid Developer</h2>
        <p>https://github.com/Antanid</p>
        <a className={style.footer_link} href="https://github.com/Antanid" target="_blank" rel="noreferrer">
        <img src={gitImg} alt="gitImg" />
        </a>
        <p>© 2001-2300, Antanid.com, Inc. or its affiliates</p>
      </div>
    </footer>
  );
};

export default Footer;
