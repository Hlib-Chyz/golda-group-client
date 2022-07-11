// eslint-disable-next-line no-restricted-imports
import styles from "./main.module.scss";
import ForWhomTraining from "@layouts/main/components/for-whom-training/for-whom-training";
import AfterTrainingYouWillBeAble from "@layouts/main/components/after-training-you-will-be-able/after-training-you-will-be-able";
import CourseProgram from "@layouts/main/components/course-program/course-program";
import Subheader from "@layouts/main/components/subheader/subheader";
import AboutUs from "@layouts/main/components/about-us/about-us";
import Tarrifs from "@layouts/main/components/tarrifs/tarrifs";
import { Refs } from "App";

function Main({ refs }: { refs: Refs }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Subheader />
        <ForWhomTraining />
        <AfterTrainingYouWillBeAble />
        <div ref={refs.courseProgramRef}>
          <CourseProgram />
        </div>
        <div ref={refs.aboutUsRef}>
          <AboutUs />
        </div>
        <div ref={refs.tariffsRef}>
          <Tarrifs />
        </div>
      </div>
    </div>
  );
}

export default Main;
