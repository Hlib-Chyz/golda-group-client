/* eslint-disable react-hooks/exhaustive-deps */
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
import { useContext, useEffect, useState } from "react";
import { Context } from "index";
import { observer } from "mobx-react-lite";
import TextLanguage from "@components/text-language/text-language";

const CourseProgram = observer(() => {
  const { courseProgram } = useContext(Context)!;

  const [courseProgramText, setCourseProgramText] = useState<ICourseProgram>({
    tools: [],
    sets: [],
    results: [],
    grammar: [],
    addition: [],
  });

  const [levels, setLevels] = useState<{ id: LevelOfStudyEnum; prop: Props }[]>(
    [
      { id: LevelOfStudyEnum.A1A2, prop: Props.A1A2 },
      { id: LevelOfStudyEnum.B1, prop: Props.B1 },
      { id: LevelOfStudyEnum.B2, prop: Props.B2 },
    ]
  );

  useEffect(() => {
    if (
      [LanguageOfStudyEnum.Deutsch, LanguageOfStudyEnum.French].includes(
        courseProgram.getLanguage
      )
    ) {
      if (courseProgram.getLevel === LevelOfStudyEnum.B2) {
        courseProgram.setLevel(LevelOfStudyEnum.B1);
      }
      setLevels([
        { id: LevelOfStudyEnum.A1A2, prop: Props.A1A2 },
        { id: LevelOfStudyEnum.B1, prop: Props.B1 },
      ]);
    } else {
      setLevels([
        { id: LevelOfStudyEnum.A1A2, prop: Props.A1A2 },
        { id: LevelOfStudyEnum.B1, prop: Props.B1 },
        { id: LevelOfStudyEnum.B2, prop: Props.B2 },
      ]);
    }
    setCourseProgramText(getTools());
  }, [
    courseProgram.getLevel,
    courseProgram.getLanguage,
    courseProgram.getFormat,
  ]);

  function getTools(): ICourseProgram {
    // Textbook
    // English
    if (
      courseProgram.getFormat === FormatOfStudyEnum.Textbook &&
      courseProgram.getLevel === LevelOfStudyEnum.A1A2 &&
      courseProgram.getLanguage === LanguageOfStudyEnum.English
    ) {
      return {
        tools: [Props.OurTextbook],
        sets: [
          Props.FamilySet,
          Props.RoutineSet,
          Props.RecruitmentStudyWork,
          Props.TravelSet,
          Props.NatureSet,
        ],
        results: [
          Props.BasicVocabulary,
          Props.MakingSimpleSentences,
          Props.BasicCommunicationSkill,
        ],
        grammar: [
          Props.SimpleTenses,
          Props.Prepositions,
          Props.Watch,
          Props.Articles,
          Props.DegreesOfComparison,
        ],
        addition: [
          Props.PhoneCallWithTeacher2x,
          Props.PhoneCallWithTeacher2x,
          Props.PhoneCallWithTeacher2x,
        ],
      };
    }

    if (
      courseProgram.getFormat === FormatOfStudyEnum.Textbook &&
      courseProgram.getLevel === LevelOfStudyEnum.B1 &&
      courseProgram.getLanguage === LanguageOfStudyEnum.English
    ) {
      return {
        tools: [Props.PassiveVoice],
        sets: [Props.PassiveVoice],
        results: [Props.PassiveVoice],
        grammar: [Props.PassiveVoice],
        addition: [],
      };
    }

    if (
      courseProgram.getFormat === FormatOfStudyEnum.Textbook &&
      courseProgram.getLevel === LevelOfStudyEnum.B2 &&
      courseProgram.getLanguage === LanguageOfStudyEnum.English
    ) {
      return {
        tools: [Props.PassiveVoice],
        sets: [Props.PassiveVoice],
        results: [Props.PassiveVoice],
        grammar: [Props.PassiveVoice],
        addition: [],
      };
    }

    // Deutsch
    if (
      courseProgram.getFormat === FormatOfStudyEnum.Textbook &&
      courseProgram.getLevel === LevelOfStudyEnum.A1A2 &&
      courseProgram.getLanguage === LanguageOfStudyEnum.Deutsch
    ) {
      return {
        tools: [Props.AboutUs2],
        sets: [Props.AboutUs2],
        results: [Props.AboutUs2],
        grammar: [Props.AboutUs2],
        addition: [],
      };
    }

    if (
      courseProgram.getFormat === FormatOfStudyEnum.Textbook &&
      courseProgram.getLevel === LevelOfStudyEnum.B1 &&
      courseProgram.getLanguage === LanguageOfStudyEnum.Deutsch
    ) {
      return {
        tools: [Props.AboutUs3],
        sets: [Props.AboutUs3],
        results: [Props.AboutUs3],
        grammar: [Props.AboutUs3],
        addition: [],
      };
    }

    // French
    if (
      courseProgram.getFormat === FormatOfStudyEnum.Textbook &&
      courseProgram.getLevel === LevelOfStudyEnum.A1A2 &&
      courseProgram.getLanguage === LanguageOfStudyEnum.French
    ) {
      return {
        tools: [],
        sets: [],
        results: [],
        grammar: [],
        addition: [],
      };
    }

    if (
      courseProgram.getFormat === FormatOfStudyEnum.Textbook &&
      courseProgram.getLevel === LevelOfStudyEnum.B1 &&
      courseProgram.getLanguage === LanguageOfStudyEnum.French
    ) {
      return {
        tools: [],
        sets: [],
        results: [],
        grammar: [],
        addition: [],
      };
    }

    // TutorialWithTeacher
    // English
    if (
      courseProgram.getFormat === FormatOfStudyEnum.TutorialWithTeacher &&
      courseProgram.getLevel === LevelOfStudyEnum.A1A2 &&
      courseProgram.getLanguage === LanguageOfStudyEnum.English
    ) {
      return {
        tools: [],
        sets: [],
        results: [],
        grammar: [],
        addition: [],
      };
    }

    if (
      courseProgram.getFormat === FormatOfStudyEnum.TutorialWithTeacher &&
      courseProgram.getLevel === LevelOfStudyEnum.B1 &&
      courseProgram.getLanguage === LanguageOfStudyEnum.English
    ) {
      return {
        tools: [],
        sets: [],
        results: [],
        grammar: [],
        addition: [],
      };
    }

    if (
      courseProgram.getFormat === FormatOfStudyEnum.TutorialWithTeacher &&
      courseProgram.getLevel === LevelOfStudyEnum.B2 &&
      courseProgram.getLanguage === LanguageOfStudyEnum.English
    ) {
      return {
        tools: [],
        sets: [],
        results: [],
        grammar: [],
        addition: [],
      };
    }

    // Deutsch
    if (
      courseProgram.getFormat === FormatOfStudyEnum.TutorialWithTeacher &&
      courseProgram.getLevel === LevelOfStudyEnum.A1A2 &&
      courseProgram.getLanguage === LanguageOfStudyEnum.Deutsch
    ) {
      return {
        tools: [],
        sets: [],
        results: [],
        grammar: [],
        addition: [],
      };
    }

    if (
      courseProgram.getFormat === FormatOfStudyEnum.TutorialWithTeacher &&
      courseProgram.getLevel === LevelOfStudyEnum.B1 &&
      courseProgram.getLanguage === LanguageOfStudyEnum.Deutsch
    ) {
      return {
        tools: [],
        sets: [],
        results: [],
        grammar: [],
        addition: [],
      };
    }

    // French
    if (
      courseProgram.getFormat === FormatOfStudyEnum.TutorialWithTeacher &&
      courseProgram.getLevel === LevelOfStudyEnum.A1A2 &&
      courseProgram.getLanguage === LanguageOfStudyEnum.French
    ) {
      return {
        tools: [],
        sets: [],
        results: [],
        grammar: [],
        addition: [],
      };
    }

    if (
      courseProgram.getFormat === FormatOfStudyEnum.TutorialWithTeacher &&
      courseProgram.getLevel === LevelOfStudyEnum.B1 &&
      courseProgram.getLanguage === LanguageOfStudyEnum.French
    ) {
      return {
        tools: [],
        sets: [],
        results: [],
        grammar: [],
        addition: [],
      };
    }

    // TutorialWithZlata
    // English
    if (
      courseProgram.getFormat === FormatOfStudyEnum.TutorialWithZlata &&
      courseProgram.getLevel === LevelOfStudyEnum.A1A2 &&
      courseProgram.getLanguage === LanguageOfStudyEnum.English
    ) {
      return {
        tools: [],
        sets: [],
        results: [],
        grammar: [],
        addition: [],
      };
    }

    if (
      courseProgram.getFormat === FormatOfStudyEnum.TutorialWithZlata &&
      courseProgram.getLevel === LevelOfStudyEnum.B1 &&
      courseProgram.getLanguage === LanguageOfStudyEnum.English
    ) {
      return {
        tools: [],
        sets: [],
        results: [],
        grammar: [],
        addition: [],
      };
    }

    if (
      courseProgram.getFormat === FormatOfStudyEnum.TutorialWithZlata &&
      courseProgram.getLevel === LevelOfStudyEnum.B2 &&
      courseProgram.getLanguage === LanguageOfStudyEnum.English
    ) {
      return {
        tools: [],
        sets: [],
        results: [],
        grammar: [],
        addition: [],
      };
    }

    // Deutsch
    if (
      courseProgram.getFormat === FormatOfStudyEnum.TutorialWithZlata &&
      courseProgram.getLevel === LevelOfStudyEnum.A1A2 &&
      courseProgram.getLanguage === LanguageOfStudyEnum.Deutsch
    ) {
      return {
        tools: [],
        sets: [],
        results: [],
        grammar: [],
        addition: [],
      };
    }

    if (
      courseProgram.getFormat === FormatOfStudyEnum.TutorialWithZlata &&
      courseProgram.getLevel === LevelOfStudyEnum.B1 &&
      courseProgram.getLanguage === LanguageOfStudyEnum.Deutsch
    ) {
      return {
        tools: [],
        sets: [],
        results: [],
        grammar: [],
        addition: [],
      };
    }

    // French
    if (
      courseProgram.getFormat === FormatOfStudyEnum.TutorialWithZlata &&
      courseProgram.getLevel === LevelOfStudyEnum.A1A2 &&
      courseProgram.getLanguage === LanguageOfStudyEnum.French
    ) {
      return {
        tools: [],
        sets: [],
        results: [],
        grammar: [],
        addition: [],
      };
    }

    if (
      courseProgram.getFormat === FormatOfStudyEnum.TutorialWithZlata &&
      courseProgram.getLevel === LevelOfStudyEnum.B1 &&
      courseProgram.getLanguage === LanguageOfStudyEnum.French
    ) {
      return {
        tools: [],
        sets: [],
        results: [],
        grammar: [],
        addition: [],
      };
    }

    return {
      tools: [],
      sets: [],
      results: [],
      grammar: [],
      addition: [],
    };
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
              formats={levels}
            />
          </div>
          <div className={styles.infoAddition}>
            <div className={styles.info}>
              <div className={styles.infoLeft}>
                <Describe
                  heading={Props.Grammar}
                  what={courseProgramText.grammar}
                />
                <div className={styles.fake}></div>
                <Describe heading={Props.Sets} what={courseProgramText.sets} />
              </div>
              <div className={styles.dash}></div>
              <div className={styles.infoRight}>
                <Describe
                  heading={Props.Result}
                  what={courseProgramText.results}
                  isDone={true}
                />
                <div className={styles.fake}></div>
                <Describe
                  heading={Props.Tools}
                  what={courseProgramText.tools}
                  isDone={true}
                />
              </div>
              <div className={styles.homeEducation}>
                <img src={homeEducation} alt="home education" />
              </div>
            </div>
            {courseProgramText.addition.length ? (
              <section className={styles.addition}>
                <h5>
                  <TextLanguage prop={Props.Addition} />
                </h5>
                <ul>
                  {courseProgramText.addition.map((item: Props) => (
                    <li className={styles.additionItem} key={item}>
                      <TextLanguage prop={item} />
                    </li>
                  ))}
                </ul>
              </section>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </section>
  );
});

export default CourseProgram;

export interface ICourseProgram {
  results: Props[];
  grammar: Props[];
  sets: Props[];
  tools: Props[];
  addition: Props[];
}
