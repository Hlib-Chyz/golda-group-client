// eslint-disable-next-line no-restricted-imports
import styles from "./main.module.scss";
import ForWhomTraining from "@layouts/main/components/for-whom-training/for-whom-training";
import AfterTrainingYouWillBeAble from "@layouts/main/components/after-training-you-will-be-able/after-training-you-will-be-able";
import CourseProgram from "@layouts/main/components/course-program/course-program";
import Subheader from "@layouts/main/components/subheader/subheader";

function Main() {
  return (
    <div className={styles.main}>
      <Subheader />
      <ForWhomTraining />
      <AfterTrainingYouWillBeAble />
      <CourseProgram />
    </div>
  );
}

export default Main;
