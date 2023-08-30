import DOMPurify from "dompurify";
import style from "./style/style.module.scss";

type PropsCoinInfo = {
    descriptionEN: string;
    descriptionCheck: string;
};

const SingleCoinInfo: React.FC<PropsCoinInfo> = ({ descriptionEN, descriptionCheck }) => {
  return (
    <div className={style.content}>
      <div className={style.about}>
        <h3>About</h3>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(descriptionCheck ? descriptionEN : "Nothing"),
          }}
        ></p>
      </div>
    </div>
  );
};

export default SingleCoinInfo;
