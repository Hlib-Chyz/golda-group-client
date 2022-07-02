// eslint-disable-next-line no-restricted-imports
import styles from "./subheader.module.scss";
import Button from "@components/button/button";
import zlataFirst from "@assets/images/zlata-first.svg";

function Subheader() {
  return (
    <div className={styles.subheader}>
      <section className={styles.leftSide}>
        <h1>
          Знания -<br />
          это сокровище
        </h1>
        <p>
          Получи сокровище, которое
          <br />
          объеденяет мир
        </p>
        <Button text="Начать обучение" />
      </section>
      <div className={styles.rightSide}>
        <img src={zlataFirst} alt="Zlata" />
      </div>
    </div>
  );
}

export default Subheader;
