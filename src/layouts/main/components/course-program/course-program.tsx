// eslint-disable-next-line no-restricted-imports
import styles from "./course-program.module.scss";
import Heading from "@components/heading/heading";
import { Props } from "enums";
import Dropdown from "@components/dropdown/dropdown";
import Describe from "@layouts/main/components/course-program/describe";
import homeEducation from "@assets/images/home-education.svg";

function CourseProgram() {
  return (
    <section id="courseProgram" className={styles.container}>
      <div>
        <Heading text={Props.CourseProgram} />
        <div className={styles.content}>
          <div className={styles.dropdowns}>
            <Dropdown
              prop={Props.Format}
              formats={[
                Props.Textbook,
                Props.TutorialWithTeacher,
                Props.TutorialWithZlata,
              ]}
            />
            <Dropdown
              prop={Props.Language}
              formats={[Props.English, Props.Deutsch, Props.French]}
            />
            <Dropdown
              prop={Props.Level}
              formats={[Props.A1A2, Props.B1, Props.B2]}
            />
          </div>
          <div className={styles.info}>
            <div className={styles.infoLeft}>
              <Describe
                heading={Props.Grammar}
                what={[
                  "Времена категории Simple",
                  "Предлоги",
                  "Часы",
                  "Артикли",
                  "Степени сравнения",
                ]}
              />
              <div className={styles.fake}></div>
              <Describe
                heading={Props.Sets}
                what={[
                  "Набор семья",
                  "Набор рутина",
                  "Набор учеба / работа",
                  "Набор путешествия",
                  "Набор природа",
                ]}
              />
            </div>
            <div className={styles.dash}></div>
            <div className={styles.infoRight}>
              <Describe
                heading={Props.Result}
                what={[
                  "Понимание базовой грамматики",
                  "Освоение основных тем",
                  "Понимание основ языка",
                ]}
                isDone={true}
              />
              <div className={styles.fake}></div>
              <Describe
                heading={Props.Tools}
                what={["Наш учебник"]}
                isDone={true}
              />
            </div>
            <div className={styles.homeEducation}>
              <img src={homeEducation} alt="home education" />{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CourseProgram;
