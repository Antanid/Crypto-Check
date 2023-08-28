import { useEffect, useState } from "react";
import infoImg from "../../assets/img/infoImg.png";
import StartImg from "./StartImg";
import StartText from "./StartText";
import style from "./style/style.module.scss";

const StartInfo = () => {
  const toRotate = ["price", "relevance of coins", "cool design :)"];
  const [loopNum, setLoopNum] = useState(0);
  const [isDeliting, setIsDeliting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 300);
  const [index, setIndex] = useState(1);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeliting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updateText);

    if (isDeliting) {
      setDelta((prev) => prev / 2);
    }

    if (!isDeliting && updateText === fullText) {
      setIsDeliting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeliting && updateText === "") {
      setIsDeliting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(100);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div id="StartInfo" className={style.info_block}>
      <StartText text={text} />
      <StartImg infoImg={infoImg} />
    </div>
  );
};

export default StartInfo;
