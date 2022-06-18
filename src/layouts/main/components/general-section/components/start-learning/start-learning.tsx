// eslint-disable-next-line no-restricted-imports
import styles from "./start-learning.module.scss";

function StartLearning({ languageName }: { languageName: string }) {
  return (
    <div className={styles.container}>
      <button>Начать изучение</button>
      <p>{languageName}</p>
    </div>
  );
}

export default StartLearning;
