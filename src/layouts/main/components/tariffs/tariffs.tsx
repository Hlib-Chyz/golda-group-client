// eslint-disable-next-line no-restricted-imports
import styles from "./tariffs.module.scss";
import { Props } from "enums";
import Heading from "@components/heading/heading";
import Tariff from "@layouts/main/components/tariffs/tariff";
import homeEducation from "@assets/images/home-education.png";
import freelancer from "@assets/images/freelancer.png";
import datingChat from "@assets/images/dating-chat.png";

function Tariffs() {
  return (
    <section id="tariffs" className={styles.container}>
      <Heading text={Props.Tariffs} />
      <div className={styles.tariffs}>
        <Tariff
          oldPrice="690"
          newPrice="590"
          img={homeEducation}
          backgroundColor="#EBF8FF"
          whatHaveThisTariff={[
            {
              value: Props.GrammarLevelsA1A2B1B2,
            },
            {
              value: Props.Exercises,
            },
            {
              value: Props.VideoMaterials,
            },
          ]}
          whatDoesNotHaveThisTariff={[
            {
              value: Props.ChatWithTeacher,
            },
            {
              value: "Speaking Clubs",
              isNotProp: true,
            },
          ]}
        />
        <Tariff
          oldPrice="1490"
          newPrice="1290"
          img={freelancer}
          backgroundColor="rgba(255, 221, 189, 0.9)"
          whatHaveThisTariff={[
            {
              value: Props.GrammarLevelsA1A2B1B2,
            },
            {
              value: Props.Exercises,
            },
            {
              value: Props.VideoMaterials,
            },
            {
              value: Props.ChatWithTeacher,
            },
            {
              value: "Speaking Clubs",
              isNotProp: true,
            },
            {
              value: Props.FourLessonsWithTeacher,
            },
          ]}
          whatDoesNotHaveThisTariff={[
            {
              value: Props.TwoLessonsWithZlata,
            },
          ]}
          heading={Props.WithTeacher}
        />
        <Tariff
          oldPrice="2990"
          newPrice="2790"
          img={datingChat}
          backgroundColor="#FFA857"
          whatHaveThisTariff={[
            {
              value: Props.GrammarLevelsA1A2B1B2,
            },
            {
              value: Props.Exercises,
            },
            {
              value: Props.VideoMaterials,
            },
            {
              value: Props.ChatWithZlata,
            },
            {
              value: "Speaking Clubs",
              isNotProp: true,
            },
            {
              value: Props.TwoLessonsWithZlata,
            },
          ]}
          heading={Props.WithZlata}
          backgroundColorButton="#E1F5FF"
        />
      </div>
    </section>
  );
}

export default Tariffs;
