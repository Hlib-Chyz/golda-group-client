// eslint-disable-next-line no-restricted-imports
import styles from "./general-section.module.scss";
import StartLearning from "@layouts/main/components/general-section/components/start-learning/start-learning";
import superwoman from "@assets/images/superwoman.svg";

function GeneralSection() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.elipseLeft}></div>
      <div className={styles.elipseRightTop}></div>
      <div className={styles.elipseTigthBottom}></div>
      <div className={styles.container}>
        <section className={styles.leftSide}>
          <h1>Мы создали порядок для твоей головы</h1>
          <div className={styles.buttons}>
            <div className={styles.buttonsItem}>
              <StartLearning languageName="ENGLISH" />
            </div>
            <div className={styles.buttonsItem}>
              <StartLearning languageName="FRANÇAIS" />
            </div>
            <div className={styles.buttonsItem}>
              <StartLearning languageName="DEUTSCH" />
            </div>
          </div>
        </section>
        <div className={styles.rightSide}>
          <img src={superwoman} alt="super woman" />
        </div>
      </div>
    </div>
  );
}

export default GeneralSection;
