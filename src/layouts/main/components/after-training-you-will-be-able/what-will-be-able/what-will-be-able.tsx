// eslint-disable-next-line no-restricted-imports
import styles from "./what-will-be-able.module.scss";

function WhatWillBeAble({
  text,
  text2,
  number,
  isLeft = true,
  isSecond = false,
}: {
  text: string;
  text2: string;
  number: string;
  isLeft?: boolean;
  isSecond?: boolean;
}) {
  return (
    <div
      className={
        isLeft ? styles.container : styles.container + " " + styles.rightText
      }
      style={
        isSecond
          ? isLeft
            ? { paddingRight: "16px" }
            : { paddingLeft: "16px" }
          : {}
      }
    >
      <p className={styles.text}>
        {text} <br />
        {text2}
      </p>
      <p className={styles.number}>{number}</p>
    </div>
  );
}

export default WhatWillBeAble;
