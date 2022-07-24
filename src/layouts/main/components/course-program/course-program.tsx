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

  const [languages, setLanguages] = useState<
    { id: LanguageOfStudyEnum; prop: Props }[]
  >([
    { id: LanguageOfStudyEnum.English, prop: Props.English },
    { id: LanguageOfStudyEnum.Deutsch, prop: Props.Deutsch },
    { id: LanguageOfStudyEnum.French, prop: Props.French },
  ]);

  useEffect(() => {
    if (
      [LanguageOfStudyEnum.Deutsch, LanguageOfStudyEnum.French].includes(
        courseProgram.getLanguage
      ) ||
      (courseProgram.getFormat === FormatOfStudyEnum.TutorialWithTeacher &&
        courseProgram.getLanguage === LanguageOfStudyEnum.English)
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

    if (courseProgram.getFormat === FormatOfStudyEnum.TutorialWithZlata) {
      courseProgram.setLanguage(LanguageOfStudyEnum.English);
      setLanguages([{ id: LanguageOfStudyEnum.English, prop: Props.English }]);
    } else {
      setLanguages([
        { id: LanguageOfStudyEnum.English, prop: Props.English },
        { id: LanguageOfStudyEnum.Deutsch, prop: Props.Deutsch },
        { id: LanguageOfStudyEnum.French, prop: Props.French },
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
        addition: [],
      };
    }

    if (
      courseProgram.getFormat === FormatOfStudyEnum.Textbook &&
      courseProgram.getLevel === LevelOfStudyEnum.B1 &&
      courseProgram.getLanguage === LanguageOfStudyEnum.English
    ) {
      return {
        tools: [Props.OurTextbook],
        sets: [
          Props.FoodAndHealthSet,
          Props.TourismSet,
          Props.RecruitmentStudyWork,
          Props.SocialNetworksSet,
          Props.BookMovieSet,
        ],
        results: [
          Props.GrammarKnowledgeForAdvanced,
          Props.AdvancedVocabulary,
          Props.ListeningComprehension,
          Props.AbilityToHoldConversation,
          Props.PartialUnderstandingOfFilmsAndBooksInTheOriginal,
        ],
        grammar: [
          Props.TwelveBasicTimes,
          Props.ModalVerbs,
          Props.ConditionalSentences1and2levels,
          Props.Gerund,
          Props.PassiveVoice,
        ],
        addition: [],
      };
    }

    if (
      courseProgram.getFormat === FormatOfStudyEnum.Textbook &&
      courseProgram.getLevel === LevelOfStudyEnum.B2 &&
      courseProgram.getLanguage === LanguageOfStudyEnum.English
    ) {
      return {
        tools: [Props.OurTextbook],
        sets: [
          Props.BodyAndFeelingsSet,
          Props.SetStory,
          Props.RecruitmentStudyWork,
          Props.EnvironmentSet,
          Props.SocietyProblemSet,
        ],
        results: [
          Props.AdvancedGrammarKnowledge,
          Props.AdvancedVocabulary,
          Props.WatchingMoviesAndReadingBooksInTheOriginal,
          Props.ListeningToTheSpeakersSpeech,
          Props.AbilityToHoldConversation,
          Props.FreeWordingAndExpressionOfThought,
        ],
        grammar: [
          Props.ConditionalSentencesAllLevels,
          Props.TurnoversIwishIfOnly,
          Props.DirectAndIndirectSpeech,
          Props.ComplexObject,
          Props.ComplexSubject,
        ],
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
        tools: [Props.OurTextbook],
        sets: [
          Props.AcquaintanceSet,
          Props.FamilySet,
          Props.RecruitmentStudyWork,
          Props.HobbySet,
          Props.FriendshipSet,
          Props.NatureSet,
          Props.HealthSet,
        ],
        results: [
          Props.BasicVocabulary,
          Props.SimpleTenses,
          Props.BasicCommunicationSkill,
        ],
        grammar: [
          Props.SoundsAndDiphthongs,
          Props.Articles,
          Props.ConjugationOfVerbs,
          Props.PrepositionsAndAdverbs,
          Props.DegreesOfComparison,
          Props.VerbsWithPrefixes,
          Props.ModalVerbs,
        ],
        addition: [],
      };
    }

    if (
      courseProgram.getFormat === FormatOfStudyEnum.Textbook &&
      courseProgram.getLevel === LevelOfStudyEnum.B1 &&
      courseProgram.getLanguage === LanguageOfStudyEnum.Deutsch
    ) {
      return {
        tools: [Props.OurTextbook],
        sets: [
          Props.TravelSet,
          Props.BookMovieSet,
          Props.RecruitmentStudyWork,
          Props.NatureSet,
          Props.ArtSet,
        ],
        results: [
          Props.GrammarKnowledgeForAdvanced,
          Props.AdvancedVocabulary,
          Props.ListeningComprehension,
          Props.AbilityToHoldConversation,
          Props.PartialUnderstandingOfFilmsAndBooksInTheOriginal,
        ],
        grammar: [
          Props.FutureTime,
          Props.Unions,
          Props.PronounDeclensions,
          Props.PastTense,
          Props.ConditionalClausesSuggestions,
          Props.AdverbialClausesOfTheCorollary,
          Props.ZuinfinitivConstruction,
          Props.RelativeClauses,
        ],
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
        tools: [Props.OurTextbook],
        sets: [
          Props.SetAboutMe,
          Props.RoutineSet,
          Props.RecruitmentStudyWork,
          Props.TravelSet,
          Props.NatureSet,
          Props.FamilySet,
        ],
        results: [
          Props.BasicVocabulary,
          Props.MakingSimpleSentences,
          Props.BasicCommunicationSkill,
        ],

        grammar: [
          Props.SoundsAndTheirPronunciation,
          Props.Articles,
          Props.Childbirth,
          Props.PresentTense,
          Props.FutureTime,
          Props.Prepositions,
        ],
        addition: [],
      };
    }

    if (
      courseProgram.getFormat === FormatOfStudyEnum.Textbook &&
      courseProgram.getLevel === LevelOfStudyEnum.B1 &&
      courseProgram.getLanguage === LanguageOfStudyEnum.French
    ) {
      return {
        tools: [Props.OurTextbook],
        sets: [
          Props.AppearanceCharacter,
          Props.SportsSet,
          Props.RecruitmentStudyWork,
          Props.EnvironmentSet,
          Props.ArtSet,
          Props.TravelSet,
        ],
        results: [
          Props.GrammarKnowledgeForAdvanced,
          Props.AdvancedVocabulary,
          Props.ListeningComprehension,
          Props.PartialUnderstandingOfFilmsAndBooksInTheOriginal,
        ],
        grammar: [
          Props.PastTenses,
          Props.RelativePronouns,
          Props.PassiveFormOfTheVerb,
          Props.FutureTime,
          Props.ConditionalMoods,
        ],
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
        tools: [Props.OurTextbook, Props.Teacher],
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
          Props.PartialListeningComprehension,
          Props.FormulationOfThought,
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
          Props.CheckingHomework,
          Props.ConversationClubs2x,
        ],
      };
    }

    if (
      courseProgram.getFormat === FormatOfStudyEnum.TutorialWithTeacher &&
      courseProgram.getLevel === LevelOfStudyEnum.B1 &&
      courseProgram.getLanguage === LanguageOfStudyEnum.English
    ) {
      return {
        tools: [Props.OurTextbook, Props.Teacher],
        sets: [
          Props.FamilySet,
          Props.RoutineSet,
          Props.RecruitmentStudyWork,
          Props.TravelSet,
          Props.NatureSet,
        ],
        results: [
          Props.GrammarKnowledgeForAdvanced,
          Props.AdvancedVocabulary,
          Props.ListeningToTheSpeakersSpeech,
          Props.AbilityToHoldConversation,
          Props.PartialUnderstandingOfFilmsAndBooksInTheOriginal,
        ],
        grammar: [
          Props.TwelveBasicTimes,
          Props.ModalVerbs,
          Props.ConditionalSentences1and2levels,
          Props.Gerund,
          Props.PassiveVoice,
        ],
        addition: [
          Props.PhoneCallWithTeacher2x,
          Props.CheckingHomework,
          Props.ConversationClubs2x,
        ],
      };
    }

    // Deutsch
    if (
      courseProgram.getFormat === FormatOfStudyEnum.TutorialWithTeacher &&
      courseProgram.getLevel === LevelOfStudyEnum.A1A2 &&
      courseProgram.getLanguage === LanguageOfStudyEnum.Deutsch
    ) {
      return {
        tools: [Props.OurTextbook, Props.Teacher],
        sets: [
          Props.AcquaintanceSet,
          Props.FamilySet,
          Props.RecruitmentStudyWork,
          Props.HobbySet,
          Props.FriendshipSet,
          Props.NatureSet,
          Props.HealthSet,
        ],
        results: [
          Props.BasicVocabulary,
          Props.SimpleTenses,
          Props.BasicCommunicationSkill,
          Props.PartialListeningComprehension,
          Props.FormulationOfThought,
        ],
        grammar: [
          Props.SoundsAndDiphthongs,
          Props.Articles,
          Props.ConjugationOfVerbs,
          Props.PrepositionsAndAdverbs,
          Props.DegreesOfComparison,
          Props.VerbsWithPrefixes,
          Props.ModalVerbs,
        ],
        addition: [
          Props.PhoneCallWithTeacher2x,
          Props.CheckingHomework,
          Props.ConversationClubs2x,
        ],
      };
    }

    if (
      courseProgram.getFormat === FormatOfStudyEnum.TutorialWithTeacher &&
      courseProgram.getLevel === LevelOfStudyEnum.B1 &&
      courseProgram.getLanguage === LanguageOfStudyEnum.Deutsch
    ) {
      return {
        tools: [Props.OurTextbook, Props.Teacher],
        sets: [
          Props.TravelSet,
          Props.BookMovieSet,
          Props.RecruitmentStudyWork,
          Props.NatureSet,
          Props.ArtSet,
        ],
        results: [
          Props.GrammarKnowledgeForAdvanced,
          Props.AdvancedVocabulary,
          Props.ListeningComprehension,
          Props.AbilityToHoldConversation,
          Props.PartialUnderstandingOfFilmsAndBooksInTheOriginal,
        ],
        grammar: [
          Props.FutureTime,
          Props.Unions,
          Props.PronounDeclensions,
          Props.PastTense,
          Props.ConditionalClausesSuggestions,
          Props.AdverbialClausesOfTheCorollary,
          Props.ZuinfinitivConstruction,
          Props.RelativeClauses,
        ],
        addition: [
          Props.PhoneCallWithTeacher2x,
          Props.CheckingHomework,
          Props.ConversationClubs2x,
        ],
      };
    }

    // French
    if (
      courseProgram.getFormat === FormatOfStudyEnum.TutorialWithTeacher &&
      courseProgram.getLevel === LevelOfStudyEnum.A1A2 &&
      courseProgram.getLanguage === LanguageOfStudyEnum.French
    ) {
      return {
        tools: [Props.OurTextbook, Props.Teacher],
        sets: [
          Props.SetAboutMe,
          Props.RoutineSet,
          Props.RecruitmentStudyWork,
          Props.TravelSet,
          Props.NatureSet,
          Props.FamilySet,
        ],
        results: [
          Props.BasicVocabulary,
          Props.MakingSimpleSentences,
          Props.BasicCommunicationSkill,
          Props.PartialListeningComprehension,
          Props.FormulationOfThought,
        ],

        grammar: [
          Props.SoundsAndTheirPronunciation,
          Props.Articles,
          Props.Childbirth,
          Props.PresentTense,
          Props.FutureTime,
          Props.Prepositions,
        ],
        addition: [
          Props.PhoneCallWithTeacher2x,
          Props.CheckingHomework,
          Props.ConversationClubs2x,
        ],
      };
    }

    if (
      courseProgram.getFormat === FormatOfStudyEnum.TutorialWithTeacher &&
      courseProgram.getLevel === LevelOfStudyEnum.B1 &&
      courseProgram.getLanguage === LanguageOfStudyEnum.French
    ) {
      return {
        tools: [Props.OurTextbook, Props.Teacher],
        sets: [
          Props.AppearanceCharacter,
          Props.SportsSet,
          Props.RecruitmentStudyWork,
          Props.EnvironmentSet,
          Props.ArtSet,
          Props.TravelSet,
        ],
        results: [
          Props.GrammarKnowledgeForAdvanced,
          Props.AdvancedVocabulary,
          Props.ListeningComprehension,
          Props.PartialUnderstandingOfFilmsAndBooksInTheOriginal,
          Props.AbilityToHoldConversation,
        ],
        grammar: [
          Props.PastTenses,
          Props.RelativePronouns,
          Props.PassiveFormOfTheVerb,
          Props.FutureTime,
          Props.ConditionalMoods,
        ],
        addition: [
          Props.PhoneCallWithTeacher2x,
          Props.CheckingHomework,
          Props.ConversationClubs2x,
        ],
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
        tools: [Props.OurTextbook, Props.Teacher],
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
          Props.PartialListeningComprehension,
          Props.FormulationOfThought,
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
          Props.CheckingHomework,
          Props.ConversationClubs2x,
        ],
      };
    }

    if (
      courseProgram.getFormat === FormatOfStudyEnum.TutorialWithZlata &&
      courseProgram.getLevel === LevelOfStudyEnum.B1 &&
      courseProgram.getLanguage === LanguageOfStudyEnum.English
    ) {
      return {
        tools: [Props.OurTextbook, Props.Teacher],
        sets: [
          Props.FamilySet,
          Props.RoutineSet,
          Props.RecruitmentStudyWork,
          Props.TravelSet,
          Props.NatureSet,
        ],
        results: [
          Props.GrammarKnowledgeForAdvanced,
          Props.AdvancedVocabulary,
          Props.ListeningToTheSpeakersSpeech,
          Props.AbilityToHoldConversation,
          Props.PartialUnderstandingOfFilmsAndBooksInTheOriginal,
        ],
        grammar: [
          Props.TwelveBasicTimes,
          Props.ModalVerbs,
          Props.ConditionalSentences1and2levels,
          Props.Gerund,
          Props.PassiveVoice,
        ],
        addition: [
          Props.PhoneCallWithTeacher2x,
          Props.CheckingHomework,
          Props.ConversationClubs2x,
        ],
      };
    }

    if (
      courseProgram.getFormat === FormatOfStudyEnum.TutorialWithZlata &&
      courseProgram.getLevel === LevelOfStudyEnum.B2 &&
      courseProgram.getLanguage === LanguageOfStudyEnum.English
    ) {
      return {
        tools: [Props.OurTextbook, Props.Teacher],
        sets: [
          Props.BodyAndFeelingsSet,
          Props.SetStory,
          Props.RecruitmentStudyWork,
          Props.EnvironmentSet,
          Props.SocietyProblemSet,
        ],
        results: [
          Props.AdvancedGrammarKnowledge,
          Props.AdvancedVocabulary,
          Props.WatchingMoviesAndReadingBooksInTheOriginal,
          Props.ListeningToTheSpeakersSpeech,
          Props.AbilityToHoldConversation,
          Props.FreeWordingAndExpressionOfThought,
        ],
        grammar: [
          Props.ConditionalSentencesAllLevels,
          Props.TurnoversIwishIfOnly,
          Props.DirectAndIndirectSpeech,
          Props.ComplexObject,
          Props.ComplexSubject,
        ],
        addition: [
          Props.PhoneCallWithTeacher2x,
          Props.CheckingHomework,
          Props.ConversationClubs2x,
        ],
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
              formats={languages}
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
