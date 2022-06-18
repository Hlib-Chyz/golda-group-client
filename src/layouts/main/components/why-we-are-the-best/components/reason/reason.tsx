// eslint-disable-next-line no-restricted-imports
import styles from "./reason.module.scss";

function Reason({
  img,
  heading,
  text,
}: {
  img: string;
  heading: string;
  text: string;
}) {
  return (
    <div className={styles.container}>
      <img src={img} alt="explain heading" />
      <div className={styles.info}>
        <section>
          <h4>{heading}</h4>
          <p>{text}</p>
        </section>
      </div>
    </div>
  );
}

export default Reason;
