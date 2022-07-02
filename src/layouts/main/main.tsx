// eslint-disable-next-line no-restricted-imports
import styles from "./main.module.scss";
import ForWhomTraining from "@layouts/main/components/for-whom-training/for-whom-training";
import AfterTrainingYouWillBeAble from "@layouts/main/components/after-training-you-will-be-able/after-training-you-will-be-able";

function Main() {
  return (
    <div className={styles.main}>
      <ForWhomTraining />
      <AfterTrainingYouWillBeAble />
    </div>
  );
}

export default Main;
