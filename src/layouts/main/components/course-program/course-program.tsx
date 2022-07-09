// eslint-disable-next-line no-restricted-imports
import styles from "./course-program.module.scss";
import Heading from "@components/heading/heading";
import {
  FormatOfStudyEnum,
  LanguageOfStudyEnum,
  LevelOfStudyEnum,
  Props,
} from "enums";
import Dropdown from "@components/dropdown/dropdown";
import Describe from "@layouts/main/components/course-program/describe";
import homeEducation from "@assets/images/home-education.svg";
import { useContext } from "react";
import { Context } from "index";
import { observer } from "mobx-react-lite";

const CourseProgram = observer(() => {
  const { courseProgram } = useContext(Context)!;

  function getTools(): string[] {
    if (courseProgram.getFormat === FormatOfStudyEnum.Textbook) {
      return ["Наш учебник"];
    }

    if (courseProgram.getFormat === FormatOfStudyEnum.TutorialWithTeacher) {
      return ["Наш учебник", "Чат с преподом"];
    }

    if (courseProgram.getFormat === FormatOfStudyEnum.TutorialWithZlata) {
      return ["Наш учебник", "Чат с мармеладкой"];
    }

    return [];
  }

  return (
    <section id="courseProgram" className={styles.container}>
      <div>
        <Heading text={Props.CourseProgram} />
        <div className={styles.content}>
          <div className={styles.dropdowns}>
            <Dropdown
              prop={Props[courseProgram.getFormat]}
              width="330px"
              setter={(format: FormatOfStudyEnum) =>
                courseProgram.setFormat(format)
              }
              formats={[
                { id: FormatOfStudyEnum.Textbook, prop: Props.Textbook },
                {
                  id: FormatOfStudyEnum.TutorialWithTeacher,
                  prop: Props.TutorialWithTeacher,
                },
                {
                  id: FormatOfStudyEnum.TutorialWithZlata,
                  prop: Props.TutorialWithZlata,
                },
              ]}
            />
            <Dropdown
              prop={Props[courseProgram.getLanguage]}
              setter={(language: LanguageOfStudyEnum) =>
                courseProgram.setLanguage(language)
              }
              formats={[
                { id: LanguageOfStudyEnum.English, prop: Props.English },
                { id: LanguageOfStudyEnum.Deutsch, prop: Props.Deutsch },
                { id: LanguageOfStudyEnum.French, prop: Props.French },
              ]}
            />
            <Dropdown
              prop={Props[courseProgram.getLevel]}
              setter={(level: LevelOfStudyEnum) =>
                courseProgram.setLevel(level)
              }
              formats={[
                { id: LevelOfStudyEnum.A1A2, prop: Props.A1A2 },
                { id: LevelOfStudyEnum.B1, prop: Props.B1 },
                { id: LevelOfStudyEnum.B2, prop: Props.B2 },
              ]}
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
              <Describe heading={Props.Tools} what={getTools()} isDone={true} />
            </div>
            <div className={styles.homeEducation}>
              <img src={homeEducation} alt="home education" />{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default CourseProgram;
