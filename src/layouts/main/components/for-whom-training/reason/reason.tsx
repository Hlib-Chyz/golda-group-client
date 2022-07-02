/* eslint-disable jsx-a11y/img-redundant-alt */
// eslint-disable-next-line no-restricted-imports
import styles from "./reason.module.scss";

function Reason({ text, img }: { text: string; img: string }) {
  return (
    <div className={styles.container}>
      <div className={styles.blockPicture}>
        <img src={img} alt="picture" />
      </div>
      <p>{text}</p>
    </div>
  );
}

export default Reason;
